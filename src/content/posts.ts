export type PostSection = {
  heading: string;
  body: string[];
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingMinutes: number;
  topic: string;
  courseSlug?: string;
  sections: PostSection[];
};

/**
 * Editorial notes aligned with the published course directory.
 * These are practical briefings, not legal advice or client case studies.
 */
export const posts: Post[] = [
  {
    slug: "managing-performance-when-the-team-is-elsewhere",
    title: "Managing performance when the team is elsewhere",
    excerpt:
      "Remote work fails when managers copy office habits onto a video call. A few operating rules keep performance, communication, and wellbeing in the same system.",
    date: "2026-09-18",
    readingMinutes: 6,
    topic: "Remote teams",
    courseSlug: "hr-virtual-working-techniques",
    sections: [
      {
        heading: "Start with the work, not the tool",
        body: [
          "Distributed teams do not become effective because a new collaboration platform was purchased. They become effective when someone is clear about what good work looks like, how often it is reviewed, and which decisions can be made without a meeting.",
          "Before adding another channel, write down the handful of outcomes the team is actually accountable for this quarter. Then decide which of those outcomes can be seen in a shared document, and which still need a conversation. Tools should follow that split.",
        ],
      },
      {
        heading: "Make performance visible without surveillance",
        body: [
          "Remote performance management goes wrong in two directions. Some managers disappear and call it trust. Others monitor logins, response times, and green status dots, then wonder why people perform for the metric instead of the work.",
          "A fairer pattern is a short, regular review of agreed outputs: what moved, what is blocked, and what support is needed. Keep the evidence in the work itself — a plan, a draft, a client update — rather than in activity logs. People can then be coached on quality and pace without feeling watched.",
        ],
      },
      {
        heading: "Protect the edges of the day",
        body: [
          "Wellbeing in a virtual workplace is mostly a design problem. If the only way to be seen is to stay online, the team will stay online. Set meeting-free blocks, name a response-time expectation that is not “immediately”, and give managers permission to end a day.",
          "Those rules are part of performance management. A team that cannot recover cannot sustain the standard you are asking for.",
        ],
      },
    ],
  },
  {
    slug: "payroll-accuracy-is-a-trust-issue",
    title: "Payroll accuracy is a trust issue",
    excerpt:
      "A late or wrong payment is not a back-office slip. It tells people the organisation cannot be relied on. Clean records and a simple check cycle prevent most of the damage.",
    date: "2026-08-07",
    readingMinutes: 5,
    topic: "Payroll",
    courseSlug: "hr-payroll-management",
    sections: [
      {
        heading: "Treat the payslip as a promise",
        body: [
          "Employees experience payroll as the most concrete promise the organisation makes. When the amount, the date, or the deduction is wrong, every other message about culture is harder to believe.",
          "That is why payroll accuracy belongs with employee relations, not only with finance. The question is not whether a spreadsheet can be corrected next month. It is whether people can plan their lives on what you said you would pay.",
        ],
      },
      {
        heading: "Most errors are process errors",
        body: [
          "Salary structures, joiners, leavers, allowances, and statutory deductions fail when the source record is late or incomplete. A reliable cycle has one owner for employee data, one cut-off that managers actually know, and one check before the file is sent — not after someone complains.",
          "Keep the record boring: the contracted pay, the current allowances, the leave that affects pay, and the date each change was approved. If those four things are current, most compliance and satisfaction problems shrink.",
        ],
      },
      {
        heading: "Do not improvise across jurisdictions",
        body: [
          "Teams working across the UK, the Gulf, and India cannot share one informal rule for tax, benefits, or final pay. Name the local requirement, keep the evidence, and escalate anything that is not on the standard checklist.",
          "This briefing is not legal advice. Statutory treatment has to be confirmed for the employment location before a payroll change is applied.",
        ],
      },
    ],
  },
  {
    slug: "what-an-ethical-hr-culture-actually-does",
    title: "What an ethical HR culture actually does",
    excerpt:
      "Fairness, transparency, and accountability are operating habits. They show up in how decisions are explained, how concerns are handled, and who is allowed to challenge a manager.",
    date: "2026-07-16",
    readingMinutes: 6,
    topic: "Workplace ethics",
    courseSlug: "hr-ethical-work-practices",
    sections: [
      {
        heading: "Culture is the decision you repeat",
        body: [
          "An ethics statement does not create a culture. The culture is whatever happens the next time a promotion, a warning, a workload dispute, or a complaint has to be decided. People learn the real rules from those moments.",
          "If similar cases produce different outcomes depending on who is involved, the organisation has already taught people that fairness is optional. Ethical HR work is the discipline of making those outcomes explainable.",
        ],
      },
      {
        heading: "Transparency is not a town hall",
        body: [
          "Publishing values is easy. Telling a person why a decision was made, what evidence was used, and how they can respond is harder, and it is the part that builds trust. Managers need a simple way to record that explanation so it does not live only in a private conversation.",
          "Inclusion follows the same pattern. It is not a campaign. It is whether the process for hiring, feedback, and opportunity can be described without a special exception for people who already have access.",
        ],
      },
      {
        heading: "Accountability needs a route",
        body: [
          "Concerns die when the only path is to tell the person who caused the problem. A usable route is named, time-bound, and protected from retaliation. Someone other than the line manager has to be able to see the case.",
          "When that route is real, compliance stops being a document and becomes something employees will actually use.",
        ],
      },
    ],
  },
  {
    slug: "leadership-programmes-need-an-operating-model",
    title: "Leadership programmes need an operating model",
    excerpt:
      "A workshop changes very little if people return to the same decisions, the same meetings, and the same unclear ownership. Leadership development has to land in how the organisation runs.",
    date: "2026-06-04",
    readingMinutes: 5,
    topic: "Leadership",
    courseSlug: "hr-organisational-design-development",
    sections: [
      {
        heading: "Training is not the transformation",
        body: [
          "Organisations often commission a leadership programme when the real problem is structural. Roles overlap, decisions sit too high, and performance is discussed only when something has already failed. A classroom cannot repair that on its own.",
          "The useful question before designing content is: what should a leader be able to decide, with whom, and on what evidence, ninety days from now? If that cannot be answered, the programme will produce notes rather than a different organisation.",
        ],
      },
      {
        heading: "Connect people, process, and performance",
        body: [
          "Purpose statements matter when they change what teams are asked to do. People systems matter when they reward the behaviour the strategy needs. Process matters when it removes the work that does not. Performance matters when the measure is something a team can influence.",
          "Profit, in that sequence, is a result of the other four being coherent — not a substitute for them. That is the practical use of a model such as 5P: it stops a leadership programme from being a set of disconnected skills.",
        ],
      },
      {
        heading: "Give the cohort a live problem",
        body: [
          "The programmes that stick are tied to a real operating issue: a restructure, a new market, a service that misses its standard, a team that cannot hire. Participants apply the same tools to that issue, report what changed, and leave a decision record behind.",
          "Without that loop, even a strong academy becomes an event. With it, leadership development and organisational design are the same piece of work.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 2): Post[] {
  return posts.filter((post) => post.slug !== slug).slice(0, limit);
}

const postMonths = {
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  ar: [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ],
  ml: [
    "ജനുവരി",
    "ഫെബ്രുവരി",
    "മാർച്ച്",
    "ഏപ്രിൽ",
    "മേയ്",
    "ജൂൺ",
    "ജൂലൈ",
    "ഓഗസ്റ്റ്",
    "സെപ്റ്റംബർ",
    "ഒക്ടോബർ",
    "നവംബർ",
    "ഡിസംബർ",
  ],
} as const;

export function formatPostDate(
  iso: string,
  locale: keyof typeof postMonths = "en",
): string {
  const months = postMonths[locale] ?? postMonths.en;
  const [year, month, day] = iso.split("-");
  return `${Number(day)} ${months[Number(month) - 1]} ${year}`;
}
