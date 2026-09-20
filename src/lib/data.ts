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
// "logoUrl" is a direct link to a brand's own logo, used when Simple Icons doesn't have it yet.
// "icon" is a lucide-react icon name used as a fallback for concepts/patterns that have no brand logo.
export const skills: { name: string; slug?: string; logoUrl?: string; icon?: string }[] = [
  { name: "JavaScript (ES6+)", slug: "javascript" },
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", slug: "css" },
  { name: "Gemini API", slug: "googlegemini" },
  { name: "Claude", slug: "claude" },
  { name: "Cursor", slug: "cursor" },
  { name: "Lovable", logoUrl: "https://lovable.dev/favicon.ico" },
  { name: "Figma", slug: "figma" },
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
    title: "AI-Powered Feature Integration",
    description:
      "Adding LLM-driven features to your product — smart search, chatbots, content generation — using the Gemini API and prompt-engineered workflows.",
  },
];

export const projects = [
  {
    title: "PunchCloud",
    description:
      "A production workforce management platform built for a live client — automating attendance, production tracking, and payroll. Integrates a biometric face-recognition terminal over the ADMS hardware protocol and runs an automated payroll engine with RBAC and PDF payslips, deployed on a cloud VM with CI/CD.",
    tags: ["NestJS", "Prisma", "PostgreSQL", "React"],
    link: "#",
    github: "#",
  },
  {
    title: "SkillSphere",
    description:
      "A full-stack hyperlocal freelance marketplace connecting clients with local freelancers — verified professional discovery and portfolios, plus an AI-powered job matching engine that recommends freelancers based on project requirements. Includes milestone-based secure payments and a real-time reputation scoring system.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "https://github.com/Aman-singh-tech/Skillsphere-Intelligent-hyperlocal-freelance-ecosystem",
  },
  {
    title: "ShadowLearn",
    description:
      "A knowledge-sharing platform for recording team workflows and structured problem-solving logs, built and tested with 20 users. Secured with JWT authentication and RBAC-protected routes, with optimized REST APIs for video upload/retrieval hitting sub-300ms response times via Cloudinary's CDN.",
    tags: ["MERN Stack", "JWT", "Cloudinary"],
    link: "#",
    github: "https://github.com/Aman-singh-tech/Shadow-learn-AI-powered-platform",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
