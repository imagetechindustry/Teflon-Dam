import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import TechnicalGuidesNav from "../components/common/TechnicalGuidesNav";
import FAQSection from "../components/common/FAQSection";
import HomeCTA from "../components/home/HomeCTA";

export default function WorkingPrinciple() {
  const faqs = [
    {
      question: "What physical mechanism allows a Teflon Dam to seal liquid adhesive without leaking?",
      answer: "Teflon (PTFE) possesses one of the lowest surface energy values of any solid material (~18 mN/m) and a high contact angle (>110°) with polar polyurethane adhesives. This extreme non-wetting property, combined with precision CNC machining that matches roller curvature within 0.02 mm, creates a hydrodynamic barrier. The natural meniscus surface tension of the adhesive prevents it from creeping between the rotating roll face and the non-stick Teflon boundary.",
    },
    {
      question: "Why cannot UHMW-PE or Delrin (Acetal) be used in place of Teflon?",
      answer: "While UHMW-PE and Delrin are wear-resistant plastics, their continuous thermal operating limit is low (~80°C to 100°C), and their chemical resistance to aggressive solventless isocyanate curatives and cleaning solvents like ethyl acetate is limited. At 350+ m/min, nip friction generates localized temperatures that melt or distort UHMW, leading to catastrophic adhesive leaks and roll scoring.",
    },
    {
      question: "How do Teflon Dams prevent scoring on chrome metering cylinders?",
      answer: "PTFE has a Shore hardness of 55 to 60 Shore D, while hard chrome plating typically measures 65 to 70 HRC (equivalent to over 100 Shore D). PTFE's low kinetic friction coefficient (0.04 to 0.08) ensures that any contact between the rotating chrome roll and the dam is self-lubricating. As long as foreign grit is kept out, pure PTFE can never scratch or score hard chrome.",
    },
    {
      question: "What is the function of the compound radial bevel on modern Teflon Dams?",
      answer: "In a solventless lamination coating head, two rollers of different diameters and materials rotate against each other: a high-precision steel/chrome metering roll and a synthetic rubber (NBR/EPDM) transfer roll. A compound dual-radius bevel features two distinct arcs on the same block, ensuring 100% surface conformity against both rollers simultaneously at the exact nip convergence point.",
    },
  ];

  const breadcrumbs = [
    { name: "Home", item: "https://www.teflondam.com/" },
    { name: "Technical Guides", item: "https://www.teflondam.com/selection-guide" },
    { name: "Working Principle & Physics", item: "https://www.teflondam.com/working-principle" },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Working Principle & Physics of Teflon Dams in Solventless Lamination",
    description: "In-depth engineering analysis of fluid hydrodynamics, surface tension meniscus control, and tribological mechanics of PTFE dams in flexible packaging lamination machines.",
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
    mainEntityOfPage: "https://www.teflondam.com/working-principle",
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
        title="Teflon Dam Working Principle & Fluid Physics | ImageTech Industries"
        description="Learn the engineering working principle and fluid physics of Teflon Dams: hydrodynamic fluid barriers, surface tension meniscus control, zero-leak edge sealing, and roller protection."
        keywords={[
          "teflon dam working principle",
          "teflon dam manufacturer & exporter",
          "ptfe dam fluid physics",
          "solventless lamination coating head physics",
          "hydrodynamic teflon seal",
          "nip containment dam mechanism",
          "teflon friction coefficient",
          "roller protection in lamination",
          "imagetech industries",
        ]}
        schema={[articleSchema, faqSchema, breadcrumbSchema]}
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
              <span className="text-blue-600 font-bold">Working Principle & Physics</span>
            </nav>
          </div>
        </div>

        {/* Sticky Sub-Nav */}
        <TechnicalGuidesNav />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-10 sm:space-y-12">
          {/* Centered Page Heading Section */}
          <div className="border-b border-slate-200/80 pb-6 sm:pb-8 text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-2">
              Working Principle & <span className="text-blue-600">Fluid Physics</span> of Teflon Dams
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
              An engineering breakdown of how precision PTFE containment dams maintain a zero-leak liquid adhesive reservoir between counter-rotating metering cylinders operating at speeds over 450 m/min without roll scoring.
            </p>
          </div>
          {/* SECTION 1: 4 Core Physics Principles */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                Fluid Mechanics & Tribology
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                The 4 Scientific Principles Behind Teflon Dam Sealing
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Understanding how fluid dynamics, polymer surface energy, and precision machining converge to achieve 100% leak-free containment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Principle 1 */}
              <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black uppercase tracking-wider text-blue-600 bg-blue-100/70 px-2.5 py-1 rounded-md">
                      Principle 01
                    </span>
                    <span className="text-xs text-slate-400 font-bold">Hydrodynamic Lubrication</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    The Dynamic Capillary Wedge
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    As the chrome metering roll rotates against the stationary Teflon dam, a sub-micron boundary layer of liquid adhesive acts as a hydrodynamic fluid cushion. This micro-film prevents direct solid-to-solid contact, virtually eliminating frictional wear while liquid viscosity and high surface tension seal the side exit.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-200 text-xs text-slate-700 font-semibold bg-white p-3 rounded-xl">
                  <strong>Key Takeaway:</strong> Proper rotational speed creates hydrodynamic lift, meaning wear decreases as the press reaches operating speed!
                </div>
              </div>

              {/* Principle 2 */}
              <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black uppercase tracking-wider text-blue-600 bg-blue-100/70 px-2.5 py-1 rounded-md">
                      Principle 02
                    </span>
                    <span className="text-xs text-slate-400 font-bold">Surface Energy & Non-Wetting</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    High Contact Angle Repulsion
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    PTFE has the lowest surface energy of any industrial polymer (~18 mN/m). Polar polyurethane adhesive molecules are physically repelled by the fluoropolymer carbon-fluorine bond. Instead of wetting the Teflon and creeping out the edges, the liquid adhesive beads upward and stays inside the metering pond.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-200 text-xs text-slate-700 font-semibold bg-white p-3 rounded-xl">
                  <strong>Key Takeaway:</strong> Adhesive cannot chemically bond or adhere to virgin PTFE, making cleanup instantaneous.
                </div>
              </div>

              {/* Principle 3 */}
              <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black uppercase tracking-wider text-blue-600 bg-blue-100/70 px-2.5 py-1 rounded-md">
                      Principle 03
                    </span>
                    <span className="text-xs text-slate-400 font-bold">Tribological Differential</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Hardness Mismatch for Zero Scoring
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    Hardness differential protects machine rolls. A hard chrome cylinder measures 65 to 70 HRC, while virgin Teflon measures 55 to 60 Shore D. Because the Teflon is significantly more ductile, any localized friction pressure causes the Teflon face to wear sacrificial micro-flats rather than galling or scoring the cylinder.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-200 text-xs text-slate-700 font-semibold bg-white p-3 rounded-xl">
                  <strong>Key Takeaway:</strong> ImageTech dams safeguard high-value chrome and rubber cylinders worth over $10,000 each.
                </div>
              </div>

              {/* Principle 4 */}
              <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black uppercase tracking-wider text-blue-600 bg-blue-100/70 px-2.5 py-1 rounded-md">
                      Principle 04
                    </span>
                    <span className="text-xs text-slate-400 font-bold">Compound Arc Geometry</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Dual-Radius Convergence Sealing
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    Solventless coating units rely on two cylinders meeting at a micro-gap (typically 20 to 50 microns). The Teflon dam is machined with a compound dual-arc radius that simultaneously conforms to the steel roller's curve and the rubber roll's curve, forming a tight sealing bridge right at the critical nip intersection.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-200 text-xs text-slate-700 font-semibold bg-white p-3 rounded-xl">
                  <strong>Key Takeaway:</strong> CNC tolerance of ±0.02 mm ensures perfect nip intersection fit without pinching rubber.
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: Why Teflon Dams Are Critical */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                Economic & Operational Impact
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                Why Precision Teflon Dams Are Critical in Modern Presses
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                In solventless lamination, a failed or ill-fitting side dam is the #1 cause of unscheduled press downtime, edge-curl web tears, and adhesive waste.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center flex flex-col items-center">
                <div className="text-3xl font-black text-blue-600 mb-2">15-20%</div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">Adhesive Waste Reduction</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Eliminates uncontrolled side leakage and drip pans, saving thousands of liters of expensive 2K polyurethane annually.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center flex flex-col items-center">
                <div className="text-3xl font-black text-emerald-600 mb-2">500+ m/min</div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">High-Speed Operation</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Ultra-low friction coefficient prevents thermal degradation and flutter at maximum line speeds.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center flex flex-col items-center">
                <div className="text-3xl font-black text-indigo-600 mb-2">$12,000+</div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">Roll Replacement Savings</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Prevents chrome cylinder gouging and rubber roll de-lamination caused by abrasive generic end seals.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center flex flex-col items-center">
                <div className="text-3xl font-black text-purple-600 mb-2">99.8%</div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">Web Edge Consistency</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Maintains uniform coating weight from edge to edge without dry margins or thick adhesive beads.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 3: Head-to-Head Comparison Table */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm overflow-hidden">
            <div className="mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                Performance Comparison
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                ImageTech Precision Teflon Dams vs. Generic / Felt End Seals
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                See why leading flexible packaging converters have eliminated felt seals, silicone blocks, and DIY end seals in favor of CNC-machined virgin PTFE.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 text-xs uppercase font-extrabold tracking-wider">
                    <th className="py-3.5 px-4">Performance Metric</th>
                    <th className="py-3.5 px-4 text-blue-600">ImageTech CNC Teflon Dams</th>
                    <th className="py-3.5 px-4 text-slate-500">Felt / Fabric End Seals</th>
                    <th className="py-3.5 px-4 text-slate-500">Generic UHMW / Nylon Blocks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                  <tr className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-900">Sealing Accuracy</td>
                    <td className="py-4 px-4 font-bold text-emerald-700">±0.02 mm CNC Radial Match</td>
                    <td className="py-4 px-4 text-slate-500">Poor (Felt fibers compress & leak)</td>
                    <td className="py-4 px-4 text-slate-500">Moderate (Rough sawing / hand shape)</td>
                  </tr>
                  <tr className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-900">Frictional Heating</td>
                    <td className="py-4 px-4 font-bold text-emerald-700">Extremely Low (Coeff 0.04)</td>
                    <td className="py-4 px-4 text-slate-500">High friction; glazes over with glue</td>
                    <td className="py-4 px-4 text-slate-500">High (Melts above 90°C)</td>
                  </tr>
                  <tr className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-900">Solvent Resistance</td>
                    <td className="py-4 px-4 font-bold text-emerald-700">100% Inert (Acetone, Ethyl Acetate)</td>
                    <td className="py-4 px-4 text-slate-500">Felt disintegrates in solvents</td>
                    <td className="py-4 px-4 text-slate-500">Swells and distorts in esters</td>
                  </tr>
                  <tr className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-900">Max Operating Speed</td>
                    <td className="py-4 px-4 font-bold text-emerald-700">550+ m/min Continuous</td>
                    <td className="py-4 px-4 text-slate-500">Limited to &lt;200 m/min</td>
                    <td className="py-4 px-4 text-slate-500">Limited to &lt;280 m/min</td>
                  </tr>
                  <tr className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-900">Chrome Roll Safety</td>
                    <td className="py-4 px-4 font-bold text-emerald-700">100% Safe (Softer than chrome)</td>
                    <td className="py-4 px-4 text-slate-500">Traps grit, scores roll ends</td>
                    <td className="py-4 px-4 text-slate-500">Galls against rotating steel</td>
                  </tr>
                  <tr className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-900">Typical Service Life</td>
                    <td className="py-4 px-4 font-bold text-emerald-700">6 to 12 Months</td>
                    <td className="py-4 px-4 text-slate-500">1 to 2 Weeks</td>
                    <td className="py-4 px-4 text-slate-500">1 to 2 Months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 3: Doctor Blade & Teflon Dam Hydrodynamic Synergy */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                Pressroom Tooling Synergy
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                Doctor Blade & Teflon Dam Hydrodynamic Synergy
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Flexible packaging converters rely on two critical components to control fluid dynamics across the press line: <strong>precision doctor blades</strong> during rotogravure/flexographic printing, and <strong>Teflon dams</strong> during solventless lamination. Here is how they operate in tandem to ensure flawless converting.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Card 1: Doctor Blade Action */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200">
                      Printing Station
                    </span>
                    <span className="text-xs text-slate-400 font-bold">Transverse Metering</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Doctor Blade Cylinder Wiping
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-4">
                    The precision doctor blade wipes excess solvent-based or water-based ink across the entire cylindrical surface at angles between 55° and 65°. It maintains a microscopic cell-filling ink film while preventing surface hazing, streaks, and cylinder wear.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 text-xs text-slate-700 font-semibold bg-white p-3 rounded-xl">
                  <strong>Key Role:</strong> Uniform transverse metering across web widths up to 1,500 mm.
                </div>
              </div>

              {/* Card 2: Teflon Dam Action */}
              <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-100/70 px-2.5 py-1 rounded-md border border-blue-200">
                      Lamination Station
                    </span>
                    <span className="text-xs text-blue-600 font-bold">Axial Edge Sealing</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Teflon Dam Nip Reservoir
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium mb-4">
                    While the doctor blade meters liquid along the cylinder face, the Teflon dam acts as a dynamic hydraulic retaining wall at both roll ends. It contains the liquid adhesive puddle in the nip gap without allowing a single drop to escape onto the machine frame or bearings.
                  </p>
                </div>
                <div className="pt-3 border-t border-blue-200 text-xs text-blue-900 font-semibold bg-white p-3 rounded-xl">
                  <strong>Key Role:</strong> 100% axial fluid containment under 1.5 to 2.0 bar clamping pressure.
                </div>
              </div>

              {/* Card 3: Combined Press Quality */}
              <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-md border border-emerald-200">
                      Combined Result
                    </span>
                    <span className="text-xs text-emerald-600 font-bold">Zero Defect Converting</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Total Quality Synchronization
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium mb-4">
                    If doctor blades chatter or wear unevenly, ink streaks ruin barrier optics. If Teflon dams wear or misalign, adhesive overflows onto film margins, causing roll telescoping and optical orange peel. ImageTech designs both tooling components to ensure harmonized press performance.
                  </p>
                </div>
                <div className="pt-3 border-t border-emerald-200 text-xs text-emerald-900 font-semibold bg-white p-3 rounded-xl">
                  <strong>Converting Advantage:</strong> Consistent 1.2 to 1.8 gsm adhesive coating weight from center to film edge.
                </div>
              </div>
            </div>

            {/* Practical takeaway box */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-base text-white">Looking for Precision Doctor Blades as well?</h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  ImageTech manufactures high-carbon Swedish steel doctor blades and custom Teflon dams for high-speed flexible packaging printers and laminators.
                </p>
              </div>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
                className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                Inquire for Doctor Blades & Dams →
              </button>
            </div>
          </section>

          {/* SECTION 4: Shear-Thinning Fluid Dynamics of 1K vs. 2K Adhesives */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                Adhesive Rheology & Fluid Mechanics
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                Shear-Thinning Fluid Dynamics of 1K & 2K Polyurethane Adhesives
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                In solventless lamination, the adhesive is 100% active solids without evaporating carrier solvents. Understanding how non-Newtonian polyurethane reacts under rotational shear explains why virgin Teflon is the only polymer suitable for side containment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                  <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
                    1-Component (1K) Moisture-Curing Polyurethane
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  1K systems react with ambient humidity and film surface moisture. Viscosity ranges from <strong>4,000 to 7,000 mPa.s at 25°C</strong>, but drops dramatically to <strong>800 to 1,200 mPa.s when heated to 40°C–45°C</strong> in the metering reservoir.
                </p>
                <div className="space-y-2 text-xs text-slate-700 bg-white p-4 rounded-xl border border-slate-200">
                  <div><strong>Meniscus Danger:</strong> High ambient humidity causes 1K isocyanates to form micro-crusts at dam boundaries.</div>
                  <div><strong>Teflon Solution:</strong> PTFE’s 18 mN/m surface energy prevents crosslinking chains from adhering, allowing skins to wipe off continuously into the flow stream.</div>
                </div>
              </div>

              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-indigo-600"></span>
                  <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
                    2-Component (2K) Isocyanate & Polyol Systems
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  2K systems are precisely blended at 100:30 to 100:60 ratios via an automatic dynamic mixing unit. Initial viscosity is low (<strong>900–1,500 mPa.s at 40°C</strong>), but increases exponentially as pot-life approaches 30–45 minutes.
                </p>
                <div className="space-y-2 text-xs text-slate-700 bg-white p-4 rounded-xl border border-slate-200">
                  <div><strong>Meniscus Danger:</strong> As the 2K pot-life expires, stagnant adhesive corners near stationary dams turn gelatinous, causing roll gouging.</div>
                  <div><strong>Teflon Solution:</strong> ImageTech dams feature hydrodynamic beveled inner entry angles that encourage continuous recirculating vortex flow, preventing dead spots.</div>
                </div>
              </div>
            </div>

            {/* Temperature vs Viscosity Operational Chart */}
            <div className="overflow-x-auto border border-slate-200 rounded-2xl">
              <table className="w-full text-left text-sm border-collapse min-w-[620px]">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 text-xs uppercase font-extrabold tracking-wider border-b border-slate-200">
                    <th className="py-3 px-4">Operating Temp (°C)</th>
                    <th className="py-3 px-4">Apparent Viscosity</th>
                    <th className="py-3 px-4">Shear Rate at 450 m/min</th>
                    <th className="py-3 px-4">Dam Containment Requirement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700 font-medium">
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">25°C (Cold Start)</td>
                    <td className="py-3 px-4 text-amber-700 font-semibold">5,500 - 7,000 mPa.s</td>
                    <td className="py-3 px-4">Low (Thick paste)</td>
                    <td className="py-3 px-4">High torque resistance; requires low friction to prevent motor stall</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">35°C (Warm-Up)</td>
                    <td className="py-3 px-4 text-blue-700 font-semibold">2,200 - 3,500 mPa.s</td>
                    <td className="py-3 px-4">Moderate transition</td>
                    <td className="py-3 px-4">Adhesive begins spreading uniformly across roll face</td>
                  </tr>
                  <tr className="bg-blue-50/40">
                    <td className="py-3 px-4 font-bold text-emerald-800">40°C - 45°C (Optimal Run)</td>
                    <td className="py-3 px-4 text-emerald-700 font-bold">900 - 1,400 mPa.s</td>
                    <td className="py-3 px-4 font-bold">High (35,000 - 50,000 s⁻¹)</td>
                    <td className="py-3 px-4 font-bold text-emerald-900">Requires ±0.02 mm CNC radial match to prevent low-viscosity edge creeping</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900">50°C+ (Overheated Nip)</td>
                    <td className="py-3 px-4 text-red-700 font-semibold">&lt;700 mPa.s</td>
                    <td className="py-3 px-4">Very High (Misting risk)</td>
                    <td className="py-3 px-4">Adhesive dripping and edge splashing unless dams possess perfect thermal stability</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 5: Roller Metallurgy & Sleeve Preservation */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                Roller Protection & Tribology
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                Roller Metallurgy & Transfer Sleeve Preservation
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                A single pair of solventless lamination cylinders costs over <strong>$15,000 to replace</strong>. ImageTech Teflon dams are calibrated to act as a self-sacrificing polymer barrier that protects expensive chrome rolls and rubber transfer sleeves from wear.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase">Hard Chrome Cylinder</span>
                  <span className="text-xs font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">950 HV</span>
                </div>
                <h3 className="font-extrabold text-base text-slate-900 mb-2">Chrome Metering Roll</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Ground to mirror finish (Ra &lt; 0.1 μm). Virgin PTFE’s low Shore D hardness (55–60) guarantees that the Teflon will wear microscopically over 12 months rather than cutting into the chrome plating.
                </p>
                <div className="text-xs font-bold text-emerald-700">✓ 0.00 mm chrome scoring guarantee</div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase">Rubber Applicator Sleeve</span>
                  <span className="text-xs font-black text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">75 Shore A</span>
                </div>
                <h3 className="font-extrabold text-base text-slate-900 mb-2">EPDM / NBR Sleeve</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Flexible elastomer transfer sleeve. Rigid plastics (like UHMWPE or Delrin) pinch and cut the rubber edge during nip pressure. Teflon’s compliant compressibility cushions roll runout.
                </p>
                <div className="text-xs font-bold text-emerald-700">✓ Prevents sleeve edge peeling</div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase">ImageTech Teflon Dam</span>
                  <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">58 Shore D</span>
                </div>
                <h3 className="font-extrabold text-base text-slate-900 mb-2">100% Virgin PTFE Seal</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Manufactured from high-density, void-free virgin fluoropolymer billet. Self-lubricating transfer film deposits sub-micron PTFE onto roll micro-pores, reducing long-term friction to 0.04.
                </p>
                <div className="text-xs font-bold text-emerald-700">✓ Self-healing lubricating barrier</div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl text-xs sm:text-sm text-amber-900 leading-relaxed">
              <strong>Pressroom Warning:</strong> Never use recycled or glass-filled PTFE for solventless lamination side dams. Glass fibers protruding from the contact face act like micro-files, cutting permanent grooves into chrome cylinders within 24 hours of operation. Always demand certified 100% virgin PTFE from ImageTech.
            </div>
          </section>

          {/* SECTION 6: Material Comparison Table */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm overflow-hidden">
            <div className="mb-8 max-w-3xl">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                Material Science Benchmarks
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                Teflon (PTFE) vs. Alternative Dam Materials
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Why press engineers refuse to run felt or UHMWPE blocks on modern high-speed solventless coating heads.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 text-xs uppercase font-extrabold tracking-wider">
                    <th className="py-3.5 px-4">Performance Metric</th>
                    <th className="py-3.5 px-4 text-blue-700 font-black">ImageTech Virgin PTFE</th>
                    <th className="py-3.5 px-4">Compressed Wool Felt</th>
                    <th className="py-3.5 px-4">UHMWPE / POM (Delrin)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                  <tr className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-900">Dynamic Friction Coeff.</td>
                    <td className="py-4 px-4 font-bold text-emerald-700">0.04 - 0.08 (Ultra-Slick)</td>
                    <td className="py-4 px-4 text-slate-500">0.25 - 0.40 (High Drag)</td>
                    <td className="py-4 px-4 text-slate-500">0.15 - 0.22 (Moderate)</td>
                  </tr>
                  <tr className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-900">Sealing Accuracy</td>
                    <td className="py-4 px-4 font-bold text-emerald-700">±0.02 mm CNC Radial Match</td>
                    <td className="py-4 px-4 text-slate-500">Poor (Felt fibers compress & leak)</td>
                    <td className="py-4 px-4 text-slate-500">Moderate (Rough sawing / hand shape)</td>
                  </tr>
                  <tr className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-900">Frictional Heating</td>
                    <td className="py-4 px-4 font-bold text-emerald-700">Extremely Low (Coeff 0.04)</td>
                    <td className="py-4 px-4 text-slate-500">High friction; glazes over with glue</td>
                    <td className="py-4 px-4 text-slate-500">High (Melts above 90°C)</td>
                  </tr>
                  <tr className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-900">Solvent Resistance</td>
                    <td className="py-4 px-4 font-bold text-emerald-700">100% Inert (Acetone, Ethyl Acetate)</td>
                    <td className="py-4 px-4 text-slate-500">Felt disintegrates in solvents</td>
                    <td className="py-4 px-4 text-slate-500">Swells and distorts in esters</td>
                  </tr>
                  <tr className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-900">Max Operating Speed</td>
                    <td className="py-4 px-4 font-bold text-emerald-700">550+ m/min Continuous</td>
                    <td className="py-4 px-4 text-slate-500">Limited to &lt;200 m/min</td>
                    <td className="py-4 px-4 text-slate-500">Limited to &lt;280 m/min</td>
                  </tr>
                  <tr className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-900">Chrome Roll Safety</td>
                    <td className="py-4 px-4 font-bold text-emerald-700">100% Safe (Softer than chrome)</td>
                    <td className="py-4 px-4 text-slate-500">Traps grit, scores roll ends</td>
                    <td className="py-4 px-4 text-slate-500">Galls against rotating steel</td>
                  </tr>
                  <tr className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-900">Typical Service Life</td>
                    <td className="py-4 px-4 font-bold text-emerald-700">6 to 12 Months</td>
                    <td className="py-4 px-4 text-slate-500">1 to 2 Weeks</td>
                    <td className="py-4 px-4 text-slate-500">1 to 2 Months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Engineering Upgrade Banner */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-widest uppercase text-blue-200">
                Engineered for High-Speed Excellence
              </span>
              <h2 className="text-2xl sm:text-3xl font-black mt-2 leading-tight">
                Upgrade to Zero-Scoring ImageTech Teflon Dams
              </h2>
              <p className="text-blue-100 text-sm sm:text-base mt-3 leading-relaxed">
                Stop gambling with DIY seals and ruined chrome cylinders. Discover how precision-machined PTFE dams pay for themselves in less than 30 days of solventless production.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
                className="bg-white hover:bg-slate-100 text-blue-700 font-bold text-sm px-6 py-3.5 rounded-full transition-colors text-center shadow-md cursor-pointer"
              >
                Request Dam Quote →
              </button>
              <Link
                to="/press-applications"
                className="bg-blue-800/80 hover:bg-blue-800 text-white font-bold text-sm px-6 py-3.5 rounded-full transition-colors text-center border border-blue-400/30"
              >
                Applications & Sectors
              </Link>
            </div>
          </section>
        </div>

        {/* SECTION 4: FAQs - Standard Full-Width UI matching all pages */}
        <FAQSection
          title="Teflon Dam Physics & Working Principle FAQs"
          subtitle="Frequently Asked Questions"
          description="Find answers to common questions about fluid hydrodynamics, surface tension, and low-friction polymer mechanics."
          faqs={faqs}
          hideSchema={true}
        />

        {/* Universal Call to Action */}
        <HomeCTA />
      </main>
    </>
  );
}
