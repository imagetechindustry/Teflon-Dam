import React from "react";
import { Link } from "react-router-dom";

export default function HomeConvertingIntegration() {
  return (
    <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7">
            <span className="text-xs font-black uppercase tracking-widest text-blue-600 block mb-2">
              Pressroom Fluid Metering Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-5">
              Doctor Blades & Teflon Dams: <span className="text-blue-600">The Twin Pillars</span> of Converting Excellence
            </h2>
            <p className="text-slate-600 font-medium text-base leading-relaxed mb-6">
              In modern flexible packaging plants, flawless lamination begins with precision fluid metering. While high-performance <strong>doctor blades</strong> control ink thickness, coating laydown, and lacquer uniformity in rotogravure printing units, machine-specific <strong>Teflon Dams</strong> maintain zero-leak adhesive containment in the solventless lamination nip.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                    01
                  </span>
                  <h3 className="font-extrabold text-sm text-slate-900">
                    Doctor Blades (Printing & Coating)
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Precision Swedish steel blades wipe excess ink from anilox and rotogravure cylinders, ensuring crisp graphics without streaks or hazing.
                </p>
                <a
                  href="https://www.doctorblade.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 inline-flex items-center mt-3"
                >
                  Explore Doctor Blades →
                </a>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center">
                    02
                  </span>
                  <h3 className="font-extrabold text-sm text-slate-900">
                    Teflon Dams (Solventless Lamination)
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  CNC-machined virgin PTFE blocks seal liquid polyurethane adhesive in the nip reservoir between rotating chrome and rubber rollers.
                </p>
                <Link
                  to="/selection-guide"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center mt-3"
                >
                  Sizing Guide →
                </Link>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-blue-50/60 p-4 rounded-2xl border border-blue-200 font-medium">
              <strong className="text-slate-900 font-bold">The ImageTech Difference:</strong> With over 30 years of precision tooling expertise in Delhi, ImageTech Industries is India's trusted single-source partner for both doctor blades and machine-specific Teflon Dams. We eliminate third-party middleman markups, guaranteeing exact pressroom tolerances, immediate dispatch, and expert technical support.
            </p>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/50 p-7 sm:p-9 rounded-3xl border-2 border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-black uppercase tracking-widest text-slate-500">
                  Converting Line Benefits
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 bg-blue-100 text-blue-700 rounded-full">
                  Unified Pressroom
                </span>
              </div>

              <div className="space-y-4 text-xs font-medium text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-slate-900 font-bold block">15-20% Adhesive Savings:</strong>
                    <span>No uncontrolled side leaking or edge drips contaminating your lamination web.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-slate-900 font-bold block">Zero Cylinder Scoring:</strong>
                    <span>Soft virgin PTFE (55 Shore D) protects expensive chrome rolls worth over $10,000.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-slate-900 font-bold block">60-Second Quick Changeover:</strong>
                    <span>Engineered drop-in slide slots match OEM brackets for fast maintenance during shift changes.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-slate-900 font-bold block">Speeds Exceeding 450 m/min:</strong>
                    <span>Low coefficient of friction (0.04 - 0.08) prevents thermal softening on long runs.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 px-4 rounded-xl transition-all shadow-md shadow-blue-600/20 text-center cursor-pointer"
                >
                  Request Pressroom Quote
                </button>
                <Link
                  to="/press-applications"
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-3 px-4 rounded-xl transition-colors text-center"
                >
                  Applications
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
