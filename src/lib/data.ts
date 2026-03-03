export const personalInfo = {
  name: "João Vilas-Boas",
  role: "Full Stack Developer",
  tagline: "Riding a new wave, guided by achieveNextSkill().",
  location: "Portugal 🇵🇹",
  email: "joaopsn3@gmail.com",
  linkedin: "https://www.linkedin.com/in/joaovilas-boascorreia/",
  github: "https://github.com/jovbcorreia",
  photo: "/profileSuit.png",
  bio: [
    "I spent 12 years studying at a French school, and now I'm embarking on a new journey by leaving my comfort zone and challenging myself with new projects. Passionate about the unknown, self-taught, and the biggest surfer on the Internet ever found.",
    "I've always had a dangerous curiosity for programming and technology since taking my first steps. So, I've decided to ride a new wave, guided by the method achieveNextSkill().",
    "A coffee lover and fan of philosophical discussions, I look forward to having you join me in delivering simple and clean code.",
  ],
};

export const skills = {
  frontend: [
    { name: "HTML / CSS", icon: "🌐", level: 95 },
    { name: "JavaScript / ES6", icon: "JS", level: 92 },
    { name: "React", icon: "⚛️", level: 90 },
    { name: "Next.js", icon: "▲", level: 88 },
    { name: "TypeScript", icon: "TS", level: 85 },
    { name: "Tailwind CSS", icon: "🌊", level: 85 },
  ],
  backend: [
    { name: "Node.js", icon: "🟢", level: 88 },
    { name: "REST APIs", icon: "🔌", level: 90 },
    { name: "Express.js", icon: "⚡", level: 85 },
    { name: "PHP", icon: "🐘", level: 72 },
    { name: "Java", icon: "☕", level: 75 },
    { name: "Spring Framework", icon: "🍃", level: 72 },
  ],
  database: [
    { name: "SQL", icon: "🗄️", level: 88 },
    { name: "PostgreSQL", icon: "🐘", level: 82 },
    { name: "MySQL", icon: "🐬", level: 78 },
    { name: "Redis", icon: "🔴", level: 75 },
  ],
  devops: [
    { name: "Git", icon: "⎇", level: 92 },
    { name: "Docker", icon: "🐳", level: 78 },
    { name: "AWS", icon: "☁️", level: 70 },
    { name: "CI/CD", icon: "⚙️", level: 72 },
    { name: "Jenkins", icon: "🔧", level: 70 },
    { name: "Nginx", icon: "🌿", level: 68 },
  ],
};

export const techStack = [
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "Next.js", icon: "▲", color: "#ffffff" },
  { name: "TypeScript", icon: "TS", color: "#3178C6" },
  { name: "JavaScript", icon: "JS", color: "#F7DF1E" },
  { name: "Node.js", icon: "🟢", color: "#339933" },
  { name: "Express.js", icon: "⚡", color: "#888888" },
  { name: "PHP", icon: "🐘", color: "#8892BE" },
  { name: "Java", icon: "☕", color: "#ED8B00" },
  { name: "Spring", icon: "🍃", color: "#6DB33F" },
  { name: "PostgreSQL", icon: "🐘", color: "#4169E1" },
  { name: "MySQL", icon: "🐬", color: "#4479A1" },
  { name: "Redis", icon: "🔴", color: "#DC382D" },
  { name: "Docker", icon: "🐳", color: "#2496ED" },
  { name: "AWS", icon: "☁️", color: "#FF9900" },
  { name: "Jenkins", icon: "⚙️", color: "#D33833" },
  { name: "Git", icon: "⎇", color: "#F05032" },
  { name: "Nginx", icon: "🌿", color: "#009639" },
  { name: "Tailwind", icon: "🌊", color: "#06B6D4" },
  { name: "ServiceNow", icon: "🔧", color: "#62D84E" },
  { name: "REST APIs", icon: "🔌", color: "#6ee7b7" },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full stack e-commerce solution with real-time inventory, payment integration (Stripe), admin dashboard, and mobile-first design. Built for performance and scale.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Prisma", "Tailwind"],
    github: "#",
    live: "#",
    featured: true,
    year: "2024",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates via WebSockets, drag-and-drop boards, team workspaces, and detailed analytics.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "Redis"],
    github: "#",
    live: "#",
    featured: true,
    year: "2024",
  },
  {
    id: 3,
    title: "REST API Boilerplate",
    description:
      "Production-ready Node.js REST API boilerplate with JWT auth, rate limiting, logging, testing suite, and Docker setup.",
    tags: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Docker"],
    github: "#",
    live: null,
    featured: true,
    year: "2023",
  },
  {
    id: 4,
    title: "Real-time Chat App",
    description:
      "End-to-end encrypted messaging app with rooms, file sharing, and notifications.",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
    featured: false,
    year: "2023",
  },
  {
    id: 5,
    title: "Portfolio Analytics Dashboard",
    description:
      "Interactive data visualization dashboard with charts, filters, and real-time data refresh.",
    tags: ["Next.js", "D3.js", "PostgreSQL", "Chart.js"],
    github: "#",
    live: "#",
    featured: false,
    year: "2023",
  },
  {
    id: 6,
    title: "Auth Microservice",
    description:
      "Scalable authentication microservice with OAuth2, refresh tokens, and role-based permissions.",
    tags: ["Node.js", "TypeScript", "Redis", "PostgreSQL"],
    github: "#",
    live: null,
    featured: false,
    year: "2022",
  },
];

export const experience = [
  {
    role: "Software Developer — French Region",
    company: "EBSCO Information Services",
    period: "2023 — Present",
    description:
      "Working in the French region, communicating with clients from France, Belgium, and Switzerland. Developing in Node.js and React, focusing on a new FOLIO module for French clients. Responsibilities include software development, creating customized catalogs, and setting up SSO connections for new clients.",
    techs: ["Node.js", "React.js", "TypeScript", "PHP", "Docker", "AWS", "PostgreSQL", "Redis", "Jenkins", "CI/CD"],
  },
  {
    role: "Programmer",
    company: "Deloitte Portugal",
    period: "2022 — 2023",
    description:
      "Stepped up to Programmer, acquiring more responsibilities. Started training people and passing on knowledge, increasing service quality. Led a team to solve problems and implement new features, increasing direct client contact and evolving towards Tech Consultancy.",
    techs: ["JavaScript", "ES6", "REST APIs", "ServiceNow", "HTML", "CSS", "Glide API"],
  },
  {
    role: "Junior Programmer",
    company: "Deloitte Portugal",
    period: "2022",
    description:
      "Started professional experience in the Service Management Department, becoming a Certified System Administrator in ServiceNow. Focused on Back-end JavaScript development, solving problems in instances and carrying out new client implementations.",
    techs: ["JavaScript", "ServiceNow", "Git", "ITSM", "XML"],
  },
];
