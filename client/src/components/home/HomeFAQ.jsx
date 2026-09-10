import React from "react";
import FAQSection from "../common/FAQSection";

const faqData = [
  { question: "What is a Teflon Dam?", answer: "A Teflon Dam is an important accessory used in solventless lamination machine setups, ensuring proper functionality and efficiency in flexible packaging operations." },
  { question: "Which machines is this Teflon Dam suitable for?", answer: "We provide machine-specific Teflon Dams designed for various top-tier machines including Nord Super Simplex, Nord Super Combi, Bobst, Uteco, and Comexi." },
  { question: "Are Teflon Dams the same for all machines?", answer: "No, Teflon Dams are not the same for every solventless lamination machine. Their design, material grade, and dimensions vary according to the specific machine configuration." },
  { question: "Can this Teflon Dam be used on any lamination machine?", answer: "No, it is strictly machine-specific. Using the correct model ensures a perfect fit, preventing operational issues during the lamination process." },
  { question: "Where is this Teflon Dam used?", answer: "It is used in solventless lamination equipment, specifically for flexible packaging, printing, and related industrial converting applications." },
  { question: "Is this Teflon Dam suitable for replacement?", answer: "Yes, it is designed for quick and easy replacement when required during regular maintenance or scheduled machine servicing." },
  { question: "Why is the machine model important when ordering a Teflon Dam?", answer: "The exact machine model must be confirmed to ensure absolute compatibility. The precise design guarantees a proper fit with your lamination setup, avoiding downtime." },
  { question: "How does a Teflon Dam improve lamination efficiency?", answer: "By providing a precise fit and highly reliable performance, a premium Teflon Dam reduces unexpected downtime, minimizes maintenance hurdles, and maintains continuous production." },
  { question: "Do you supply custom Teflon Dams?", answer: "Yes, we can supply customized Teflon Dams based on your specific lamination machine configurations. Please contact our technical support team for custom requirements." },
  { question: "How often should a Teflon Dam be replaced?", answer: "Replacement frequency depends heavily on your production volume, running speeds, and overall machine usage. We recommend regular inspection during your scheduled maintenance cycles to ensure optimal performance." }
];

import { SchemaInjector } from "../common/SEO";

const HomeFAQ = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SchemaInjector schema={faqSchema} />
      <FAQSection
        title="Everything You Need To Know About Teflon Dams"
        subtitle="Frequently Asked Questions"
        description="Find answers to the most common questions about our premium Teflon Dams for various solventless lamination machines."
        faqs={faqData}
      />
    </>
  );
};

export default HomeFAQ;
