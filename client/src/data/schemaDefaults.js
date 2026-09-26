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
