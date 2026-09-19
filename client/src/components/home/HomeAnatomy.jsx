import React, { useState } from "react";

const anatomyPoints = [
  {
    id: "bevel",
    num: "01",
    title: "Dual-Radius CNC Arc Bevel",
    highlight: "±0.02 mm Tolerance",
    description:
      "Precision-machined concave curvature contoured to the exact outer diameters of both the rotating chrome metering roller and the rubber applicator roll. Eliminates gaps where adhesive could seep.",
  },
  {
    id: "material",
    num: "02",
    title: "Certified Virgin Food-Grade PTFE",
    highlight: "FDA 21 CFR 177.1550",
    description:
      "Manufactured exclusively from pure compression-molded PTFE with zero recycled scrap. Chemically inert, non-toxic, and resistant to aggressive two-component polyurethane adhesives and ethyl acetate.",
  },
  {
    id: "surface",
    num: "03",
    title: "Low Surface Energy (~18 mN/m)",
    highlight: "Extreme Non-Wetting",
    description:
      "Because polar polyurethane adhesive cannot wet PTFE, liquid adhesive beads up naturally and remains inside the reservoir pond instead of creeping out the sides.",
  },
  {
    id: "mounting",
    num: "04",
    title: "Quick-Slide Bracket Slot",
    highlight: "OEM Drop-in Fit",
    description:
      "Exact mounting grooves and guide notches match Nordmeccanica, Bobst, Uteco, and Comexi bracket assemblies for 60-second replacement during preventive maintenance.",
  },
  {
    id: "friction",
    num: "05",
    title: "Self-Lubricating Micro-Slip",
    highlight: "Coeff: 0.04 - 0.08",
    description:
      "Soft polymer tribological interface (55-60 Shore D) guarantees zero scratching or scoring on hard chrome cylinders (68 HRC), saving over $10,000 per roll replacement.",
  },
  {
    id: "rigidity",
    num: "06",
    title: "Anti-Creep Structural Stability",
    highlight: "High Pressure Rating",
    description:
      "Available in 15mm, 18mm, and 20mm thicknesses with uniform density that withstands up to 2.5 bar pneumatic side clamping force without bowing or thermal deformation.",
  },
];

export default function HomeAnatomy() {
  const [activePoint, setActivePoint] = useState(anatomyPoints[0].id);

  const selected = anatomyPoints.find((p) => p.id === activePoint) || anatomyPoints[0];

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-blue-600 block mb-2">
            Precision Machining Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            The Anatomy of a <span className="text-blue-600">High-Performance</span> Teflon Dam
          </h2>
          <p className="mt-3 text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
            Every millimeter of an ImageTech Teflon Dam is designed to prevent adhesive waste, protect expensive press cylinders, and maintain a zero-leak seal at speeds up to 500+ m/min.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Interactive Navigation Pills */}
          <div className="lg:col-span-5 space-y-3">
            {anatomyPoints.map((point) => {
              const isActive = point.id === activePoint;
              return (
                <div
                  key={point.id}
                  onClick={() => setActivePoint(point.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isActive
                      ? "bg-blue-50/80 border-blue-300 shadow-sm"
                      : "bg-slate-50 hover:bg-slate-100/80 border-slate-200/80"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-lg font-black text-xs flex items-center justify-center ${
                        isActive ? "bg-blue-600 text-white" : "bg-white text-slate-600 border border-slate-200"
                      }`}
                    >
                      {point.num}
                    </span>
                    <div>
                      <h3
                        className={`text-sm font-bold ${
                          isActive ? "text-blue-900" : "text-slate-800"
                        }`}
                      >
                        {point.title}
                      </h3>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {point.highlight}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`w-2 h-2 rounded-full ${
                      isActive ? "bg-blue-600" : "bg-slate-300"
                    }`}
                  ></span>
                </div>
              );
            })}
          </div>

          {/* Right: Feature Highlight Display Card */}
          <div className="lg:col-span-7 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 p-8 sm:p-10 rounded-3xl border-2 border-slate-200 shadow-sm flex flex-col justify-between min-h-[420px]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 bg-blue-600 text-white font-black text-xs rounded-lg shadow-xs">
                    Feature {selected.num}
                  </span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Engineering Breakdown
                  </span>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
                  {selected.highlight}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 tracking-tight">
                {selected.title}
              </h3>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-8">
                {selected.description}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200/80 text-xs">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <strong className="text-slate-900 font-bold block mb-1">Press Operator Benefit:</strong>
                  <span className="text-slate-600 font-medium">Zero adhesive crusting and fast 60-second toolless swap.</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <strong className="text-slate-900 font-bold block mb-1">Financial Return:</strong>
                  <span className="text-slate-600 font-medium">Saves 15-20% adhesive waste and prevents cylinder scoring.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                100% Manufactured in Delhi, India
              </span>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
              >
                Inquire About Specifications →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
