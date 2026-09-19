import React from "react";
import { Link } from "react-router-dom";

const guides = [
  {
    num: "01",
    title: "Teflon Dam Selection & Sizing Guide",
    short: "Sizing & Selection",
    badge: "Interactive Calculator",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    href: "/selection-guide",
    description:
      "Use our live pressroom calculator to match machine models (Nord, Bobst, Uteco, Comexi) with optimal PTFE grades (Virgin, 15% Glass, Carbon), hardness, and clamping forces.",
    features: [
      "Dynamic speed & web width calculator",
      "3-Step roller measuring guide with basic tools",
      "Comprehensive PTFE chemical tolerance matrix",
    ],
  },
  {
    num: "02",
    title: "Defect Diagnostic & Troubleshooting Guide",
    short: "Defect Troubleshooting",
    badge: "Visual Quick-Finder",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    href: "/troubleshooting-guide",
    description:
      "Identify visible pressroom problems like adhesive edge oozing, friction overheating, and roller scoring. Follow plain-language operator countermeasures and shift cleaning SOPs.",
    features: [
      "Filterable symptom-to-fix Quick-Finder",
      "6 detailed diagnostic defect cards (TD-01 to TD-06)",
      "Daily shift cleaning & non-scratch scraper rules",
    ],
  },
  {
    num: "03",
    title: "Working Principle & Fluid Physics",
    short: "Working Principle",
    badge: "Engineering Physics",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    href: "/working-principle",
    description:
      "Understand the fluid dynamics of the hydrodynamic capillary wedge, boundary meniscus surface tension (~18 mN/m), and how Teflon prevents expensive chrome roller scoring.",
    features: [
      "Hydrodynamic nip sealing mechanics",
      "15-20% adhesive waste reduction analysis",
      "Head-to-head comparison vs. felt and DIY seals",
    ],
  },
  {
    num: "04",
    title: "Industrial Converting Applications",
    short: "Applications & Sectors",
    badge: "6 Industry Sectors",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    href: "/press-applications",
    description:
      "Explore application specifics across flexible food packaging, pharmaceutical blister foils, industrial sacks, label converting, solar PV films, and liquid carton boards.",
    features: [
      "Substrate matrix (BOPP, PET, Aluminium Foil, CPP)",
      "FDA/EU food-contact certified Virgin PTFE",
      "Machine compatibility details for all global OEMs",
    ],
  },
];

export default function HomeTechnicalGuides() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-black uppercase tracking-widest text-blue-600 block mb-2">
              Engineering Knowledge Suite
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Teflon Dam <span className="text-blue-600">Technical Guides</span> & Pressroom Resources
            </h2>
            <p className="mt-3 text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
              Written in simple, practical language for press operators, maintenance engineers, and plant managers. Master sizing, troubleshooting, physics, and converting applications.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/selection-guide"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 font-bold text-sm transition-all shadow-xs"
            >
              Explore Full Technical Suite →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {guides.map((g) => (
            <div
              key={g.num}
              className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-2xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
                    {g.num}
                  </span>
                  <span
                    className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${g.badgeColor}`}
                  >
                    {g.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 tracking-tight">
                  {g.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-medium mb-6">
                  {g.description}
                </p>

                <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-6">
                  {g.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center text-xs font-semibold text-slate-700 gap-2">
                      <svg
                        className="w-4 h-4 text-blue-600 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={g.href}
                  className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center group"
                >
                  Read Comprehensive Guide
                  <svg
                    className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
                <span className="text-xs text-slate-400 font-medium">Free Access</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
