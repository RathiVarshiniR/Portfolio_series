/**
 * Central portfolio data — generated from Sushmita's resume (Sushmita_dasari.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Rathi Varshini R',
  displayName: 'Rathi Varshini R',
  firstName: 'RATHI',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A RATHI ORIGINAL',
  role: 'Software Developer',
  tagline: ['Software Developer', 'AI / ML', 'C++', 'Java', 'Python', 'React', 'Node.js', 'Docker'],
  intro:
    'A B.E. Computer Science (Artificial Intelligence & Machine Learning) student (CGPA 8.40) and software developer driven by curiosity, problem-solving, and building impactful technology solutions.',
  location: 'Coimbatore, Tamil Nadu',
  email: 'varshini.rathi.r@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/rathi-varshini-r',
    github: 'https://github.com/RathiVarshiniR',
  },
  resumePdf: '/assets/Rathi_Varshini_R.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Rathi Varshini R',
  },
  interests: ['Artificial Intelligence', 'Cloud Computing (AWS)', 'Machine Learning', 'System Design'],
};

export const education = [
  {
    school: 'KIT-Kalaignarkarunanidhi Institute of Technology',
    place: 'Coimbatore',
    degree: 'Bachelor of Engineering — Artificial Intelligence and Machine Learning',
    period: 'September 2024 – Present',
    score: 'CGPA 8.40',
  },
  {
    school: 'GVK Vidhya Mandhir',
    place: 'Coimbatore',
    degree: 'HSC — Mathematics, Physics and Chemistry',
    period: 'June 2022 – May 2023',
    score: 'Score 1,034/1200',
  },
];

export const experience = [
  {
  company: 'DecodeLabs',
  role: 'Cloud Computing Intern',
  place: 'Lucknow, India',
  period: 'May 2026',
  points: [
    'Independently provisioned four AWS workloads for business scenarios: S3 static hosting, an EC2 web server, a DynamoDB database, and a serverless Lambda API.',
    'Administered an Ubuntu server over SSH, performing system updates, Apache configuration, and service management.',
    'Validated serverless application behaviour and monitored execution logs using AWS CloudWatch.',
  ],
  },
  {
  company: 'Thiranex',
  role: 'Full Stack Developer Intern',
  place: 'Chennai, India',
  period: 'May 2026',
  points: [
    'Independently designed, developed, and deployed four full-stack web applications: a portfolio, task manager, e-commerce platform, and blog.',
    'Built responsive frontend interfaces using React.js and developed backend services using Node.js and Express REST APIs.',
    'Managed end-to-end deployment, hosting React applications on Vercel and Node.js backends on Render.',
  ],
},
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants' | 'cart';
};

export const projects: Project[] = [
  {
  id: 'meaning',
  title: 'Meaning',
  year: '2026',
  genre: 'AI • NLP • RAG',
  logline: 'A hybrid semantic search engine that understands the meaning behind queries and retrieves relevant information using vector and keyword search.',
  stack: [
    'Python',
    'FastAPI',
    'React',
    'FAISS',
    'BM25',
    'Sentence Transformers',
    'RAG'
  ],
  build: [
    'Built an end-to-end semantic search engine that embeds 26,872 customer-support records using all-MiniLM-L6-v2 and retrieves relevant results through a cached FAISS index.',
    'Implemented hybrid ranking by combining normalized semantic and BM25 scores, along with a RAG endpoint that grounds LLM-generated answers in retrieved records.',
    'Developed an evaluation framework using Top-1, Top-3, Mean Reciprocal Rank (MRR), and query latency. Achieved 100% Top-1 accuracy compared to 24% for BM25 on a 25-query labelled test set.'
  ],
  features: [
    'Semantic search using sentence embeddings',
    'FAISS-based vector similarity retrieval',
    'Hybrid semantic and BM25 ranking',
    'RAG-based question answering',
    'Interactive React interface',
    't-SNE embedding visualisation',
    'Search evaluation and latency analysis'
  ],
  metrics: [
    { value: '26,872', label: 'records indexed' },
    { value: '100%', label: 'semantic Top-1 accuracy' },
    { value: '24%', label: 'BM25 Top-1 accuracy' },
    { value: '1.00', label: 'Mean Reciprocal Rank' },
    { value: '~22 ms', label: 'query latency' }
  ],
  github: 'https://github.com/RathiVarshiniR/Semantic-Search-Engine-Project',
  palette: {
    from: '#102a43',
    via: '#245b78',
    to: '#071827',
    accent: '#55c2d9'
  },
  motif: 'flow',
},
  {
  id: 'shopnow',
  title: 'ShopNow',
  year: '2026',
  genre: 'Full-Stack • E-Commerce • MERN',
  logline: 'A full-stack e-commerce platform featuring role-based access, persistent shopping carts, product management and complete order lifecycle handling.',
  stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
  build: [
    'Architected a MERN-based e-commerce platform with JWT role-based authentication for Admin and User accounts, persistent shopping cart, searchable product catalogue with category filtering, sorting and pagination.',
    'Developed an admin dashboard for managing products, orders and users, with a complete order lifecycle covering stock validation, automatic stock deduction, order status updates and cancellation with stock restoration.',
    'Implemented payment-status tracking and server-side 18% GST calculation to support consistent order processing.'
  ],
  features: [
    'JWT-based Admin and User authentication',
    'Persistent shopping cart',
    'Searchable product catalogue',
    'Category filtering, sorting and pagination',
    'Admin dashboard for products, orders and users',
    'Complete order lifecycle management',
    'Automatic stock deduction and restoration',
    'Payment-status tracking and GST calculation'
  ],
  metrics: [
    { value: '2', label: 'user roles' },
    { value: '18%', label: 'server-side GST calculation' },
    { value: '5', label: 'major order stages' }
  ],
  github: 'https://github.com/RathiVarshiniR/E-Commerce-Application',
  palette: {
    from: '#102b25',
    via: '#176b50',
    to: '#071711',
    accent: '#55d6a5'
  },
  motif: 'cart',
},
  {
  id: 'fairshare',
  title: 'FairShare',
  year: '2026',
  genre: 'Full-Stack • Algorithms • Data Management',
  logline: 'A group accountability system that evaluates individual contributions through weighted fairness scoring and structured task management.',
  stack: ['Python', 'Flask', 'SQLite', 'SQLAlchemy'],
  build: [
    'Designed a weighted fairness-scoring algorithm to evaluate individual contributions based on task completion (40%), on-time rate (30%), activity (20%) and peer ratings (10%).',
    'Engineered a normalized seven-table database schema using SQLAlchemy ORM, implementing complete CRUD operations for structured data management.',
    'Secured user authentication and session management using Flask-Login and Werkzeug password hashing.'
  ],
  features: [
    'Weighted fairness-scoring algorithm',
    'Task completion tracking',
    'On-time performance evaluation',
    'Activity-based contribution tracking',
    'Peer rating mechanism',
    'Normalized seven-table database schema',
    'CRUD operations',
    'Secure session-based authentication'
  ],
  metrics: [
    { value: '40%', label: 'task completion weight' },
    { value: '30%', label: 'on-time rate weight' },
    { value: '20%', label: 'activity weight' },
    { value: '10%', label: 'peer rating weight' },
    { value: '7', label: 'database tables' }
  ],
  github: 'https://github.com/RathiVarshiniR/FairShare',
  palette: {
    from: '#172b1c',
    via: '#347347',
    to: '#09140d',
    accent: '#8bd69a'
  },
  motif: 'flow',
},
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'academic-rank',
    title: 'Academic Excellence',
    org: 'KIT-CBE',
    detail: 'Secured a position among the top 5 CGPA holders in the class with an overall CGPA of 8.40/10.',
    laurel: 'Top 5 CGPA Holder',
  },
  {
    id: 'codechef',
    title: 'Competitive Programmer',
    org: 'CodeChef',
    detail: 'Solved 450+ coding problems, building strong problem-solving skills through consistent competitive programming practice.',
    laurel: '450+ Problems Solved',
  },
  {
    id: 'leetcode',
    title: 'Problem Solving Achievement',
    org: 'LeetCode',
    detail: 'Achieved a maximum contest rating of 1637, ranking among the top 19.74% of users globally with 100+ problems solved.',
    laurel: 'Top 19.74% Globally',
  },
  {
    id: 'salesforce',
    title: 'Agentblazer Champion',
    org: 'Salesforce Trailhead',
    detail: 'Completed 48+ Trailhead badges covering platform fundamentals, Agentforce and AI-driven automation.',
    laurel: 'Agentblazer Champion 2025',
  },
  {
    id: 'leadership',
    title: 'Student Leadership & Representation',
    org: 'KIT College of Technology',
    detail: 'Represented 60+ first-year students as their sole liaison with faculty, demonstrating leadership and communication skills.',
    laurel: 'Student Representative',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'NPTEL', name: 'Algorithmic Graph Theory and Data Structures', link: 'https://drive.google.com/file/d/1Y3GGtF6o2i4wBNV4XQw0a_FZ_PYwDR21/view?usp=drive_link' },

  { issuer: 'NPTEL',name: 'Cloud Computing', link: 'https://drive.google.com/file/d/1UMLweYflTKNSBeL4nYqop8evPb2Lw5gK/view?usp=drivesdk'},

  { issuer: 'Infosys Springboard', name: 'Introduction to Robotic Process Automation', link: 'https://drive.google.com/file/d/16NCqIBNdiFr5W77VU3g1d2q75xEfnuQm/view?usp=drive_link' },

  { issuer: 'Infosys Springboard', name: 'Artificial Intelligence Primer Certification', link: 'https://drive.google.com/file/d/1D2nwsJTrRfFudNyUh__aUnElhP4ZLwBF/view?usp=drive_link' },

  { issuer: 'Infosys Springboard', name: 'Computer Vision', link: 'https://drive.google.com/file/d/1pJrG3zJXQMR_jI_EAF3wlJARgrNCCIRH/view?usp=drive_link' },

  { issuer: 'SkillSoft', name: 'Oracle Cloud Infrastructure Foundations Architect', link: 'https://drive.google.com/file/d/1enpl_Q7hYXJNerDwMY_r7xf0IUebIo-6/view?usp=drive_link' },

  { issuer: 'Cisco Networking Academy', name: 'Applied AI for Customer Review Analysis', link: 'https://drive.google.com/file/d/1Vdl46ONericBYfO3Fl5Qr6eJuEWkuIlh/view?usp=drivesdk' },

  { issuer: 'Infosys Springboard', name: 'Artificial Intelligence Foundation', link: 'https://drive.google.com/file/d/1D2nwsJTrRfFudNyUh__aUnElhP4ZLwBF/view?usp=drivesdk' },

  { issuer: 'Cisco Networking Academy', name: 'Introduction to Modern AI', link: 'https://drive.google.com/file/d/1DNSXups6UuoPWcIoJpfMYx26fTbizzml/view?usp=drivesdk' },

  { issuer: 'AWS Academy', name: 'AWS Academy Graduate – Cloud Foundations (20 Hours)', link: 'https://drive.google.com/file/d/1H8LDfssOnJ9rCTQTn7XZSc7PFILqjl1z/view?usp=drivesdk' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
  id: 'languages',
  title: 'Languages',
  subtitle: 'C++ and Python are primary languages',
  skills: [
    { name: 'C++', mono: 'C+', note: 'Primary' },
    { name: 'Python', mono: 'Py', note: 'Primary' },
    { name: 'JavaScript', mono: 'JS' },
    { name: 'TypeScript', mono: 'TS' },
    { name: 'SQL', mono: 'SQL' },
    { name: 'Bash', mono: 'Sh' },
  ],
  },
  {
  id: 'frontend',
  title: 'Frontend',
  subtitle: 'Modern web interfaces & development',
  skills: [
    { name: 'React.js', mono: 'Re' },
    { name: 'Next.js', mono: 'Nx' },
    { name: 'HTML', mono: 'Ht' },
    { name: 'CSS', mono: 'Cs' },
    { name: 'Tailwind CSS', mono: 'Tw' },
    { name: 'JavaScript', mono: 'Js' },
    { name: 'TypeScript', mono: 'Ts' },
  ],
},
  {
  id: 'backend',
  title: 'Backend',
  subtitle: 'Server-side development & API engineering',
  skills: [
    { name: 'Node.js', mono: 'No' },
    { name: 'Express.js', mono: 'Ex' },
    { name: 'Python', mono: 'Py' },
    { name: 'FastAPI', mono: 'Fa' },
    { name: 'Flask', mono: 'Fl' },
    { name: 'REST APIs', mono: 'API' },
    { name: 'JWT', mono: 'JW' },
  ],
},
  {
  id: 'infra',
  title: 'Infra & Tools',
  subtitle: 'Cloud infrastructure, deployment & development tools',
  skills: [
    { name: 'AWS', mono: 'Aw' },
    { name: 'Amazon S3', mono: 'S3' },
    { name: 'EC2', mono: 'Ec' },
    { name: 'AWS Lambda', mono: 'La' },
    { name: 'DynamoDB', mono: 'Db' },
    { name: 'CloudWatch', mono: 'Cw' },
    { name: 'Linux', mono: 'Li' },
    { name: 'Git / GitHub', mono: 'Gt' },
    { name: 'Postman', mono: 'Pm' },
    { name: 'Docker', mono: 'Dk' },
  ],
},
  {
  id: 'databases',
  title: 'Databases',
  subtitle: 'Database design, storage & management',
  skills: [
    { name: 'MongoDB', mono: 'Mg', note: 'Hands-on' },
    { name: 'SQLite', mono: 'Sq', note: 'Hands-on' },
    { name: 'Supabase', mono: 'Sb', note: 'Hands-on' },
    { name: 'PostgreSQL', mono: 'Pg', note: 'Working Knowledge' },
  ],
},
  {
  id: 'fundamentals',
  title: 'CS Fundamentals',
  subtitle: 'Core computer science & problem-solving',
  skills: [
    { name: 'Data Structures & Algorithms', mono: 'DS' },
    { name: 'Object-Oriented Programming', mono: 'OP' },
    { name: 'DBMS', mono: 'DB' },
    { name: 'Operating Systems', mono: 'OS' },
    { name: 'Computer Networks', mono: 'CN' },
  ],
},
  {
  id: 'interests',
  title: 'Interests',
  subtitle: 'Exploring emerging technologies & engineering',
  skills: [
    { name: 'Artificial Intelligence', mono: 'AI' },
    { name: 'Natural Language Processing', mono: 'NLP' },
    { name: 'Cloud Computing (AWS)', mono: 'Aw' },
    { name: 'System Design', mono: 'Sd' },
    { name: 'Generative AI & RAG', mono: 'AI' },
    { name: 'Full-Stack Development', mono: 'FS' },
  ],
},
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  'C++': ['CodeChef – 450+ problems solved', 'LeetCode – 1637 maximum rating'],
  Python: ['Meaning – Semantic Search Engine', 'FairShare – Group Accountability System', 'Cisco Applied AI for Customer Review Analysis'],
  JavaScript: ['ShopNow – Full Stack E-Commerce', 'Thiranex – Full Stack Internship'],
  TypeScript: ['Ritnezz – Fitness Progressive Web App'],
  SQL: ['FairShare – SQLite Database Design'],
  Bash: ['DecodeLabs – Ubuntu Server Administration'],

  React: ['Meaning – Semantic Search Engine', 'ShopNow – Full Stack E-Commerce', 'Thiranex – Full Stack Internship'],
  'Next.js': ['Ritnezz – Fitness Progressive Web App'],
  HTML: [],
  CSS: ['Ritnezz – Tailwind CSS'],
  'Tailwind CSS': ['Ritnezz – Fitness Progressive Web App'],

  'Node.js': ['ShopNow – Full Stack E-Commerce', 'Thiranex – Full Stack Internship', 'AWS Lambda Project'],
  'Express.js': ['ShopNow – Full Stack E-Commerce', 'Thiranex – Full Stack Internship'],
  FastAPI: ['Meaning – Semantic Search Engine'],
  Flask: ['FairShare – Group Accountability System'],
  'REST APIs': ['Meaning – FastAPI', 'ShopNow – Express APIs'],
  JWT: ['ShopNow – Role-Based Authentication'],

  'AI/ML': ['B.E. Computer Science (AI & ML)', 'Deep Learning Projects'],
  'Machine Learning': ['PyTorch – ANN, CNN and Transformer Projects', 'Cisco Applied AI for Customer Review Analysis'],
  NLP: ['Meaning – Hybrid Semantic Search & RAG'],
  FAISS: ['Meaning – Semantic Search Engine'],
  RAG: ['Meaning – Retrieval-Augmented Generation'],
  PyTorch: ['ANN, CNN and Transformer Implementations'],

  AWS: ['DecodeLabs – Cloud Computing Internship', 'AWS Cloud Projects'],
  'Amazon S3': ['AWS Static Website Hosting'],
  EC2: ['DecodeLabs – Ubuntu EC2 Server'],
  Lambda: ['Serverless API Project'],
  DynamoDB: ['AWS Database Project'],
  CloudWatch: ['Lambda Monitoring & Execution Logs'],
  Linux: ['DecodeLabs – Ubuntu Server Administration'],

  MongoDB: ['ShopNow – Full Stack E-Commerce'],
  SQLite: ['FairShare – Group Accountability System'],
  Supabase: ['Ritnezz – Fitness Progressive Web App'],

  DSA: ['NPTEL – Algorithmic Graph Theory and Data Structures','NPTEL - Cloud Computing(Elite Silver)', '450+ CodeChef problems solved', '100+ LeetCode problems solved'],
  'Object-Oriented Programming': ['B.E. Computer Science (AI & ML)'],
  DBMS: ['FairShare – Database Design'],
  'Git / GitHub': ['Full-Stack Development Projects'],
  Postman: ['API Development & Testing']

};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
  number: 1,
  title: 'The Beginning',
  period: '2022 – 2023',
  synopsis: 'Higher secondary education at GVK Vidhya Mandhir, Coimbatore, with a focus on Mathematics, Physics and Chemistry.',
  episodes: [
    {
      code: 'S01 E01',
      title: 'The Foundation',
      description: 'Completed Higher Secondary Education (HSC) with Mathematics, Physics and Chemistry, securing 1,034 out of 1,200.',
      tags: ['HSC', 'Mathematics', 'Physics', 'Chemistry'],
      runtime: 'Jun 2022 – May 2023',
      palette: amber,
    },
  ],
},
{
  number: 2,
  title: 'Enter: AI & ML',
  period: '2024 – Present',
  synopsis: 'Pursuing a Bachelor of Engineering in Artificial Intelligence and Machine Learning at KIT, Coimbatore.',
  episodes: [
    {
      code: 'S02 E01',
      title: 'The Engineer',
      description: 'Bachelor of Engineering in Computer Science (Artificial Intelligence and Machine Learning) at KIT, maintaining a CGPA of 8.40.',
      tags: ['B.E.', 'AI & ML', 'CGPA 8.40'],
      runtime: 'Sep 2024 – Present',
      palette: violet,
    },
    {
      code: 'S02 E02',
      title: 'The Problem Solver',
      description: 'Solved 450+ coding problems on CodeChef and achieved a maximum LeetCode contest rating of 1637, with 100+ problems solved.',
      tags: ['DSA', 'CodeChef', 'LeetCode'],
      runtime: 'Ongoing',
      palette: jade,
    },
    {
      code: 'S02 E03',
      title: 'The Achiever',
      description: 'Recognised among the top 5 CGPA holders in the class and earned the Salesforce Agentblazer Champion title.',
      tags: ['Academic Excellence', 'Salesforce', 'Agentblazer Champion'],
      runtime: '2025 – 2026',
      palette: crimson,
    },
  ],
},
{
  number: 3,
  title: 'Learning to Build',
  period: '2026',
  synopsis: 'Stepping into professional development through hands-on internships in full-stack development and cloud computing.',
  episodes: [
    {
      code: 'S03 E01',
      title: 'The Full-Stack Developer',
      description: 'Designed, developed and deployed four full-stack web applications during an internship at Thiranex.',
      tags: ['React.js', 'Node.js', 'Express.js', 'Full-Stack'],
      runtime: 'May 2026',
      palette: violet,
    },
    {
      code: 'S03 E02',
      title: 'The Cloud Engineer',
      description: 'Worked with AWS services including S3, EC2, DynamoDB and Lambda, while administering Ubuntu servers through SSH during an internship at DecodeLabs.',
      tags: ['AWS', 'EC2', 'S3', 'Lambda', 'DynamoDB'],
      runtime: 'May 2026',
      palette: ocean,
    },
  ],
},
{
  number: 4,
  title: 'Building Real Products',
  period: '2026',
  synopsis: 'Turning technical knowledge into practical applications across AI, full-stack development, cloud computing and data-driven systems.',
  episodes: [
    {
      code: 'S04 E01',
      title: 'The AI Builder',
      description: 'Built Meaning, a hybrid semantic search engine combining FAISS, BM25 and Retrieval-Augmented Generation to retrieve relevant information from customer-support records.',
      tags: ['Python', 'NLP', 'FAISS', 'BM25', 'RAG'],
      runtime: '2026',
      palette: crimson,
    },
    {
      code: 'S04 E02',
      title: 'The Product Developer',
      description: 'Developed ShopNow, a MERN-based e-commerce platform with role-based authentication, persistent carts, product management and order lifecycle handling.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      runtime: '2026',
      palette: amber,
    },
    {
      code: 'S04 E03',
      title: 'The Systems Thinker',
      description: 'Built FairShare, a group accountability system using weighted fairness scoring, and Ritnezz, a fitness progressive web app with workout tracking and nutrition analytics.',
      tags: ['Python', 'Flask', 'SQLite', 'Next.js', 'Supabase'],
      runtime: '2026',
      palette: jade,
    },
  ],
},
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'The interests on the resume point to the next arc of the story.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Exploring System Design, Cloud Computing (AWS) and Machine Learning.',
        tags: ['System Design', 'AWS', 'Machine Learning'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  {
    label: 'Academic standing',
    title: 'Top 5 in Class',
    detail: 'CGPA 8.40 • CSE (AI & ML)',
    palette: jade,
  },
  {
    label: 'Full-stack experience',
    title: 'Thiranex',
    detail: 'Full Stack Developer Intern • 4 applications deployed',
    palette: ocean,
  },
  {
    label: 'AI & NLP project',
    title: 'Meaning',
    detail: 'Built a semantic search engine using Sentence Transformers',
    palette: crimson,
  },
  {
    label: 'Cloud experience',
    title: 'AWS Projects',
    detail: 'Hands-on experience with S3, EC2, Lambda and DynamoDB',
    palette: violet,
  },
  {
    label: 'Problem solving',
    title: '450+',
    detail: 'CodeChef problems solved',
    palette: amber,
  },
  {
    label: 'LeetCode achievement',
    title: 'Top 19.74%',
    detail: 'Globally • Maximum rating 1637',
    palette: ocean,
  },
  {
    label: 'Industry recognition',
    title: 'Salesforce Agentblazer',
    detail: 'Champion • 48+ Trailhead badges',
    palette: crimson,
  },
  {
    label: 'Cloud credential',
    title: 'AWS Academy',
    detail: 'Graduate – Cloud Foundations',
    palette: amber,
  },
  {
    label: 'Leadership',
    title: '400+ Students',
    detail: 'Addressed incoming students during college orientation',
    palette: jade,
  },
  {
    label: 'International exposure',
    title: 'Indo-Japan Programme',
    detail: 'Welcomed Japanese delegates in their native language',
    palette: violet,
  },

];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.E. · CSE (AI & ML)',
    lines: ['KIT – Kalaignarkarunanidhi Institute of Technology, Coimbatore', 'Expected Graduation · September 2028'],
    chips: ['CGPA 8.40'],
  },
  {
    kicker: 'Skills',
    title: 'Software first.',
    lines: ['C++, Python, Java · React, Next.js, Node.js, Express.js', 'MongoDB, PostgreSQL, SQLite · AWS, REST APIs, JWT'],
    chips: ['C++', 'Python', 'React', 'Node.js', 'AWS', 'MongoDB'],
  },
  {
    kicker: 'Experience',
    title: 'Building & Deploying',
    lines: ['Full Stack Developer Intern · Thiranex · May 2026', 'Cloud Computing Intern · DecodeLabs · May 2026', 'Full-stack applications · AWS services · Deployment'],
  },
  {
    kicker: 'Projects',
    title: 'Five Creations',
    lines: ['ShopNow — Full-stack e-commerce platform', 'Meaning — NLP-powered semantic search engine', 'FairShare — Group accountability system', 'Ritnezz — Fitness progressive web app', 'AWS — Cloud deployment projects'],
  },
  {
    kicker: 'Achievements',
    title: 'Beyond the Classroom',
    lines: ['450+ Problems Solved — CodeChef', 'Top 19.74% Globally — LeetCode', 'Salesforce Agentblazer Champion — 48+ badges', 'Top 5 CGPA Holder — Academic Rank'],
  },
  {
    kicker: 'Certified',
    title: 'Technical Credentials',
    lines: ['AWS Academy · Oracle Cloud Infrastructure', 'NPTEL · Cisco Networking Academy'],
  },
  {
    kicker: 'Leadership',
    title: 'Beyond Technology',
    lines: ['Student Representative — 60+ students', 'Hosted Japanese delegates during Indo-Japan collaboration programme', 'Addressed 400+ students during college orientation'],
  },
  {
    kicker: 'Current mission',
    title: 'Always evolving.',
    lines: ['Software Engineering · AI/ML · Cloud Computing · Data Structures & Algorithms'],
  },
];

export type ProfileId = 'sushmita' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sushmita',
    name: 'Rathi Varshini R',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
