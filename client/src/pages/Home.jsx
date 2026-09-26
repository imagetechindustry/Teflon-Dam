import HomeHero from "../components/home/HomeHero";
import HomeProducts from "../components/home/HomeProducts";
import HomeTechnicalGuides from "../components/home/HomeTechnicalGuides";
import HomeAnatomy from "../components/home/HomeAnatomy";
import HomeMachineMatrix from "../components/home/HomeMachineMatrix";
import HomeConvertingIntegration from "../components/home/HomeConvertingIntegration";
import HomeIndustries from "../components/home/HomeIndustries";
import HomeAbout from "../components/home/HomeAbout";
import HomeCertifications from "../components/home/HomeCertifications";
import HomeWhyChoose from "../components/home/HomeWhyChoose";
import HomeFAQ from "../components/home/HomeFAQ";
import HomeCTA from "../components/home/HomeCTA";
import SEO from "../components/common/SEO";

import {
  standardShippingDetails,
  standardMerchantReturnPolicy,
  standardAggregateRating,
  standardSeller,
} from "../data/schemaDefaults";

const Home = () => {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ImageTech Industries - Teflon Dam Manufacturer & Exporter",
    "alternateName": ["ImageTech Industries", "ImageTech Teflon Dam"],
    "url": "https://www.teflondam.com/",
    "logo": "https://www.teflondam.com/logo.png",
    "description": "Leading manufacturer and exporter of precision PTFE Teflon dams, adhesive stoppers, and solventless lamination accessories in India.",
    "knowsAbout": [
      "Teflon Dam",
      "Teflon Dam Manufacturer & Exporter",
      "PTFE Dam",
      "Adhesive Teflon Dam",
      "Teflon Dam Stopper",
      "Solventless Lamination Teflon Dam",
      "Flexible Packaging Machinery"
    ],
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
    "name": "Precision PTFE Teflon Dam & Adhesive Stopper",
    "image": "https://www.teflondam.com/logo.png",
    "description": "Industrial grade machine-specific PTFE Teflon Dam and adhesive stopper designed for Nordmeccanica, Bobst, Uteco, and Comexi solventless lamination machines.",
    "category": "Teflon Dam Manufacturer & Exporter",
    "sku": "TDAM-UNIVERSAL",
    "mpn": "TDAM-UNIVERSAL",
    "brand": {
      "@type": "Brand",
      "name": "ImageTech Industries"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.teflondam.com/",
      "priceCurrency": "INR",
      "price": "2400",
      "validFrom": "2025-01-01",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": standardSeller,
      "shippingDetails": standardShippingDetails,
      "hasMerchantReturnPolicy": standardMerchantReturnPolicy
    },
    "aggregateRating": standardAggregateRating
  };

  return (
    <>
      <SEO
        title="Teflon Dam Manufacturer & Exporter in India | Teflon Dam for Printing Machines, Adhesive Teflon Dam - ImageTech Industries"
        description="India's leading Teflon Dam manufacturer & exporter. High-precision PTFE Teflon dams, adhesive teflon Dam, Teflon Dam Stopper & side seals for Nordmeccanica, Bobst, Uteco & Comexi solventless lamination machines. Buy at best factory price."
        keywords={[
          'Teflon Dam',
          'Teflon Dam Manufacturer & Exporter',
          'Teflon Dam Manufacturer in India',
          'PTFE Dam',
          'Adhesive Teflon Dam',
          'Teflon Dam Stopper',
          'Solventless Lamination Teflon Dam',
          'PTFE Adhesive Barrier',
          'Teflon Dam for Nordmeccanica',
          'Teflon Dam for Bobst',
          'Teflon Dam for Uteco',
          'Teflon Dam for Comexi',
          'Teflon Dam Price',
          'ImageTech Industries'
        ]}
        schema={[orgSchema, productSchema]}
      />
      <main className="flex flex-col">
        <HomeHero />
        <HomeProducts />
        <HomeAbout />
        <HomeIndustries />
        <HomeCertifications />
        <HomeWhyChoose />
        <HomeTechnicalGuides />
        <HomeAnatomy />
        <HomeMachineMatrix />
        <HomeConvertingIntegration />
        <HomeFAQ />
        <HomeCTA />
      </main>
    </>
  );
};

export default Home;
