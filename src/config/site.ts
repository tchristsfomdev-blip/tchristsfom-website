/**
 * Company details sourced from https://tchrists.com/ (accessed Oct 2026).
 * Logo wordmark: TchristsFoM. Logo tagline typo "Empoweriing" corrected
 * to "Empowering" in site text. Course directory copy from the client's
 * Word document remains in home.courses / courses pages.
 */
export const siteConfig = {
  brandName: "TchristsFoM",
  shortName: "TchristsFoM",
  legalName: "TchristsFoM International Consultants LLC",
  tradingName: "Tchrists-FoM International Consultants",
  tagline: "Empowering Rights Through Empowering People",
  businessTagline:
    "Empowering Organizations. Equipping Professionals. Enhancing Results.",
  headline: "TchristsFoM – Powering People, Planning, and Processes",
  description:
    "TchristsFoM International Consultants delivers performance-centric consultancy and professional training across the UK, UAE, India, Iraq, Qatar and KSA — empowering organisations with global strategies and local insight.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  website: "https://tchrists.com",
  locale: "en-GB",
  foundedYear: 1993,
  experienceYears: 31,
  regions: ["UK", "UAE", "India", "Iraq", "Qatar", "KSA"],
  industries: [
    "Aviation",
    "Oil & Gas",
    "FMCG",
    "Construction",
    "Healthcare",
    "Facility Management",
    "Banking",
    "Education",
  ],
  logo: {
    src: "/images/logo.png",
    alt: "TchristsFoM — Empowering Rights Through Empowering People",
    width: 1254,
    height: 1254,
  },
  contact: {
    emails: ["info@tchrists.com", "johnsond@tchrists.com"],
    email: "info@tchrists.com",
    phones: [
      { label: "UAE", value: "+971 56 257 3960", href: "tel:+971562573960" },
      { label: "UAE", value: "+971 52 112 7110", href: "tel:+971521127110" },
      { label: "India", value: "+91 80899 82260", href: "tel:+918089982260" },
      { label: "Iraq", value: "+964 784 339 2221", href: "tel:+9647843392221" },
      { label: "UK", value: "+44 7766 228951", href: "tel:+447766228951" },
      { label: "UK", value: "+44 7380 954621", href: "tel:+447380954621" },
    ],
    primaryPhone: "+971 52 112 7110",
    primaryPhoneHref: "tel:+971521127110",
    whatsapp: "https://wa.me/971521127110",
    addressLines: [
      "TchristsFoM International Consultants LLC",
      "Sharjah Media City (Shams)",
      "PO Box 515000",
      "Sharjah, United Arab Emirates",
    ],
    offices: "India / UAE | Iraq | GCC | Global access via virtual services",
    hours:
      "Available 24/7 — our team operates around the clock with strategic job allocation across time zones.",
  },
  social: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/share/1BajFj9jHW/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/tchristsfom_international?cplk=MTh1OWllMGZ0cTljcA==",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/tchrists-fom-consultants/",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@johnsondominic4010",
    },
  ],
  stats: [
    { value: "680+", label: "Businesses empowered globally" },
    { value: "1,354+", label: "Successful projects delivered" },
    { value: "2,000+", label: "Professionals trained" },
    { value: "31", label: "Years of experience" },
    { value: "8", label: "Countries" },
    { value: "97%", label: "Client satisfaction" },
  ],
  nav: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Courses", href: "/courses" },
    { label: "Insights", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Enquire Now", href: "/contact" },
  legal: [
    { label: "Privacy policy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms" },
  ],
  about: {
    eyebrow: "About TchristsFoM",
    title: "Global expertise. Local transformation.",
    story:
      "With over 30 years of cross-industry expertise, Tchrists-FoM International Consultants has empowered businesses across the GCC, Iraq, and beyond. Our vision is to create performance-centric, future-ready organisations.",
    quote:
      "Empowering local talents. Enhancing global organizations. Creating sustainable growth through strategy and skill.",
    vision:
      "To be a globally recognised consultancy that transforms businesses into performance-centric, future-ready organisations through innovation, insight, and impact.",
    mission:
      "To empower local talents and organisations by delivering strategic, results-driven solutions that enhance business capabilities, leadership performance, and sustainable growth.",
  },
  home: {
    eyebrow: "UK · UAE · India · Iraq · Qatar · KSA",
    h1: "Professional Training Courses & Executive Education",
    lead: "Advance your career with British-standard, CPD-approved courses designed for modern workplace environments, human resources, and strategic business management — backed by TchristsFoM consultancy across the Middle East, India and the UK.",
    sublead:
      "Delivering performance-centric consultancy and hands-on development programmes that power people, planning, and processes.",
    introTitle: "Empower Your Career and Organisation with UK-Aligned Learning",
    introBody:
      "Welcome to TchristsFoM's course directory. We specialise in delivering high-impact, practical training tailored to modern remote work environments, global business landscapes, and professional standards. Whether you are an ambitious professional looking to upskill or an organisation building agile, high-performing teams, our CPD-approved modules provide actionable insights grounded in real-world application.",
    introExtra:
      "Programmes sit beside our consultancy practice — Corporate Leadership Academy, V-CHRO, 5P process outsourcing, audits, finance, marketing, IT and operations — so learning connects to how organisations actually transform.",
    offeringsTitle: "Explore Our Professional Course Offerings",
    offeringsLead:
      "Six focused modules cover the skills most often requested by HR leaders, people managers, and organisations modernising how they work.",
    servicesTitle: "What we offer",
    servicesLead:
      "Strategic consultancy across HR, finance, marketing, IT and operations — designed around your challenges, capabilities and goals.",
    whyTitle: "Why professionals and organisations choose TchristsFoM",
    whyLead:
      "Decades of cross-industry consulting, British-standard training, and delivery across six markets.",
    pillars: [
      {
        title: "British-Standard Education",
        body: "Globally recognised quality aligned with robust UK educational frameworks, so learning travels with your career across borders and industries.",
      },
      {
        title: "CPD-Approved Certification",
        body: "Enhance your professional credibility with recognised continuing professional development credits that support career progression and organisational capability.",
      },
      {
        title: "Flexible Learning",
        body: "Expert-led training designed to fit the busy schedules of modern professionals and remote teams, without diluting depth or practical focus.",
      },
      {
        title: "Multi-Sector Expertise",
        body: "Practical modules and consultancy shaped by work across aviation, oil & gas, FMCG, construction, healthcare, facility management, banking and education.",
      },
    ],
    casesTitle: "Success in action",
    casesLead: "Selected outcomes from our consulting and academy programmes.",
    cases: [
      {
        title: "HR leadership transformation",
        body: "Enabled a mid-sized enterprise to scale by integrating our V-CHRO solution and leadership coaching.",
      },
      {
        title: "Operational efficiency uplift",
        body: "Achieved a 60% improvement in revenue retention through our Preventive Revenue Leakage Program.",
      },
      {
        title: "Virtual workforce integration",
        body: "Equipped a distributed team with tools and strategies to succeed globally using our Virtual Working Techniques.",
      },
      {
        title: "Corporate Leadership Academy impact",
        body: "Enabled local talents to transition into global roles through live mentorship, MNC exposure, and performance-driven training.",
      },
      {
        title: "V-CHRO strategic deployment",
        body: "Transformed HR operations for a scaling SME, achieving a 30% increase in efficiency and 50% reduction in operational costs.",
      },
      {
        title: "5P process outsourcing excellence",
        body: "Streamlined HR and compliance processes for a construction client using our 5P model, resulting in enhanced scalability.",
      },
    ],
    faqTitle: "Common questions",
    faqs: [
      {
        question: "How long does the process take?",
        answer:
          "Our consulting and development programmes are tailored to your needs, ranging from short-term interventions to long-term transformation projects.",
      },
      {
        question: "How do I make payment?",
        answer:
          "We offer flexible payment options based on your selected service — consultations, audits, or academy programmes. Payment links are shared after confirmation.",
      },
      {
        question: "How do I schedule a meeting?",
        answer:
          "Email info@tchrists.com or message us on WhatsApp for an immediate response.",
      },
    ],
    ctaTitle: "Let’s discuss your business goals",
    ctaBody:
      "Schedule a strategy conversation with TchristsFoM. We help you identify gaps, unlock growth, and design people-powered strategies for your organisation — including course schedules, corporate training, and consultancy.",
    trust: [
      "31 Years Experience",
      "UK · UAE · India · Iraq · Qatar · KSA",
      "CPD-Approved Training",
      "Consultancy + Academy",
    ],
  },
  pages: {
    about: {
      title: "About Us",
      description:
        "Tchrists-FoM International Consultants — 31 years of cross-industry expertise empowering businesses across the GCC, Iraq, India, the UK and beyond.",
    },
    services: {
      title: "Consultancy Services",
      description:
        "Corporate Leadership Academy, V-CHRO, 5P process outsourcing, HR audits, finance, marketing, IT and operations strategies from TchristsFoM.",
    },
    courses: {
      title: "Professional Training Courses & Executive Education",
      description:
        "Advance your career with British-standard, CPD-approved courses designed for modern workplace environments, human resources, and strategic business management.",
      introTitle: "Empower Your Career and Organisation with UK-Aligned Learning",
      introBody:
        "Welcome to TchristsFoM's course directory. We specialise in delivering high-impact, practical training tailored to modern remote work environments, global business landscapes, and professional standards. Whether you are an ambitious professional looking to upskill or an organisation building agile, high-performing teams, our CPD-approved modules provide actionable insights grounded in real-world application.",
      offeringsTitle: "Explore Our Professional Course Offerings",
    },
    blog: {
      title: "Insights",
      description:
        "Practical articles on remote teams, payroll compliance, ethical HR culture, and consultancy themes from TchristsFoM.",
    },
    contact: {
      title: "Contact",
      description:
        "Enquire about consultancy, Corporate Leadership Academy programmes, or professional training courses. Our team is available 24/7 across time zones.",
      formNote:
        "Use the enquiry form for consultancy or course requests, or email / WhatsApp for an immediate response.",
    },
    privacy: {
      title: "Privacy policy",
      description:
        "Placeholder privacy policy for TchristsFoM International Consultants LLC. Formal legal copy has not been supplied for this rebuild yet.",
      note: "Placeholder. The privacy policy will be published here once legal copy is supplied. No analytics or cookies are set yet.",
    },
    terms: {
      title: "Terms",
      description:
        "Placeholder terms of use for TchristsFoM International Consultants LLC. Formal legal copy has not been supplied for this rebuild yet.",
      note: "Placeholder. Terms of use will be published here once legal copy is supplied.",
    },
    notFound: {
      title: "Page not found",
      description:
        "That address is not part of TchristsFoM. Return home or open the course directory.",
      homeLabel: "Back to home",
      coursesLabel: "Browse courses",
    },
  },
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
