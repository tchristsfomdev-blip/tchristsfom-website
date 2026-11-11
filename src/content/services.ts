/**
 * Consultancy services. Outcome claims are included only where the
 * client supplied them.
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
      "Practical learning, mentorship and real-world exposure for industry-ready professionals.",
    headline: "Bridge the gap between education and employment",
    overview:
      "Our Corporate Leadership Academy focuses on developing industry-ready professionals through practical learning, mentorship and exposure to real-world business environments. We help bridge the gap between education and employment by equipping professionals with the skills, knowledge and confidence required to succeed in global organizations.",
    points: [
      "Leadership development",
      "Professional skills",
      "Workplace readiness",
      "Mentorship and practical learning",
      "Global career preparation",
    ],
    sections: [
      {
        title: "Key focus areas",
        items: [
          "Leadership development",
          "Professional skills",
          "Workplace readiness",
          "Mentorship and practical learning",
          "Global career preparation",
        ],
      },
    ],
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
    slug: "v-chro-consultancy",
    title: "V-CHRO Consultancy",
    shortDescription:
      "Strategic HR leadership without the cost of a full-time senior HR function.",
    headline:
      "Virtual CHRO support for strategy, leadership and workforce transformation",
    overview:
      "Access strategic HR leadership without the cost of maintaining a full-time senior HR function. Our Virtual CHRO consultancy provides organizations with expert support in HR strategy, organizational development, leadership and workforce transformation.",
    points: [
      "HR strategy and planning",
      "Leadership development",
      "Succession planning",
      "Organizational restructuring",
      "Talent engagement",
      "HR policy development",
      "Culture transformation",
    ],
    sections: [
      {
        title: "Our V-CHRO services",
        items: [
          "HR strategy and planning",
          "Leadership development",
          "Succession planning",
          "Organizational restructuring",
          "Talent engagement",
          "HR policy development",
          "Culture transformation",
        ],
      },
    ],
  },
  {
    slug: "5p-process-outsourcing",
    title: "5P Process Outsourcing",
    shortDescription:
      "People, Process, Policy, Performance and Progress for HR and administrative functions.",
    headline: "Structured processes that improve efficiency and scalability",
    overview:
      "Our 5P Process Outsourcing model focuses on People, Process, Policy, Performance and Progress to help organizations improve their HR and administrative functions. We support businesses with structured processes, compliance management, workflow improvement and performance-focused solutions that can improve efficiency and scalability.",
    points: ["People", "Process", "Policy", "Performance", "Progress"],
    sections: [
      {
        title: "What the model covers",
        body: "We support businesses with structured processes, compliance management, workflow improvement and performance-focused solutions that can improve efficiency and scalability.",
        items: ["People", "Process", "Policy", "Performance", "Progress"],
      },
    ],
  },
  {
    slug: "hr-organizational-audits",
    title: "HR & Organizational Audits",
    shortDescription:
      "Identify gaps, improve systems and strengthen organizational performance.",
    headline: "A clear view of structures, policies and practices",
    overview:
      "Identify gaps, improve systems and strengthen organizational performance with our HR and organizational audit services. We evaluate HR structures, policies, processes and organizational practices to identify areas for improvement and recommend practical solutions.",
    points: [
      "HR structures",
      "Policies and processes",
      "Organizational practices",
      "Practical recommendations for improvement",
    ],
    sections: [
      {
        title: "What we evaluate",
        items: ["HR structures", "Policies", "Processes", "Organizational practices"],
      },
    ],
  },
  {
    slug: "financial-management-consultancy",
    title: "Financial Management Consultancy",
    shortDescription:
      "Strategic financial management support for better long-term decisions.",
    headline: "Make better financial decisions",
    overview:
      "Make better financial decisions with strategic financial management support. Our consultants help organizations evaluate financial performance, identify opportunities and develop strategies that support long-term business growth.",
    points: [
      "Evaluate financial performance",
      "Identify opportunities",
      "Strategies for long-term business growth",
    ],
    sections: [
      {
        title: "How we help",
        body: "Our consultants help organizations evaluate financial performance, identify opportunities and develop strategies that support long-term business growth.",
      },
    ],
  },
  {
    slug: "marketing-consultancy",
    title: "Marketing Consultancy",
    shortDescription:
      "Marketing strategies aligned with brand, customers and business objectives.",
    headline: "Build a stronger market presence",
    overview:
      "Build a stronger market presence with customized marketing strategies aligned with your business objectives. Our marketing consultancy services help businesses improve brand positioning, customer engagement, market reach and overall marketing performance.",
    points: [
      "Brand positioning",
      "Customer engagement",
      "Market reach",
      "Marketing performance",
    ],
    sections: [
      {
        title: "Where we focus",
        items: [
          "Brand positioning",
          "Customer engagement",
          "Market reach",
          "Overall marketing performance",
        ],
      },
    ],
  },
  {
    slug: "it-consultancy",
    title: "IT Consultancy",
    shortDescription:
      "Secure, scalable and practical IT strategies that support how the business works.",
    headline: "Technology that improves productivity, efficiency and continuity",
    overview:
      "Technology plays a critical role in modern business. Our IT consultancy services help organizations identify technology requirements and develop secure, scalable and practical IT strategies. We help businesses use technology more effectively to improve productivity, efficiency and business continuity.",
    points: [
      "Technology requirements",
      "Secure, scalable and practical IT strategies",
      "Productivity and efficiency",
      "Business continuity",
    ],
    sections: [
      {
        title: "What we help you do",
        body: "We help businesses use technology more effectively to improve productivity, efficiency and business continuity.",
      },
    ],
  },
  {
    slug: "operations-strategies",
    title: "Operations Strategy Consulting",
    shortDescription:
      "Process analysis, diagnostics and reengineering to improve how the business runs.",
    headline: "Find where efficiency, revenue or resources are being lost",
    overview:
      "Improve operational efficiency and identify areas where your business may be losing revenue or resources. Our operations consulting approach focuses on process analysis, operational diagnostics, workflow improvement and business process reengineering.",
    points: [
      "Process analysis",
      "Operational diagnostics",
      "Workflow improvement",
      "Business process reengineering",
    ],
    sections: [
      {
        title: "Our operations approach",
        items: [
          "Process analysis",
          "Operational diagnostics",
          "Workflow improvement",
          "Business process reengineering",
        ],
      },
    ],
  },
  {
    slug: "cpd-wellness-trainers-training-academy",
    title: "CPD Wellness Trainers Training Academy",
    shortDescription:
      "Building internationally trained professionals in fitness, swimming, physical education and holistic wellness.",
    headline: "Competent, confident and professionally certified trainers.",
    overview:
      "We deliver structured, theory-based and practical trainer education programmes designed to develop competent, confident and professionally certified trainers.",
    points: [
      "CPD Swimming Trainer Course — Developing professional swimming instructors and swimming coaches.",
      "CPD Gym Trainer Course — Preparing qualified gym instructors and fitness trainers.",
      "CPD Wellness Trainer Course — Training professionals in holistic wellness, fitness and healthy lifestyle management.",
      "CPD Physical Education Trainer Course — Preparing professionals to deliver structured physical education and fitness programmes.",
    ],
    sections: [
      {
        title: "Our approach",
        body: "International-standard curriculum, hands-on practical training, professional assessment and certification pathways through recognised accreditation partners.",
      },
      {
        title: "Our vision",
        body: "Creating employment opportunities by transforming fitness and wellness enthusiasts into professionally trained trainers.",
      },
    ],
  },
  {
    slug: "virtual-working-techniques",
    title: "Virtual Working Techniques",
    shortDescription:
      "Tools, communication and working practices for remote and international teams.",
    headline: "Prepare teams for the modern global workplace",
    overview:
      "Prepare your teams for the modern global workplace with practical virtual working strategies. We help professionals and organizations develop the tools, communication practices and working techniques needed to collaborate effectively across remote and international environments.",
    points: [
      "Tools for virtual collaboration",
      "Communication practices",
      "Working techniques for remote and international teams",
    ],
    sections: [
      {
        title: "Programme focus",
        items: [
          "Tools for virtual collaboration",
          "Communication practices",
          "Working techniques for remote and international teams",
        ],
      },
    ],
    relatedCourseSlug: "hr-virtual-working-techniques",
  },
  {
    slug: "kerala-governance-lab",
    title: "Kerala Governance Lab (KGL)",
    shortDescription:
      "From routine administration to strategic, accountable, high-performance governance.",
    headline: "Moving beyond the files toward high-performance governance",
    overview:
      "The Kerala Governance Lab (KGL), an initiative by TchristsFoM International Consultants Pvt. Ltd., helps institutions transition from routine administration to strategic, accountable, and high-performance governance. Led by veteran consultants with decades of field experience, KGL delivers practical, data-driven solutions that strengthen internal controls, optimize HR processes, and accelerate organizational growth.",
    points: [
      "Governance and accountability audit",
      "HR and organizational diagnostics",
      "KPI and KRA management systems",
      "SOP and process audits",
      "Delegation of authority frameworks",
      "Financial and operational controls",
      "Compliance and risk assessment",
      "Digital governance systems",
      "Customer and citizen service audits",
    ],
    sections: [
      {
        title: "Our mission",
        body: "Better governance. Stronger institutions. Brighter society.",
      },
      {
        title: "Specialized governance and management services",
        items: [
          "Governance and accountability audit — objective evaluations to enforce organizational integrity, clarity, and legal compliance.",
          "HR and organizational diagnostics — in-depth workforce audits to optimize human capital structures and productivity.",
          "KPI and KRA management systems — standardized performance measurement frameworks to drive accountability.",
          "SOP and process audits — mapping and refining standard operating procedures to eliminate operational bottlenecks.",
          "Delegation of authority frameworks — structuring clear decision-making pathways and administrative responsibilities.",
          "Financial and operational controls — monitoring systems to protect capital resources and increase profitability.",
          "Compliance and risk assessment — systematic identification and mitigation of regulatory and organizational risks.",
          "Digital governance systems — modern digital workflows to streamline institutional decision-making.",
          "Customer and citizen service audits — improving service standards for commercial and public-facing organizations.",
        ],
      },
      {
        title: "Industries and sectors",
        items: [
          "Government bodies and local self-government institutions (LSGD)",
          "Banks and financial institutions",
          "MSMEs and corporate enterprises",
          "Hospitals and healthcare institutions",
          "Malls and large-scale retail networks",
          "Manufacturing and industrial units",
        ],
      },
      {
        title: "Our 6-step governance framework",
        body: "Assess, audit, identify, design, implement, monitor. We evaluate the current setup, audit underlying vulnerabilities, design tailored operational frameworks, implement changes, and continuously monitor performance metrics to produce measurable results.",
        items: ["Assess", "Audit", "Identify", "Design", "Implement", "Monitor"],
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slug: string, limit = 3): Service[] {
  return services.filter((service) => service.slug !== slug).slice(0, limit);
}
