// Central place for company facts and copy.
// Anything marked TODO must be confirmed by the business before launch.
// Do not add claims, numbers, or partnerships here that have not been verified.

export const company = {
  name: "Breakout USA",
  shortName: "Breakout USA",
  description:
    "Breakout USA is an e-commerce and brand partnership business helping established brands explore sales opportunities on leading online marketplaces.",
  contactEmail: "Info@breakoutusa.com",
  address: "Arlington Virginia, USA",
  phone: "1-888-719-5750",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Brand Partnerships", href: "/brand-partnerships" },
  { label: "Contact", href: "/contact" },
];
// store links
export const stores = [
  {
    name: "Amazon",
    logo: "/logos/amazon.png",
    url: "https://www.amazon.com", // TODO: replace with your Amazon store URL
  },
  {
    name: "eBay",
    logo: "/logos/ebay.png",
    url: "https://www.ebay.com", // TODO: replace with your eBay store URL
  },
  {
    name: "Walmart",
    logo: "/logos/walmart.png",
    url: "https://www.walmart.com", // TODO: replace with your Walmart store URL
  },
];

export const marketplaces = [
  {
    name: "Amazon",
    detail: "Online marketplace selling",
    logo: "/logos/amazon.svg",
  },
  {
    name: "Walmart Marketplace",
    detail: "Online marketplace selling",
    logo: "/logos/walmart.svg",
  },
  {
    name: "eBay",
    detail: "Online marketplace selling",
    logo: "/logos/ebay.svg",
  },
];

// Service categories are proposed and must be confirmed by the business.
export const services = [
  {
    title: "Marketplace Selling",
    summary:
      "Managing the day-to-day selling of approved products on major online marketplaces.",
    details: [
      "Marketplace storefront setup and management",
      "Selling on Amazon, Walmart Marketplace, and eBay",
      "Monitoring listing performance",
    ],
  },
  {
    title: "Brand Partnership & Sourcing",
    summary:
      "Working directly with brand owners, manufacturers, and authorized distributors to agree on what can be sold and how.",
    details: [
      "Product eligibility review",
      "Written authorization to sell approved products",
      "Clear commercial terms before work begins",
    ],
  },
  {
    title: "Marketplace Listing Management",
    summary:
      "Creating and maintaining accurate, compliant product listings across marketplace channels.",
    details: [
      "Listing creation and updates",
      "Titles, descriptions, and images aligned with marketplace rules",
      "Ongoing listing maintenance",
    ],
  },
  {
    title: "Catalog & Product Data",
    summary:
      "Keeping product information organized, consistent, and ready for marketplace use.",
    details: [
      "Product data collection and cleanup",
      "Consistent catalog structure",
      "Product attribute management",
    ],
  },
  {
    title: "Inventory & Order Coordination",
    summary:
      "Coordinating stock levels and order flow between the brand and the marketplace.",
    details: [
      "Inventory coordination with partners",
      "Order flow visibility",
      "Clear communication on stock updates",
    ],
  },
  {
    title: "Marketplace Expansion Strategy",
    summary:
      "Helping brands assess which marketplaces and categories fit their products.",
    details: [
      "Channel fit assessment",
      "Category and pricing review",
      "Phased expansion planning",
    ],
  },
];

export const partnershipBenefits = [
  {
    title: "Additional sales channels",
    text: "Reach customers on marketplaces where your products may not yet be sold.",
  },
  {
    title: "Professional communication",
    text: "A clear point of contact and structured updates throughout the partnership.",
  },
  {
    title: "Marketplace-focused growth",
    text: "Decisions guided by how each marketplace works, not generic assumptions.",
  },
  {
    title: "Long-term relationships",
    text: "We aim for partnerships built on trust and shared goals, not one-off transactions.",
  },
  {
    title: "A straightforward process",
    text: "A simple inquiry, a clear review, and honest next steps.",
  },
];

export const processSteps = [
  {
    title: "Submit your brand information",
    text: "Tell us about your brand, products, and current marketplace presence.",
  },
  {
    title: "Discuss eligibility and terms",
    text: "We talk through product eligibility and the commercial terms that could apply.",
  },
  {
    title: "Review requirements",
    text: "We review marketplace and distribution requirements together.",
  },
  {
    title: "Agree on next steps",
    text: "If we are a good fit for each other, we agree on the next steps in writing.",
  },
];

export const partnershipFaqs = [
  {
    question: "Who can apply to partner with Breakout USA?",
    answer:
      "Brand owners, manufacturers, and authorized distributors who have the right to approve sales of their products on online marketplaces.",
  },
  {
    question: "What do I need to have ready?",
    answer:
      "Basic brand information, a short product category overview, your current marketplace presence (if any), and confirmation that you have the authority to approve a sales partner.",
  },
  {
    question: "Is there a cost to apply?",
    answer:
      "Submitting an inquiry is free. Any commercial terms are discussed and agreed before any work begins.",
  },
  {
    question: "How long does the review take?",
    answer:
      "Timelines depend on the product category and the information provided. We will confirm next steps after reviewing your inquiry.",
  },
  {
    question: "Do you guarantee sales results?",
    answer:
      "No. Marketplace performance depends on many factors. We focus on clear planning, professional execution, and honest communication.",
  },
];

export const categoryOptions = [
  "Consumer products",
  "Home & kitchen",
  "Beauty & personal care",
  "Health & wellness",
  "Electronics & accessories",
  "Sports & outdoors",
  "Toys & games",
  "Apparel & footwear",
  "Other",
];

export const marketplaceOptions = [
  "Not currently sold on any marketplace",
  "Amazon",
  "Walmart Marketplace",
  "eBay",
  "Multiple marketplaces",
  "Own website only",
  "Other",
];

export const roleOptions = [
  "Brand owner",
  "Manufacturer",
  "Authorized distributor",
  "Other",
];
