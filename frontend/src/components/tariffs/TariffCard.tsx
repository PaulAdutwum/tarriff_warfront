import React from "react";
import Link from "next/link";
import {
  ChevronRightIcon,
  CalendarIcon,
  TagIcon,
  GlobeAltIcon,
} from "@heroicons/react/20/solid";

interface TariffCardProps {
  tariff: {
    id: string;
    sourceCountry: {
      name: string;
      code: string;
      flagUrl?: string;
    };
    targetCountry: {
      name: string;
      code: string;
      flagUrl?: string;
    };
    sector: {
      name: string;
      id: string;
    };
    tariffRate: number;
    previousRate?: number;
    effectiveDate: string;
    announcementDate: string;
    description?: string;
    impactScore?: number;
  };
}

export default function TariffCard({ tariff }: TariffCardProps) {
  // Calculate if the tariff is an increase or decrease
  const isIncrease =
    tariff.previousRate !== undefined &&
    tariff.tariffRate > tariff.previousRate;
  const isDecrease =
    tariff.previousRate !== undefined &&
    tariff.tariffRate < tariff.previousRate;
  const changePct = tariff.previousRate
    ? Math.abs(
        ((tariff.tariffRate - tariff.previousRate) / tariff.previousRate) * 100
      ).toFixed(1)
    : null;

  // Format dates
  const effectiveDate = new Date(tariff.effectiveDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <span className="w-6 h-6 inline-flex items-center justify-center bg-blue-100 text-blue-800 rounded-full mr-2 text-xs font-bold">
                {tariff.sourceCountry.code.substring(0, 2)}
              </span>
              {tariff.sourceCountry.name}
              <ChevronRightIcon className="h-5 w-5 mx-1 text-gray-400" />
              <span className="w-6 h-6 inline-flex items-center justify-center bg-indigo-100 text-indigo-800 rounded-full mr-2 text-xs font-bold">
                {tariff.targetCountry.code.substring(0, 2)}
              </span>
              {tariff.targetCountry.name}
            </h3>
            <div className="mt-2 flex items-center">
              <TagIcon className="h-4 w-4 text-gray-500 mr-1" />
              <span className="text-sm text-gray-600">
                {tariff.sector.name}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-2xl font-bold text-gray-900">
              {tariff.tariffRate}%
            </div>
            {tariff.previousRate !== undefined && (
              <div
                className={`text-sm font-medium mt-1 flex items-center ${
                  isIncrease
                    ? "text-red-600"
                    : isDecrease
                    ? "text-green-600"
                    : "text-gray-500"
                }`}
              >
                {isIncrease && "+"}
                {isDecrease && "-"}
                {changePct}%
                {tariff.previousRate !== undefined && (
                  <span className="text-gray-500 ml-1">
                    from {tariff.previousRate}%
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {tariff.description && (
          <p className="mt-3 text-sm text-gray-600 line-clamp-2">
            {tariff.description}
          </p>
        )}

        <div className="mt-4 flex items-center text-sm text-gray-500">
          <CalendarIcon className="h-4 w-4 mr-1" />
          <span>Effective: {effectiveDate}</span>
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
                style={{ width: `${(tariff.impactScore / 10) * 100}%` }}
              />
            </div>
            <div className="mt-1 flex justify-between text-xs text-gray-500">
              <span>Low</span>
              <span>Medium</span>
              <span>High</span>
            </div>
          </div>
        )}
      </div>

      <div className="px-5 py-3 bg-gray-50 text-right">
        <Link
          href={`/tariffs/${tariff.id}`}
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          View details
        </Link>
      </div>
    </div>
  );
}
