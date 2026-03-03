export const personalInfo = {
  name: "João Vilas-Boas",
  role: "Full Stack Developer",
  tagline: "Riding a new wave, guided by achieveNextSkill().",
  location: "Portugal 🇵🇹",
  email: "joaopsn3@gmail.com",
  linkedin: "https://www.linkedin.com/in/joaovilas-boascorreia/",
  github: "https://github.com/jovbcorreia",
  photo: "/profile.jpg",
  bio: [
    "I spent 12 years studying at a French school, and now I'm embarking on a new journey by leaving my comfort zone and challenging myself with new projects. Passionate about the unknown, self-taught, and the biggest surfer on the Internet ever found.",
    "I've always had a dangerous curiosity for programming and technology since taking my first steps. So, I've decided to ride a new wave, guided by the method achieveNextSkill().",
    "A coffee lover and fan of philosophical discussions, I look forward to having you join me in delivering simple and clean code.",
  ],
};

export const skills = {
  frontend: [
    { name: "JavaScript / ES6", level: 92 },
    { name: "React", level: 90 },
    { name: "HTML / CSS", level: 95 },
    { name: "TypeScript", level: 85 },
    { name: "PHP", level: 72 },
  ],
  backend: [
    { name: "Node.js", level: 88 },
    { name: "REST APIs", level: 90 },
    { name: "Express.js", level: 82 },
    { name: "Java", level: 75 },
    { name: "Spring Framework", level: 72 },
  ],
  database: [
    { name: "SQL / PostgreSQL", level: 85 },
    { name: "MySQL", level: 78 },
    { name: "Redis", level: 75 },
  ],
  devops: [
    { name: "Git", level: 92 },
    { name: "Docker", level: 78 },
    { name: "AWS", level: 70 },
    { name: "CI/CD / Jenkins", level: 72 },
  ],
};

export const techStack = [
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "Next.js", icon: "▲", color: "#ffffff" },
  { name: "TypeScript", icon: "TS", color: "#3178C6" },
  { name: "Node.js", icon: "🟢", color: "#339933" },
  { name: "PostgreSQL", icon: "🐘", color: "#4169E1" },
  { name: "Docker", icon: "🐳", color: "#2496ED" },
  { name: "AWS", icon: "☁️", color: "#FF9900" },
  { name: "PHP", icon: "🐘", color: "#8892BE" },
  { name: "Redis", icon: "🔴", color: "#DC382D" },
  { name: "Jenkins", icon: "⚙️", color: "#D33833" },
  { name: "Git", icon: "⎇", color: "#F05032" },
  { name: "Java", icon: "☕", color: "#ED8B00" },
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
