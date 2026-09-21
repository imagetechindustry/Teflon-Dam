import React, { useEffect } from "react";
import AboutStory from "../components/about/AboutStory";
import AboutCapabilities from "../components/about/AboutCapabilities";
import AboutValues from "../components/about/AboutValues";
import AboutVisionMission from "../components/about/AboutVisionMission";
import AboutGlobalPresence from "../components/about/AboutGlobalPresence";
import HomeCertifications from "../components/home/HomeCertifications";
import AboutFAQ from "../components/about/AboutFAQ";
import HomeCTA from "../components/home/HomeCTA";
import SEO from "../components/common/SEO";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About ImageTech Industries",
    "description": "Learn about ImageTech Industries, a leading supplier of machine-specific Teflon Dams in India for solventless lamination machines.",
    "publisher": {
      "@type": "Organization",
      "name": "ImageTech Industries"
    }
  };

  return (
    <>
      <SEO 
        title="About ImageTech Industries | Premier Teflon Dam Manufacturer & Exporter"
        description="Discover ImageTech Industries, India's leading manufacturer & exporter of precision PTFE Teflon dams, adhesive stoppers, and solventless lamination press accessories."
        keywords={['about imagetech industries', 'teflon dam manufacturer & exporter', 'teflon dam manufacturer in india', 'ptfe dam manufacturer', 'solventless lamination accessories', 'nord super simplex teflon dam']}
        schema={aboutSchema}
      />
      <main>
        <AboutStory />
        <AboutCapabilities />
        <AboutValues />
        <AboutVisionMission />
        <HomeCertifications />
        <AboutGlobalPresence />
        <AboutFAQ />
        <HomeCTA />
      </main>
    </>
  );
};

export default AboutUs;
