"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";

// Define API base URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

// Types
interface Country {
  id: string;
  name: string;
  code: string;
  region: string;
  flagUrl?: string;
}

interface Sector {
  id: string;
  name: string;
  description?: string;
}

interface TariffEvent {
  id: string;
  sourceCountry: Country;
  targetCountry: Country;
  sector: Sector;
  tariffRate: number;
  previousRate?: number;
  announcementDate: string;
  effectiveDate: string;
  expiryDate?: string;
  description?: string;
  impactScore?: number;
}

interface TariffContextType {
  countries: Country[];
  sectors: Sector[];
  tariffs: TariffEvent[];
  loading: boolean;
  error: string | null;
  selectedCountries: string[];
  selectedSectors: string[];
  dateRange: { start?: Date; end?: Date };
  fetchTariffs: () => Promise<void>;
  fetchCountries: () => Promise<void>;
  fetchSectors: () => Promise<void>;
  setSelectedCountries: (countries: string[]) => void;
  setSelectedSectors: (sectors: string[]) => void;
  setDateRange: (range: { start?: Date; end?: Date }) => void;
}

// Create context
const TariffContext = createContext<TariffContextType | undefined>(undefined);

// Provider component
export const TariffProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [sectors, setSectors] = useState<Sector[]>([]);
  const [tariffs, setTariffs] = useState<TariffEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState<{ start?: Date; end?: Date }>({});

  const fetchTariffs = async () => {
    setLoading(true);
    setError(null);
    try {
      // Build query params
      const params = new URLSearchParams();

      if (selectedCountries.length > 0) {
        // For simplicity, we're just using the first selected country
        params.append("country", selectedCountries[0]);
      }

      if (selectedSectors.length > 0) {
        // For simplicity, we're just using the first selected sector
        params.append("sector", selectedSectors[0]);
      }

      if (dateRange.start) {
        params.append("startDate", dateRange.start.toISOString());
      }

      if (dateRange.end) {
        params.append("endDate", dateRange.end.toISOString());
      }

      // Make API request
      const response = await axios.get(`${API_BASE_URL}/api/tariffs`, {
        params,
      });
      setTariffs(response.data.tariffs);
    } catch (err) {
      setError("Failed to fetch tariff data");
      console.error("Error fetching tariff data:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/api/countries`);
      setCountries(response.data);
    } catch (err) {
      console.error("Error fetching countries:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchSectors = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/api/sectors`);
      setSectors(response.data);
    } catch (err) {
      console.error("Error fetching sectors:", err);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    countries,
    sectors,
    tariffs,
    loading,
    error,
    selectedCountries,
    selectedSectors,
    dateRange,
    fetchTariffs,
    fetchCountries,
    fetchSectors,
    setSelectedCountries,
    setSelectedSectors,
    setDateRange,
  };

  return (
    <TariffContext.Provider value={value}>{children}</TariffContext.Provider>
  );
};

// Custom hook for using the context
export const useTariffContext = () => {
  const context = useContext(TariffContext);
  if (context === undefined) {
    throw new Error("useTariffContext must be used within a TariffProvider");
  }
  return context;
};
