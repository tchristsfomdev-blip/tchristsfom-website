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
  headline: "Empowering Organizations. Equipping Professionals. Enhancing Results.",
  description:
    "Tchrists-FoM International Consultants helps organizations improve performance, strengthen people and processes, and achieve sustainable growth across the UAE, India, UK, Iraq, Qatar and KSA.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  website: "https://tchrists.com",
  rabga: {
    name: "RABGA",
    coursesUrl: "https://rabga.co.uk/our-courses/",
  },
  locale: "en-GB",
  foundedYear: 1993,
  experienceYears: 33,
  regions: ["UAE", "India", "UK", "Iraq", "Qatar", "KSA"],
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
    emailCc: "johnsond@tchrists.com",
    mailto: "mailto:info@tchrists.com?cc=johnsond@tchrists.com",
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
    whatsapp: "https://wa.me/919400782260",
    addresses: [
      {
        label: "UAE",
        lines: [
          "TchristsFoM International Consultants LLC",
          "Sharjah Media City (Shams)",
          "PO Box 515000",
          "Sharjah, United Arab Emirates",
        ],
      },
      {
        label: "India",
        lines: [
          "TchristsFoM International Consultants Pvt Ltd.",
          "Behind Sacred Heart Church",
          "Convent Road, Perinchery",
          "Thrissur 680306",
        ],
      },
    ],
    offices: "UAE, India, UK, Iraq, Qatar & KSA",
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
    { value: "33", label: "Years of experience" },
    { value: "8", label: "Countries" },
    { value: "97%", label: "Client satisfaction" },
  ],
  nav: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Campus", href: "/campus" },
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
    eyebrow: "About Tchrists-FoM",
    title: "Your strategic partner for business growth",
    story:
      "Tchrists-FoM International Consultants combines extensive industry experience with innovative consulting approaches to help organizations navigate today's competitive business environment. Our approach goes beyond traditional consultancy. We work closely with clients to understand their unique challenges, identify opportunities and develop practical strategies that create measurable improvements.",
    quote: "Empowering Organizations. Equipping Professionals. Enhancing Results.",
    vision:
      "From HR transformation and financial management to marketing, IT and operational excellence, we strengthen businesses from the inside out — with a global outlook and local understanding across the UAE, India, UK, Iraq, Qatar and KSA.",
    mission:
      "Help organizations perform better, develop capable professionals and create sustainable growth.",
  },
  home: {
    eyebrow:
      "Empowering Businesses Through Strategic Consulting and Professional Development",
    h1: "Transform Your Business With Expert Consultancy",
    lead: "Tchrists-FoM International Consultants helps organizations improve performance, strengthen their people and processes, and achieve sustainable business growth. With expertise across human resources, finance, marketing, IT, operations and leadership development, we provide practical consulting solutions designed around your business goals.",
    sublead:
      "With a global outlook and local market understanding, our consultants support businesses across the UAE, India, UK, Iraq, Qatar and KSA. Whether you are a growing SME, an established organization or a professional looking to strengthen your capabilities, Tchrists-FoM provides the strategies, expertise and guidance you need to move forward.",
    supportTitle: "Get Expert Business Consulting Support Today",
    supportBody:
      "Partner with Tchrists-FoM to identify business challenges, improve organizational performance and build strategies for sustainable growth.",
    introEyebrow: "About Tchrists-FoM",
    introTitle: "Your Strategic Partner for Business Growth",
    introBody:
      "Tchrists-FoM International Consultants combines extensive industry experience with innovative consulting approaches to help organizations navigate today's competitive business environment. Our approach goes beyond traditional consultancy. We work closely with clients to understand their unique challenges, identify opportunities and develop practical strategies that create measurable improvements.",
    introExtra:
      "From HR transformation and financial management to marketing, IT and operational excellence, our multidisciplinary consulting services are designed to strengthen businesses from the inside out. Our focus is simple: help organizations perform better, develop capable professionals and create sustainable growth.",
    offeringsTitle: "Explore Our Professional Course Offerings",
    offeringsLead:
      "Six focused modules cover the skills most often requested by HR leaders, people managers, and organisations modernising how they work.",
    servicesTitle: "Our Business Consulting Services",
    servicesLead:
      "Every organization has different goals, challenges and growth opportunities. Tchrists-FoM provides customized consulting solutions across key business functions.",
    whyTitle: "Why Choose Tchrists-FoM?",
    whyLead: "Business consulting built around your goals.",
    pillars: [
      {
        title: "Global Perspective",
        body: "We combine international business perspectives with an understanding of local markets across the UAE, India, UK, Iraq, Qatar and KSA.",
      },
      {
        title: "Customized Strategies",
        body: "We do not believe in one-size-fits-all consulting. Our solutions are tailored to your organization's challenges, objectives and capabilities.",
      },
      {
        title: "Multidisciplinary Expertise",
        body: "Our consulting capabilities cover HR, finance, marketing, IT, operations and professional development, allowing us to address business challenges from multiple perspectives.",
      },
      {
        title: "People-Centric Approach",
        body: "Strong organizations are built by strong people. We focus on developing people, strengthening leadership and creating effective workplace systems.",
      },
      {
        title: "Practical Solutions",
        body: "Our goal is not simply to provide recommendations. We focus on practical strategies that organizations can implement to improve performance and achieve measurable results.",
      },
    ],
    approachTitle: "Our Approach",
    approachLead: "From business challenges to sustainable growth",
    approachBody:
      "We follow a structured approach to understand your business and develop solutions that create meaningful impact.",
    steps: [
      {
        title: "Understand",
        body: "We begin by understanding your organization, objectives, challenges and current business environment.",
      },
      {
        title: "Analyze",
        body: "Our consultants assess existing systems, processes and performance to identify gaps and opportunities.",
      },
      {
        title: "Strategize",
        body: "We develop customized strategies based on your business requirements and long-term goals.",
      },
      {
        title: "Implement",
        body: "Our team supports the implementation of recommended strategies and solutions.",
      },
      {
        title: "Improve",
        body: "We evaluate outcomes and identify opportunities for continuous improvement and sustainable growth.",
      },
    ],
    casesTitle: "Driving Better Business Performance",
    casesLead:
      "Tchrists-FoM supports organizations through strategic consulting, professional development and business transformation solutions.",
    casesClose: "Your challenges are unique. Your consulting strategy should be too.",
    cases: [
      {
        title: "HR transformation",
        body: "Strategic HR leadership, audits and people systems that strengthen how the organization works.",
      },
      {
        title: "Operational improvement",
        body: "Process analysis, diagnostics and reengineering where efficiency, revenue or resources are being lost.",
      },
      {
        title: "Leadership development",
        body: "Practical learning and mentorship that prepare professionals for real organizational responsibility.",
      },
      {
        title: "Virtual workforce integration",
        body: "Tools, communication practices and working techniques for remote and international teams.",
      },
      {
        title: "Process outsourcing",
        body: "The 5P model — People, Process, Policy, Performance and Progress — for HR and administrative functions.",
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
    ctaTitle: "Let's Build Your Next Growth Strategy",
    ctaBody:
      "Looking to improve your HR function, strengthen operations, develop leaders or transform your business processes? Tchrists-FoM International Consultants is ready to help you identify opportunities, overcome challenges and build a practical roadmap for sustainable growth.",
    trust: [
      "UAE, India, UK, Iraq, Qatar & KSA",
      "HR, finance, marketing, IT & operations",
      "Strategies tailored to your goals",
      "Practical, measurable results",
    ],
  },
  pages: {
    about: {
      title: "About Tchrists-FoM",
      description:
        "Your strategic partner for business growth. Practical consulting across HR, finance, marketing, IT, operations and leadership development.",
    },
    services: {
      title: "Our Business Consulting Services",
      description:
        "Customized consulting across leadership, HR, finance, marketing, IT, operations and the Kerala Governance Lab.",
    },
    campus: {
      title: "Wellness & Leadership Campus",
      description:
        "Swimming pool and gym at TchristsFoM International Wellness & Leadership Academy in Perinchery, Thrissur.",
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
        "Schedule a free strategy call, or enquire about consultancy, campus facilities and professional training. Our team is available 24/7 across time zones.",
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
