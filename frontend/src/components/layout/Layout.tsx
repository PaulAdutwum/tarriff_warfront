import React, { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  ChartBarIcon,
  NewspaperIcon,
  MapIcon,
  BriefcaseIcon,
  BellIcon,
  UserIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { clsx } from "clsx";

interface LayoutProps {
  children: ReactNode;
}

const navigationItems = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Tariff Explorer", href: "/tariffs", icon: ChartBarIcon },
  { name: "News Feed", href: "/news", icon: NewspaperIcon },
  { name: "Global Impact Map", href: "/map", icon: MapIcon },
  { name: "Market Insights", href: "/markets", icon: BriefcaseIcon },
  { name: "My Alerts", href: "/alerts", icon: BellIcon },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <div
        className={clsx(
          "fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-br from-blue-900 to-blue-700 transform transition-transform duration-300 ease-in-out md:hidden",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center">
            <span className="text-xl font-bold text-white">Tariff War</span>
          </div>
          <button
            className="text-white focus:outline-none"
            onClick={() => setSidebarOpen(false)}
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        <nav className="px-2 mt-5 space-y-1">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                pathname === item.href
                  ? "bg-blue-800 text-white"
                  : "text-blue-100 hover:bg-blue-800 hover:text-white",
                "group flex items-center px-2 py-2 text-base font-medium rounded-md"
              )}
            >
              <item.icon className="w-6 h-6 mr-3 text-blue-300" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-1 bg-gradient-to-br from-blue-900 to-blue-700">
          <div className="flex items-center h-16 px-4 bg-blue-900 bg-opacity-25">
            <span className="text-xl font-bold text-white">Tariff War</span>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 px-2 py-4 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    pathname === item.href
                      ? "bg-blue-800 text-white"
                      : "text-blue-100 hover:bg-blue-800 hover:text-white",
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  )}
                >
                  <item.icon
                    className={clsx(
                      pathname === item.href
                        ? "text-blue-300"
                        : "text-blue-300 group-hover:text-blue-200",
                      "mr-3 flex-shrink-0 h-6 w-6"
                    )}
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:pl-64">
        {/* Top navigation */}
        <div className="sticky top-0 z-10 flex flex-shrink-0 h-16 bg-white shadow">
          <button
            type="button"
            className="px-4 text-gray-500 border-r border-gray-200 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="w-6 h-6" />
          </button>
          <div className="flex justify-between flex-1 px-4">
            <div className="flex flex-1">
              <div className="flex items-center w-full md:ml-0">
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <input
                    type="search"
                    placeholder="Search tariffs, news, impacts..."
                    className="block w-full h-full py-2 pl-4 pr-3 text-gray-900 placeholder-gray-500 bg-gray-100 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center ml-4 space-x-4 md:ml-6">
              <button className="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <span className="sr-only">View notifications</span>
                <BellIcon className="w-6 h-6" />
              </button>

              <div className="relative ml-3">
                <button className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <span className="sr-only">Open user menu</span>
                  <div className="p-1 text-gray-400 hover:text-gray-500">
                    <UserIcon className="w-6 h-6" />
                  </div>
                </button>
              </div>

              <button className="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <span className="sr-only">Settings</span>
                <Cog6ToothIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1">
          <div className="py-6 mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
