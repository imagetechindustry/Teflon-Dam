import React from "react";
import FAQSection from "../common/FAQSection";

const aboutFaqData = [
  {
    question: "When was ImageTech Industries established?",
    answer: "ImageTech Industries was established in 1992. With over three decades of experience, we have grown to become a trusted global supplier of machine-specific Teflon Dams and industrial lamination products.",
  },
  {
    question: "Where is your manufacturing facility located?",
    answer:
    "Our state-of-the-art manufacturing facility is headquartered in Delhi, India. We operate from this central location to serve both our robust domestic market and our international clients.",
  },
  {
    question: "What industries do you primarily serve?",
    answer:
    "We primarily serve the flexible packaging and converting industries. Our premium Teflon Dams are used extensively in high-speed solventless lamination applications.",
  },
  {
    question: "Are you an ISO certified company?",
    answer:
    "Yes, ImageTech Industries is proudly ISO 9001:2015 certified. This certification reflects our commitment to maintaining strict quality management systems and delivering consistent excellence.",
  },
  {
    question: "What is your commitment to sustainability?",
    answer:
    "We focus on sustainable growth by optimizing our manufacturing processes to reduce waste, sourcing eco-friendly materials where possible, and creating durable products that minimize replacement frequency.",
  },
  {
    question: "How many countries do you export to?",
    answer:
    "We have a strong global footprint and currently export our products to over 25 countries worldwide, ensuring our high-quality solutions reach customers globally.",
  },
  {
    question: "What makes your manufacturing process unique?",
    answer: "Our manufacturing process combines advanced CNC machining with strict, multi-stage quality inspections. This ensures every flawless Teflon Dam we supply has perfect dimensional accuracy, and reliable performance required for flawless lamination operations.",
  },
  {
    question: "Do you offer custom product development?",
    answer:
    "Yes, our engineering team works closely with clients to develop tailored solutions, specialized flash profiles, and custom features to meet unique machinery and inspection requirements.",
  },
  {
    question: "What is your approach to customer service?",
    answer:
    "Customer focus is one of our core values. We believe in building long-term partnerships by providing rapid technical support, reliable on-time delivery of our Teflon Dams, and consultative advice to help optimize your solventless lamination process.",
  },
  {
    question: "Can I schedule a visit to your facility?",
    answer:
    "We welcome prospective partners and clients to visit our facility in Delhi. Please contact our sales team to arrange a guided tour of our manufacturing processes and quality control labs.",
  },
];

import { SchemaInjector } from "../common/SEO";

const AboutFAQ = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": aboutFaqData.map((faq) => ({
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
        title="Common Questions About Our Company"
        subtitle="About Us FAQ"
        description="Learn more about ImageTech Industries, our history, manufacturing capabilities, and global presence."
        faqs={aboutFaqData}
      />
    </>
  );
};

export default AboutFAQ;
