export const personalInfo = {
  name: "João Correia",
  role: "Full Stack Developer",
  tagline: "Building digital experiences that matter.",
  location: "Portugal 🇵🇹",
  email: "jovbcorreia@gmail.com", // update with your real email
  linkedin: "https://www.linkedin.com/in/jovbcorreia/",
  github: "https://github.com/jovbcorreia", // update if different
  bio: [
    "I'm a Full Stack Software Developer with a passion for crafting clean, efficient, and scalable web applications.",
    "From architecting robust backends to building seamless frontends, I thrive at every layer of the stack. I love turning complex problems into elegant solutions.",
    "Currently open to exciting new projects and opportunities.",
  ],
};

export const skills = {
  frontend: [
    { name: "React", level: 90 },
    { name: "Next.js", level: 88 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "HTML/CSS", level: 95 },
  ],
  backend: [
    { name: "Node.js", level: 88 },
    { name: "Express.js", level: 85 },
    { name: "REST APIs", level: 90 },
    { name: "GraphQL", level: 75 },
    { name: "Python", level: 70 },
  ],
  database: [
    { name: "PostgreSQL", level: 82 },
    { name: "MongoDB", level: 80 },
    { name: "MySQL", level: 78 },
    { name: "Redis", level: 70 },
    { name: "Prisma ORM", level: 80 },
  ],
  devops: [
    { name: "Git/GitHub", level: 90 },
    { name: "Docker", level: 75 },
    { name: "CI/CD", level: 72 },
    { name: "Vercel / Netlify", level: 88 },
    { name: "Linux", level: 75 },
  ],
};

export const techStack = [
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "Next.js", icon: "▲", color: "#ffffff" },
  { name: "TypeScript", icon: "TS", color: "#3178C6" },
  { name: "Node.js", icon: "🟢", color: "#339933" },
  { name: "PostgreSQL", icon: "🐘", color: "#4169E1" },
  { name: "MongoDB", icon: "🍃", color: "#47A248" },
  { name: "Docker", icon: "🐳", color: "#2496ED" },
  { name: "Tailwind", icon: "🌊", color: "#06B6D4" },
  { name: "GraphQL", icon: "◈", color: "#E10098" },
  { name: "Git", icon: "⎇", color: "#F05032" },
  { name: "Redis", icon: "🔴", color: "#DC382D" },
  { name: "Prisma", icon: "△", color: "#5A67D8" },
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
    role: "Full Stack Developer",
    company: "Tech Company",
    period: "2022 — Present",
    description:
      "Designing and developing full stack web applications. Leading frontend architecture decisions, mentoring junior developers, and collaborating with cross-functional teams to deliver high-impact products.",
    techs: ["React", "Next.js", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency",
    period: "2020 — 2022",
    description:
      "Built responsive, accessible web interfaces for clients across various industries. Worked closely with designers to translate Figma mockups into pixel-perfect implementations.",
    techs: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
  {
    role: "Junior Developer",
    company: "Startup",
    period: "2019 — 2020",
    description:
      "Started as a junior developer contributing to both frontend and backend features. Gained hands-on experience with the full software development lifecycle.",
    techs: ["JavaScript", "Node.js", "MySQL", "HTML/CSS"],
  },
];
