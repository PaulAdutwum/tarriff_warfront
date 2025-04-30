import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tariff Explorer | Tariff War",
  description:
    "Explore global tariffs, filter by country and sector, and analyze their impact on the global economy.",
};

// In a real app, this would be fetched from API
const tariffs = [
  {
    id: "1",
    sourceCountry: {
      name: "United States",
      code: "US",
      flagUrl: "/flags/us.png",
    },
    targetCountry: {
      name: "China",
      code: "CN",
      flagUrl: "/flags/cn.png",
    },
    sector: {
      name: "Electronics",
      id: "electronics",
    },
    tariffRate: 25,
    previousRate: 10,
    effectiveDate: "2023-06-15",
    announcementDate: "2023-05-15",
    description:
      "New tariffs imposed on consumer electronics including smartphones, laptops and other devices.",
    impactScore: 8.2,
  },
  {
    id: "2",
    sourceCountry: {
      name: "European Union",
      code: "EU",
      flagUrl: "/flags/eu.png",
    },
    targetCountry: {
      name: "United Kingdom",
      code: "GB",
      flagUrl: "/flags/gb.png",
    },
    sector: {
      name: "Agriculture",
      id: "agriculture",
    },
    tariffRate: 15,
    previousRate: 5,
    effectiveDate: "2023-06-10",
    announcementDate: "2023-05-20",
    description:
      "Post-Brexit tariffs on agricultural products including dairy, meats, and produce.",
    impactScore: 6.5,
  },
  {
    id: "3",
    sourceCountry: {
      name: "China",
      code: "CN",
      flagUrl: "/flags/cn.png",
    },
    targetCountry: {
      name: "Australia",
      code: "AU",
      flagUrl: "/flags/au.png",
    },
    sector: {
      name: "Mining",
      id: "mining",
    },
    tariffRate: 20,
    previousRate: 15,
    effectiveDate: "2023-06-05",
    announcementDate: "2023-05-05",
    description:
      "Increased tariffs on coal, iron ore, and other mined resources as part of ongoing trade dispute.",
    impactScore: 7.8,
  },
  {
    id: "4",
    sourceCountry: {
      name: "Japan",
      code: "JP",
      flagUrl: "/flags/jp.png",
    },
    targetCountry: {
      name: "South Korea",
      code: "KR",
      flagUrl: "/flags/kr.png",
    },
    sector: {
      name: "Automotive",
      id: "automotive",
    },
    tariffRate: 18,
    previousRate: 18,
    effectiveDate: "2023-06-01",
    announcementDate: "2023-04-15",
    description:
      "Tariffs maintained on automobiles and automotive parts amid regional tensions.",
    impactScore: 5.3,
  },
];

// Mock data for countries and sectors for the filter UI
const countries = [
  { id: "us", name: "United States" },
  { id: "cn", name: "China" },
  { id: "eu", name: "European Union" },
  { id: "jp", name: "Japan" },
  { id: "kr", name: "South Korea" },
  { id: "au", name: "Australia" },
  { id: "gb", name: "United Kingdom" },
];

const sectors = [
  { id: "electronics", name: "Electronics" },
  { id: "agriculture", name: "Agriculture" },
  { id: "mining", name: "Mining" },
  { id: "automotive", name: "Automotive" },
  { id: "healthcare", name: "Healthcare" },
  { id: "textiles", name: "Textiles" },
  { id: "energy", name: "Energy" },
];

export default function TariffsPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Tariff Explorer</h1>
        <p className="mt-2 text-gray-600">
          Explore global tariffs, filter by country and sector, and analyze
          their economic impact.
        </p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className="md:col-span-1 bg-white p-5 rounded-lg shadow-sm">
          <h2 className="font-medium text-lg text-gray-900 mb-4">Filters</h2>

          {/* Source Country */}
          <div className="mb-4">
            <label
              htmlFor="sourceCountry"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Source Country
            </label>
            <select
              id="sourceCountry"
              name="sourceCountry"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">All Countries</option>
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          {/* Target Country */}
          <div className="mb-4">
            <label
              htmlFor="targetCountry"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Target Country
            </label>
            <select
              id="targetCountry"
              name="targetCountry"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">All Countries</option>
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          {/* Sector */}
          <div className="mb-4">
            <label
              htmlFor="sector"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Sector
            </label>
            <select
              id="sector"
              name="sector"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">All Sectors</option>
              {sectors.map((sector) => (
                <option key={sector.id} value={sector.id}>
                  {sector.name}
                </option>
              ))}
            </select>
          </div>

          {/* Date Range */}
          <div className="mb-4">
            <label
              htmlFor="dateFrom"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              From Date
            </label>
            <input
              type="date"
              id="dateFrom"
              name="dateFrom"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="dateTo"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              To Date
            </label>
            <input
              type="date"
              id="dateTo"
              name="dateTo"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Apply Button */}
          <button
            type="button"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Apply Filters
          </button>

          {/* Reset Button */}
          <button
            type="button"
            className="w-full mt-2 px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-300 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Reset
          </button>
        </div>

        <div className="md:col-span-3">
          {/* Results Count and Sort Options */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 bg-white p-4 rounded-lg shadow-sm">
            <div className="mb-2 sm:mb-0">
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">4</span> results
              </p>
            </div>
            <div className="flex items-center">
              <label
                htmlFor="sort"
                className="mr-2 text-sm font-medium text-gray-700"
              >
                Sort by
              </label>
              <select
                id="sort"
                name="sort"
                className="px-3 py-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="date-desc">Date (newest first)</option>
                <option value="date-asc">Date (oldest first)</option>
                <option value="rate-desc">Rate (highest first)</option>
                <option value="rate-asc">Rate (lowest first)</option>
                <option value="impact-desc">Impact (highest first)</option>
              </select>
            </div>
          </div>

          {/* Tariff Cards */}
          <div className="grid grid-cols-1 gap-6">
            {tariffs.map((tariff) => (
              <div
                key={tariff.id}
                className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {tariff.sourceCountry.name} →{" "}
                        {tariff.targetCountry.name}
                      </h3>
                      <div className="mt-2 text-sm text-gray-600">
                        Sector: {tariff.sector.name}
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-2xl font-bold text-gray-900">
                        {tariff.tariffRate}%
                      </div>
                      {tariff.previousRate !== tariff.tariffRate && (
                        <div
                          className={`text-sm font-medium mt-1 ${
                            tariff.tariffRate > tariff.previousRate
                              ? "text-red-600"
                              : tariff.tariffRate < tariff.previousRate
                              ? "text-green-600"
                              : "text-gray-500"
                          }`}
                        >
                          {tariff.tariffRate > tariff.previousRate && "+"}
                          {tariff.tariffRate < tariff.previousRate && "-"}
                          {Math.abs(
                            ((tariff.tariffRate - tariff.previousRate) /
                              tariff.previousRate) *
                              100
                          ).toFixed(1)}
                          %
                        </div>
                      )}
                    </div>
                  </div>

                  {tariff.description && (
                    <p className="mt-3 text-sm text-gray-600">
                      {tariff.description}
                    </p>
                  )}

                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <span>
                      Effective:{" "}
                      {new Date(tariff.effectiveDate).toLocaleDateString()}
                    </span>
                  </div>

                  {tariff.impactScore !== undefined && (
                    <div className="mt-4">
                      <div className="text-sm font-medium text-gray-700">
                        Impact Score
                      </div>
                      <div className="mt-1 relative h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`absolute left-0 top-0 h-full ${
                            tariff.impactScore >= 7
                              ? "bg-red-500"
                              : tariff.impactScore >= 4
                              ? "bg-yellow-500"
                              : "bg-green-500"
                          }`}
                          style={{
                            width: `${(tariff.impactScore / 10) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="px-5 py-3 bg-gray-50 text-right">
                  <a
                    href={`/tariffs/${tariff.id}`}
                    className="text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    View details
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 rounded-lg shadow-sm">
            <div className="flex flex-1 justify-between sm:hidden">
              <a
                href="#"
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Previous
              </a>
              <a
                href="#"
                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Next
              </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to{" "}
                  <span className="font-medium">4</span> of{" "}
                  <span className="font-medium">24</span> results
                </p>
              </div>
              <div>
                <nav
                  className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-current="page"
                    className="relative z-10 inline-flex items-center bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                  >
                    3
                  </a>
                  <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                    ...
                  </span>
                  <a
                    href="#"
                    className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                  >
                    6
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
