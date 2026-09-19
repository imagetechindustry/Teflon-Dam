import React from "react";
import { Link, useLocation } from "react-router-dom";

const guides = [
  {
    name: "Selection & Sizing",
    shortName: "Sizing Guide",
    href: "/selection-guide",
    icon: (
      <svg className="w-4 h-4 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    badge: "Interactive Calculator"
  },
  {
    name: "Defect Troubleshooting",
    shortName: "Troubleshooting",
    href: "/troubleshooting-guide",
    icon: (
      <svg className="w-4 h-4 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    badge: "Visual Quick-Finder"
  },
  {
    name: "Working Principle & Physics",
    shortName: "Working Principle",
    href: "/working-principle",
    icon: (
      <svg className="w-4 h-4 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    badge: "Engineering Deep-Dive"
  },
  {
    name: "Industrial Applications",
    shortName: "Applications",
    href: "/press-applications",
    icon: (
      <svg className="w-4 h-4 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    badge: "6 Sectors"
  },
];

export default function TechnicalGuidesNav() {
  const location = useLocation();

  return (
    <div className="bg-white border-y border-slate-200 sticky top-20 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2.5 overflow-x-auto hide-scrollbar gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 pr-2 border-r border-slate-200 hidden md:flex">
            <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Technical Suite
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {guides.map((g) => {
              const isActive = location.pathname === g.href;
              return (
                <Link
                  key={g.href}
                  to={g.href}
                  className={`group inline-flex items-center px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                      : "bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-600 border border-slate-200/80"
                  }`}
                >
                  <span className={isActive ? "text-white" : "text-slate-500 group-hover:text-blue-600"}>
                    {g.icon}
                  </span>
                  <span>{g.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="shrink-0 pl-2 border-l border-slate-200 hidden lg:block">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
              className="text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors inline-flex items-center cursor-pointer"
            >
              Ask an Engineer →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
