"use client";

import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// In a real app, this would be set via environment variables
// and this token would be a public token with restricted usage
mapboxgl.accessToken = "YOUR_MAPBOX_TOKEN";

interface TariffRelation {
  source: string;
  target: string;
  value: number;
  sector?: string;
}

interface GlobalTariffMapProps {
  tariffRelations?: TariffRelation[];
  height?: string;
  width?: string;
  onCountryClick?: (countryCode: string) => void;
}

const mockTariffRelations: TariffRelation[] = [
  { source: "USA", target: "CHN", value: 25 },
  { source: "CHN", target: "USA", value: 18 },
  { source: "EU", target: "GBR", value: 15 },
  { source: "JPN", target: "KOR", value: 10 },
  { source: "CHN", target: "AUS", value: 20 },
  { source: "CAN", target: "MEX", value: 8 },
  { source: "USA", target: "CAN", value: 5 },
  { source: "IND", target: "PAK", value: 22 },
  { source: "RUS", target: "UKR", value: 30 },
  { source: "BRA", target: "ARG", value: 12 },
];

// Country centroids (approximate)
const countryCentroids: Record<string, [number, number]> = {
  USA: [-95.7129, 37.0902],
  CHN: [104.1954, 35.8617],
  EU: [10.4515, 51.1657], // Using Germany as approximate center
  GBR: [-3.436, 55.3781],
  JPN: [138.2529, 36.2048],
  KOR: [127.7669, 35.9078],
  AUS: [133.7751, -25.2744],
  CAN: [-106.3468, 56.1304],
  MEX: [-102.5528, 23.6345],
  IND: [78.9629, 20.5937],
  PAK: [69.3451, 30.3753],
  RUS: [105.3188, 61.524],
  UKR: [31.1656, 48.3794],
  BRA: [-51.9253, -14.235],
  ARG: [-63.6167, -38.4161],
};

// Helper function to calculate curved line between two points
const createCurvedLine = (
  startLng: number,
  startLat: number,
  endLng: number,
  endLat: number,
  curveStrength = 0.5
): Array<[number, number]> => {
  // Calculate a midpoint
  const midLng = (startLng + endLng) / 2;
  const midLat = (startLat + endLat) / 2;

  // Add a curve by offsetting the midpoint
  const dx = endLng - startLng;
  const dy = endLat - startLat;

  // Perpendicular offset
  const offsetX = -dy * curveStrength;
  const offsetY = dx * curveStrength;

  // Add curve point
  const curveLng = midLng + offsetX;
  const curveLat = midLat + offsetY;

  // Create array of points to form a smooth curve
  const points: Array<[number, number]> = [];
  const numPoints = 50;

  for (let i = 0; i <= numPoints; i++) {
    const t = i / numPoints;

    // Quadratic Bézier curve formula
    const lng =
      Math.pow(1 - t, 2) * startLng +
      2 * (1 - t) * t * curveLng +
      Math.pow(t, 2) * endLng;

    const lat =
      Math.pow(1 - t, 2) * startLat +
      2 * (1 - t) * t * curveLat +
      Math.pow(t, 2) * endLat;

    points.push([lng, lat]);
  }

  return points;
};

const GlobalTariffMap: React.FC<GlobalTariffMapProps> = ({
  tariffRelations = mockTariffRelations,
  height = "500px",
  width = "100%",
  onCountryClick,
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [0, 20],
      zoom: 1.5,
    });

    const mapInstance = map.current;

    mapInstance.on("load", () => {
      setMapLoaded(true);

      // Add country fill layer
      mapInstance.addSource("countries", {
        type: "vector",
        url: "mapbox://mapbox.country-boundaries-v1",
      });

      mapInstance.addLayer({
        id: "country-fills",
        type: "fill",
        source: "countries",
        "source-layer": "country_boundaries",
        paint: {
          "fill-color": "#627BC1",
          "fill-opacity": 0.2,
        },
      });

      mapInstance.addLayer({
        id: "country-borders",
        type: "line",
        source: "countries",
        "source-layer": "country_boundaries",
        paint: {
          "line-color": "#627BC1",
          "line-width": 1,
        },
      });

      // Add hover effect
      mapInstance.addLayer({
        id: "country-fills-hover",
        type: "fill",
        source: "countries",
        "source-layer": "country_boundaries",
        paint: {
          "fill-color": "#3875ea",
          "fill-opacity": 0.5,
        },
        filter: ["==", "iso_3166_1_alpha_3", ""],
      });

      // Change cursor on hover
      mapInstance.on("mousemove", "country-fills", (e) => {
        if (e.features && e.features.length > 0) {
          mapInstance.getCanvas().style.cursor = "pointer";

          const countryCode = e.features[0].properties?.iso_3166_1_alpha_3;
          if (countryCode) {
            mapInstance.setFilter("country-fills-hover", [
              "==",
              "iso_3166_1_alpha_3",
              countryCode,
            ]);
          }
        }
      });

      // Reset cursor when leaving a country
      mapInstance.on("mouseleave", "country-fills", () => {
        mapInstance.getCanvas().style.cursor = "";
        mapInstance.setFilter("country-fills-hover", [
          "==",
          "iso_3166_1_alpha_3",
          "",
        ]);
      });

      // Handle country click
      mapInstance.on("click", "country-fills", (e) => {
        if (e.features && e.features.length > 0 && onCountryClick) {
          const countryCode = e.features[0].properties?.iso_3166_1_alpha_3;
          if (countryCode) {
            onCountryClick(countryCode);
          }
        }
      });
    });

    return () => {
      if (mapInstance) {
        mapInstance.remove();
      }
    };
  }, [onCountryClick]);

  // Add tariff flow lines once the map is loaded
  useEffect(() => {
    if (!mapLoaded || !map.current) return;

    const mapInstance = map.current;

    // First remove any existing layers and sources
    if (mapInstance.getLayer("tariff-flows")) {
      mapInstance.removeLayer("tariff-flows");
    }
    if (mapInstance.getLayer("country-points")) {
      mapInstance.removeLayer("country-points");
    }
    if (mapInstance.getSource("flow-lines")) {
      mapInstance.removeSource("flow-lines");
    }
    if (mapInstance.getSource("country-centroids")) {
      mapInstance.removeSource("country-centroids");
    }

    // Add flow lines between countries
    const flowLines: GeoJSON.Feature[] = [];
    const countryPoints: GeoJSON.Feature[] = [];
    const countryTariffValues: Record<string, number> = {};

    tariffRelations.forEach((relation) => {
      const sourceCoords = countryCentroids[relation.source];
      const targetCoords = countryCentroids[relation.target];

      // Track countries with tariffs
      countryTariffValues[relation.source] =
        (countryTariffValues[relation.source] || 0) + relation.value;
      countryTariffValues[relation.target] =
        (countryTariffValues[relation.target] || 0) + relation.value;

      if (sourceCoords && targetCoords) {
        // Create curved line between countries
        const curvedPath = createCurvedLine(
          sourceCoords[0],
          sourceCoords[1],
          targetCoords[0],
          targetCoords[1]
        );

        // Add flow line feature
        flowLines.push({
          type: "Feature",
          properties: {
            source: relation.source,
            target: relation.target,
            value: relation.value,
            sector: relation.sector || "Unknown",
          },
          geometry: {
            type: "LineString",
            coordinates: curvedPath,
          },
        });
      }
    });

    // Add country centroid points
    Object.entries(countryTariffValues).forEach(([country, value]) => {
      const coords = countryCentroids[country];
      if (coords) {
        countryPoints.push({
          type: "Feature",
          properties: {
            country,
            value,
          },
          geometry: {
            type: "Point",
            coordinates: coords,
          },
        });
      }
    });

    // Add flow lines source
    mapInstance.addSource("flow-lines", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: flowLines,
      },
    });

    // Add country centroids source
    mapInstance.addSource("country-centroids", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: countryPoints,
      },
    });

    // Add flow lines layer
    mapInstance.addLayer({
      id: "tariff-flows",
      type: "line",
      source: "flow-lines",
      paint: {
        "line-color": [
          "interpolate",
          ["linear"],
          ["get", "value"],
          0,
          "#b2e2f2",
          10,
          "#66c2e0",
          20,
          "#3591c3",
          30,
          "#2265a3",
        ],
        "line-width": [
          "interpolate",
          ["linear"],
          ["get", "value"],
          0,
          1,
          30,
          4,
        ],
        "line-opacity": 0.8,
      },
    });

    // Add country points layer
    mapInstance.addLayer({
      id: "country-points",
      type: "circle",
      source: "country-centroids",
      paint: {
        "circle-radius": [
          "interpolate",
          ["linear"],
          ["get", "value"],
          0,
          5,
          50,
          15,
          100,
          20,
        ],
        "circle-color": "#3875ea",
        "circle-opacity": 0.7,
        "circle-stroke-width": 1,
        "circle-stroke-color": "#fff",
      },
    });

    // Add popup on hover over flow lines
    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
    });

    mapInstance.on("mousemove", "tariff-flows", (e) => {
      if (e.features && e.features.length > 0) {
        const feature = e.features[0];
        const props = feature.properties;

        mapInstance.getCanvas().style.cursor = "pointer";

        const html = `
          <div>
            <strong>${props?.source || ""} → ${props?.target || ""}</strong>
            <div>Tariff Rate: ${props?.value || 0}%</div>
            <div>Sector: ${props?.sector || "Unknown"}</div>
          </div>
        `;

        popup.setLngLat(e.lngLat).setHTML(html).addTo(mapInstance);
      }
    });

    mapInstance.on("mouseleave", "tariff-flows", () => {
      mapInstance.getCanvas().style.cursor = "";
      popup.remove();
    });

    // Add popup on hover over country points
    mapInstance.on("mousemove", "country-points", (e) => {
      if (e.features && e.features.length > 0) {
        const feature = e.features[0];
        const props = feature.properties;

        mapInstance.getCanvas().style.cursor = "pointer";

        const countryCode = props?.country || "";
        const value = props?.value || 0;

        const html = `
          <div>
            <strong>${countryCode}</strong>
            <div>Average Tariff: ${(
              value /
                tariffRelations.filter(
                  (r) => r.source === countryCode || r.target === countryCode
                ).length || 1
            ).toFixed(1)}%</div>
            <div>Tariff Connections: ${
              tariffRelations.filter(
                (r) => r.source === countryCode || r.target === countryCode
              ).length
            }</div>
          </div>
        `;

        popup.setLngLat(e.lngLat).setHTML(html).addTo(mapInstance);
      }
    });

    mapInstance.on("mouseleave", "country-points", () => {
      mapInstance.getCanvas().style.cursor = "";
      popup.remove();
    });
  }, [mapLoaded, tariffRelations]);

  return (
    <div
      ref={mapContainer}
      className="relative rounded-lg overflow-hidden shadow-md"
      style={{ height, width }}
    >
      <div className="absolute top-4 left-4 z-10 bg-white px-3 py-2 rounded-md shadow-sm">
        <h3 className="text-sm font-semibold text-gray-800">
          Global Tariff Flows
        </h3>
        <p className="text-xs text-gray-500">
          Showing tariff relationships between countries
        </p>
      </div>

      <div className="absolute bottom-4 right-4 z-10 bg-white rounded-md overflow-hidden shadow-sm">
        <div className="px-3 py-2">
          <h4 className="text-xs font-medium text-gray-700 mb-1">
            Tariff Intensity
          </h4>
          <div className="flex items-center space-x-1">
            <div className="w-4 h-2 bg-[#b2e2f2]"></div>
            <div className="w-4 h-2 bg-[#66c2e0]"></div>
            <div className="w-4 h-2 bg-[#3591c3]"></div>
            <div className="w-4 h-2 bg-[#2265a3]"></div>
          </div>
          <div className="flex justify-between text-[10px] text-gray-600 mt-0.5">
            <span>Low</span>
            <span>High</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalTariffMap;
