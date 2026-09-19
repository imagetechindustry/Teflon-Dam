import React from "react";
import { Link } from "react-router-dom";

const machines = [
  {
    brand: "Nordmeccanica",
    model: "Super Simplex & Super Combi",
    link: "/products/teflon-dam-for-nord-super-simplex-and-super-combi",
    rollOD: "Ø130 mm Chrome / Ø140 mm Rubber",
    bevelArc: "Dual Radial Concave (R125/R140)",
    thickness: "15mm, 18mm, 20mm CNC-Machined",
    speedRating: "Up to 500 m/min",
    clampType: "Quick-Change Slide Rail Bracket",
    bestFor: "Food pouches, barrier laminates, high-speed continuous flexible packaging.",
  },
  {
    brand: "Bobst",
    model: "Bobst CL 750 & SL 1000",
    link: "/products/teflon-dam-for-bobst",
    rollOD: "Ø150 mm Chrome / Ø160 mm Rubber",
    bevelArc: "Bobst Precision Offset Lip",
    thickness: "18mm & 20mm Reinforced",
    speedRating: "Up to 450 m/min",
    clampType: "Pneumatic Equalized Side Cylinder",
    bestFor: "Multi-layer barrier packaging, retort pouches, and medical packaging webs.",
  },
  {
    brand: "Uteco",
    model: "Uteco Rainbow & Horizon",
    link: "/products/teflon-dam-for-uteco",
    rollOD: "Ø140 mm Chrome / Ø150 mm Rubber",
    bevelArc: "Symmetric Uteco Curved Flange",
    thickness: "15mm & 18mm Food-Grade PTFE",
    speedRating: "Up to 400 m/min",
    clampType: "Manual Thumb-Screw with Locking Nut",
    bestFor: "Snack foods, confectionery wraps, and general purpose solventless laminations.",
  },
  {
    brand: "Comexi",
    model: "Comexi Nexus SL2 & Dual",
    link: "/products/teflon-dam-for-comexi",
    rollOD: "Ø145 mm Chrome / Ø155 mm Rubber",
    bevelArc: "Comexi High-Pressure Dual Bevel",
    thickness: "18mm & 20mm Stabilized",
    speedRating: "Up to 450 m/min",
    clampType: "Slotted Bracket with Alignment Pin",
    bestFor: "Solventless laminations with fast-curing 2K polyurethane resins.",
  },
];

export default function HomeMachineMatrix() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-black uppercase tracking-widest text-blue-600 block mb-2">
              OEM Machine Contours
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Machine-Specific <span className="text-blue-600">Compatibility Matrix</span>
            </h2>
            <p className="mt-3 text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
              We manufacture precision-matched Teflon Dams tailored to the exact cylinder geometry and bracket mounts of the world’s leading solventless lamination machinery.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
              className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-md shadow-blue-600/20 cursor-pointer"
            >
              Order Machine-Specific Dams →
            </button>
          </div>
        </div>

        {/* Machine Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {machines.map((m, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-blue-300 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                    {m.brand}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </div>

                <h3 className="text-lg font-black text-slate-900 mb-2">{m.model}</h3>

                <p className="text-xs text-slate-600 mb-4 leading-relaxed font-medium">
                  {m.bestFor}
                </p>

                <div className="space-y-2 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-100 font-medium text-slate-700 mb-5">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-bold">Roller ODs:</span>
                    <span className="text-slate-900 font-bold">{m.rollOD}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-bold">Bevel Arc:</span>
                    <span className="text-slate-900 font-bold text-right truncate ml-2">{m.bevelArc}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-bold">Standard Size:</span>
                    <span className="text-slate-900 font-bold">{m.thickness}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-bold">Max Speed:</span>
                    <span className="text-emerald-700 font-extrabold">{m.speedRating}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={m.link}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Product Spec →
                </Link>
                <span className="text-[10px] text-slate-400 font-semibold">In Stock</span>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Machine Banner */}
        <div className="mt-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-extrabold text-base text-slate-900">
                Operating a Custom, Rotomec, or Non-Standard Laminating Unit?
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Send your roller diameters and mounting bracket drawings. We CNC-machine custom Teflon Dams with 0.02 mm tolerances in 24 to 48 hours.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
              className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-5 py-3 rounded-full transition-colors cursor-pointer"
            >
              Request Custom Machining
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
