"use client";

import React, { useState, useEffect } from "react";
import {
  ChartBarIcon,
  GlobeAltIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ArrowPathIcon,
  ChartPieIcon,
  MapIcon,
  ClockIcon,
  BuildingLibraryIcon,
  BriefcaseIcon,
  HeartIcon,
  TruckIcon,
  DocumentTextIcon,
  ArrowRightIcon,
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

// Map of sector names to icons
const sectorIcons = {
  Healthcare: <HeartIcon className="w-6 h-6" />,
  Transportation: <TruckIcon className="w-6 h-6" />,
  Technology: <ChartBarIcon className="w-6 h-6" />,
  Business: <BriefcaseIcon className="w-6 h-6" />,
  Finance: <DocumentTextIcon className="w-6 h-6" />,
  Agriculture: <GlobeAltIcon className="w-6 h-6" />,
};

export default function DashboardTrendsPage() {
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
  const [activeView, setActiveView] = useState("global");
  const [loadingData, setLoadingData] = useState(true);
  const [tradeData, setTradeData] = useState(currentTariffData);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setCurrentDate(formatCurrentDate());

    const loadData = async () => {
      setLoadingData(true);
      try {
        await Promise.all([fetchTariffs(), fetchCountries(), fetchSectors()]);
      } catch (error) {
        console.error("Error loading data:", error);
        // We already have fallback to mock data in the context
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
          <p className="text-gray-500 font-medium">Loading dashboard data...</p>
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
              <h2 className="text-lg font-medium text-gray-700">
                Dashboard & Trends
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500 hidden md:inline-flex items-center">
                <ClockIcon className="h-4 w-4 mr-1" /> Last updated:{" "}
                {currentDate}
              </span>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center text-gray-700 transition-colors"
              >
                <ArrowPathIcon className="h-4 w-4 mr-1" /> Filters
              </button>
              <Link
                href="/dashboard/report"
                className="px-3 py-1.5 text-sm bg-indigo-600 hover:bg-indigo-700 rounded-lg flex items-center text-white transition-colors"
              >
                <DocumentTextIcon className="h-4 w-4 mr-1" /> Full Report
              </Link>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 overflow-x-auto py-3 no-scrollbar mt-2">
            <button
              onClick={() => setActiveView("global")}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                activeView === "global"
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-100"
              } transition-colors whitespace-nowrap`}
            >
              Global Overview
            </button>
            <button
              onClick={() => setActiveView("country")}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                activeView === "country"
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-100"
              } transition-colors whitespace-nowrap`}
            >
              Country Analysis
            </button>
            <button
              onClick={() => setActiveView("sector")}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                activeView === "sector"
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-100"
              } transition-colors whitespace-nowrap`}
            >
              Sector Impact
            </button>
            <button
              onClick={() => setActiveView("market")}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                activeView === "market"
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-100"
              } transition-colors whitespace-nowrap`}
            >
              Market Effects
            </button>
          </div>
        </div>
      </div>

      {/* Filter panel (conditionally shown) */}
      {showFilters && (
        <div className="bg-white border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Countries
                </label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option value="">All Countries</option>
                  {countries.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sectors
                </label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option value="">All Sectors</option>
                  {sectors.map((sector) => (
                    <option key={sector.id} value={sector.id}>
                      {sector.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date Range
                </label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option value="30">Last 30 days</option>
                  <option value="90">Last 90 days</option>
                  <option value="180">Last 6 months</option>
                  <option value="365">Last year</option>
                  <option value="all">All time</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Tariff Impact Dashboard
          </h1>
          <p className="text-gray-600">
            Comprehensive analysis of global tariff policies and their economic
            effects on international trade.
          </p>
        </div>

        {/* Key Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                <ArrowTrendingUpIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Average Tariff Increase</p>
                <p className="text-2xl font-bold text-gray-900">+8.6%</p>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              Compared to previous quarter: +2.3%
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-4">
                <GlobeAltIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Countries Affected</p>
                <p className="text-2xl font-bold text-gray-900">27</p>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              Primary focus: Asia-Pacific region
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                <ChartPieIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Most Impacted Sector</p>
                <p className="text-2xl font-bold text-gray-900">Technology</p>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              Semiconductors, Consumer Electronics
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mr-4">
                <ArrowTrendingDownIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Market Impact</p>
                <p className="text-2xl font-bold text-gray-900">-1.2%</p>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              S&P 500 movement on tariff news
            </div>
          </div>
        </div>

        {/* Main Content Area - Conditional based on activeView */}
        {activeView === "global" && (
          <>
            {/* Recent Tariff Changes */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Recent Tariff Changes
                </h2>
                <Link
                  href="/dashboard/details"
                  className="text-sm text-indigo-600 hover:text-indigo-800"
                >
                  View all tariffs →
                </Link>
              </div>

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
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentTariffData.recentTariffs.map((tariff) => {
                      const isIncrease =
                        tariff.tariffRate > tariff.previousRate;
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
                            {new Date(
                              tariff.effectiveDate
                            ).toLocaleDateString()}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Impact Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Sector Impact
                </h2>
                <div className="space-y-4">
                  {currentTariffData.impactData.map((impact, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-900">
                          {impact.sector}
                        </span>
                        <span
                          className={`text-sm font-medium ${
                            impact.change > 0
                              ? "text-red-600"
                              : "text-green-600"
                          }`}
                        >
                          {impact.change > 0 ? "+" : ""}
                          {impact.change}%
                        </span>
                      </div>
                      <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`absolute top-0 left-0 h-full ${
                            impact.change > 0 ? "bg-red-500" : "bg-green-500"
                          }`}
                          style={{
                            width: `${Math.min(
                              Math.abs(impact.change) * 10,
                              100
                            )}%`,
                          }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {impact.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Market Impacts
                </h2>
                <div className="space-y-4">
                  {Object.entries(currentTariffData.marketMetrics).map(
                    ([key, value], index) => (
                      <div
                        key={index}
                        className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-900">
                            {key
                              .replace(/([A-Z])/g, " $1")
                              .replace(/^./, (str) => str.toUpperCase())}
                          </span>
                          <span
                            className={`text-sm font-medium ${
                              Number(value) > 0
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {Number(value) > 0 ? "+" : ""}
                            {value}%
                          </span>
                        </div>
                        <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`absolute top-0 left-0 h-full ${
                              Number(value) > 0 ? "bg-green-500" : "bg-red-500"
                            }`}
                            style={{
                              width: `${Math.min(
                                Math.abs(Number(value)) * 10,
                                100
                              )}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Latest News */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Latest Trade News
                </h2>
                <Link
                  href="/news"
                  className="text-sm text-indigo-600 hover:text-indigo-800"
                >
                  View all news →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentTariffData.newsItems.slice(0, 3).map((news) => (
                  <div
                    key={news.id}
                    className="border border-gray-100 rounded-lg overflow-hidden"
                  >
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex space-x-1">
                          {news.relatedCountries
                            .slice(0, 2)
                            .map((country, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 bg-gray-100 text-gray-800 text-xs font-medium rounded"
                              >
                                {country}
                              </span>
                            ))}
                          {news.relatedCountries.length > 2 && (
                            <span className="px-2 py-0.5 bg-gray-100 text-gray-800 text-xs font-medium rounded">
                              +{news.relatedCountries.length - 2}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-gray-500 flex items-center">
                          <ClockIcon className="h-3 w-3 mr-1" />
                          {new Date(news.publishedDate).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="font-bold text-md mb-2 text-gray-900 line-clamp-2">
                        {news.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {news.summary}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">
                          {news.source}
                        </span>
                        <Link
                          href={news.url}
                          className="text-xs font-medium text-indigo-600 hover:text-indigo-800"
                        >
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeView === "country" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex justify-between items-baseline mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Country-Level Tariff Impact Analysis
                </h2>
                <p className="text-gray-600">
                  Comprehensive overview of tariff impacts by country with
                  implementation dates and effect percentages
                </p>
              </div>
              <div className="flex gap-2">
                <select className="text-sm border border-gray-300 rounded-md px-3 py-1.5">
                  <option value="all">All Regions</option>
                  <option value="asia">Asia-Pacific</option>
                  <option value="europe">Europe</option>
                  <option value="americas">Americas</option>
                  <option value="africa">Africa</option>
                </select>
                <select className="text-sm border border-gray-300 rounded-md px-3 py-1.5">
                  <option value="all">All Impacts</option>
                  <option value="high">High Impact (&gt;15%)</option>
                  <option value="medium">Medium Impact (5-15%)</option>
                  <option value="low">Low Impact (&lt;5%)</option>
                </select>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-indigo-50 rounded-lg p-4">
                <p className="text-sm text-indigo-600 mb-1">
                  Total Countries Affected
                </p>
                <p className="text-2xl font-bold text-indigo-900">27</p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-4">
                <p className="text-sm text-indigo-600 mb-1">
                  Average Tariff Impact
                </p>
                <p className="text-2xl font-bold text-indigo-900">+12.3%</p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-4">
                <p className="text-sm text-indigo-600 mb-1">
                  Most Affected Region
                </p>
                <p className="text-2xl font-bold text-indigo-900">
                  Asia-Pacific
                </p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-4">
                <p className="text-sm text-indigo-600 mb-1">
                  Highest Single Tariff
                </p>
                <p className="text-2xl font-bold text-indigo-900">35%</p>
              </div>
            </div>

            {/* Main country grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
              {/* Generate cards for all countries */}
              {/* China card */}
              <div className="border border-gray-200 rounded-xl p-5 hover:border-indigo-300 hover:shadow-md transition-all">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-8 flex-shrink-0 mr-3 overflow-hidden rounded border border-gray-200">
                    <Image
                      src="/flags/cn.svg"
                      width={48}
                      height={32}
                      alt="China"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">China</h3>
                    <p className="text-xs text-gray-500">
                      Most targeted by tariffs
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Average Tariff</span>
                      <span className="font-medium text-red-600">25.8%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-500"
                        style={{ width: "76%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Latest Tariff</p>
                      <p className="font-medium">35% (Semiconductors)</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Effective Date</p>
                      <p className="font-medium">May 15, 2025</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Previous Rate</p>
                      <p className="font-medium">25%</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Change</p>
                      <p className="font-medium text-red-600">+10%</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <button className="w-full text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center justify-center">
                      View detailed analysis{" "}
                      <ArrowRightIcon className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* European Union card */}
              <div className="border border-gray-200 rounded-xl p-5 hover:border-indigo-300 hover:shadow-md transition-all">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-8 flex-shrink-0 mr-3 overflow-hidden rounded border border-gray-200">
                    <Image
                      src="/flags/eu.svg"
                      width={48}
                      height={32}
                      alt="European Union"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      European Union
                    </h3>
                    <p className="text-xs text-gray-500">Trade bloc</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Average Tariff</span>
                      <span className="font-medium text-green-600">12.1%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500"
                        style={{ width: "42%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Latest Tariff</p>
                      <p className="font-medium">12% (Automotive)</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Effective Date</p>
                      <p className="font-medium">April 1, 2025</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Previous Rate</p>
                      <p className="font-medium">18%</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Change</p>
                      <p className="font-medium text-green-600">-6%</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <button className="w-full text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center justify-center">
                      View detailed analysis{" "}
                      <ArrowRightIcon className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* India card */}
              <div className="border border-gray-200 rounded-xl p-5 hover:border-indigo-300 hover:shadow-md transition-all">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-8 flex-shrink-0 mr-3 overflow-hidden rounded border border-gray-200">
                    <Image
                      src="/flags/in.svg"
                      width={48}
                      height={32}
                      alt="India"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">India</h3>
                    <p className="text-xs text-gray-500">Emerging market</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Average Tariff</span>
                      <span className="font-medium text-red-600">17.4%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-500"
                        style={{ width: "58%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Latest Tariff</p>
                      <p className="font-medium">22% (Pharmaceuticals)</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Effective Date</p>
                      <p className="font-medium">April 20, 2025</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Previous Rate</p>
                      <p className="font-medium">15%</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Change</p>
                      <p className="font-medium text-red-600">+7%</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <button className="w-full text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center justify-center">
                      View detailed analysis{" "}
                      <ArrowRightIcon className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Mexico card */}
              <div className="border border-gray-200 rounded-xl p-5 hover:border-indigo-300 hover:shadow-md transition-all">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-8 flex-shrink-0 mr-3 overflow-hidden rounded border border-gray-200">
                    <Image
                      src="/flags/mx.svg"
                      width={48}
                      height={32}
                      alt="Mexico"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Mexico</h3>
                    <p className="text-xs text-gray-500">USMCA member</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Average Tariff</span>
                      <span className="font-medium text-red-600">7.2%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-500"
                        style={{ width: "32%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Latest Tariff</p>
                      <p className="font-medium">8% (Agriculture)</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Effective Date</p>
                      <p className="font-medium">May 1, 2025</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Previous Rate</p>
                      <p className="font-medium">5%</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Change</p>
                      <p className="font-medium text-red-600">+3%</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <button className="w-full text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center justify-center">
                      View detailed analysis{" "}
                      <ArrowRightIcon className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Brazil card */}
              <div className="border border-gray-200 rounded-xl p-5 hover:border-indigo-300 hover:shadow-md transition-all">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-8 flex-shrink-0 mr-3 overflow-hidden rounded border border-gray-200">
                    <Image
                      src="/flags/br.svg"
                      width={48}
                      height={32}
                      alt="Brazil"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Brazil</h3>
                    <p className="text-xs text-gray-500">
                      Key South American market
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Average Tariff</span>
                      <span className="font-medium text-yellow-600">14.7%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-500"
                        style={{ width: "48%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Latest Tariff</p>
                      <p className="font-medium">30% (Steel)</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Effective Date</p>
                      <p className="font-medium">March 15, 2025</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Previous Rate</p>
                      <p className="font-medium">30%</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Change</p>
                      <p className="font-medium text-gray-600">0%</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <button className="w-full text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center justify-center">
                      View detailed analysis{" "}
                      <ArrowRightIcon className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* South Africa card */}
              <div className="border border-gray-200 rounded-xl p-5 hover:border-indigo-300 hover:shadow-md transition-all">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-8 flex-shrink-0 mr-3 overflow-hidden rounded border border-gray-200">
                    <div className="bg-gray-100 w-full h-full flex items-center justify-center text-xs">
                      ZA
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      South Africa
                    </h3>
                    <p className="text-xs text-gray-500">
                      Leading African economy
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Average Tariff</span>
                      <span className="font-medium text-red-600">10.5%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-500"
                        style={{ width: "38%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Latest Tariff</p>
                      <p className="font-medium">16% (Mining)</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Effective Date</p>
                      <p className="font-medium">April 8, 2025</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Previous Rate</p>
                      <p className="font-medium">12%</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Change</p>
                      <p className="font-medium text-red-600">+4%</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <button className="w-full text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center justify-center">
                      View detailed analysis{" "}
                      <ArrowRightIcon className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Nigeria card */}
              <div className="border border-gray-200 rounded-xl p-5 hover:border-indigo-300 hover:shadow-md transition-all">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-8 flex-shrink-0 mr-3 overflow-hidden rounded border border-gray-200">
                    <div className="bg-gray-100 w-full h-full flex items-center justify-center text-xs">
                      NG
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Nigeria</h3>
                    <p className="text-xs text-gray-500">West African hub</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Average Tariff</span>
                      <span className="font-medium text-red-600">18.2%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-500"
                        style={{ width: "62%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Latest Tariff</p>
                      <p className="font-medium">24% (Petroleum)</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Effective Date</p>
                      <p className="font-medium">February 22, 2025</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Previous Rate</p>
                      <p className="font-medium">14%</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Change</p>
                      <p className="font-medium text-red-600">+10%</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <button className="w-full text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center justify-center">
                      View detailed analysis{" "}
                      <ArrowRightIcon className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Egypt card */}
              <div className="border border-gray-200 rounded-xl p-5 hover:border-indigo-300 hover:shadow-md transition-all">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-8 flex-shrink-0 mr-3 overflow-hidden rounded border border-gray-200">
                    <div className="bg-gray-100 w-full h-full flex items-center justify-center text-xs">
                      EG
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Egypt</h3>
                    <p className="text-xs text-gray-500">
                      North African market
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Average Tariff</span>
                      <span className="font-medium text-red-600">15.8%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-500"
                        style={{ width: "54%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Latest Tariff</p>
                      <p className="font-medium">20% (Textiles)</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Effective Date</p>
                      <p className="font-medium">March 8, 2025</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Previous Rate</p>
                      <p className="font-medium">12%</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500 mb-1">Change</p>
                      <p className="font-medium text-red-600">+8%</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <button className="w-full text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center justify-center">
                      View detailed analysis{" "}
                      <ArrowRightIcon className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Showing 8 of 27 countries
              </div>
              <div className="flex space-x-1">
                <button
                  className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled
                >
                  Previous
                </button>
                <button className="px-3 py-1 bg-indigo-600 text-white border border-indigo-600 rounded text-sm">
                  1
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm">
                  2
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm">
                  3
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm">
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {activeView === "sector" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Sector Impact Analysis
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {currentTariffData.sectorHighlights.map((sector) => (
                <div
                  key={sector.id}
                  className="border border-gray-200 rounded-lg p-5 hover:border-indigo-300 transition-colors"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 mr-4">
                      {sectorIcons[
                        sector.sector as keyof typeof sectorIcons
                      ] || <ChartBarIcon className="h-6 w-6" />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">
                        {sector.sector}
                      </h3>
                      <div
                        className={`text-xs font-medium rounded-full py-1 px-2 inline-block ${
                          sector.impact === "High" ||
                          sector.impact === "Critical"
                            ? "bg-red-100 text-red-700"
                            : sector.impact === "Medium"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {sector.impact} Impact
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {sector.trend}
                  </p>

                  <div className="space-y-2">
                    {Object.entries(sector.metrics).map(([key, value], idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center"
                      >
                        <span className="text-xs text-gray-500">{key}</span>
                        <span
                          className={`text-xs font-medium ${
                            typeof value === "number"
                              ? value > 0
                                ? "text-red-600"
                                : "text-green-600"
                              : "text-gray-700"
                          }`}
                        >
                          {typeof value === "number"
                            ? value > 0
                              ? `+${value}%`
                              : `${value}%`
                            : value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeView === "market" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Market Effects Analysis
            </h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">
                Key Market Indicators
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="font-medium text-gray-700 mb-4">
                    Stock Market Impact
                  </h4>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-3">
                      <ArrowTrendingDownIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        {currentTariffData.marketMetrics.sp500Movement}%
                      </p>
                      <p className="text-xs text-gray-500">
                        S&P 500 movement following tariff announcements
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Market volatility increases with each new tariff
                    announcement, particularly affecting technology and
                    manufacturing sectors which are heavily dependent on global
                    supply chains.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="font-medium text-gray-700 mb-4">
                    Consumer Price Impact
                  </h4>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mr-3">
                      <ArrowTrendingUpIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        +{currentTariffData.marketMetrics.consumerPriceIndex}%
                      </p>
                      <p className="text-xs text-gray-500">
                        Consumer Price Index increase
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Consumer goods prices are showing early signs of increase,
                    with electronics and household appliances experiencing the
                    most significant price adjustments due to tariff-induced
                    cost increases.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                Small Business Impact
              </h3>
              <div className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mr-3">
                    <BriefcaseIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      +{currentTariffData.marketMetrics.smallBusinessImpact}%
                    </p>
                    <p className="text-xs text-gray-500">
                      Small business operating costs
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Small businesses are experiencing increased operating costs
                  due to higher import prices, particularly those reliant on
                  technology components and specialized manufacturing inputs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs font-medium text-gray-700 mb-1">
                      Supply Chain Disruption
                    </p>
                    <p className="text-sm">Medium</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs font-medium text-gray-700 mb-1">
                      Price Pass-through
                    </p>
                    <p className="text-sm">73%</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs font-medium text-gray-700 mb-1">
                      Margin Impact
                    </p>
                    <p className="text-sm">-2.5%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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
