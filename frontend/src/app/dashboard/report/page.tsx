"use client";

import React, { useState, useEffect } from "react";
import {
  ChartBarIcon,
  GlobeAltIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ArrowPathIcon,
  ChartPieIcon,
  ClockIcon,
  BuildingLibraryIcon,
  BriefcaseIcon,
  HeartIcon,
  TruckIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  PrinterIcon,
  ShareIcon,
  CloudArrowDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useTariffContext } from "@/contexts/TariffContext";
import { currentTariffData } from "@/utils/mockData";

// Format current date
const formatCurrentDate = () => {
  const now = new Date();
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(now);
};

export default function ReportPage() {
  const {
    tariffs,
    countries,
    sectors,
    loading,
    fetchTariffs,
    fetchCountries,
    fetchSectors,
  } = useTariffContext();

  const [currentDate, setCurrentDate] = useState("");
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    setCurrentDate(formatCurrentDate());

    const loadData = async () => {
      setLoadingData(true);
      try {
        await Promise.all([fetchTariffs(), fetchCountries(), fetchSectors()]);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoadingData(false);
      }
    };

    loadData();
  }, [fetchTariffs, fetchCountries, fetchSectors]);

  if (loadingData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
          <p className="text-gray-500 font-medium">Generating full report...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <ChartBarIcon className="h-8 w-8 text-indigo-600 mr-2" />
                <h1 className="text-xl font-bold text-gray-900">
                  Tariff Warfront
                </h1>
              </Link>
              <span className="mx-4 text-gray-300">|</span>
              <Link
                href="/dashboard/trends"
                className="text-lg font-medium text-gray-700"
              >
                Dashboard & Trends
              </Link>
              <span className="mx-4 text-gray-300">|</span>
              <h2 className="text-lg font-medium text-indigo-700">
                Full Report
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500 hidden md:inline-flex items-center">
                <ClockIcon className="h-4 w-4 mr-1" /> Generated: {currentDate}
              </span>
              <button
                onClick={() => window.print()}
                className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center text-gray-700 transition-colors"
              >
                <PrinterIcon className="h-4 w-4 mr-1" /> Print
              </button>
              <button
                onClick={() => {
                  // In a real implementation, this would generate and download a PDF
                  alert(
                    "PDF download functionality will be implemented in the next release"
                  );
                }}
                className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center text-gray-700 transition-colors"
              >
                <CloudArrowDownIcon className="h-4 w-4 mr-1" /> Download PDF
              </button>
              <button
                onClick={() => {
                  // In a real implementation, this would share the report
                  if (navigator.share) {
                    navigator.share({
                      title: "Global Tariff Impact Report",
                      text: "Check out this comprehensive analysis of global tariff policies and their economic impacts.",
                      url: window.location.href,
                    });
                  } else {
                    alert(
                      "Share functionality is not supported in your browser"
                    );
                  }
                }}
                className="px-3 py-1.5 text-sm bg-indigo-600 hover:bg-indigo-700 rounded-lg flex items-center text-white transition-colors"
              >
                <ShareIcon className="h-4 w-4 mr-1" /> Share
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Report Header */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Global Tariff Impact: Comprehensive Analysis Report
              </h1>
              <p className="text-gray-600 max-w-3xl">
                This report provides an in-depth analysis of current global
                tariff policies, their economic impacts, and projections for
                international trade developments in the coming quarters.
              </p>
            </div>
            <Image
              src="/logo.png"
              width={120}
              height={60}
              alt="Tariff Warfront Logo"
              className="object-contain"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-t border-gray-200 pt-4">
              <p className="text-sm text-gray-500 mb-1">Report Period</p>
              <p className="font-medium">Q2 2025</p>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-sm text-gray-500 mb-1">Data Sources</p>
              <div className="space-y-1">
                <p className="font-medium">
                  WTO, IMF, National Trade Departments
                </p>
                <a
                  href="https://www.wto.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-indigo-600 hover:text-indigo-800"
                >
                  View WTO Data →
                </a>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-sm text-gray-500 mb-1">Last Updated</p>
              <p className="font-medium">{currentDate}</p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Table of Contents
          </h2>
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="text-indigo-600 font-semibold mr-2">1.</span>
              <a
                href="#executive-summary"
                className="text-indigo-600 hover:text-indigo-800"
              >
                Executive Summary
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-indigo-600 font-semibold mr-2">2.</span>
              <a
                href="#global-overview"
                className="text-indigo-600 hover:text-indigo-800"
              >
                Global Tariff Overview
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-indigo-600 font-semibold mr-2">3.</span>
              <a
                href="#country-analysis"
                className="text-indigo-600 hover:text-indigo-800"
              >
                Country-by-Country Analysis
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-indigo-600 font-semibold mr-2">4.</span>
              <a
                href="#sector-impact"
                className="text-indigo-600 hover:text-indigo-800"
              >
                Sector Impact Assessment
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-indigo-600 font-semibold mr-2">5.</span>
              <a
                href="#market-effects"
                className="text-indigo-600 hover:text-indigo-800"
              >
                Market Effects & Economic Indicators
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-indigo-600 font-semibold mr-2">6.</span>
              <a
                href="#forecasts"
                className="text-indigo-600 hover:text-indigo-800"
              >
                Forecasts & Predictions
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-indigo-600 font-semibold mr-2">7.</span>
              <a
                href="#recommendations"
                className="text-indigo-600 hover:text-indigo-800"
              >
                Strategic Recommendations
              </a>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div
          id="executive-summary"
          className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            1. Executive Summary
          </h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              The global tariff landscape continues to evolve rapidly in Q2
              2025, with significant increases in technology-related tariffs
              (particularly semiconductors) and modest adjustments in automotive
              and agricultural sectors. The United States maintains an
              aggressive stance toward China with a new 35% semiconductor
              tariff, while showing signs of cooperation with the European Union
              through reduced automotive tariffs.
            </p>
            <p className="mb-4">
              Overall, the average tariff increase across all sectors stands at
              8.6% compared to the previous quarter, affecting 27 countries with
              the Asia-Pacific region facing the most significant impact. The
              technology sector remains the most severely affected, with
              semiconductor and consumer electronics manufacturers experiencing
              supply chain disruptions and increased operating costs.
            </p>
            <p className="mb-4">
              Markets have responded with volatility, with the S&P 500 showing a
              1.2% decline following major tariff announcements. Consumer prices
              are beginning to reflect these changes with a 0.8% increase in the
              consumer price index, projected to accelerate in coming months as
              tariff effects ripple through supply chains.
            </p>
            <p>
              This report provides stakeholders with a comprehensive analysis of
              current tariff impacts, detailed country-by-country assessments,
              and strategic recommendations for navigating the increasingly
              complex global trade environment.
            </p>
          </div>
        </div>

        {/* Global Tariff Overview */}
        <div
          id="global-overview"
          className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            2. Global Tariff Overview
          </h2>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Recent Significant Tariff Changes
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Source
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Target
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Sector
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rate Change
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Effective Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentTariffData.recentTariffs.map((tariff) => {
                    const isIncrease = tariff.tariffRate > tariff.previousRate;
                    return (
                      <tr key={tariff.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-6 h-6 flex-shrink-0 mr-2 overflow-hidden rounded-sm">
                              <Image
                                src={tariff.sourceCountry.flagUrl}
                                width={24}
                                height={24}
                                alt={tariff.sourceCountry.code}
                                className="object-cover"
                              />
                            </div>
                            <div className="text-sm font-medium text-gray-900">
                              {tariff.sourceCountry.name}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-6 h-6 flex-shrink-0 mr-2 overflow-hidden rounded-sm">
                              <Image
                                src={tariff.targetCountry.flagUrl}
                                width={24}
                                height={24}
                                alt={tariff.targetCountry.code}
                                className="object-cover"
                              />
                            </div>
                            <div className="text-sm font-medium text-gray-900">
                              {tariff.targetCountry.name}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {tariff.sector.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="text-sm font-medium mr-2">
                              {tariff.previousRate}% →
                            </span>
                            <span
                              className={`text-sm font-medium ${
                                isIncrease ? "text-red-600" : "text-green-600"
                              }`}
                            >
                              {tariff.tariffRate}%
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(tariff.effectiveDate).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {tariff.description}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Key Findings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-5">
                <h4 className="font-medium text-gray-900 mb-3">
                  Escalation Patterns
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Technology sector tariffs show continued escalation,
                  particularly between the United States and China. This pattern
                  suggests a strategic focus on tech sovereignty and control
                  over critical supply chains.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-sm text-yellow-700">
                    <span className="font-medium">Alert:</span> Continued
                    escalation in tech tariffs may trigger additional
                    retaliatory measures in Q3 2025.
                  </p>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-5">
                <h4 className="font-medium text-gray-900 mb-3">
                  De-escalation Areas
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Automotive trade between the US and EU shows signs of
                  cooperation with reduced tariff rates. Agricultural products
                  maintain moderate tariff levels with limited changes outside
                  of specific US-Mexico relations.
                </p>
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <p className="text-sm text-green-700">
                    <span className="font-medium">Opportunity:</span> US-EU
                    cooperation provides opening for enhanced transatlantic
                    trade agreements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Country Analysis */}
        <div
          id="country-analysis"
          className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            3. Country-by-Country Analysis
          </h2>

          <div className="mb-6">
            <p className="text-gray-600 mb-8">
              Below is a detailed analysis of the most significantly impacted
              countries, their tariff profiles, and economic response measures.
            </p>
          </div>

          {/* Country Cards - showing the first few */}
          <div className="space-y-8">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                <div className="w-full md:w-1/4">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-10 flex-shrink-0 mr-4 overflow-hidden rounded border border-gray-200">
                      <Image
                        src="/flags/cn.svg"
                        width={64}
                        height={40}
                        alt="China"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">China</h3>
                      <p className="text-sm text-gray-500">
                        Most targeted by tariffs
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">
                          Average Tariff Rate
                        </span>
                        <span className="font-medium text-red-600">25.8%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-red-500"
                          style={{ width: "76%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-gray-50 p-2 rounded">
                        <p className="text-gray-500 mb-1">
                          Most Affected Sector
                        </p>
                        <p className="font-medium">Semiconductors</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <p className="text-gray-500 mb-1">
                          GDP Impact Estimate
                        </p>
                        <p className="font-medium text-red-600">-0.7%</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-3/4">
                  <h4 className="font-semibold text-lg text-gray-900 mb-3">
                    Impact Analysis
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    China continues to face the highest tariff pressure
                    globally, with semiconductor and technology manufacturing
                    bearing the brunt of recent increases. The 35% tariff on
                    semiconductor exports to the US represents a significant
                    escalation and is driving accelerated domestic investment in
                    semiconductor manufacturing capacity.
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    The Chinese government has responded with a comprehensive
                    support package for affected manufacturers, including tax
                    incentives, subsidies for domestic chip production, and
                    diplomatic efforts to diversify export markets. Despite
                    these measures, supply chain disruptions remain significant,
                    with many multinational corporations accelerating
                    diversification strategies.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h5 className="font-medium text-indigo-900 mb-2">
                        Response Measures
                      </h5>
                      <ul className="text-xs text-indigo-800 space-y-2">
                        <li>• $45B semiconductor industry investment</li>
                        <li>• 18% increase in R&D tax incentives</li>
                        <li>• Trade delegation to Southeast Asia</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h5 className="font-medium text-indigo-900 mb-2">
                        Economic Indicators
                      </h5>
                      <ul className="text-xs text-indigo-800 space-y-2">
                        <li>• Manufacturing PMI: 48.2 (contracting)</li>
                        <li>• Export volume: -4.7% YoY</li>
                        <li>• Tech sector employment: -2.3%</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h5 className="font-medium text-indigo-900 mb-2">
                        Outlook
                      </h5>
                      <ul className="text-xs text-indigo-800 space-y-2">
                        <li>• Short-term disruption expected</li>
                        <li>• Medium-term supply chain realignment</li>
                        <li>• Long-term domestic capacity growth</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                <div className="w-full md:w-1/4">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-10 flex-shrink-0 mr-4 overflow-hidden rounded border border-gray-200">
                      <Image
                        src="/flags/eu.svg"
                        width={64}
                        height={40}
                        alt="European Union"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        European Union
                      </h3>
                      <p className="text-sm text-gray-500">Trade bloc</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">
                          Average Tariff Rate
                        </span>
                        <span className="font-medium text-green-600">
                          12.1%
                        </span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500"
                          style={{ width: "42%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-gray-50 p-2 rounded">
                        <p className="text-gray-500 mb-1">
                          Most Affected Sector
                        </p>
                        <p className="font-medium">Automotive</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <p className="text-gray-500 mb-1">
                          GDP Impact Estimate
                        </p>
                        <p className="font-medium text-green-600">+0.3%</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-3/4">
                  <h4 className="font-semibold text-lg text-gray-900 mb-3">
                    Impact Analysis
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    The European Union has benefited from a strategic reduction
                    in automotive tariffs with the United States, with rates
                    decreasing from 18% to 12%. This change has resulted in
                    increased export volumes and is projected to drive modest
                    GDP growth across the bloc, particularly in Germany, France,
                    and Italy.
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    The EU continues to pursue a policy of trade stability and
                    multilateralism, having recently concluded negotiations for
                    a comprehensive trade agreement with MERCOSUR nations and
                    continuing discussions with ASEAN countries. However, the
                    bloc remains vulnerable to potential spill-over effects from
                    US-China tensions, particularly in technology supply chains.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h5 className="font-medium text-indigo-900 mb-2">
                        Response Measures
                      </h5>
                      <ul className="text-xs text-indigo-800 space-y-2">
                        <li>• Enhanced US trade diplomacy efforts</li>
                        <li>• €3.2B automotive sector support</li>
                        <li>• New trade agreements with 4 countries</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h5 className="font-medium text-indigo-900 mb-2">
                        Economic Indicators
                      </h5>
                      <ul className="text-xs text-indigo-800 space-y-2">
                        <li>• Manufacturing PMI: 52.3 (expanding)</li>
                        <li>• Export volume: +2.8% YoY</li>
                        <li>• Automotive sector jobs: +1.5%</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h5 className="font-medium text-indigo-900 mb-2">
                        Outlook
                      </h5>
                      <ul className="text-xs text-indigo-800 space-y-2">
                        <li>• Short-term automotive sector growth</li>
                        <li>• Medium-term trade diversification</li>
                        <li>• Strategic positioning between US-China</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center py-4">
              <button className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-900 flex items-center mx-auto">
                View analysis for 25 more countries{" "}
                <ArrowRightIcon className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>

        {/* More sections would be added here... */}
        <div
          id="sector-impact"
          className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            4. Sector Impact Assessment
          </h2>
          <p className="text-gray-600 mb-8">
            Analysis of tariff impacts across major economic sectors and their
            supply chains.
          </p>

          {/* Placeholder for sector impact content */}
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <p className="text-gray-600">
              Detailed sector analysis would be displayed here
            </p>
          </div>
        </div>

        <div
          id="market-effects"
          className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            5. Market Effects & Economic Indicators
          </h2>
          <p className="text-gray-600 mb-8">
            Analysis of how tariffs are affecting financial markets and economic
            performance metrics.
          </p>

          {/* Placeholder for market effects content */}
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <p className="text-gray-600">
              Market effects data and charts would be displayed here
            </p>
          </div>
        </div>

        <div
          id="forecasts"
          className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            6. Forecasts & Predictions
          </h2>
          <p className="text-gray-600 mb-8">
            AI-driven forecasts of potential tariff changes and their projected
            economic impacts.
          </p>

          {/* Placeholder for forecasts content */}
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <p className="text-gray-600">
              Forecast models and predictions would be displayed here
            </p>
          </div>
        </div>

        <div
          id="recommendations"
          className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            7. Strategic Recommendations
          </h2>
          <p className="text-gray-600 mb-8">
            Actionable insights for businesses, investors, and policymakers
            navigating the current tariff environment.
          </p>

          {/* Placeholder for recommendations content */}
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <p className="text-gray-600">
              Strategic recommendations would be displayed here
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <ChartBarIcon className="h-6 w-6 text-gray-400 mr-2" />
                <h3 className="text-lg font-semibold text-gray-200">
                  Tariff Warfront
                </h3>
              </div>
              <p className="text-sm text-gray-400 mt-1">
                Global trade policy analysis and insights
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href="/" className="text-sm text-gray-400 hover:text-white">
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-gray-400 hover:text-white"
              >
                About
              </Link>
              <Link
                href="/reports"
                className="text-sm text-gray-400 hover:text-white"
              >
                Reports
              </Link>
              <Link
                href="/data"
                className="text-sm text-gray-400 hover:text-white"
              >
                Data Sources
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-6 text-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Tariff Warfront. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
