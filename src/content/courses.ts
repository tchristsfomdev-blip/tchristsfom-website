export type Course = {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  whoFor: string[];
  icon: "remote" | "payroll" | "structure" | "ethics" | "model" | "law";
  duration?: string;
  level?: string;
  outcomes: string[];
};

/**
 * Course titles and short descriptions follow the supplied Word document.
 * Overview, audience, and outcomes expand only what is already implied by
 * that copy. Duration, level, price, accreditation numbers, and dates are
 * omitted until the client supplies them.
 */
export const courses: Course[] = [
  {
    slug: "hr-virtual-working-techniques",
    title: "HR & Virtual Working Techniques",
    shortDescription:
      "Focusing on modern and remote work environments, this module examines virtual working models, digital collaboration tools, remote team performance management, communication strategies, and best practices for managing productivity and wellbeing in virtual workplaces.",
    overview:
      "Remote and hybrid work are no longer temporary arrangements. This module helps HR practitioners and people managers design virtual working models that protect performance, communication quality, and wellbeing. You will examine how digital collaboration tools support distributed teams, how to manage remote performance fairly, and which practices keep productivity sustainable rather than extractive.",
    whoFor: [
      "HR professionals supporting remote or hybrid teams",
      "People managers responsible for distributed delivery",
      "Organisations building virtual-first operating models",
    ],
    icon: "remote",
    outcomes: [
      "Virtual working models",
      "Digital collaboration tools",
      "Remote team performance management",
      "Communication strategies",
      "Productivity and wellbeing in virtual workplaces",
    ],
  },
  {
    slug: "hr-payroll-management",
    title: "HR & Payroll Management",
    shortDescription:
      "Master the fundamentals of payroll systems and HR administration, including salary structures, statutory compliance, employee benefits, record-keeping, and data accuracy to support compliance and employee satisfaction.",
    overview:
      "Accurate payroll and clean HR administration protect both the organisation and the employee relationship. This module covers the fundamentals of payroll systems, salary structures, statutory compliance, benefits administration, and the record-keeping habits that keep data trustworthy. The emphasis is practical: fewer errors, clearer processes, and stronger employee confidence.",
    whoFor: [
      "HR and payroll administrators",
      "Office and operations managers handling compensation workflows",
      "Teams preparing to strengthen compliance and data accuracy",
    ],
    icon: "payroll",
    outcomes: [
      "Payroll systems and HR administration",
      "Salary structures",
      "Statutory compliance",
      "Employee benefits",
      "Record-keeping and data accuracy",
    ],
  },
  {
    slug: "hr-organisational-design-development",
    title: "HR & Organisational Design & Development",
    shortDescription:
      "Explore how organizations are structured and developed to support sustainable strategy and growth. Topics cover change management, talent development, leadership structures, and building agile, people-centric workplaces.",
    overview:
      "Structure shapes strategy. This module explores how organisations are designed and developed so people systems support sustainable growth. You will work through change management, talent development, leadership structures, and the design choices that create agile, people-centric workplaces rather than rigid hierarchies that lag behind the business.",
    whoFor: [
      "HR and OD practitioners",
      "Leaders redesigning teams after growth or restructuring",
      "People partners supporting change programmes",
    ],
    icon: "structure",
    outcomes: [
      "How organisations are structured and developed",
      "Change management",
      "Talent development",
      "Leadership structures",
      "Agile, people-centric workplaces",
    ],
  },
  {
    slug: "hr-ethical-work-practices",
    title: "HR & Ethical Work Practices",
    shortDescription:
      "Focus on building ethical corporate cultures through fairness, transparency, inclusion, and accountability. Learn to navigate compliance responsibilities, address ethical HR challenges, and foster workplace trust.",
    overview:
      "Ethical workplaces are built deliberately through fairness, transparency, inclusion, and accountability. This module helps professionals navigate compliance responsibilities, respond to ethical HR challenges with clarity, and strengthen the trust that teams need to perform well. Culture is treated as an operating system, not a slogan.",
    whoFor: [
      "HR leaders and employee-relations practitioners",
      "Managers accountable for fair workplace decisions",
      "Organisations strengthening inclusion and trust",
    ],
    icon: "ethics",
    outcomes: [
      "Fairness, transparency, inclusion, and accountability",
      "Compliance responsibilities",
      "Ethical HR challenges",
      "Workplace trust",
    ],
  },
  {
    slug: "the-5p-business-model",
    title: "The 5P Business Model (Purpose, People, Process, Performance, Profit)",
    shortDescription:
      "Discover how aligning organizational purpose with people management, optimized processes, rigorous performance metrics, and profitability drives long-term business growth and ethical decision-making.",
    overview:
      "The 5P model connects Purpose, People, Process, Performance, and Profit into one management lens. This module shows how organisational purpose, people management, optimised processes, rigorous performance metrics, and profitability can reinforce each other. The goal is long-term growth that remains ethically grounded and operationally coherent.",
    whoFor: [
      "Founders and senior managers seeking an integrated operating model",
      "HR and strategy partners aligning people systems with profit goals",
      "Teams translating purpose statements into measurable practice",
    ],
    icon: "model",
    outcomes: [
      "Aligning organisational purpose with people management",
      "Optimised processes",
      "Rigorous performance metrics",
      "Profitability and ethical decision-making",
    ],
  },
  {
    slug: "human-rights-international-labour-law",
    title: "Human Rights & International Labour Law",
    shortDescription:
      "Dive into core principles of international labour law and human rights standards, exploring frameworks around decent work, workplace equality, and cross-jurisdictional enforcement mechanisms.",
    overview:
      "International labour standards and human rights frameworks increasingly shape responsible employment practice. This module introduces core principles around decent work, workplace equality, and the enforcement mechanisms that operate across jurisdictions. It is designed for professionals who need clarity, not legal theatre, when applying these standards at work.",
    whoFor: [
      "HR and compliance professionals working across borders",
      "CSR, ESG, and people-risk practitioners",
      "Managers operating in multi-jurisdictional environments",
    ],
    icon: "law",
    outcomes: [
      "Core principles of international labour law",
      "Human rights standards",
      "Decent work",
      "Workplace equality",
      "Cross-jurisdictional enforcement mechanisms",
    ],
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

export function getRelatedCourses(slug: string, limit = 3): Course[] {
  return courses.filter((course) => course.slug !== slug).slice(0, limit);
}
