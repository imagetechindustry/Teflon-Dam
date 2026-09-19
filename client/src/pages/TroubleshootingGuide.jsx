import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import TechnicalGuidesNav from "../components/common/TechnicalGuidesNav";
import FAQSection from "../components/common/FAQSection";
import HomeCTA from "../components/home/HomeCTA";

export default function TroubleshootingGuide() {
  const [filterCategory, setFilterCategory] = useState("all");

  const defectCodes = [
    {
      code: "TD-01",
      category: "leakage",
      name: "Adhesive Oozing & Edge Bead Formation",
      symptom: "Adhesive weeps past the side of the dam, forming thick beads on film web edges that contaminate chill rolls.",
      rootCause: "Worn radial arc bevel or insufficient clamping pressure leaving a micro-gap between the Teflon face and the rotating chrome roller.",
      quickFix: "Loosen side bracket, flush cured adhesive from the radius seat using ethyl acetate and a brass scraper, re-seat dam and apply 1/4 turn extra torque.",
      permanentFix: "Replace with CNC-profiled machine-specific Teflon Dam (e.g. ImageTech Nord or Bobst spec) with 100% radial contact.",
      recommendedModel: "Virgin PTFE Machine-Specific Contour Dam",
      severity: "High (Causes Web Edge Tears & Roll Contamination)",
    },
    {
      code: "TD-02",
      category: "friction",
      name: "Frictional Overheating & Material Softening",
      symptom: "Teflon dam feels hot to touch (>85°C); edge curls, discolors slightly, or shows gummy adhesive buildup on outer flank.",
      rootCause: "Excessive clamping pressure against the rotating roller or running dry during initial line startup without adhesive lubrication.",
      quickFix: "Back off clamping screw by 1/2 turn. Never run metering rollers dry—always pump adhesive into the pond before accelerating beyond 100 m/min.",
      permanentFix: "Upgrade to 15% Glass-Filled PTFE or Carbon-Filled Antistatic Teflon Dam which provides higher compressive strength and heat dissipation.",
      recommendedModel: "15% Glass-Filled PTFE High-Speed Profile",
      severity: "Medium (Accelerates Dam Wear)",
    },
    {
      code: "TD-03",
      category: "surface",
      name: "Roller Surface Micro-Scratches & Scoring",
      symptom: "Fine circumferential hairline scratches visible on chrome metering roll or rubber sleeve near the dam contact zone.",
      rootCause: "Hard abrasive particulate, cured two-component adhesive chunks, or metallic particles trapped in the Teflon face; or using metal scrapers during cleaning.",
      quickFix: "Stop press immediately. Inspect Teflon contact face with a magnifying loupe; pry out any embedded debris or dress the face with 600-grit emery cloth.",
      permanentFix: "Strictly enforce brass/plastic scrapers only for cleaning; replace contaminated dam with virgin Teflon to prevent ruined chrome cylinders.",
      recommendedModel: "Virgin Food-Grade PTFE (Zero Abrasive Fillers)",
      severity: "Critical (Risk of Permanent Roller Cylinder Damage)",
    },
    {
      code: "TD-04",
      category: "leakage",
      name: "Uneven Squeeze-Out Under Dam Base",
      symptom: "Adhesive bypasses the lower corner where metering roll meets application roll, forming a pool underneath the coating station.",
      rootCause: "Improper nip intersection radius (mismatched roll diameters) or warped mounting bracket holding the dam at an off-axis angle.",
      quickFix: "Check mounting bracket with a dial indicator or spirit level. Ensure dam base sits flat against the bracket face.",
      permanentFix: "Order replacement dam specifying exact roller center-to-center distance and diameter combination.",
      recommendedModel: "Dual-Radius Compound Bevel Dam",
      severity: "High (Severe Adhesive Waste & Press Cleanliness)",
    },
    {
      code: "TD-05",
      category: "friction",
      name: "Asymmetrical / Uneven Dam Edge Wear",
      symptom: "One side of the dam wears down twice as fast as the other; dam appears tilted in the holder.",
      rootCause: "Unequal clamping force from dual bracket screws, or non-parallel adjustment of the side dam guide rail.",
      quickFix: "Use a torque-limiting wrench to tighten clamping bolts equally. Ensure equal gap clearance left-to-right.",
      permanentFix: "Inspect guide rail slide bearings for play; install ImageTech symmetrical dual-bevel dams for reversible use.",
      recommendedModel: "Symmetrical Reversible Teflon Dam",
      severity: "Medium (Premature Replacement Cycle)",
    },
    {
      code: "TD-06",
      category: "quality",
      name: "Adhesive Curing & Crust on Side Flanges",
      symptom: "Solid cured adhesive chunks break off into the adhesive pond, causing streaks and pinholes in the lamination web.",
      rootCause: "Stagnant adhesive dead-zones behind dam shoulders where two-component polyurethane crosslinks after long exposure to ambient air.",
      quickFix: "Manually agitate the reservoir edges with a silicone spatula during shift changes; ensure recirculating adhesive stream covers dam flanks.",
      permanentFix: "Install streamlined contoured dams with low-profile adhesive-flow deflectors to eliminate stagnant zones.",
      recommendedModel: "Streamlined Hydrodynamic Bevel Dam",
      severity: "High (Causes Lamination Optical Streaks & Pinholes)",
    },
  ];

  const filteredCodes = defectCodes.filter((d) => {
    if (filterCategory === "all") return true;
    return d.category === filterCategory;
  });

  const faqs = [
    {
      question: "Why is adhesive leaking past the Teflon Dam on my solventless laminator?",
      answer: "Adhesive leakage is usually caused by three factors: 1) A worn or scored radius bevel that no longer hugs the roller curvature, 2) Uneven or loose clamping pressure on the side bracket, or 3) Solidified adhesive crumbs lifting the dam away from the chrome roll. Inspect and clean the radius with ethyl acetate and a brass scraper, or replace with a new machine-matched dam.",
    },
    {
      question: "Can a Teflon Dam scratch or damage hard chrome rollers?",
      answer: "Pure virgin PTFE is substantially softer than chrome (55 Shore D vs ~68 HRC) and cannot physically scratch chrome on its own. However, if press operators use steel screwdrivers or metal utility knives to clean dried adhesive, or if airborne metallic dust gets embedded into the Teflon face, those trapped particles will score the roller. Always use brass or wooden scrapers.",
    },
    {
      question: "How long should a pair of Teflon Dams last in continuous production?",
      answer: "In a well-maintained solventless lamination press running 2K polyurethane at 300 to 400 m/min, high-grade ImageTech Virgin PTFE dams typically last 6 to 9 months. With 15% Glass-Filled PTFE running higher line speeds, service life can exceed 12 months with routine daily cleaning and gentle clamping.",
    },
    {
      question: "What is the correct way to clean dried adhesive off a Teflon Dam?",
      answer: "Soak the removed dam in ethyl acetate, ethanol, or acetone for 10 to 15 minutes to soften polyurethane resins. Wipe clean with a lint-free cotton rag or use a soft brass scraper. Never use steel wool, razor blades, or wire wheels, as they create gouges that trap glue.",
    },
  ];

  const breadcrumbs = [
    { name: "Home", item: "https://www.teflondam.com/" },
    { name: "Technical Guides", item: "https://www.teflondam.com/selection-guide" },
    { name: "Defect Troubleshooting Guide", item: "https://www.teflondam.com/troubleshooting-guide" },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Teflon Dam & Solventless Lamination Defect Troubleshooting Guide",
    description: "Visual quick-finder and operator troubleshooting guide for solventless lamination press defects including adhesive edge-oozing, roller scoring, frictional heating, and uneven coating.",
    image: "https://www.teflondam.com/heroimage.webp",
    author: {
      "@type": "Organization",
      name: "ImageTech Industries",
    },
    publisher: {
      "@type": "Organization",
      name: "ImageTech Industries",
      logo: {
        "@type": "ImageObject",
        url: "https://www.teflondam.com/logo.png",
      },
    },
    mainEntityOfPage: "https://www.teflondam.com/troubleshooting-guide",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Daily Pressroom Maintenance and Cleaning SOP for Teflon Dams",
    description: "Standard operating procedure for cleaning, inspecting, and re-torquing Teflon Dams during shift changes.",
    step: [
      {
        "@type": "HowToStep",
        name: "Step 1: Solvent Flush & Soft Scraping",
        text: "Apply ethyl acetate to soften adhesive residue on the dam radius. Use a brass scraper to remove gummy adhesive without scratching the PTFE.",
      },
      {
        "@type": "HowToStep",
        name: "Step 2: Radius Loupe Inspection",
        text: "Inspect the curved edge for embedded foreign particles or micro-nicks. If particles are found, gently dress with 600-grit wet emery paper.",
      },
      {
        "@type": "HowToStep",
        name: "Step 3: Gentle Re-Torquing",
        text: "Slide dam back into mounting bracket. Tighten finger-tight plus one-quarter turn to maintain uniform hydrodynamic sealing pressure.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.name,
      item: b.item,
    })),
  };

  return (
    <>
      <SEO
        title="Teflon Dam Defect Troubleshooting Guide | Solventless Lamination"
        description="Comprehensive troubleshooting guide for Teflon Dams and solventless lamination press defects. Solve adhesive edge oozing, friction overheating, roller scoring, and dam wear."
        keywords={[
          "teflon dam troubleshooting",
          "solventless lamination adhesive leaking",
          "teflon dam adhesive oozing",
          "lamination edge bead defects",
          "roller scoring prevention",
          "nordmeccanica teflon dam leak",
          "teflon dam cleaning sop",
          "imagetech industries",
        ]}
        schema={[articleSchema, howToSchema, faqSchema, breadcrumbSchema]}
      />

      <main className="bg-slate-50 min-h-screen">
        {/* Breadcrumb Bar above Technical Guides Nav */}
        <div className="bg-white border-b border-slate-100 py-2.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center text-xs font-semibold text-slate-500 flex-wrap gap-1.5">
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-slate-400">Technical Guides</span>
              <span>/</span>
              <span className="text-blue-600 font-bold">Defect Troubleshooting Guide</span>
            </nav>
          </div>
        </div>

        {/* Sticky Sub-Nav */}
        <TechnicalGuidesNav />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-10 sm:space-y-12">
          {/* Centered Page Heading Section */}
          <div className="border-b border-slate-200/80 pb-6 sm:pb-8 text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-2">
              Teflon Dam <span className="text-blue-600">Defect Troubleshooting</span> Guide
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
              Solve lamination coating edge leakage, roll scoring, thermal overheating, and adhesive contamination on your solventless laminator. Fast, plain-language diagnostics written by converting engineers for pressroom operators.
            </p>
          </div>
          {/* SECTION 1: Visual Quick-Finder */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-blue-600 block mb-1">
                  Operator Rapid Diagnosis
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Visual Quick-Finder: Match Symptom to Fix
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Identify your visible press problem below to find the immediate countermeasure and prevent ruined production rolls.
                </p>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "all", label: "All Symptoms" },
                  { id: "leakage", label: "Adhesive Leaks" },
                  { id: "friction", label: "Heat / Wear" },
                  { id: "surface", label: "Roller Protection" },
                  { id: "quality", label: "Web Quality" },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFilterCategory(f.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      filterCategory === f.id
                        ? "bg-blue-600 text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick-Finder Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 text-xs uppercase font-extrabold tracking-wider">
                    <th className="py-3.5 px-4 w-24">Code</th>
                    <th className="py-3.5 px-4">Visible Symptom</th>
                    <th className="py-3.5 px-4">Root Cause</th>
                    <th className="py-3.5 px-4">Instant Pressroom Fix</th>
                    <th className="py-3.5 px-4">Permanent Solution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                  {filteredCodes.map((item) => (
                    <tr key={item.code} className="hover:bg-blue-50/40 transition-colors">
                      <td className="py-4 px-4 font-black text-blue-600 whitespace-nowrap">
                        <span className="bg-blue-50 px-2 py-1 rounded-md border border-blue-200">
                          {item.code}
                        </span>
                      </td>
                      <td className="py-4 px-4 font-bold text-slate-900 max-w-[200px]">
                        {item.name}
                      </td>
                      <td className="py-4 px-4 text-xs text-slate-600 max-w-[220px]">
                        {item.rootCause}
                      </td>
                      <td className="py-4 px-4 text-xs text-emerald-800 font-semibold max-w-[220px]">
                        {item.quickFix}
                      </td>
                      <td className="py-4 px-4 text-xs text-slate-800 font-semibold max-w-[200px]">
                        {item.permanentFix}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 2: 6 Detailed Diagnostic Cards */}
          <section className="space-y-6">
            <div className="max-w-3xl">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                In-Depth Failure Analysis
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                Detailed Pressroom Defect Diagnostic Cards
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Deep engineering breakdown of each failure mode with physical mechanisms, operator countermeasures, and recommended replacement specifications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {defectCodes.map((defect) => (
                <div
                  key={defect.code}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-lg bg-blue-100 text-blue-800 font-black text-xs tracking-wider">
                        {defect.code}
                      </span>
                      <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                        {defect.severity}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-slate-900 mb-3 leading-tight">
                      {defect.name}
                    </h3>

                    <div className="space-y-3 text-xs leading-relaxed">
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                        <strong className="text-slate-900 font-bold block mb-1">
                          Visible Symptom:
                        </strong>
                        <p className="text-slate-600">{defect.symptom}</p>
                      </div>

                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                        <strong className="text-slate-900 font-bold block mb-1">
                          Pressroom Root Cause:
                        </strong>
                        <p className="text-slate-600">{defect.rootCause}</p>
                      </div>

                      <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-200/80">
                        <strong className="text-emerald-900 font-bold block mb-1">
                          Immediate Press Countermeasure:
                        </strong>
                        <p className="text-emerald-800 font-medium">{defect.quickFix}</p>
                      </div>

                      <div className="bg-blue-50/70 p-3 rounded-xl border border-blue-200/80">
                        <strong className="text-blue-950 font-bold block mb-1">
                          Long-Term Engineering Fix:
                        </strong>
                        <p className="text-blue-900 font-medium">{defect.permanentFix}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-semibold">Recommended Model:</span>
                    <span className="font-bold text-slate-900 text-right">{defect.recommendedModel}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3: Daily Pressroom SOP & Cleaning Protocol */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                Preventive Maintenance Protocol
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                Daily Teflon Dam Maintenance & Cleaning SOP
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Following this 10-minute shift change checklist doubles Teflon Dam lifespan and prevents 90% of edge adhesive leaks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-sm mb-4">
                  A
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-2">
                  Shift Change Flush (Every 8-12 hrs)
                </h3>
                <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
                  <li>• Flush the metering nip with solvent (ethyl acetate or solvent blend) while rolls turn at jog speed (10 m/min).</li>
                  <li>• Apply soft brass or wood scrapers to remove sticky polyurethane film.</li>
                  <li>• <strong className="text-red-600 font-bold">NEVER</strong> use razor blades, steel screwdrivers, or utility knives on Teflon.</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-sm mb-4">
                  B
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-2">
                  Weekly Radius Inspection
                </h3>
                <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
                  <li>• Unclamp the Teflon dams and inspect the curved sealing face under good pressroom lighting.</li>
                  <li>• Check for embedded metallic grit or cured resin nicks.</li>
                  <li>• If minor nicks exist, dress the radius lightly using 600-grit wet emery paper soaked in solvent.</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-sm mb-4">
                  C
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-2">
                  Clamping Torque Calibration
                </h3>
                <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
                  <li>• When re-installing, tighten side clamping thumbscrews finger-tight, then advance exactly 1/4 turn.</li>
                  <li>• For pneumatic systems, set air regulator to 1.5 - 2.0 bar.</li>
                  <li>• Verify zero gap visually by shining a flashlight behind the dam nip.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 4: Doctor Blade vs. Teflon Dam Defect Cross-Diagnosis */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm overflow-hidden">
            <div className="mb-8 max-w-3xl">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                Diagnostic Root Cause Matrix
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                Doctor Blade vs. Teflon Dam Defect Cross-Diagnosis
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                When visual defects occur on finished laminate rolls, press crews often guess between printing doctor blade faults and lamination dam failures. Use this diagnostic matrix to quickly identify the true root cause.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 text-xs uppercase font-extrabold tracking-wider">
                    <th className="py-3.5 px-4">Visual Defect Pattern</th>
                    <th className="py-3.5 px-4">Probable Culprit</th>
                    <th className="py-3.5 px-4">Mechanical Root Cause</th>
                    <th className="py-3.5 px-4">Immediate Pressroom Fix</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-medium text-xs sm:text-sm">
                  <tr className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      Longitudinal hairline streak running full reel length
                    </td>
                    <td className="py-3.5 px-4 font-bold text-indigo-700">Doctor Blade</td>
                    <td className="py-3.5 px-4 text-slate-600">
                      Microscopic blade nick or dried ink particle trapped under blade edge
                    </td>
                    <td className="py-3.5 px-4 text-emerald-800 font-semibold">
                      Wipe blade with felt pad or replace blade lamella strip
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/40 transition-colors bg-blue-50/20">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      Adhesive oozing & puddle dripping onto floor or roll ends
                    </td>
                    <td className="py-3.5 px-4 font-bold text-blue-700">Teflon Dam</td>
                    <td className="py-3.5 px-4 text-slate-600">
                      Worn concave radius, radius mismatch with roll, or pneumatic clamp &lt;1.2 bar
                    </td>
                    <td className="py-3.5 px-4 text-emerald-800 font-semibold">
                      Increase clamping pressure to 1.8 bar; replace with CNC-matched Teflon dam
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      Uneven edge coating weight (film curls at one edge)
                    </td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">Both / Nip Alignment</td>
                    <td className="py-3.5 px-4 text-slate-600">
                      Tilted Teflon dam or skewed metering roll gap creating localized pressure surge
                    </td>
                    <td className="py-3.5 px-4 text-emerald-800 font-semibold">
                      Re-calibrate roll parallel gap using dial indicator; ensure dam faces are flat
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/40 transition-colors bg-blue-50/20">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      Fine micro-scoring scratches on chrome cylinder ends
                    </td>
                    <td className="py-3.5 px-4 font-bold text-red-700">Dam Material Defect</td>
                    <td className="py-3.5 px-4 text-slate-600">
                      Felt or low-grade glass-filled plastic trapping abrasive grit against rotating chrome
                    </td>
                    <td className="py-3.5 px-4 text-emerald-800 font-semibold">
                      Immediately switch to 100% pure virgin PTFE Teflon (Shore D 55–60)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 5: Flash-Cure Chemistry & Ambient Pressroom Controls */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                Atmospheric & Chemical Controls
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                Flash-Cure Chemistry & Ambient Pressroom Controls
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Polyurethane solventless adhesives are moisture-reactive chemicals. Ambient room conditions directly influence how adhesive behaves at the dynamic Teflon dam contact interface.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <span className="text-xs font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                  Parameter 01
                </span>
                <h3 className="font-extrabold text-base text-slate-900 mt-3 mb-2">
                  Pressroom Relative Humidity
                </h3>
                <div className="text-xl font-black text-slate-900 mb-2">45% – 65% RH</div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  If relative humidity exceeds 70%, isocyanate molecules react prematurely with air moisture at the roll edges. A solid polymer crust forms against the dam. Virgin PTFE prevents this crust from welding to the seal face.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <span className="text-xs font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                  Parameter 02
                </span>
                <h3 className="font-extrabold text-base text-slate-900 mt-3 mb-2">
                  Adhesive Dosing Temperature
                </h3>
                <div className="text-xl font-black text-slate-900 mb-2">40°C – 45°C</div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Adhesive feeding pipes and mixer heads must be thermally regulated. If temperature drops below 35°C, viscosity spikes, creating severe hydraulic thrust against the side dams that can cause mechanical deflection.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <span className="text-xs font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                  Parameter 03
                </span>
                <h3 className="font-extrabold text-base text-slate-900 mt-3 mb-2">
                  Mixer Residence Time
                </h3>
                <div className="text-xl font-black text-slate-900 mb-2">&lt; 30 Minutes</div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Ensure the adhesive mixer delivers only the volume consumed by the line speed. Letting catalyzed 2K polyurethane sit idle in the nip reservoir creates gelatinous knots that jam under the dam bevel.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 6: Emergency 10-Minute Pressroom Run Recovery Playbook */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                Emergency Response SOP
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                Emergency 10-Minute Run Recovery Playbook
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                If an edge leak begins halfway through a 3,000-meter master roll, stopping the press immediately risks thermal shock and web breaks. Follow this tested 5-step emergency containment SOP.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-sm shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900">Ramp Line Speed Down to 80–100 m/min</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Do not trigger an emergency e-stop. Decelerate smoothly to reduce the dynamic hydrodynamic pressure wedge inside the nip reservoir.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-sm shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900">Swab the Outer Bevel with Ethyl Acetate</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Using a lint-free cotton cloth or brass scraper, wipe the exterior drip channel to dissolve fresh resin buildup before it cures on roll journals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-sm shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900">Verify Pneumatic Pressure Gauge (1.8–2.0 Bar)</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Check if airline pressure dropped due to compressor cycling. If below 1.5 bar, restore pressure to re-seat the Teflon dam firmly against the cylinders.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-sm shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900">Reposition Dispenser Nozzle Towards Center</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Ensure the adhesive dispenser is not discharging liquid directly against the dam face. Adhesive should pour at least 50 mm inwards from the dam wall.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-sm shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900">Complete the Roll & Schedule Dam Replacement</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Finish the current reel safely. Once stopped, unclamp the dam and replace with a fresh ImageTech precision CNC Teflon dam before starting the next job.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Assistance CTA Banner */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-widest uppercase text-blue-200">
                Solve Persistent Press Leaks
              </span>
              <h2 className="text-2xl sm:text-3xl font-black mt-2 leading-tight">
                Still Experiencing Adhesive Edge Leakage?
              </h2>
              <p className="text-blue-100 text-sm sm:text-base mt-3 leading-relaxed">
                Send our senior application engineers photos or video of your lamination coating head. We will diagnose the exact mechanical root cause and supply high-performance replacement Teflon dams.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
                className="bg-white hover:bg-slate-100 text-blue-700 font-bold text-sm px-6 py-3.5 rounded-full transition-colors text-center shadow-md cursor-pointer"
              >
                Request Technical Help & Quote →
              </button>
              <Link
                to="/working-principle"
                className="bg-blue-800/80 hover:bg-blue-800 text-white font-bold text-sm px-6 py-3.5 rounded-full transition-colors text-center border border-blue-400/30"
              >
                Working Principle Guide
              </Link>
            </div>
          </section>
        </div>

        {/* SECTION 4: FAQs - Standard Full-Width UI matching all pages */}
        <FAQSection
          title="Teflon Dam Troubleshooting & Maintenance FAQs"
          subtitle="Frequently Asked Questions"
          description="Find answers to common pressroom troubleshooting, adhesive leakage, and roller protection questions."
          faqs={faqs}
          hideSchema={true}
        />

        {/* Universal Call to Action */}
        <HomeCTA />
      </main>
    </>
  );
}
