// Edit this file to personalize the portfolio with your real details.

export const profile = {
  name: "Aman Singh",
  role: "AI Driven Full-Stack Developer",
  tagline: "I build clean, stable web apps faster — powered by AI-driven development, without cutting corners on quality.",
  bio: "I'm an AI-driven full-stack developer who combines modern engineering practices with AI-assisted workflows to ship production-grade web applications faster — without compromising on code quality or stability. From real-time dashboards to payroll and attendance systems, I focus on building solutions that stay reliable long after launch.",
  email: "bablooaman.p2@gmail.com",
  phone: "+91 8920346288",
  location: "India",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/Aman-singh-tech",
    linkedin: "https://www.linkedin.com/in/aman-singh-892034as",
    twitter: "https://twitter.com/yourusername",
  },
};

export const stats = [
  { label: "Years Building", value: "1+" },
  { label: "Projects Delivered", value: "3+" },
  { label: "Happy Clients", value: "3+" },
];

// "slug" maps to a real Simple Icons (simpleicons.org) logo served via cdn.simpleicons.org.
// "icon" is a lucide-react icon name used as a fallback for concepts/patterns that have no brand logo.
export const skills: { name: string; slug?: string; icon?: string }[] = [
  { name: "JavaScript (ES6+)", slug: "javascript" },
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", slug: "css" },
  { name: "Gemini API", slug: "googlegemini" },
  { name: "Prompt Engineering", icon: "Sparkles" },
  { name: "LLM Integration", icon: "Brain" },
  { name: "React.js", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Express.js", slug: "express" },
  { name: "NestJS", slug: "nestjs" },
  { name: "RESTful APIs", icon: "Webhook" },
  { name: "MVC Architecture", icon: "LayoutGrid" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Mongoose", slug: "mongoose" },
  { name: "MySQL", slug: "mysql" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Prisma", slug: "prisma" },
  { name: "JWT", slug: "jsonwebtokens" },
  { name: "HTTP-only Cookies", icon: "Cookie" },
  { name: "bcrypt", icon: "KeyRound" },
  { name: "RBAC", icon: "ShieldCheck" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github" },
  { name: "Docker", slug: "docker" },
  { name: "Postman", slug: "postman" },
  { name: "Cloudinary", slug: "cloudinary" },
  { name: "Stripe", slug: "stripe" },
  { name: "Vercel", slug: "vercel" },
  { name: "Render", slug: "render" },
  { name: "GitHub Actions", slug: "githubactions" },
  { name: "Jest", slug: "jest" },
];

export const services = [
  {
    title: "Web App Development",
    description:
      "End-to-end web apps built with Next.js and modern tooling — fast, responsive, and easy to maintain.",
  },
  {
    title: "Backend & APIs",
    description:
      "Reliable backend systems, REST/GraphQL APIs, and database design that scale with your product.",
  },
  {
    title: "Stability & Performance Audits",
    description:
      "Reviewing an existing app for bugs, slow queries, and fragile code paths — then fixing them.",
  },
];

export const projects = [
  {
    title: "PunchCloud",
    description:
      "A production payroll and attendance management system — real-time clock-ins, shift rules, and automated payroll calculations for a live workforce.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    link: "#",
    github: "#",
  },
  {
    title: "Project Two",
    description:
      "Short description of a second project — what problem it solved and the impact it had.",
    tags: ["React", "Express", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    title: "Project Three",
    description:
      "Short description of a third project — what problem it solved and the impact it had.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "#",
    github: "#",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
