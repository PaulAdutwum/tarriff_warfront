"use client";

import React from "react";
import Layout from "@/components/layout/Layout";
import {
  ChartBarIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

// Note: In a real application, these would come from API calls
const recentTariffs = [
  {
    id: "1",
    source: "United States",
    target: "China",
    rate: 25,
    sector: "Technology",
    date: "2023-06-15",
  },
  {
    id: "2",
    source: "European Union",
    target: "United Kingdom",
    rate: 15,
    sector: "Agriculture",
    date: "2023-06-10",
  },
  {
    id: "3",
    source: "China",
    target: "Australia",
    rate: 20,
    sector: "Mining",
    date: "2023-06-05",
  },
  {
    id: "4",
    source: "Japan",
    target: "South Korea",
    rate: 18,
    sector: "Automotive",
    date: "2023-06-01",
  },
];

const impactSummary = [
  { sector: "Healthcare", change: +2.3, status: "increase" },
  { sector: "Education", change: -1.5, status: "decrease" },
  { sector: "Technology", change: +4.7, status: "increase" },
  { sector: "Agriculture", change: -3.2, status: "decrease" },
];

const recentNews = [
  {
    id: "1",
    title: "New tariffs on agricultural products announced",
    date: "2023-06-14",
    source: "Global Trade News",
  },
  {
    id: "2",
    title: "Technology sector braces for impact as trade tensions rise",
    date: "2023-06-12",
    source: "Tech Today",
  },
  {
    id: "3",
    title: "Economic forecasts revised amid ongoing tariff disputes",
    date: "2023-06-10",
    source: "Economy Weekly",
  },
  {
    id: "4",
    title: "Small businesses seeking government support as tariffs bite",
    date: "2023-06-08",
    source: "Business Journal",
  },
];

export default function HomeWithLayout() {
  return (
    <Layout>
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Real-time insights into global tariffs and their economic impact.
        </p>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Active Tariffs */}
          <div className="p-5 bg-white rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-md">
                <ChartBarIcon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">
                  Active Tariffs
                </p>
                <p className="text-2xl font-semibold text-gray-900">243</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm text-green-600">
                <ArrowUpIcon className="w-4 h-4 mr-1 shrink-0" />
                <span>12% increase this month</span>
              </div>
            </div>
          </div>

          {/* Countries Affected */}
          <div className="p-5 bg-white rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 bg-indigo-100 rounded-md">
                <GlobeAltIcon className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">
                  Countries Affected
                </p>
                <p className="text-2xl font-semibold text-gray-900">78</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm text-red-600">
                <ArrowUpIcon className="w-4 h-4 mr-1 shrink-0" />
                <span>8% increase this quarter</span>
              </div>
            </div>
          </div>

          {/* Economic Impact */}
          <div className="p-5 bg-white rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-md">
                <DocumentTextIcon className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">
                  Economic Impact
                </p>
                <p className="text-2xl font-semibold text-gray-900">$1.2T</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm text-red-600">
                <ArrowUpIcon className="w-4 h-4 mr-1 shrink-0" />
                <span>5.3% increase YoY</span>
              </div>
            </div>
          </div>

          {/* AI Predictions */}
          <div className="p-5 bg-white rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">
                  AI Predictions
                </p>
                <p className="text-2xl font-semibold text-gray-900">85%</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm text-green-600">
                <ArrowUpIcon className="w-4 h-4 mr-1 shrink-0" />
                <span>3% improved accuracy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 gap-5 mt-8 lg:grid-cols-2">
          {/* Recent Tariffs */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-5 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">
                Recent Tariff Events
              </h2>
            </div>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                        Source
                      </th>
                      <th className="px-3 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                        Target
                      </th>
                      <th className="px-3 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                        Rate
                      </th>
                      <th className="px-3 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                        Sector
                      </th>
                      <th className="px-3 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentTariffs.map((tariff) => (
                      <tr key={tariff.id} className="hover:bg-gray-50">
                        <td className="px-3 py-4 text-sm text-gray-900 whitespace-nowrap">
                          {tariff.source}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-900 whitespace-nowrap">
                          {tariff.target}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-900 whitespace-nowrap">
                          {tariff.rate}%
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-900 whitespace-nowrap">
                          {tariff.sector}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-900 whitespace-nowrap">
                          {tariff.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="px-5 py-3 text-right bg-gray-50">
              <Link
                href="/tariffs"
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                View all tariffs &rarr;
              </Link>
            </div>
          </div>

          {/* News Feed */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-5 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Latest News</h2>
            </div>
            <div className="p-3">
              <ul className="divide-y divide-gray-200">
                {recentNews.map((news) => (
                  <li key={news.id} className="py-3">
                    <div className="hover:bg-gray-50 rounded-md p-2">
                      <Link href={`/news/${news.id}`} className="block">
                        <p className="text-sm font-medium text-gray-900">
                          {news.title}
                        </p>
                        <div className="flex mt-1 text-xs text-gray-500">
                          <span>{news.source}</span>
                          <span className="mx-1">&bull;</span>
                          <span>{news.date}</span>
                        </div>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-5 py-3 text-right bg-gray-50">
              <Link
                href="/news"
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                View all news &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Sector Impact */}
        <div className="mt-8 bg-white rounded-lg shadow">
          <div className="px-5 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">
              Sector Impact Overview
            </h2>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
              {impactSummary.map((sector) => (
                <div
                  key={sector.sector}
                  className="p-4 border border-gray-200 rounded-lg"
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    {sector.sector}
                  </h3>
                  <div className="flex items-center mt-2">
                    {sector.status === "increase" ? (
                      <ArrowUpIcon className="w-5 h-5 text-green-500" />
                    ) : (
                      <ArrowDownIcon className="w-5 h-5 text-red-500" />
                    )}
                    <span
                      className={`ml-1 text-lg font-semibold ${
                        sector.status === "increase"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {Math.abs(sector.change)}%
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {sector.status === "increase" ? "Positive" : "Negative"}{" "}
                    impact
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="px-5 py-3 text-right bg-gray-50">
            <Link
              href="/sectors"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              View detailed sector analysis &rarr;
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
