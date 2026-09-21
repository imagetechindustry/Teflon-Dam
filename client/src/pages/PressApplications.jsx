import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import TechnicalGuidesNav from "../components/common/TechnicalGuidesNav";
import FAQSection from "../components/common/FAQSection";
import HomeCTA from "../components/home/HomeCTA";

export default function PressApplications() {
  const sectors = [
    {
      id: "food-packaging",
      name: "Flexible Food Packaging",
      badge: "High Volume / 450+ m/min",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      description: "From potato chip pouches and biscuit wraps to vacuum coffee bags and retort pouches, flexible food packaging represents the largest volume of solventless lamination worldwide.",
      challenges: "High line speeds (350 to 500 m/min) demand low-friction virgin PTFE dams that do not heat up or deform under continuous multi-shift production.",
      substrates: "BOPP / MET-BOPP, PET / PE, Matte BOPP / CPP, Nylon / PE.",
      adhesives: "2-Component Polyurethane (Aliphatic & Aromatic Solventless).",
      damSpec: "ImageTech Virgin Food-Grade PTFE (55-60 Shore D, FDA/EU compliant material).",
    },
    {
      id: "pharma-medical",
      name: "Pharmaceutical & Medical Packaging",
      badge: "Zero Migration / ISO Cleanroom",
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      description: "Blister lidding foil, sachet laminates for powdered drugs, transdermal patch backing, and surgical glove pouches requiring sterile, zero-migration barrier integrity.",
      challenges: "Strict regulatory tolerances: no adhesive particulate shedding or chemical leaching. Any edge squeeze-out can contaminate cleanroom chill drums.",
      substrates: "Alu Foil (20-40 micron) / PET, Paper / PE / Alu Foil / Surlin.",
      adhesives: "Zero-migrating Aliphatic Solventless Adhesives.",
      damSpec: "High-Purity Compression-Molded Virgin PTFE with Micro-Finished Contact Faces.",
    },
    {
      id: "industrial-sacks",
      name: "Industrial & Chemical Packaging",
      badge: "Heavy Gauge / High Tension",
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      description: "Heavy-duty shipping sacks for chemical polymers, fertilizers, cement premixes, and pet foods requiring puncture-resistant multi-layer structures.",
      challenges: "Wide web widths (1300 to 1600 mm) running heavy 80-120 micron LDPE webs with higher web tension and robust adhesive laydown.",
      substrates: "Heavy-Duty Co-ex PE / Woven Polypropylene (Woven PP) / PET.",
      adhesives: "High-viscosity, fast-curing polyurethane solventless adhesives.",
      damSpec: "15% Glass-Filled PTFE for elevated compressive rigidity against wide roll flexure.",
    },
    {
      id: "labels-stickers",
      name: "Label, Tape & Sticker Converting",
      badge: "Precision Coating / Micro-Gaps",
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
      description: "Self-adhesive labels, wet glue labels, shrink sleeves, and specialty adhesive laminations using silicone release liners and face-stocks.",
      challenges: "Micro-tolerance coating weights (1.2 to 1.8 g/m²) require ultra-precise side containment without edge bead thickening that causes roll telescoping.",
      substrates: "Glassine Paper / PET Film, Cast Film / Siliconized Liners.",
      adhesives: "UV-curable acrylics and solventless laminating adhesives.",
      damSpec: "Carbon-Filled Antistatic Teflon Dams to prevent static discharge sparks.",
    },
    {
      id: "solar-electronics",
      name: "Solar PV & Electronics Barrier Films",
      badge: "Extreme Durability / High Dielectric",
      icon: (
        <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      description: "Photovoltaic backsheet laminations (PVDF/PET/EVA), lithium battery pouch laminates, and electrostatic shielding barrier membranes.",
      challenges: "High lamination nip temperatures (50°C to 75°C on roll surface) and aggressive silane-modified adhesives.",
      substrates: "Fluoropolymer films (PVDF, PVF/Tedlar), PET, High-Barrier Aluminium Foil.",
      adhesives: "Modified Silane Solventless Adhesives / 2K Epoxy-Polyurethane.",
      damSpec: "High-Temperature Stabilized Filled PTFE with Annealed Internal Stress.",
    },
    {
      id: "liquid-carton",
      name: "Liquid Packaging Board & Aseptic Cartons",
      badge: "Paperboard / Foil Barrier",
      icon: (
        <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      description: "Multi-layer aseptic liquid food cartons for milk, juices, and liquid food packaging combining paperboard, aluminum barrier foil, and polymer extrusion layers.",
      challenges: "Heavy substrate calipers and continuous non-stop roll splicing require 100% dependable edge containment without line stops.",
      substrates: "Bleached Paperboard (200-350 gsm) / Aluminum Foil / LDPE.",
      adhesives: "High-bond 2-Component Polyurethane solventless adhesives.",
      damSpec: "Reinforced Virgin PTFE with Dual-Chamfer Edge Deflectors.",
    },
  ];

  const substrates = [
    {
      material: "BOPP (Biaxially Oriented Polypropylene)",
      role: "Outer print web or inner heat-seal layer (12 - 40 µm)",
      surfaceEnergy: "38 - 42 dyne/cm (Corona Treated)",
      behavior: "Low surface friction; easily contaminated if adhesive beads seep beyond the web trim margin.",
    },
    {
      material: "BOPET (Biaxially Oriented Polyester)",
      role: "High-clarity print carrier & thermal barrier (10 - 23 µm)",
      surfaceEnergy: "50 - 54 dyne/cm",
      behavior: "High tensile modulus; requires uniform edge adhesive laydown to prevent edge-curl during slitting.",
    },
    {
      material: "Aluminium Foil (Soft Temper 1145/8079)",
      role: "Absolute oxygen, light & moisture barrier (6.35 - 30 µm)",
      surfaceEnergy: "High (Natural metal oxide surface)",
      behavior: "Zero elasticity; any adhesive bead squeeze-out causes wrinkle folds and foil pinholes during nip nip wrap.",
    },
    {
      material: "Cast Polypropylene (CPP) & PE Sealant Webs",
      role: "Low-temperature inner heat seal layer (20 - 150 µm)",
      surfaceEnergy: "38 - 42 dyne/cm",
      behavior: "High elongation; sensitive to edge adhesive drag that causes web stretching and track wander.",
    },
    {
      material: "BOPA (Biaxially Oriented Polyamide / Nylon)",
      role: "High puncture & mechanical flex-crack resistance (12 - 25 µm)",
      surfaceEnergy: "52 - 56 dyne/cm",
      behavior: "Hygroscopic moisture sensitivity; requires airtight nip containment to prevent pre-mature adhesive curing on roll edges.",
    },
  ];

  const faqs = [
    {
      question: "Which solventless lamination machine brands do ImageTech Teflon Dams support?",
      answer: "We manufacture machine-specific Teflon Dams for all major global manufacturers, including Nordmeccanica (Super Simplex, Super Simplex SL, Super Combi 3000/4000, Duplex), Bobst (CL 750, CL 850, SL 1000, Nova SL), Uteco (Rainbow, Horizon, Mistral), Comexi (Nexus Dual, SL2), Expert, and custom converting coating lines.",
    },
    {
      question: "Are ImageTech Teflon Dams food-contact approved (FDA / EU)?",
      answer: "Yes. Our Virgin PTFE dams are fabricated exclusively from certified virgin fluoropolymer resins compliant with FDA 21 CFR 177.1550 and EU Regulation 10/2011 for direct food contact applications. They are chemically inert, tasteless, odorless, and will not migrate into food packaging laminates.",
    },
    {
      question: "How do Teflon Dams integrate with rotogravure and doctor blade systems?",
      answer: "In flexible packaging plants operating both rotogravure printing/coating presses and solventless laminators, Teflon containment dams are used in coating heads alongside precision doctor blades (which meter ink and lacquer). ImageTech Industries manufactures both doctor blades and Teflon dams, giving pressrooms a single trusted engineering source for fluid metering accessories.",
    },
    {
      question: "Can you fabricate custom-sized Teflon Dams for non-standard roll widths?",
      answer: "Yes. We custom CNC-machine Teflon Dams for any roller diameter, width, or mounting configuration. Simply provide your roll diameters, nip gap, and bracket dimensions, or ship a worn sample to our Delhi manufacturing center for precise digitizing.",
    },
  ];

  const breadcrumbs = [
    { name: "Home", item: "https://www.teflondam.com/" },
    { name: "Technical Guides", item: "https://www.teflondam.com/selection-guide" },
    { name: "Industrial Applications", item: "https://www.teflondam.com/press-applications" },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Industrial Applications & Sector Guide for Teflon Dams in Converting",
    description: "Guide to Teflon Dam applications across flexible food packaging, pharma blister foils, industrial sacks, label converting, and solar barrier films with machine compatibility details.",
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
    mainEntityOfPage: "https://www.teflondam.com/press-applications",
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
        title="Teflon Dam Industrial Applications & Sectors | Flexible Packaging"
        description="Explore how machine-specific Teflon Dams empower flexible food packaging, pharma blister foils, industrial sacks, and label converting machines. View substrate behaviors and machine matrix."
        keywords={[
          "teflon dam applications",
          "teflon dam manufacturer & exporter",
          "solventless lamination food packaging",
          "teflon dam for pharmaceutical blister packaging",
          "nordmeccanica super simplex applications",
          "teflon dam converting sectors",
          "ptfe dam for barrier films",
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
              <span className="text-blue-600 font-bold">Industrial Applications</span>
            </nav>
          </div>
        </div>

        {/* Sticky Sub-Nav */}
        <TechnicalGuidesNav />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-10 sm:space-y-12">
          {/* Centered Page Heading Section */}
          <div className="border-b border-slate-200/80 pb-6 sm:pb-8 text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-2">
              Teflon Dam <span className="text-blue-600">Industrial Applications</span> & Sector Guide
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
              Discover how machine-specific PTFE Teflon Dams optimize solventless lamination across 6 primary converting sectors—from high-speed flexible food packaging to sterile pharmaceutical blister foils and solar barrier webs.
            </p>
          </div>
          {/* SECTION 1: 6 Industry Sector Breakdowns */}
          <section className="space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                Industry Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                Engineered Performance Across 6 Industrial Sectors
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Each converting sector places unique demands on chemical compatibility, speed, hygiene, and web tensions. Explore tailored dam specifications below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectors.map((s) => (
                <div
                  key={s.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                        {s.icon}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                        {s.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-slate-900 mb-2">{s.name}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{s.description}</p>

                    <div className="space-y-2.5 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200/80 mb-4">
                      <div>
                        <strong className="text-slate-900 font-bold block">Press Challenge:</strong>
                        <span className="text-slate-600">{s.challenges}</span>
                      </div>
                      <div>
                        <strong className="text-slate-900 font-bold block">Common Substrates:</strong>
                        <span className="text-slate-600">{s.substrates}</span>
                      </div>
                      <div>
                        <strong className="text-slate-900 font-bold block">Adhesive System:</strong>
                        <span className="text-slate-600">{s.adhesives}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-xs">
                    <strong className="text-blue-900 font-bold block mb-0.5">Recommended Dam:</strong>
                    <span className="text-slate-700 font-semibold">{s.damSpec}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 2: Substrate & Adhesive Behavior Guide */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm overflow-hidden">
            <div className="mb-8 max-w-3xl">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                Substrate Dynamics
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                Substrate Behavior & Edge Meniscus Interaction
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                How different packaging films react at the coating nip edges and why precision Teflon dam containment is vital to prevent edge curling and tension flutter.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 text-xs uppercase font-extrabold tracking-wider">
                    <th className="py-3.5 px-4">Substrate Material</th>
                    <th className="py-3.5 px-4">Press Role & Caliper</th>
                    <th className="py-3.5 px-4">Surface Tension</th>
                    <th className="py-3.5 px-4">Edge Behavior & Dam Requirement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                  {substrates.map((sub, i) => (
                    <tr key={i} className="hover:bg-blue-50/40 transition-colors">
                      <td className="py-4 px-4 font-bold text-slate-900 whitespace-nowrap">
                        {sub.material}
                      </td>
                      <td className="py-4 px-4 text-xs text-slate-600">{sub.role}</td>
                      <td className="py-4 px-4 text-xs font-bold text-blue-600">{sub.surfaceEnergy}</td>
                      <td className="py-4 px-4 text-xs text-slate-700">{sub.behavior}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 3: Cross-Machine Compatibility & Integration */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                Machine OEM Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                Machine-Specific Fit vs. Universal Generic Risks
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Why global converters avoid generic "one-size-fits-all" end seals and exclusively specify machine-matched CNC Teflon dams.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 font-black flex items-center justify-center mb-4">
                  ✕
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  The Danger of Generic "One-Size" End Seals
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium mb-4">
                  Generic end seals are usually hand-sawn from rough UHMW or soft felt blocks. Because roll outer diameters differ between Nordmeccanica (e.g. Ø150mm), Bobst (Ø180mm), and Comexi (Ø165mm), a generic block creates a micro-wedge gap.
                </p>
                <ul className="text-xs text-slate-700 space-y-2 font-semibold">
                  <li className="text-red-700">• Adhesive creeps into the gap, crosslinking and acting like sandpaper on chrome cylinders.</li>
                  <li className="text-red-700">• Uneven clamping force leads to rubber roll end-peeling and core de-bonding.</li>
                  <li className="text-red-700">• Operators must stop the line every 2 hours to manually scrape dried glue.</li>
                </ul>
              </div>

              <div className="bg-blue-50/60 p-6 sm:p-8 rounded-2xl border border-blue-200">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center mb-4 shadow-sm">
                  ✓
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  The ImageTech Machine-Specific Advantage
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed font-medium mb-4">
                  Every ImageTech Teflon Dam is CNC-profiled to the exact digital CAD drawing of your machine's coating head. The radius curve mates 100% flush against both cylinders simultaneously.
                </p>
                <ul className="text-xs text-blue-950 space-y-2 font-semibold">
                  <li className="text-emerald-700">• Guaranteed zero-leak hydrodynamic seal right at the nip convergence.</li>
                  <li className="text-emerald-700">• Drop-in replacement with exact mounting slot widths and bolt holes.</li>
                  <li className="text-emerald-700">• Zero chrome roll wear and smooth operation at speeds up to 550 m/min.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 4: End-to-End Converting Workflow: Printing to Lamination */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                End-to-End Converting Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                From Printing to Lamination: The Complete Converting Workflow
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Producing defect-free flexible packaging pouches requires high precision across both printing and laminating operations. ImageTech supplies both <strong>hardened Swedish steel doctor blades</strong> and <strong>precision CNC Teflon dams</strong> to keep converters running at top speeds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Step 1 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200">
                    Step 01: Printing
                  </span>
                  <h3 className="font-extrabold text-base text-slate-900 mt-3 mb-2">
                    Doctor Blade Wiping
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    High-speed rotogravure or CI flexo printing on BOPP, PET, or Paper substrates. ImageTech lamella doctor blades ensure streak-free ink metering at 350 to 500 m/min.
                  </p>
                </div>
                <div className="text-xs text-indigo-900 font-bold bg-white p-3 rounded-xl border border-slate-200">
                  Tooling: ImageTech Doctor Blades
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-200 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded-md border border-blue-200">
                    Step 02: Lamination
                  </span>
                  <h3 className="font-extrabold text-base text-slate-900 mt-3 mb-2">
                    Teflon Dam Nip Reservoir
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed mb-4">
                    Solventless adhesive coating between chrome and rubber rolls. ImageTech PTFE dams maintain a zero-leak hydraulic pool without roll scoring or edge oozing.
                  </p>
                </div>
                <div className="text-xs text-blue-900 font-bold bg-white p-3 rounded-xl border border-blue-100">
                  Tooling: ImageTech Teflon Dams
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-600 bg-slate-200 px-2 py-0.5 rounded-md">
                    Step 03: Curing
                  </span>
                  <h3 className="font-extrabold text-base text-slate-900 mt-3 mb-2">
                    Thermal Crosslinking
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Laminated reels rest in temperature-controlled curing hot rooms (35°C–45°C) for 24 to 48 hours for complete chemical bond crosslinking and food safety compliance.
                  </p>
                </div>
                <div className="text-xs text-slate-700 font-bold bg-white p-3 rounded-xl border border-slate-200">
                  Quality: Zero Solvent Retention
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-200 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md border border-emerald-200">
                    Step 04: Slitting
                  </span>
                  <h3 className="font-extrabold text-base text-slate-900 mt-3 mb-2">
                    High-Speed Slitting
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed mb-4">
                    Slitting reels cleanly at 600+ m/min. Because the Teflon dam prevented adhesive edge weeping, reels unwind effortlessly without sticky telescoping or edge tears.
                  </p>
                </div>
                <div className="text-xs text-emerald-900 font-bold bg-white p-3 rounded-xl border border-emerald-100">
                  Result: 100% Pouch Integrity
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5: Sustainable Mono-Material (MDO-PE, BOPE, All-PP) Lamination */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                Circular Packaging Engineering
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                Sustainable Mono-Material (MDO-PE & All-PP) Lamination
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                The global packaging industry is rapidly transitioning from non-recyclable multi-polymer films to <strong>100% recyclable mono-materials (MDO-PE / PE and All-PP)</strong>. These films are heat-sensitive and stretch easily under tension. Here is how Teflon dams protect them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-emerald-600"></span>
                  <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
                    Mono-Material Challenges on the Press
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Machine Direction Oriented Polyethylene (MDO-PE) and Biaxially Oriented Polypropylene (BOPP) possess low yield strengths. If adhesive overflows at roll edges, sticky adhesive builds up on idler rolls, causing <strong>edge drag, web stretching, wrinkles, and registration drift</strong>.
                </p>
                <div className="text-xs text-slate-700 bg-white p-4 rounded-xl border border-slate-200">
                  <strong>Converting Risk:</strong> A 0.2 mm edge overflow ruins tension control across 5,000 meters of recyclable film.
                </div>
              </div>

              <div className="border border-slate-200 rounded-2xl p-6 bg-blue-50/50 border-blue-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                  <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
                    The Teflon Dam Solution for Recyclables
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                  ImageTech CNC Teflon dams provide micro-sharp meniscus boundaries, holding adhesive exactly within the active web width. Virgin PTFE’s 0.04 coefficient of friction prevents edge friction heating that could distort heat-sensitive PE films.
                </p>
                <div className="text-xs text-blue-900 font-bold bg-white p-4 rounded-xl border border-blue-100">
                  <strong>Achieved Result:</strong> Flawless 1.3 to 1.5 gsm coating weight with 100% optical clarity and zero edge curl.
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6: High-Barrier Aluminum Foil & Metalized Film Handling */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                High-Barrier Protection SOP
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                High-Barrier Aluminum Foil & Metalized Film Handling
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Laminating paper-thin <strong>7μm to 9μm aluminum foil</strong> for pharmaceutical blisters, retort food pouches, and coffee bags requires zero-tolerance containment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <span className="text-xs font-black uppercase text-blue-600 block mb-1">Zero Elongation</span>
                <h3 className="font-extrabold text-base text-slate-900 mb-2">Eliminating Foil Pinholes</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Unlike plastic films, aluminum foil has virtually zero stretch elasticity. Any glue droplet that creeps outside the dam creates a thickness lump at the nip, immediately bursting the foil and causing micro-pinholes.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <span className="text-xs font-black uppercase text-blue-600 block mb-1">Vacuum Coatings</span>
                <h3 className="font-extrabold text-base text-slate-900 mb-2">Metalized PET / BOPP (AlOx/SiOx)</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Vacuum-deposited aluminum coatings are ultra-fragile. Excessive edge pressure or roll chatter flakes the metal layer. Teflon dams stabilize the fluid cushion, preventing hydraulic pressure spikes.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <span className="text-xs font-black uppercase text-blue-600 block mb-1">Precision Geometry</span>
                <h3 className="font-extrabold text-base text-slate-900 mb-2">Chamfered Edge Relieving</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  ImageTech manufactures foil-grade Teflon dams with micro-chamfered edge profiles. This relief angle ensures foil edges never snag against the stationary seal during high-speed tension surges.
                </p>
              </div>
            </div>
          </section>

          {/* Converting Sector CTA Banner */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-widest uppercase text-blue-200">
                Precision Pressroom Engineering
              </span>
              <h2 className="text-2xl sm:text-3xl font-black mt-2 leading-tight">
                Order High-Yield Teflon Dams for Your Converting Sector
              </h2>
              <p className="text-blue-100 text-sm sm:text-base mt-3 leading-relaxed">
                Whether you produce food snack pouches, medical barrier packaging, or industrial sacks, ImageTech supplies certified Teflon Dams tailored to your machine and adhesive specifications.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
                className="bg-white hover:bg-slate-100 text-blue-700 font-bold text-sm px-6 py-3.5 rounded-full transition-colors text-center shadow-md cursor-pointer"
              >
                Request Custom Dam Quote →
              </button>
              <Link
                to="/selection-guide"
                className="bg-blue-800/80 hover:bg-blue-800 text-white font-bold text-sm px-6 py-3.5 rounded-full transition-colors text-center border border-blue-400/30"
              >
                Sizing & Selection Guide
              </Link>
            </div>
          </section>
        </div>

        {/* SECTION 4: FAQs - Standard Full-Width UI matching all pages */}
        <FAQSection
          title="Industrial Applications & Substrate FAQs"
          subtitle="Frequently Asked Questions"
          description="Find answers to common questions about Teflon Dams across flexible packaging, pharma foils, industrial sacks, and machine OEM compatibility."
          faqs={faqs}
          hideSchema={true}
        />

        {/* Universal Call to Action */}
        <HomeCTA />
      </main>
    </>
  );
}
