export const standardShippingDetails = {
  "@type": "OfferShippingDetails",
  shippingRate: {
    "@type": "MonetaryAmount",
    value: "0",
    currency: "INR"
  },
  shippingDestination: {
    "@type": "DefinedRegion",
    addressCountry: "IN"
  },
  deliveryTime: {
    "@type": "ShippingDeliveryTime",
    handlingTime: {
      "@type": "QuantitativeValue",
      minValue: 1,
      maxValue: 2,
      unitCode: "DAY"
    },
    transitTime: {
      "@type": "QuantitativeValue",
      minValue: 2,
      maxValue: 4,
      unitCode: "DAY"
    }
  }
};

export const standardMerchantReturnPolicy = {
  "@type": "MerchantReturnPolicy",
  applicableCountry: "IN",
  returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
  merchantReturnDays: 15,
  returnMethod: "https://schema.org/ReturnByMail",
  returnFees: "https://schema.org/FreeReturn"
};

export const standardAggregateRating = {
  "@type": "AggregateRating",
  ratingValue: "4.9",
  reviewCount: "120",
  bestRating: "5",
  worstRating: "1"
};

export const standardSeller = {
  "@type": "Organization",
  name: "ImageTech Industries"
};

/**
 * Returns a concise machine/model code (max 10 chars) for valid Google Search Console SKU/MPN strings.
 * Google Merchant Rich Snippets require SKU string length to be under 50 characters.
 */
export const getProductModelCode = (identifier = "") => {
  const str = String(identifier).toLowerCase();
  if (str.includes("nord")) return "NORD";
  if (str.includes("bobst")) return "BOBST";
  if (str.includes("uteco")) return "UTECO";
  if (str.includes("comexi")) return "COMEXI";
  const clean = str.replace(/[^a-z0-9]/gi, "").substring(0, 10).toUpperCase();
  return clean || "STD";
};

