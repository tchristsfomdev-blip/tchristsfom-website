/**
 * Consultancy services sourced from https://tchrists.com/ service pages
 * (accessed Oct 2026). Copy is adapted for clarity; outcome figures are
 * taken from the live site where published.
 */
export type ServiceSection = {
  title: string;
  body?: string;
  items?: string[];
};

export type ServiceAction = {
  label: string;
  href: string;
  /** Primary filled CTA vs secondary outline */
  variant?: "primary" | "secondary";
  external?: boolean;
};

export type ServiceVideo = {
  title: string;
  /** YouTube video id */
  youtubeId: string;
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  headline: string;
  overview: string;
  points: string[];
  sections: ServiceSection[];
  relatedCourseSlug?: string;
  /** External apply / payment CTAs from the live tchrists.com page */
  actions?: ServiceAction[];
  videos?: ServiceVideo[];
};

export const services: Service[] = [
  {
    slug: "corporate-leadership-academy",
    title: "Corporate Leadership Academy",
    shortDescription:
      "Bridging education and employment through hands-on training with global MNCs.",
    headline: "From Classroom to Corporate – The Future of Talent Development",
    overview:
      "Our Corporate Leadership Academy bridges the gap between education and employment. We partner with global MNCs to deliver real-world, on-the-job training programmes tailored for local talent.",
    points: [
      "Live mentorship by top CHROs and C-level professionals",
      "International exposure and skill alignment",
      "Support for young CXOs to lead and succeed in their roles",
      "Performance-based progression",
    ],
    sections: [
      {
        title: "What makes us unique",
        items: [
          "Live mentorship by top CHROs and C-Level professionals",
          "International exposure and skill alignment",
          "Support for young CXOs to lead and succeed in their roles",
          "Performance-based progression",
        ],
      },
      {
        title: "The TchristsFoM Edge",
        body: "Where insight meets execution to deliver real business transformation — enabling local talent to transition into global roles through live mentorship, MNC exposure, and performance-driven training.",
      },
    ],
    // Links sourced from https://tchrists.com/corporate-leadership-academy/
    actions: [
      {
        label: "Apply to the Academy",
        href: "https://forms.office.com/r/dpTk2TjGQN",
        variant: "primary",
        external: true,
      },
      {
        label: "Payment",
        href: "https://rzp.io/rzp/9ABYa76Z",
        variant: "secondary",
        external: true,
      },
    ],
    videos: [
      {
        title: "Corporate Leadership Academy — highlighted successes",
        youtubeId: "kAb93kvH7Hc",
      },
    ],
  },
  {
    slug: "v-chro-5p-process-outsourcing",
    title: "V-CHRO & 5P Process Outsourcing",
    shortDescription:
      "Strategic HR leadership virtually, with global-standard people-process outsourcing.",
    headline: "Virtual CHRO Solutions for Global HR Transformation",
    overview:
      "TchristsFoM provides on-demand CHRO services, bringing global HR strategy, transformation, and execution to your organisation. Ideal for SMEs, scaling companies, and global branches.",
    points: [
      "International HR policy synchronisation",
      "Leadership development and succession planning",
      "Organisation audits and restructuring",
      "End-to-end HR process outsourcing and compliance",
      "Published outcomes include ~30% HR efficiency gains and ~50% cost reduction in selected deployments",
    ],
    sections: [
      {
        title: "Key services",
        items: [
          "International HR policy synchronisation",
          "Leadership development and succession planning",
          "Organisation audits and restructuring",
          "Culture-building and talent engagement",
          "Virtual working functions — empowering people to work virtually, raise remote productivity, and thrive globally while living locally",
        ],
      },
      {
        title: "5P Process Outsourcing (V-CHRO as a Service)",
        body: "The 5P model focuses on People, Process, Policy, Performance, and Progress. We help organisations outsource and elevate HR and administrative functions to international benchmarks.",
        items: [
          "End-to-end HR process outsourcing",
          "Compliance and audit management",
          "Workflow automation and analytics",
        ],
      },
    ],
  },
  {
    slug: "hr-organizational-audits",
    title: "HR & Organizational Audits",
    shortDescription:
      "Evaluating HR systems and structures to identify gaps and improve efficiency.",
    headline: "Know Where You Stand – Build What Comes Next",
    overview:
      "Our HR & Organizational Audit service delivers a clear diagnosis of your organisational health — HR maturity, structural gaps, compliance risks, and operational inefficiencies — with an action-oriented roadmap.",
    points: [
      "Deep-dive audit of HR systems and practices",
      "SWOT analysis and international benchmarking",
      "Step-by-step mitigation and improvement roadmap",
    ],
    sections: [
      {
        title: "What we deliver",
        items: [
          "Deep-dive audit of your HR systems and practices",
          "SWOT analysis and benchmarking against international best practices",
          "Action-oriented recommendations and a step-by-step mitigation roadmap",
        ],
      },
      {
        title: "Why it matters",
        body: "Knowing where you stand enables strategic correction and sustainable progress.",
        items: [
          "360° HR insight — capabilities, risks, and improvement areas through detailed diagnostics",
          "Benchmark with the best — align people practices with international standards",
          "Your roadmap to progress — clear recommendations that turn audit insights into lasting improvement",
        ],
      },
      {
        title: "Benefits for business",
        items: [
          "Deep-dive diagnosis with global benchmarking and SWOT",
          "Strategic roadmap with actionable insights for sustainable progress",
        ],
      },
    ],
  },
  {
    slug: "financial-management-consultancy",
    title: "Financial Management Consultancy",
    shortDescription:
      "Enhancing financial performance through expert analysis and strategic planning.",
    headline: "Financial Leadership for Sustained Excellence",
    overview:
      "Our financial experts help clients optimise resources, restructure operations, and build sustainable financial frameworks.",
    points: [
      "Financial health checks",
      "Budgeting and forecasting",
      "Profitability analysis",
      "CFO-as-a-Service",
    ],
    sections: [
      {
        title: "Core services",
        items: [
          "Financial health checks",
          "Budgeting and forecasting",
          "Profitability analysis",
          "CFO-as-a-Service",
        ],
      },
      {
        title: "Outcomes delivered",
        items: [
          "Streamlined reporting",
          "Strategic cost control",
          "Reduced financial waste",
        ],
      },
      {
        title: "Who we work with",
        body: "Forward-thinking organisations across diverse industries seeking sustainable growth and strategic transformation — industry-diverse, globally present, and people-centric.",
      },
    ],
  },
  {
    slug: "marketing-consultancy",
    title: "Marketing Consultancy",
    shortDescription:
      "Crafting impactful marketing strategies for brand growth and market reach.",
    headline: "Strategy. Creativity. Market Domination.",
    overview:
      "We craft marketing strategies that elevate your brand, align with your goals, and capture your ideal audience.",
    points: [
      "Market analysis and brand positioning",
      "Integrated digital and traditional campaigns",
      "Creative direction and KPI-based execution",
    ],
    sections: [
      {
        title: "Our approach",
        items: [
          "Market analysis and brand positioning",
          "Integrated digital and traditional campaigns",
          "Creative direction and KPI-based execution",
        ],
      },
    ],
  },
  {
    slug: "it-consultancy",
    title: "IT Consultancy",
    shortDescription:
      "Delivering smart, secure, and scalable IT solutions for business success.",
    headline: "Smart IT Solutions for Smart Business",
    overview:
      "Technology is not just support — it is a strategic asset. We provide consultancy that bridges business needs with efficient, secure, and scalable IT systems.",
    points: [
      "IT infrastructure planning",
      "ERP and CRM integration",
      "Cybersecurity strategy",
      "IT cost optimisation",
    ],
    sections: [
      {
        title: "What we provide",
        items: [
          "IT infrastructure planning",
          "ERP and CRM integration",
          "Cybersecurity strategy",
          "IT cost optimisation",
        ],
      },
    ],
  },
  {
    slug: "operations-strategies",
    title: "Operations Strategies",
    shortDescription:
      "Reducing revenue leakage through operational diagnostics and reengineering.",
    headline: "Preventive Revenue Leakage Programmes – Up to 68% Recovery",
    overview:
      "Our core differentiator: we identify and eliminate hidden revenue leakages before they impact your bottom line.",
    points: [
      "Operational diagnostics",
      "Business process reengineering",
      "Revenue recovery tools and dashboards",
    ],
    sections: [
      {
        title: "How we work",
        items: [
          "Operational diagnostics",
          "Business process reengineering",
          "Revenue recovery tools and dashboards",
        ],
      },
    ],
  },
  {
    slug: "virtual-working-techniques",
    title: "Virtual Working Techniques",
    shortDescription:
      "Equipping teams with tools and skills to succeed in global environments.",
    headline: "Live Locally. Work Globally.",
    overview:
      "Empowering people to work virtually, raise remote productivity, and thrive in global workplaces — living locally while working globally. Also available as a focused training course in our directory.",
    points: [
      "Virtual working models and collaboration tools",
      "Remote performance and communication practices",
      "Productivity and wellbeing in distributed teams",
    ],
    sections: [
      {
        title: "Programme focus",
        items: [
          "Virtual working models and collaboration tools",
          "Remote performance and communication practices",
          "Productivity and wellbeing in distributed teams",
        ],
      },
    ],
    relatedCourseSlug: "hr-virtual-working-techniques",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slug: string, limit = 3): Service[] {
  return services.filter((service) => service.slug !== slug).slice(0, limit);
}
