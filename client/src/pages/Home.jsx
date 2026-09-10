import React from "react";
import HomeHero from "../components/home/HomeHero";
import HomeProducts from "../components/home/HomeProducts";
import HomeIndustries from "../components/home/HomeIndustries";
import HomeAbout from "../components/home/HomeAbout";
import HomeCertifications from "../components/home/HomeCertifications";
import HomeWhyChoose from "../components/home/HomeWhyChoose";
import HomeFAQ from "../components/home/HomeFAQ";
import HomeCTA from "../components/home/HomeCTA";
import SEO from "../components/common/SEO";

const Home = () => {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ImageTech Industries",
    "url": "https://teflondam.com/",
    "logo": "https://teflondam.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8448336036",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "en"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Delhi",
      "addressCountry": "IN"
    }
  };

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Teflon Dam for Nord Super Simplex & Super Combi",
    "image": "https://teflondam.com/TEFLON%20DAM/TEFLON%20DAM%20NORD%20SUPER%20SIMPLEX%20AND%20SUPER%20COMBI/TEFLON%20DAM%20NORD%20SUPER%20SIMPLEX%2C%20S.%20COMBI.png",
    "description": "Premium machine-specific Teflon Dam designed for Nord Super Simplex and Super Combi solventless lamination machines.",
    "brand": {
      "@type": "Brand",
      "name": "ImageTech Industries"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "120"
    }
  };

  return (
    <>
      <SEO 
        title="Teflon Dam for Nord Super Simplex & Super Combi | ImageTech Industries"
        description="Looking for a high-quality Teflon Dam for Nord Super Simplex and Super Combi? ImageTech Industries supplies machine-specific solventless lamination accessories."
        keywords={['teflon dam', 'teflon dam for nord super simplex', 'teflon dam for nord super combi', 'solventless lamination machine accessory', 'imagetech industries']}
        schema={[orgSchema, productSchema]}
      />
      <main className="flex flex-col">
        <HomeHero />
        <HomeProducts />
        <HomeIndustries />
        <HomeAbout />
        <HomeCertifications />
        <HomeWhyChoose />
        <HomeFAQ />
        <HomeCTA />
      </main>
    </>
  );
};

export default Home;
