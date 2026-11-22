export const CONTACT_EMAIL = 'amratanshkhare01@gmail.com';

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why Me', href: '#why-me' },
  { label: 'Contact', href: `mailto:${CONTACT_EMAIL}` },
];

export const ABOUT_TAGS = [
  'Frontend Engineer',
  'React & ES6+ Builder',
  'SIH 2026 Participant',
  'Hardware & Verilog Learner',
];

export const SKILL_COLUMNS = [
  {
    heading: 'TECH & DEV',
    items: [
      { label: 'React.js (learning)', icon: 'atom' },
      { label: 'JavaScript (learning)', icon: 'code-2' },
      { label: 'HTML5 / CSS3', icon: 'layout' },
      { label: 'Data Structures', icon: 'binary' },
    ],
  },
  {
    heading: 'DESIGN & PLATFORMS',
    items: [
      { label: 'Vercel Deployment', icon: 'rocket' },
      { label: 'Git & GitHub (learning)', icon: 'git-branch' },
    ],
  },
  {
    heading: 'SOFT SKILLS',
    items: [
      { label: 'Bilingual Content (EN / HI)', icon: 'languages' },
      { label: 'Team Collaboration', icon: 'users' },
      { label: 'Fast Learning', icon: 'zap' },
      { label: 'Technical Communication', icon: 'presentation' },
    ],
  },
];

export const SERVICES = [
  {
    title: 'Frontend Web Development',
    description:
      'Responsive, fast-loading websites and React interfaces built with semantic HTML5, modern CSS3, and clean JavaScript—ready for Vercel deployment.',
    icon: 'globe',
  },
  {
    title: 'Interactive Prototypes & MVPs',
    description:
      'Functional hackathon and startup prototypes with clear user flows, interactive components, and rapid iteration from concept to live demo.',
    icon: 'layers',
  },
  {
    title: 'Bespoke Micro-Apps & Tributes',
    description:
      'Custom multi-section web experiences featuring dynamic photo galleries, timeline layouts, smooth animations, and tailored audio integration.',
    icon: 'sparkles',
  },
  {
    title: 'Bilingual & Localized Web UI',
    description:
      'Human-centric interfaces supporting English and Hindi audiences, structured navigation, and clear visual hierarchy across mobile and desktop.',
    icon: 'languages',
  },
];

export const PROJECTS = [
  {
    id: 'guidex',
    badge: 'Local Heritage & Tourism',
    pill: 'Live Concept',
    icon: 'map-pin',
    cardTitle: 'GuideX — Local Heritage & Tourism',
    cardDescription:
      'Web-based local tourism guide delivering curated city insights for Delhi, Noida, Gurugram, and Vrindavan with bilingual EN/HI support.',
    cardTags: ['HTML5', 'CSS3', 'JavaScript'],
    title: 'GuideX — Local Heritage & Tourism Platform',
    overview:
      'A web-based local tourism guide delivering curated city insights for Indian destinations including Delhi, Noida, Gurugram, and Vrindavan.',
    highlights: [
      'Bilingual interface supporting both English and Hindi visitors',
      'Dedicated city pages with integrated local asset mapping',
      'Responsive, human-centric layout built without heavy frameworks',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
  },
  {
    id: 'kisanq',
    badge: 'Smart India Hackathon 2026 · PS 26032',
    pill: 'SIH 2026',
    icon: 'sprout',
    cardTitle: 'KisanQ — Agri Procurement Platform',
    cardDescription:
      'Built for Smart India Hackathon 2026 (PS 26032) to streamline agricultural procurement with a React prototype and IVR concepts.',
    cardTags: ['React', 'Vercel', 'UI Flows'],
    title: 'KisanQ — Agricultural Procurement Platform',
    overview:
      'Developed for Smart India Hackathon 2026 (Problem Statement 26032) to streamline agricultural procurement coordination for farmers and buyers.',
    highlights: [
      'Functional React frontend prototype with interactive user flows',
      'Integrated IVR architecture concepts for accessible farmer onboarding',
      'Streamlined deployment workflow hosted on Vercel',
    ],
    stack: ['React', 'JavaScript', 'CSS3', 'Vercel'],
  },
  {
    id: 'microapps',
    badge: 'Custom Interactive Web Apps',
    pill: 'Custom Build',
    icon: 'music',
    cardTitle: 'Interactive Tributes & Micro-Apps',
    cardDescription:
      'Bespoke multi-section interactive web apps featuring custom .mp3 audio handling, dynamic photo galleries, and responsive timelines.',
    cardTags: ['HTML5', 'CSS3', 'Audio UI'],
    title: 'Interactive Web Tributes & Micro-Apps',
    overview:
      'Designed and deployed bespoke, multi-section interactive web applications tailored for personal and peer milestones.',
    highlights: [
      'Custom .mp3 audio handling and playback controls',
      'Dynamic photo gallery components with responsive timeline layouts',
      'Hand-crafted CSS animations without generic template boilerplates',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Custom Audio UI'],
  },
];

export const WHY_ME_CARDS = [
  {
    title: 'Foundations in AI Engineering',
    description:
      'Pursuing B.Tech CSE at Bennett University with strong foundations in AI engineering, Data Structures, applied mathematics, and modern software problem-solving.',
    icon: 'graduation-cap',
  },
  {
    title: 'Hackathon & Summit Exposure',
    description:
      'Built KisanQ for Smart India Hackathon 2026 and engaged in the 3rd Global AI Summit 2026 (AISUMMIT-2026) co-sponsored by IEEE USA & IEEE UP Section.',
    icon: 'award',
  },
  {
    title: 'Clean, Shipped Execution',
    description:
      'Focused on custom, boilerplate-free frontend architecture that goes smoothly from prototype to live deployment on Vercel.',
    icon: 'zap',
  },
];

export const HIGHLIGHTS = [
  {
    id: 'sih-2026',
    badge: 'National Hackathon · PS 26032',
    title: 'SIH 2026',
    description:
      'Built KisanQ for Smart India Hackathon 2026, designing a React-based agricultural procurement prototype with streamlined user flows and IVR accessibility concepts.',
    tags: ['Smart India Hackathon', 'KisanQ Prototype'],
    uploadLabel: 'Add SIH 2026 Photo',
  },
  {
    id: 'ai-summit',
    badge: 'IEEE USA & IEEE UP Section',
    title: 'Global AI Summit 2026',
    description:
      'Participated in the 3rd Global AI Summit 2026 (AISUMMIT-2026) at Bennett University, exploring applied AI engineering, research sessions, and emerging developer workflows.',
    tags: ['AISUMMIT-2026', 'Bennett University'],
    uploadLabel: 'Add Summit Photo',
  },
];