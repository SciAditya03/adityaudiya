// ============================================================
// All portfolio copy & structured content lives here so section
// components stay purely presentational and content can be edited
// in one place without touching JSX/markup.
// ============================================================

import { asset } from './helpers';

export const SITE = {
  name: 'Aditya Udiya',
  title: 'Aditya Udiya - AI Engineer, Researcher, Founder',
  email: 'adityaudiya03@gmail.com',
  phone: '+91 62607 66793',
  phoneHref: 'tel:+916260766793',
  linkedin: 'https://www.linkedin.com/in/adityaudiya337315/',
  github: 'https://github.com/SciAditya03',
  location: 'Indore, Madhya Pradesh, India',
  year: 2026,
};

export const NAV_LINKS = [
  { label: 'EDUCATION', href: '#education' },
  { label: 'WORK', href: '#work' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'WINS', href: '#hackathons' },
  { label: 'CONTACT', href: '#contact' },
];

// Identity tags, split into marquee rows. Each row scrolls independently —
// direction and speed are set in HERO_MARQUEE_ROWS below.
export const HERO_TAG_ROWS = [
  [
    { label: 'The Problem Solver', target: '#experience' },
    { label: 'The Builder', target: '#work' },
    { label: 'The Researcher', target: '#work' },
    { label: 'The Leader', target: '#experience' },
    { label: 'The Executor', target: '#work' },
    { label: 'Ex-Founder', target: '#startup' },
  ],
  [
    { label: 'National Winner', target: '#hackathons', muted: true },
    { label: 'National Finalist', target: '#hackathons', muted: true },
    { label: '6× Hackathon Winner', target: '#hackathons', muted: true },
    { label: '2× Best Fresher Award', target: '#hackathons', muted: true },
    { label: '24+ Hackathons', target: '#hackathons', muted: true },
  ],
  [
    { label: 'Applied AI Engineer', target: '#experience' },
    { label: 'RAG Architect', target: '#experience' },
    { label: 'Gen AI Developer', target: '#work' },
    { label: 'Software Programmer', target: '#work' },
    { label: 'Team Lead, 20+ Teams', target: '#experience' },
    { label: 'Product Manager', target: '#startup' },
  ],
  [
    { label: 'Telemetry Systems', target: '#experience', muted: true },
    { label: 'Consistent Performer', target: '#experience', muted: true },
    { label: 'User-Centric Research', target: '#impact', muted: true },
    { label: 'Pragmatic Builder', target: '#work', muted: true },
    { label: 'SOTA Benchmark Achiever', target: '#work', muted: true },
    { label: 'Field Researcher', target: '#impact', muted: true },
    { label: 'Researcher', target: '#work', muted: true },
  ],
];

// Per-row marquee motion. Varying duration is what creates the parallax
// feel — rows drift past each other rather than moving as one block.
export const HERO_MARQUEE_ROWS = [
  { direction: 'left', duration: 68 },
  { direction: 'right', duration: 54 },
  { direction: 'left', duration: 80 },
  { direction: 'right', duration: 60 },
];

export const HERO_CONTENT = {
  topLabel: 'AI ENGINEER / RESEARCHER / FOUNDER',
  name: 'ADITYA UDIYA',
  photo: { src: asset('images/profile.jpg'), alt: 'Aditya Udiya', caption: 'images/profile.jpg' },
  tagline: {
    lead: 'Building production-grade AI systems, leading high-performance teams, solving real-world problems.',
  },
  stats: [
    { value: '20+', label: 'Teams Led' },
    { value: '6×', label: 'Hackathon Wins' },
    { value: '90%+', label: 'Advancement Rate' },
  ],
  ctas: [
    { label: 'Explore Work', target: '#work', primary: true },
    { label: 'Contact Me', target: '#contact' },
  ],
  scrollHint: 'SCROLL',
};

export const EDUCATION = {
  institution: 'Vellore Institute of Technology',
  location: 'Vellore, Tamil Nadu, India',
  degree: 'B.Tech, Computer Science and Engineering',
  specialization: 'Specialization in Data Science',
  years: '2024 - 2028',
  logo: { src: asset('images/logos/vit.jpg'), alt: 'VIT logo', caption: 'logos/vit.jpg' },
};

export const SKILL_GROUPS = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'Java' },
      { name: 'C' },
      { name: 'TypeScript' },
      { name: 'C++' },
    ],
  },
  {
    title: 'AI / ML & Concepts',
    skills: [
      { name: 'Machine Learning' },
      { name: 'Deep Learning' },
      { name: 'Generative AI' },
      { name: 'LLMs' },
      { name: 'RAG' },
      { name: 'Prompt Engineering' },
      { name: 'AI Agents' },
      { name: 'NLP' },
      { name: 'Transformer Architectures' },
      { name: 'Model Alignment' },
      { name: 'Continual Learning' },
      { name: 'Molecular AI' },
    ],
  },
  {
    title: 'Frameworks & Tools',
    skills: [
      { name: 'PyTorch' },
      { name: 'React.js' },
      { name: 'Docker' },
      { name: 'Git' },
      { name: 'MATLAB' },
      { name: 'Flask' },
      { name: 'ChemBERTa' },
      { name: 'RDKit' },
      { name: 'Simulink' },
      { name: 'Altair' },
      { name: 'Playwright' },
      { name: 'N8N' },
      { name: 'Automation Testing' },
    ],
  },
];

export const PROJECTS = [
  {
    id: 'gcs',
    meta: 'Project 01',
    title: 'Ground Control Software',
    repo: 'https://github.com/SciAditya03/ground-control-dashboard',
    techTags: ['React.js', 'Telemetry', 'GPS', '3D Mapping'],
    image: { src: asset('images/projects/gcs.png'), alt: 'Ground Control Software', caption: 'projects/gcs.png' },
    paragraphs: [
      'Real-time avionics mission control for SRAD rocket and UAV operations - live sensor dashboards, GPS integration, and 3D trajectory mapping.',
      'Delivered a production-ready system in 2 months against a 5-month timeline, 60% ahead of schedule, with a real-time telemetry pipeline for mission-critical data.',
    ],
    stats: [
      { label: 'Delivery', value: '60% Ahead of Schedule' },
      { label: 'Recognition', value: 'National Winner, Cyber Deck' },
      { label: 'Domain', value: 'Avionics / UAV' },
    ],
  },
  {
    id: 'aroham',
    meta: 'Project 02',
    title: 'AI Rockfall Prediction',
    repo: 'https://github.com/SciAditya03/Aroham-SIH',
    techTags: ['Python', 'Scikit-learn', 'Flask', 'IoT Edge'],
    image: { src: asset('images/projects/aroham.jpg'), alt: 'Aroham Rockfall Prediction', caption: 'projects/aroham.jpg' },
    paragraphs: [
      'Developed an early warning system for open pit mines using a custom built dataset, advanced feature engineering, and machine learning models achieving ~97% prediction accuracy.',
      'Cloud and edge deployable backend with real-time alerts and dashboards, shortlisted among 400+ teams in the Smart India Hackathon 2025 internal evaluation, under mentorship from Prof. Sunil Kumar (ISM Dhanbad).',
    ],
    stats: [
      { label: 'Accuracy', value: '~97%' },
      { label: 'Competition', value: 'SIH 2025' },
      { label: 'Mentor', value: 'Prof. Sunil Kumar' },
    ],
  },
];

export const STATS = [
  { label: 'Teams Led', value: 20, suffix: '+', counter: true },
  { label: 'Hackathon Wins', value: 6, suffix: '×', counter: true },
  { label: 'Advancement Rate', value: 90, suffix: '%', counter: true },
  { label: 'Best Fresher Awards', value: 2, suffix: '×', counter: false },
  { label: 'National Winner', value: 1, suffix: '×', counter: false },
  { label: 'National Finalist', value: 1, suffix: '×', counter: false },
];

export const EXPERIENCE = [
  {
    id: 'governai',
    date: 'Dec 2025 - Jun 2026',
    location: 'Remote',
    company: 'GovernAI',
    role: 'Applied AI Engineer Intern',
    bullets: [
      'Architected and deployed a production-grade Finance AI chatbot for the Government of Himachal Pradesh, integrating citation-backed RAG pipelines over regulatory datasets to automate financial compliance workflows.',
      "Contributed to the architecture of GovernAI's flagship AI Compliance Model, defining governance workflows across AI Registry & Discovery, Risk Intelligence, Compliance Engine, Runtime Monitoring, and Knowledge Graphs, collaborating directly with Ashish Vaidya (Principal Research Engineer, Microsoft; Ex-Amazon).",
      'Led a team of Interns, planned task distribution, and mentored technical implementation for the end-to-end architecture of 2 open-source AI/ML projects, ensuring on-time delivery.',
      'Co-delivered a live AI training session to senior CPWD officers, Government of India.',
    ],
  },
  {
    id: 'lazyintern',
    date: 'May 2026 - Jun 2026',
    location: 'Remote',
    company: 'LazyIntern Innovations',
    role: 'Automation Testing Engineer Intern',
    bullets: [
      'Developed automated and functional test cases for AI-powered web applications using Playwright, identifying defects and resolving a critical Broken Access Control vulnerability pre-deployment.',
      'Expanded into core product development, building an AI-powered recruiter search engine enabling natural-language candidate discovery and intelligent ranking.',
      'Automated LinkedIn content publishing via n8n workflows.',
    ],
  },
  {
    id: 'vca-lab',
    date: 'May 2025 - Aug 2025',
    location: 'IIT (BHU) Varanasi',
    company: 'VCA Lab, IIT (BHU)',
    role: 'Research Intern, AI/ML',
    bullets: [
      'Designed and implemented MTL-ChemILR, integrating ChemBERTa encoders, adaptive rectifiers, and attention-based feature blending for task-incremental molecular property prediction.',
      'Delivered in 3 months against a 6-month expected timeline, achieving State-of-the-Art performance on the BBBP, Bitter, and Sweet benchmarks using SMILES descriptors and RDKit features.',
      'Co-authored and submitted a research paper to ACM CODS-COMAD 2025, bridging Continual Learning, Molecular AI, and Representation Stability.',
    ],
  },
  {
    id: 'angel-twin',
    date: 'Dec 2025 - Jan 2026',
    location: 'Bangalore / Remote',
    company: 'Angel Twin',
    role: 'Biomedical Modeling & Simulation Intern',
    bullets: [
      'Simulated a cardiac digital twin focusing on aortic and mitral regurgitation modeling.',
      'Built and validated heart valve models using Altair, MATLAB, Simulink, and SimBiology, deriving governing equations from research literature.',
      'Performed cross-validation of outputs between Altair and MATLAB-based models and documented step-by-step implementation methodology.',
    ],
  },
];

export const STARTUP_EXPERIENCE = [
  {
    id: 'peerhive',
    date: 'May 2025 - Aug 2025',
    location: 'Startup / Vellore',
    company: 'PeerHive',
    role: 'Founder & Tech Lead',
    bullets: [
      'Led a 12-member cross-functional team in the initial development of an AI-powered student platform, managing product planning, frontend development, and chatbot architecture research.',
      'Advanced to the final interview round of GradCapital pre-seed funding within 3 months of founding, distinguishing the startup among a highly competitive cohort.',
    ],
  },
];

export const HACKATHON_PHOTOS = [1, 2, 3, 4].map((n) => ({
  src: asset(`images/hackathons/${n}.jpg`),
  alt: '',
  caption: `hackathons/${n}.jpg`,
}));

const LI = 'https://www.linkedin.com/posts/';

export const HACKATHON_TIERS = [
  {
    title: 'National Level & Major Recognition',
    achievements: [
      {
        num: '01',
        title: 'National Winner - Cyber Deck',
        linkedin: `${LI}adityaudiya337315_avionics-uav-groundcontrolsoftware-activity-7435297837162315776-WK1_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5cyeQBiS7uwqS782p66wdneoNgecLYgTY`,
        description: 'Secured dual awards for developing a React-based real-time Ground Control Software with live sensor dashboards and 3D trajectory mapping. Delivered a production-ready telemetry pipeline for SRAD rocket and UAV mission control under strict deadlines.',
        meta: 'SRAD Rocket / UAV Mission Control',
        image: asset('images/certs/cyber-deck-certificate.jpg'),
      },
      {
        num: '02',
        title: 'National Finalist - Impactify 2025',
        linkedin: `${LI}adityaudiya337315_iitbhu-impactify-arvr-activity-7299281451928190977-23sl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5cyeQBiS7uwqS782p66wdneoNgecLYgTY`,
        description: 'Advanced to national finals by presenting a scalable AR/VR-based medical training platform validated through extensive field research with practicing doctors. Developed a comprehensive product strategy and successfully pitched the solution to industry experts.',
        meta: 'Team FourSight',
        image: asset('images/certs/impactify-certificate.jpeg'),
      },
      {
        num: '03',
        title: 'EY Technathon 6.0',
        linkedin: `${LI}adityaudiya337315_eytechnathon-smartindiahackathon-agenticai-activity-7417521246680076288-3w_a?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5cyeQBiS7uwqS782p66wdneoNgecLYgTY`,
        description: 'Selected among the top 4,667 teams nationwide for developing "Manthana", an agentic AI predictive maintenance platform for commercial fleets. Leveraged Edge AI, LSTM networks, and Digital Twin tech to forecast equipment failures.',
        meta: 'Edge AI / LSTM / Digital Twin',
        image: asset('images/certs/ey-technathon-certificate.jpg'),
      },
      {
        num: '04',
        title: 'Smart India Hackathon 2025',
        linkedin: `${LI}adityaudiya337315_eytechnathon-smartindiahackathon-agenticai-activity-7417521246680076288-3w_a?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5cyeQBiS7uwqS782p66wdneoNgecLYgTY`,
        description: 'Shortlisted among 400+ internal teams for "Aroham", an advanced AI and IoT rockfall prediction system for open-pit mines. Achieved ~97% prediction accuracy using custom datasets and an edge-deployable ML backend.',
        meta: 'Team Aroham',
        image: asset('images/certs/sih-certificate.jpg'),
      },
      {
        num: '05',
        title: 'Health Hackathon 2025',
        linkedin: `${LI}adityaudiya337315_healthhackathon-vitbhopal-jhu-activity-7299319541581406208-6snp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5cyeQBiS7uwqS782p66wdneoNgecLYgTY`,
        description: 'Advanced to Round 2 among 500+ teams by developing "CuraSix", an AI-driven preventive healthcare platform addressing youth mental health and ICU allergies. Validated the solution\'s clinical applicability through field research at Narayani Hospital.',
        meta: 'AI Preventive Healthcare',
        image: asset('images/certs/curasix-certificate.jpeg'),
      },
    ],
  },
  {
    title: 'Institute Level & Notable Competitions',
    achievements: [
      {
        num: '06',
        title: 'Yantra Central Hack 2025',
        linkedin: `${LI}adityaudiya337315_yantrahack-vitvellore-aiforsustainability-activity-7299315412368826369-mu_I?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5cyeQBiS7uwqS782p66wdneoNgecLYgTY`,
        description: 'Achieved Top 6 and Best Fresher Team Award for "Astra", an AI-enhanced sustainable mechanical system optimizing energy efficiency. Integrated ESP32 microcontrollers with custom ML models to automate mechanical processes in real-time.',
        meta: 'ESP32 / ML / Sustainability',
        image: asset('images/certs/yantra-hack-certificate.jpg'),
      },
      {
        num: '07',
        title: 'Yuvamanthan Internal Hackathon 2024',
        linkedin: `${LI}adityaudiya337315_innovation-competition-leadership-activity-7299136897375703040-w7R4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5cyeQBiS7uwqS782p66wdneoNgecLYgTY`,
        description: 'Secured 3rd place among 120+ teams by conceptualizing and building a comprehensive, SDG-aligned solution for sustainable development. Delivered a viable product strategy addressing critical community challenges through rigorous user research.',
        meta: 'Product Management Competition',
        image: asset('images/certs/yuvamanthan-certificate.jpeg'),
      },
      {
        num: '08',
        title: 'Ideathon 2024',
        linkedin: `${LI}adityaudiya337315_ideathon-teamwork-sdg2-activity-7279024359267061760-gsxv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5cyeQBiS7uwqS782p66wdneoNgecLYgTY`,
        description: 'Awarded 2nd Runner Up for developing innovative mobility and sustainability solutions to address urban transportation bottlenecks. Designed a scalable, user-centric platform optimizing route planning and promoting eco-friendly transit options.',
        meta: 'Product Management Competition',
        image: asset('images/certs/ideathon-certificate.jpeg'),
      },
      {
        num: '09',
        title: "Women's Techies Hackathon 2025",
        linkedin: `${LI}adityaudiya337315_womenstechies-gdscvit-geminiai-activity-7318659039494610944-zdok?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5cyeQBiS7uwqS782p66wdneoNgecLYgTY`,
        description: 'Advanced to the final round by building the "VIT Query Chatbot" and an AI-powered exam preparation assistant. Leveraged NLP to provide instant, accurate responses to campus queries and personalized study recommendations.',
        meta: 'Buildathon',
        image: asset('images/certs/womens-techies-certificate.jpg'),
      },
      {
        num: '10',
        title: 'Electrohack',
        linkedin: `${LI}adityaudiya337315_electrohack-vitvellore-ieee-activity-7299300950136033282-GaIX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5cyeQBiS7uwqS782p66wdneoNgecLYgTY`,
        description: 'Honored with the Best Fresher Award for developing a real-time health monitoring wearable band. Integrated advanced biosensors with a microcontroller to continuously track vital signs and transmit data to a mobile app.',
        meta: 'Wearable Health Tech',
        image: asset('images/certs/electrohack-certificate.jpeg'),
      },
      {
        num: '11',
        title: 'Hack2Detect 2025 (KalkiNi)',
        linkedin: `${LI}adityaudiya337315_ai-surveillancetech-hacktodetect-activity-7299330638023680001-wy5y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5cyeQBiS7uwqS782p66wdneoNgecLYgTY`,
        description: 'Received direct recognition from the KALKINI co-founder for architecting an AI-based surveillance system solution. Utilized computer vision and ML algorithms to detect anomalies and security threats in real-time video feeds.',
        meta: 'AI Surveillance',
        image: asset('images/certs/hack2detect-certificate.jpeg'),
      },
      {
        num: '12',
        title: 'DevJams 24 (graVITas 24)',
        linkedin: `${LI}adityaudiya337315_devjam-innovation-teamwork-activity-7279030276062597121-ohbf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5cyeQBiS7uwqS782p66wdneoNgecLYgTY`,
        description: 'Reached the 3rd evaluation round by developing a community-driven neighborhood logistics platform. Optimized last-mile delivery and resource sharing within local communities using a decentralized matching algorithm.',
        meta: 'Community Logistics',
        image: asset('images/certs/devjams-certificate.jpeg'),
      },
      {
        num: '13',
        title: 'IIT Guwahati PMx & Prod Wars 3.0',
        linkedin: `${LI}adityaudiya337315_iitguwahati-encode2025-aiforsales-activity-7299293303110275072-MU4G?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5cyeQBiS7uwqS782p66wdneoNgecLYgTY`,
        description: 'Participated in rigorous product management and case competitions focusing on comprehensive market analysis and user research. Designed end-to-end solutions for complex business cases, strengthening data-driven decision-making skills.',
        meta: 'Product Management Competition',
        image: asset('images/certs/iit-guwahati-certificate.jpg'),
      },
    ],
  },
];

export const CERTIFICATIONS = [
  {
    id: 'iitm-ai-python',
    title: 'Artificial Intelligence with Python',
    issuer: 'E-Cell, IIT Madras',
    logo: asset('images/logos/iitm.png'),
  },
];

export const RESEARCH_QUOTE = {
  intro:
    'Research at IIT (BHU) VCA Lab - bridging Continual Learning, Molecular AI, and Representation Stability. Work submitted to ACM CODS-COMAD 2025.',
  quote:
    'The definition of an engineer is changing. The engineers who will thrive are those who combine technical depth with product thinking, communication, leadership, and execution under pressure.',
  cite: 'Aditya Udiya',
};

export const IMPACT_PHOTOS = [
  { src: asset('images/impact/1.jpg'), alt: 'GovernAI Training', caption: 'impact/1.jpg' },
  { src: asset('images/impact/2.jpg'), alt: 'CuraSix Research', caption: 'impact/2.jpg' },
  { src: asset('images/impact/3.jpg'), alt: 'FourSight Research', caption: 'impact/3.jpg' },
  { src: asset('images/impact/4.jpg'), alt: 'Startup Workshop', caption: 'impact/4.jpg' },
];

export const IMPACT_CARDS = [
  {
  label: 'Industry Speaking & Executive Training',
  title: 'GovernAI Executive Training Programme',
  description:
    'Co-delivered a live AI training session for senior officers of the Central Public Works Department, Government of India, showcasing an Autonomous LiDAR Survey Drone Simulator and an AI-powered Infrastructure Intelligence Platform.',
  outcomeLabel: 'Impact:',
  outcome:
    'Bridged technical AI development and real-world industry adoption for senior engineering decision-makers.',
},
{
  label: 'Field Research',
  title: 'Team CuraSix, Narayani Hospital',
  description:
    'Conducted management-approved field research to identify tech-driven solutions for healthcare gaps, including youth mental health issues and undetected ICU opioid allergies through stakeholder interactions and clinical workflow analysis.',
  outcomeLabel: 'Outcome:',
  outcome:
    'Directly shaped the preventive, tech-driven architecture of the CuraSix AI healthcare platform.',
},
{
  label: 'Field Research',
  title: 'Team FourSight, Narayani Hospital',
  description:
    'Conducted field research validating a scalable AR/VR-integrated healthcare training platform for the IIT BHU Impactify competition through discussions with doctors, interns, and healthcare professionals.',
  outcomeLabel: 'Outcome:',
  outcome:
    'Practicing doctors validated the efficacy of blended learning, strengthening the pitch that led to national finalist status.',
},
{
  label: 'Workshop',
  title: 'Startup Tamil Nadu',
  description:
    'Completed a two-day intensive workshop applying the Empathy Map Canvas, Business Model Canvas, and Six Thinking Hats method to maternal care, rural telemedicine, gamified education, and digital literacy use cases.',
  outcomeLabel: 'Takeaway:',
  outcome:
    'A systematic, user-behavior-first approach to product development.',
},
{
  label: 'Leadership',
  title: 'IIT BHU Varanasi, Jagriti Workshops',
  description:
    'Attended exclusive leadership and strategy sessions with Lt. General Devendra Pratap Pandey, IPS Officer Ashok Kumar, and Ex-Bureaucrat Dr. Tanu Jain, focusing on leadership, governance, and nation-scale innovation.',
  outcomeLabel: 'Takeaway:',
  outcome:
    'Reinforced discipline and structured thinking in scaling technical projects into real-world impact.',
},
];
