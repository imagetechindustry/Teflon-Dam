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
    "url": "https://www.teflondam.com/",
    "logo": "https://www.teflondam.com/logo.png",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91 8448336036",
        "contactType": "sales",
        "email": "imagetechindustries@gmail.com",
        "areaServed": "IN",
        "availableLanguage": "en"
      }
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "RZ-I-13, 2nd Floor, Nanda Block, Mahavir Enclave",
        "addressLocality": "Delhi",
        "postalCode": "110045",
        "addressCountry": "IN"
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Teflon Dam for Nord Super Simplex & Super Combi",
    "image": "https://www.teflondam.com/TEFLON%20DAM/TEFLON%20DAM%20NORD%20SUPER%20SIMPLEX%20AND%20SUPER%20COMBI/TEFLON%20DAM%20NORD%20SUPER%20SIMPLEX%2C%20S.%20COMBI.png",
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
        title="Premium Teflon Dams for Solventless Lamination Machines"
        description="ImageTech Industries is India's leading manufacturer of high-quality, machine-specific Teflon Dams for solventless lamination machines like Nord, Bobst, Uteco, and Comexi."
        keywords={['Teflon Dam', 'Solventless Lamination Machine Accessory', 'Teflon Dam for Nord', 'Teflon Dam for Bobst', 'Teflon Dam for Uteco', 'Teflon Dam for Comexi', 'ImageTech Industries']}
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
