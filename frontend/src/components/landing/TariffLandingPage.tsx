"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpTrayIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  InformationCircleIcon,
  ClockIcon,
  ChartBarSquareIcon,
  GlobeAltIcon,
  ChartBarIcon,
  DocumentTextIcon,
  BriefcaseIcon,
  HeartIcon,
  TruckIcon,
  BuildingLibraryIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

// Import our services and utilities
import {
  fetchTariffData,
  fetchLatestNews,
  fetchSectorImpact,
} from "@/services/apiService";
import { currentTariffData } from "@/utils/mockData";

// Map of sector names to icons
const sectorIcons = {
  Healthcare: <HeartIcon className="w-8 h-8" />,
  Transportation: <TruckIcon className="w-8 h-8" />,
  Technology: <ChartBarIcon className="w-8 h-8" />,
  Business: <BriefcaseIcon className="w-8 h-8" />,
  Finance: <DocumentTextIcon className="w-8 h-8" />,
  Agriculture: <GlobeAltIcon className="w-8 h-8" />,
};

// Format current date
const formatCurrentDate = () => {
  const now = new Date();
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(now);
};

export default function TariffLandingPage() {
  const [tariffData, setTariffData] = useState(currentTariffData);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Set current date
    setCurrentDate(formatCurrentDate());

    // Fetch data on component mount
    const loadData = async () => {
      try {
        setLoading(true);
        const [tariffResponse, newsResponse, sectorResponse] =
          await Promise.all([
            fetchTariffData(),
            fetchLatestNews(3),
            fetchSectorImpact(),
          ]);

        // Combine all data, including marketMetrics
        setTariffData({
          recentTariffs:
            tariffResponse.recentTariffs || currentTariffData.recentTariffs,
          newsItems: newsResponse || currentTariffData.newsItems,
          impactData:
            sectorResponse?.impactData || currentTariffData.impactData,
          sectorHighlights:
            sectorResponse?.sectorHighlights ||
            currentTariffData.sectorHighlights,
          marketMetrics:
            tariffResponse.marketMetrics || currentTariffData.marketMetrics,
        });
      } catch (error) {
        console.error("Error loading data:", error);
        // Fallback to mock data
        setTariffData(currentTariffData);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
          <p className="text-gray-500 font-medium">
            Loading latest tariff data...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - New Design */}
      <div className="relative bg-white border-b border-gray-200">
        <div className="absolute inset-0 bg-indigo-900 opacity-5 pattern-grid-lg"></div>
        <div className="container mx-auto px-4 py-16 sm:py-20 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="max-w-3xl mb-10 lg:mb-0">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-700 bg-indigo-50 rounded-full mb-4">
                {currentDate}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
                Tariff Warfront:{" "}
                <span className="text-indigo-600">Global Trade Impact</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
                Comprehensive analysis of international trade policies and their
                economic implications. Helping policymakers, businesses, and
                researchers make informed decisions through data-driven insights
                on tariff changes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/dashboard"
                  className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200 hover:translate-y-[-2px] active:translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Explore Dashboard
                </Link>
                <Link
                  href="/dashboard/report"
                  className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:border-indigo-500 hover:text-indigo-600 transition-all hover:bg-white/80 active:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  View Full Reports
                </Link>
              </div>
            </div>
            <div className="lg:w-2/5 rounded-xl overflow-hidden shadow-2xl">
              <div className="bg-white p-1">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <ChartBarSquareIcon className="h-8 w-8 text-indigo-600 mr-3" />
                      <h3 className="font-semibold text-lg text-gray-800">
                        Key Highlights
                      </h3>
                    </div>
                    <span className="text-xs text-gray-500 flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" /> Last updated:{" "}
                      {currentDate}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                        <ArrowTrendingUpIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">
                          China-US Semiconductor Tariffs
                        </p>
                        <p className="text-sm text-gray-500">
                          35% rate, up from 25%
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-4">
                        <ArrowTrendingDownIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">
                          EU-US Auto Tariffs Reduced
                        </p>
                        <p className="text-sm text-gray-500">
                          12% rate, down from 18%
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mr-4">
                        <InformationCircleIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">
                          S&P 500 Impact
                        </p>
                        <p className="text-sm text-gray-500">
                          -1.2% movement on tariff news
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data sources bar */}
        <div className="bg-gray-100 border-t border-gray-200 py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
              <div className="flex items-center mb-3 md:mb-0">
                <BuildingLibraryIcon className="h-5 w-5 text-gray-500 mr-2" />
                <span>
                  Data sources: WTO, IMF, World Bank, National Trade Authorities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-10 bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex space-x-1 overflow-x-auto py-3 no-scrollbar">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                activeTab === "overview"
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-100"
              } transition-colors whitespace-nowrap`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("tariffs")}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                activeTab === "tariffs"
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-100"
              } transition-colors whitespace-nowrap`}
            >
              Recent Tariffs
            </button>
            <button
              onClick={() => setActiveTab("news")}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                activeTab === "news"
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-100"
              } transition-colors whitespace-nowrap`}
            >
              Latest News
            </button>
            <button
              onClick={() => setActiveTab("impacts")}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                activeTab === "impacts"
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-100"
              } transition-colors whitespace-nowrap`}
            >
              Market Impacts
            </button>
            <button
              onClick={() => setActiveTab("sectors")}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                activeTab === "sectors"
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-100"
              } transition-colors whitespace-nowrap`}
            >
              Sector Analysis
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Page description and purpose */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">About</h2>
          <p className="text-gray-600 mb-4">
            The Tariff Impact Tracker provides comprehensive insights on global
            trade policies and their economic effects. This page helps
            policymakers craft effective strategies, enables businesses to
            navigate trade complexities, and offers researchers valuable data on
            international commerce patterns.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-3">
                  <BuildingLibraryIcon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">For Policymakers</h3>
              </div>
              <p className="text-sm text-gray-600">
                Evidence-based insights to inform effective trade policy
                decisions and evaluate economic impact
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-3">
                  <BriefcaseIcon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">For Businesses</h3>
              </div>
              <p className="text-sm text-gray-600">
                Strategic intelligence to navigate changing trade environments
                and optimize global supply chains
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-3">
                  <ChartBarIcon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">For Researchers</h3>
              </div>
              <p className="text-sm text-gray-600">
                Comprehensive data to analyze trade patterns, forecast trends,
                and study economic implications
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Live Snapshot Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-baseline mb-8 border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Recent Tariff Changes
            </h2>
            <p className="text-sm text-gray-500 flex items-center">
              <ClockIcon className="h-4 w-4 mr-1" /> Updated {currentDate}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tariffData.recentTariffs.map((tariff) => {
              const isIncrease = tariff.tariffRate > tariff.previousRate;
              const changePercent = tariff.previousRate
                ? Math.abs(
                    ((tariff.tariffRate - tariff.previousRate) /
                      tariff.previousRate) *
                      100
                  ).toFixed(1)
                : null;

              return (
                <div
                  key={tariff.id}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-indigo-200 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-bl-full -mr-12 -mt-12 group-hover:bg-indigo-500/10 transition-colors"></div>

                  <div className="flex items-center mb-5">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 mr-4">
                      {sectorIcons[
                        tariff.sector.name as keyof typeof sectorIcons
                      ] || "🔄"}
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {tariff.description}
                    </h3>
                  </div>

                  <div className="mb-5 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-3">
                      <span className="text-sm text-gray-600 w-36">
                        Imposing Country:
                      </span>
                      <div className="flex items-center">
                        <div className="w-7 h-7 bg-white shadow-sm rounded-sm flex items-center justify-center text-xs font-bold mr-2 overflow-hidden border border-gray-200">
                          <Image
                            src={tariff.sourceCountry.flagUrl}
                            width={28}
                            height={28}
                            alt={tariff.sourceCountry.code}
                            className="object-cover"
                          />
                        </div>
                        <span className="font-medium">
                          {tariff.sourceCountry.name}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <span className="text-sm text-gray-600 w-36">
                        Target Country:
                      </span>
                      <div className="flex items-center">
                        <div className="w-7 h-7 bg-white shadow-sm rounded-sm flex items-center justify-center text-xs font-bold mr-2 overflow-hidden border border-gray-200">
                          <Image
                            src={tariff.targetCountry.flagUrl}
                            width={28}
                            height={28}
                            alt={tariff.targetCountry.code}
                            className="object-cover"
                          />
                        </div>
                        <span className="font-medium">
                          {tariff.targetCountry.name}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 p-4 rounded-lg border border-gray-200 bg-white">
                    <div className="flex justify-between text-sm mb-3">
                      <span className="text-gray-600">Previous Rate:</span>
                      <span className="font-medium">
                        {tariff.previousRate}%
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">New Rate:</span>
                      <span
                        className={`font-medium ${
                          isIncrease ? "text-red-600" : "text-green-600"
                        }`}
                      >
                        {tariff.tariffRate}%
                        {changePercent && (
                          <span className="ml-1 text-xs">
                            ({isIncrease ? "+" : "-"}
                            {changePercent}%)
                          </span>
                        )}
                      </span>
                    </div>

                    <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${
                          isIncrease ? "bg-red-500" : "bg-green-500"
                        }`}
                        style={{
                          width: `${Math.min(
                            (tariff.tariffRate / 50) * 100,
                            100
                          )}%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex justify-between text-xs text-gray-500 border-t border-gray-100 pt-4">
                    <span className="flex items-center">
                      <ClockIcon className="h-3 w-3 mr-1" />
                      Announced:{" "}
                      {new Date(tariff.announcementDate).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <ClockIcon className="h-3 w-3 mr-1" />
                      Effective:{" "}
                      {new Date(tariff.effectiveDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Overview */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-baseline mb-8 border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Market Impact Overview
            </h2>
            <Link
              href="/detailed-impact"
              className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
            >
              View detailed analysis →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(tariffData.marketMetrics).map(
              ([key, value], index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:translate-y-[-2px] border border-gray-200 hover:border-indigo-200"
                >
                  <div className="flex justify-between items-center mb-5">
                    <h3 className="font-semibold text-lg text-gray-800">
                      {key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </h3>
                    <div
                      className={`flex items-center rounded-full px-3 py-1 ${
                        value > 0
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {value > 0 ? (
                        <ArrowTrendingUpIcon className="w-5 h-5 mr-1" />
                      ) : (
                        <ArrowTrendingDownIcon className="w-5 h-5 mr-1" />
                      )}
                      <span className="font-medium">{Math.abs(value)}%</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-5 text-sm">
                    Impact on {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                  </p>
                  <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
                    <div
                      className={`absolute top-0 left-0 h-full ${
                        value > 0 ? "bg-green-500" : "bg-red-500"
                      }`}
                      style={{
                        width: `${Math.min(Math.abs(value) * 10, 100)}%`,
                      }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Previous: {100}</span>
                    <span>
                      Current:{" "}
                      <span
                        className={
                          value > 0 ? "text-green-600" : "text-red-600"
                        }
                      >
                        {100 + value}
                      </span>
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* News Feed */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-baseline mb-8 border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Latest Tariff News
            </h2>
            <Link
              href="/news-archive"
              className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
            >
              Browse news archive →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tariffData.newsItems.map((news) => (
              <div
                key={news.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:translate-y-[-2px] relative group"
              >
                <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-pattern bg-opacity-30 flex items-center justify-center">
                    <span className="text-5xl">📰</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium text-gray-800">
                    {news.sentiment === "positive"
                      ? "🔼 Positive"
                      : news.sentiment === "negative"
                      ? "🔽 Negative"
                      : "◾ Neutral"}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex space-x-1">
                      {news.relatedCountries.slice(0, 3).map((country, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded"
                        >
                          {country}
                        </span>
                      ))}
                      {news.relatedCountries.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded">
                          +{news.relatedCountries.length - 3}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-500 flex items-center">
                      <ClockIcon className="h-3 w-3 mr-1" />
                      {new Date(news.publishedDate).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-indigo-700 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-5 line-clamp-3">
                    {news.summary}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-gray-100 rounded-sm flex items-center justify-center text-xs font-bold mr-2 text-gray-800">
                        {news.relatedCountries[0]?.substring(0, 2) || "GL"}
                      </div>
                      <span className="text-sm text-gray-600">
                        {news.source}
                      </span>
                    </div>
                    <Link
                      href={news.url}
                      className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center bg-indigo-50 px-3 py-1 rounded-full hover:bg-indigo-100 transition-colors"
                    >
                      Read More <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Analysis */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-baseline mb-8 border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Sectors Under Impact
            </h2>
            <Link
              href="/sector-analysis"
              className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
            >
              View sector deep dives →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {tariffData.sectorHighlights.map((sector) => (
              <div
                key={sector.id}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all hover:translate-y-[-2px] cursor-pointer border border-gray-200 hover:border-indigo-200 relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 mx-auto mb-4">
                  <span className="text-2xl">
                    {sectorIcons[sector.sector as keyof typeof sectorIcons] ||
                      "🔄"}
                  </span>
                </div>
                <h3 className="font-semibold text-xl mb-3 text-gray-800">
                  {sector.sector}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {sector.trend}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {Object.entries(sector.metrics)
                    .slice(0, 2)
                    .map(([key, value], idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700"
                      >
                        {key}:{" "}
                        {typeof value === "number"
                          ? value > 0
                            ? `+${value}%`
                            : `${value}%`
                          : value}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
