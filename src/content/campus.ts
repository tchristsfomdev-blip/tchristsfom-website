export type CampusSection = {
  title: string;
  body?: string;
  items?: string[];
};

export type CampusPage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  headline: string;
  lead: string;
  overview: string;
  highlightsTitle: string;
  highlights: string[];
  sections: CampusSection[];
  ctaTitle: string;
  ctaBody: string;
};

const en: CampusPage[] = [
  {
    slug: "swimming-pool",
    title: "Swimming Pool",
    metaTitle: "Swimming Pool in Perinchery, Thrissur",
    description:
      "State-of-the-art swimming pool at TchristsFoM International Wellness & Leadership Academy in Perinchery, Thrissur.",
    eyebrow: "Perinchery, Thrissur",
    headline: "State-of-the-Art Swimming Pool Facility in Perinchery, Thrissur",
    lead: "Dive into health, fitness, and essential life skills",
    overview:
      "Welcome to the premium swimming pool facility at TchristsFoM International Wellness & Leadership Academy in Perinchery, Thrissur. Designed for individuals, families, and fitness enthusiasts, our modern aquatic facility offers a safe, hygienic, and invigorating environment to master swimming, stay fit, and relax. Whether you are looking for professional swimming instruction, low-impact cardio workouts, or quality recreational time with your family, our pool provides the setting for all age groups.",
    highlightsTitle: "Why choose the TchristsFoM swimming facility?",
    highlights: [
      "Learn a vital life skill: structured guidance for beginners and advanced swimmers across all age groups.",
      "Hygienic and safe environment: high-standard water filtration systems and safe poolside management.",
      "Low-impact full-body workout: build muscle tone, improve cardiovascular health, and burn calories with joint-friendly exercise.",
      "Integrated sports and wellness campus: pair swimming with the gym, pickleball court, football turf, and box cricket facilities.",
    ],
    sections: [
      {
        title: "Swimming programs and facilities",
        items: [
          "Beginner swimming lessons: step-by-step coaching to build water confidence and technique for children and adults.",
          "Fitness and lap swimming: dedicated lanes for daily fitness routines and athletic endurance training.",
          "Family recreation: a secure and welcoming environment for leisure and active family time.",
        ],
      },
    ],
    ctaTitle: "Ready to make a splash?",
    ctaBody:
      "Visit the TchristsFoM campus or contact us to learn about pool memberships and batch timings.",
  },
  {
    slug: "gym",
    title: "Gym & Fitness Center",
    metaTitle: "Modern Gym & Wellness Center in Perinchery, Thrissur",
    description:
      "Modern gym and wellness center at TchristsFoM International Wellness & Leadership Academy in Perinchery, Thrissur.",
    eyebrow: "Perinchery, Thrissur",
    headline: "Modern Gym & Fitness Center in Perinchery, Thrissur",
    lead: "Transform your mind, body, and lifestyle",
    overview:
      "Achieve peak physical condition at the modern gym facility of TchristsFoM International Wellness & Leadership Academy. Grounded in the value that organizations and communities grow when people grow, the facility offers conditioning space designed to elevate personal vitality and overall health. Whether the goal is weight loss, strength building, athletic improvement, or cardiovascular health, the facility offers the tools, community, and foundation you need.",
    highlightsTitle: "Key highlights",
    highlights: [
      "Advanced workout equipment: strength training machines, free weights, functional equipment, and cardio machinery.",
      "Holistic lifestyle coaching: guided programs designed to build sustainable health and physical resilience.",
      "Internationally recognized standards: backed by global wellness certification pathways (NCFE UK, CPD UK, RABG Academy, SKANDA).",
      "All-in-one sports ecosystem: swimming, football turf, box cricket, and pickleball under one roof.",
    ],
    sections: [
      {
        title: "Benefits of joining",
        items: [
          "Tailored workouts for every age: conditioning suited for beginners, youth, corporate professionals, and seniors.",
          "Community-driven environment: a supportive, family-friendly setting that helps keep you accountable.",
          "Comprehensive wellness focus: routines that balance mental discipline, physical strength, and energy.",
        ],
      },
    ],
    ctaTitle: "Train at the TchristsFoM campus",
    ctaBody:
      "Contact us to ask about gym memberships, coaching, and how the wellness campus fits your routine.",
  },
];

const ar: Record<string, Partial<CampusPage>> = {
  "swimming-pool": {
    title: "مسبح",
    metaTitle: "مسبح في بيرينشيري، ثريسور",
    description:
      "مسبح حديث في أكاديمية TchristsFoM الدولية للعافية والقيادة في بيرينشيري، ثريسور.",
    eyebrow: "بيرينشيري، ثريسور",
    headline: "مسبح حديث في بيرينشيري، ثريسور",
    lead: "الصحة واللياقة ومهارة حياتية أساسية",
    overview:
      "أهلاً بكم في مسبح أكاديمية TchristsFoM الدولية للعافية والقيادة في بيرينشيري، ثريسور. صُمم للأفراد والعائلات وعشاق اللياقة، ويوفر بيئة آمنة وصحية لتعلّم السباحة والحفاظ على اللياقة والاسترخاء. سواء كنتم تبحثون عن تعليم احترافي أو تمارين قلبية منخفضة الضغط أو وقت عائلي، فالمسبح مناسب لكل الأعمار.",
    highlightsTitle: "لماذا مسبح TchristsFoM؟",
    highlights: [
      "مهارة حياتية أساسية: إرشاد منظم للمبتدئين والمتقدمين من كل الأعمار.",
      "بيئة صحية وآمنة: أنظمة تنقية مياه بمعايير عالية وإدارة آمنة لحوض السباحة.",
      "تمرين لكامل الجسم منخفض الضغط: بناء العضلات وتحسين صحة القلب وحرق السعرات بلطف على المفاصل.",
      "حرم رياضي متكامل: اربطوا السباحة بالصالة الرياضية والبيكلبول وملعب كرة القدم وكريكيت الصندوق.",
    ],
    sections: [
      {
        title: "برامج ومرافق السباحة",
        items: [
          "دروس للمبتدئين: تدريب خطوة بخطوة لبناء الثقة في الماء والتقنية للأطفال والبالغين.",
          "اللياقة وسباحة المسافات: مسارات مخصصة للروتين اليومي وتدريب التحمل.",
          "ترفيه عائلي: بيئة آمنة ومرحّبة للترفيه والوقت العائلي النشط.",
        ],
      },
    ],
    ctaTitle: "هل أنتم مستعدون؟",
    ctaBody: "زوروا حرم TchristsFoM أو تواصلوا معنا لمعرفة العضويات ومواعيد الدفعات.",
  },
  gym: {
    title: "صالة رياضية ومركز لياقة",
    metaTitle: "صالة رياضية ومركز عافية حديث في بيرينشيري، ثريسور",
    description:
      "صالة رياضية ومركز عافية حديث في أكاديمية TchristsFoM الدولية للعافية والقيادة في بيرينشيري، ثريسور.",
    eyebrow: "بيرينشيري، ثريسور",
    headline: "صالة رياضية ومركز لياقة حديث في بيرينشيري، ثريسور",
    lead: "حوّلوا العقل والجسم وأسلوب الحياة",
    overview:
      "بلّغوا أفضل حالة بدنية في الصالة الرياضية الحديثة لأكاديمية TchristsFoM الدولية للعافية والقيادة. ينطلق المكان من قيمة أن المؤسسات والمجتمعات تنمو حين ينمو الناس، ويوفر مساحة تكييف ترفع الحيوية والصحة. سواء كان الهدف إنقاص الوزن أو بناء القوة أو التحسن الرياضي أو صحة القلب، فالمكان يوفر الأدوات والمجتمع والأساس.",
    highlightsTitle: "أبرز المزايا",
    highlights: [
      "معدات متقدمة: أجهزة قوة وأوزان حرة ومعدات وظيفية وأجهزة كارديو.",
      "تدريب نمط حياة متكامل: برامج موجهة لبناء صحة مستدامة ومرونة بدنية.",
      "معايير معترف بها دولياً: مسارات اعتماد عالمية (NCFE UK وCPD UK وRABG Academy وSKANDA).",
      "منظومة رياضية واحدة: سباحة وملعب كرة قدم وكريكيت صندوق وبيكلبول تحت سقف واحد.",
    ],
    sections: [
      {
        title: "فوائد الانضمام",
        items: [
          "تمارين لكل عمر: تكييف للمبتدئين والشباب والمهنيين وكبار السن.",
          "بيئة مجتمعية: مكان داعم وصديق للعائلة يساعد على الالتزام.",
          "تركيز شامل على العافية: روتين يوازن الانضباط الذهني والقوة البدنية والطاقة.",
        ],
      },
    ],
    ctaTitle: "تدرّبوا في حرم TchristsFoM",
    ctaBody: "تواصلوا معنا بخصوص العضويات والتدريب وكيف يناسبكم حرم العافية.",
  },
};

const ml: Record<string, Partial<CampusPage>> = {
  "swimming-pool": {
    title: "നീന്തൽക്കുളം",
    metaTitle: "പെരിഞ്ചേരി, തൃശ്ശൂരിലെ നീന്തൽക്കുളം",
    description:
      "പെരിഞ്ചേരി, തൃശ്ശൂരിലെ TchristsFoM ഇന്റർനാഷണൽ വെൽനസ് & ലീഡർഷിപ്പ് അക്കാദമിയിലെ ആധുനിക നീന്തൽക്കുളം.",
    eyebrow: "പെരിഞ്ചേരി, തൃശ്ശൂർ",
    headline: "പെരിഞ്ചേരി, തൃശ്ശൂരിലെ അത്യാധുനിക നീന്തൽക്കുളം",
    lead: "ആരോഗ്യം, ഫിറ്റ്നസ്, അത്യാവശ്യ ജീവിത നൈപുണ്യം",
    overview:
      "പെരിഞ്ചേരിയിലെ TchristsFoM ഇന്റർനാഷണൽ വെൽനസ് & ലീഡർഷിപ്പ് അക്കാദമിയിലെ പ്രീമിയം നീന്തൽക്കുളത്തിലേക്ക് സ്വാഗതം. വ്യക്തികൾക്കും കുടുംബങ്ങൾക്കും ഫിറ്റ്നസ് പ്രേമികൾക്കും വേണ്ടി രൂപകൽപ്പന ചെയ്ത ഈ ആധുനിക ജലസൗകര്യം നീന്തൽ പഠിക്കാനും ഫിറ്റായി തുടരാനും വിശ്രമിക്കാനും സുരക്ഷിതവും ശുചിത്വമുള്ളതുമായ അന്തരീക്ഷം നൽകുന്നു. പ്രൊഫഷണൽ പരിശീലനമോ കുറഞ്ഞ ആഘാതമുള്ള കാർഡിയോയോ കുടുംബത്തോടൊപ്പമുള്ള സമയമോ ആകട്ടെ, എല്ലാ പ്രായക്കാർക്കും ഈ കുളം അനുയോജ്യമാണ്.",
    highlightsTitle: "TchristsFoM നീന്തൽ സൗകര്യം എന്തുകൊണ്ട്?",
    highlights: [
      "അത്യാവശ്യ ജീവിത നൈപുണ്യം: എല്ലാ പ്രായക്കാർക്കും തുടക്കക്കാർക്കും പ്രാവീണ്യമുള്ളവർക്കും ഘടനാപരമായ മാർഗനിർദേശം.",
      "ശുചിത്വവും സുരക്ഷയും: ഉയർന്ന നിലവാരത്തിലുള്ള ജല ശുദ്ധീകരണവും സുരക്ഷിതമായ കുളക്കര മാനേജ്‌മെന്റും.",
      "കുറഞ്ഞ ആഘാതമുള്ള പൂർണ്ണ ശരീര വ്യായാമം: പേശി ടോൺ, ഹൃദയാരോഗ്യം, കലോറി ചെലവ് — സന്ധികൾക്ക് സൗമ്യമായി.",
      "സംയോജിത കായിക ക്യാമ്പസ്: ജിം, പിക്കിൾബോൾ, ഫുട്ബോൾ ടർഫ്, ബോക്സ് ക്രിക്കറ്റ് എന്നിവയോടൊപ്പം നീന്തൽ.",
    ],
    sections: [
      {
        title: "നീന്തൽ പരിപാടികളും സൗകര്യങ്ങളും",
        items: [
          "തുടക്കക്കാർക്കുള്ള പാഠങ്ങൾ: കുട്ടികൾക്കും മുതിർന്നവർക്കും ജല ആത്മവിശ്വാസവും സാങ്കേതികതയും വളർത്തുന്ന ഘട്ടം ഘട്ടമായുള്ള പരിശീലനം.",
          "ഫിറ്റ്നസ് & ലാപ് നീന്തൽ: ദൈനംദിന ഫിറ്റ്നസിനും സഹിഷ്ണുത പരിശീലനത്തിനും പ്രത്യേക ലെയ്നുകൾ.",
          "കുടുംബ വിനോദം: വിശ്രമത്തിനും സജീവ കുടുംബ സമയത്തിനും സുരക്ഷിതവും സ്വാഗതാർഹവുമായ അന്തരീക്ഷം.",
        ],
      },
    ],
    ctaTitle: "നീന്താൻ തയ്യാറാണോ?",
    ctaBody:
      "പൂൾ അംഗത്വങ്ങളും ബാച്ച് സമയങ്ങളും അറിയാൻ TchristsFoM ക്യാമ്പസ് സന്ദർശിക്കുകയോ ഞങ്ങളെ ബന്ധപ്പെടുകയോ ചെയ്യുക.",
  },
  gym: {
    title: "ജിം & ഫിറ്റ്നസ് സെന്റർ",
    metaTitle: "പെരിഞ്ചേരി, തൃശ്ശൂരിലെ ആധുനിക ജിം & വെൽനസ് സെന്റർ",
    description:
      "പെരിഞ്ചേരി, തൃശ്ശൂരിലെ TchristsFoM ഇന്റർനാഷണൽ വെൽനസ് & ലീഡർഷിപ്പ് അക്കാദമിയിലെ ആധുനിക ജിം.",
    eyebrow: "പെരിഞ്ചേരി, തൃശ്ശൂർ",
    headline: "പെരിഞ്ചേരി, തൃശ്ശൂരിലെ ആധുനിക ജിം & ഫിറ്റ്നസ് സെന്റർ",
    lead: "മനസ്സും ശരീരവും ജീവിതശൈലിയും മാറ്റുക",
    overview:
      "TchristsFoM ഇന്റർനാഷണൽ വെൽനസ് & ലീഡർഷിപ്പ് അക്കാദമിയിലെ ആധുനിക ജിമ്മിൽ ഉച്ചസ്ഥായിയിലുള്ള ശാരീരിക നില കൈവരിക്കുക. ആളുകൾ വളരുമ്പോൾ സ്ഥാപനങ്ങളും സമൂഹങ്ങളും വളരുന്നു എന്ന മൂല്യത്തിലാണ് ഈ സൗകര്യം. ശരീരഭാരം കുറയ്ക്കൽ, ശക്തി വർധന, കായിക മെച്ചപ്പെടുത്തൽ, ഹൃദയാരോഗ്യം എന്നിവയിൽ ഏതായാലും ഉപകരണങ്ങളും സമൂഹവും അടിത്തറയും ഇവിടെയുണ്ട്.",
    highlightsTitle: "പ്രധാന സവിശേഷതകൾ",
    highlights: [
      "നൂതന ഉപകരണങ്ങൾ: സ്ട്രെങ്ത് മെഷീനുകൾ, ഫ്രീ വെയ്റ്റുകൾ, ഫംഗ്ഷണൽ ഉപകരണങ്ങൾ, കാർഡിയോ യന്ത്രങ്ങൾ.",
      "സമഗ്ര ജീവിതശൈലി കോച്ചിംഗ്: സുസ്ഥിര ആരോഗ്യത്തിനും ശാരീരിക ക്ഷമതയ്ക്കും മാർഗനിർദേശ പരിപാടികൾ.",
      "അന്താരാഷ്ട്രമായി അംഗീകരിക്കപ്പെട്ട മാനദണ്ഡങ്ങൾ: NCFE UK, CPD UK, RABG Academy, SKANDA.",
      "ഒറ്റക്കൂരയ്ക്ക് കീഴിലുള്ള കായിക വ്യവസ്ഥ: നീന്തൽ, ഫുട്ബോൾ ടർഫ്, ബോക്സ് ക്രിക്കറ്റ്, പിക്കിൾബോൾ.",
    ],
    sections: [
      {
        title: "ചേരുന്നതിന്റെ ഗുണങ്ങൾ",
        items: [
          "എല്ലാ പ്രായത്തിനും യോജിച്ച വ്യായാമം: തുടക്കക്കാർ, യുവാക്കൾ, കോർപ്പറേറ്റ് പ്രൊഫഷണലുകൾ, മുതിർന്നവർ.",
          "സമൂഹാധിഷ്ഠിത അന്തരീക്ഷം: ഉത്തരവാദിത്തം നിലനിർത്താൻ സഹായിക്കുന്ന കുടുംബസൗഹൃദ ക്രമീകരണം.",
          "സമഗ്ര വെൽനസ്: മാനസിക അച്ചടക്കം, ശാരീരിക ശക്തി, ഊർജം എന്നിവ സന്തുലിതമാക്കുന്ന ദിനചര്യകൾ.",
        ],
      },
    ],
    ctaTitle: "TchristsFoM ക്യാമ്പസിൽ പരിശീലിക്കുക",
    ctaBody:
      "ജിം അംഗത്വം, കോച്ചിംഗ്, വെൽനസ് ക്യാമ്പസ് നിങ്ങളുടെ ദിനചര്യയ്ക്ക് എങ്ങനെ യോജിക്കും എന്നിവ അറിയാൻ ബന്ധപ്പെടുക.",
  },
};

function mergePage(
  base: CampusPage,
  overlay: Partial<CampusPage> | undefined,
): CampusPage {
  if (!overlay) {
    return base;
  }
  return {
    ...base,
    ...overlay,
    sections: overlay.sections ?? base.sections,
    highlights: overlay.highlights ?? base.highlights,
  };
}

export function getCampusPages(locale: string): CampusPage[] {
  const overlay = locale === "ar" ? ar : locale === "ml" ? ml : null;
  if (!overlay) {
    return en;
  }
  return en.map((page) => mergePage(page, overlay[page.slug]));
}

export function getCampusPage(locale: string, slug: string): CampusPage | undefined {
  return getCampusPages(locale).find((page) => page.slug === slug);
}
