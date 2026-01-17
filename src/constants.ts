import type { NavItem, ExperienceItem, ProjectItem, SkillCategory, CertificationItem, LeadershipItem } from './types';
import { Trophy, Users, Flag, Medal } from 'lucide-react';

export const SOCIAL_LINKS = {
  github: "https://github.com/Parasadkurkar",
  linkedin: "www.linkedin.com/in/paras-adkurkar-56925325b",
  email: "https://mail.google.com/mail/?view=cm&fs=1&to=parasadkurkar37@gmail.com"
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', to: 'about' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Skills', to: 'skills' },
  { label: 'Certifications', to: 'certifications' },
  { label: 'Contact', to: 'contact' },
];

export const ABOUT_TEXT = "I am a Computer Engineer and technology enthusiast with a strong passion for building modern, scalable, and user-friendly digital experiences. I specialize in full stack development using the MERN stack, crafting robust solutions with a focus on performance, system architecture, and clean code. My expertise lies in developing custom web applications that bridge the gap between complex backend logic and intuitive frontend design. I enjoy working on challenging engineering problems and creating software products that make a real impact.";

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    title: "Artificial Intelligence Intern",
    company: "SCPL",
    period: "DEC 2025 – Present",
    description: [
      "Working on Python-based AI and automation solutions to address real-world business use cases. Responsibilities include developing intelligent automation scripts, integrating machine learning models, handling structured and unstructured data, and optimizing workflows to improve efficiency and accuracy. Gaining hands-on experience with AI-driven problem solving and end-to-end automation pipelines."
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    title: "E-Waste Facility Locator",
    category: "React.js & Node.js",
    description: "A full-stack MERN web application that helps users locate nearby certified e-waste disposal and recycling centers using interactive maps, educational tools, and smart prediction features.",
    tags: ["React.js 15", "Node.js", "MongoDB", "tailwindcss"],
    image: "/images/e-seva.png",
    liveUrl: "https://miniproject-10-frontend.onrender.com"
  },
  {
    title: "Edemy LMS",
    category: "Full Stack",
    description: "A comprehensive Learning Management System for creating and consuming courses, featuring Stripe payments and Cloudinary media management.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/images/edemy.png",
    liveUrl: "https://lms-edemy-8xy7.vercel.app"
  },
  {
    title: "BareNue",
    category: "Shopify",
    description: "Women's lingerie brand platform driving ₹1L+ monthly sales. Built with custom Shopify Liquid modules for a seamless shopping experience.",
    tags: ["Shopify", "Liquid", "E-Commerce"],
    image: "/images/barenue.png",
    liveUrl: "https://barenue.in"
  },
  {
    title: "KlearProp",
    category: "WordPress",
    description: "Mumbai-based real estate brokerage platform handling 10,000+ visitors. optimized for lead generation and high-performance.",
    tags: ["WordPress", "PHP", "Lead Gen"],
    image: "/images/klearprop.png",
    liveUrl: "https://klearprop.com"
  },
  {
    title: "The Turquoise Weddings",
    category: "WordPress",
    description: "International wedding planner portfolio for clients in Europe, Canada, and India, featuring a visually rich custom theme.",
    tags: ["WordPress", "Design", "Portfolio"],
    image: "/images/turquoise.png",
    liveUrl: "https://theturquoiseweddings.com"
  },
  {
    title: "VJCC Culinary Arts",
    category: "Shopify",
    description: "Dubai-based culinary institute platform acting as a hybrid e-commerce store for courses and merchandise.",
    tags: ["Shopify", "Education", "Web Design"],
    image: "/images/vjcc.png",
    liveUrl: "https://vjccculinaryarts.com"
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Core Stack",
    skills: ["MERN Stack", "React.js", "Node.js", "TypeScript", "Next.js", "Redux"]
  },
  {
    title: "GenAI & Automation",
    skills: ["Chatbot Integration", "RAG Pipelines", "LLM APIs (Gemini/OpenAI)", "LangChain", "AI Agents"]
  },
  {
    title: "Languages & Scripting",
    skills: ["JavaScript (ES6+)", "Python", "HTML5", "CSS3", "C++", "SQL"]
  },
  {
    title: "Backend & Databases",
    skills: ["MongoDB", "Express.js", "Prisma", "Firebase", "REST APIs", "GraphQL"]
  },
  {
    title: "DevOps & Cloud Hosting",
    skills: ["AWS", "Hostinger", "GoDaddy", "Docker", "Vercel", "CI/CD Pipelines"]
  },
  {
    title: "Testing & Security",
    skills: ["Selenium", "JIRA", "Burp Suite", "OWASP Top 10", "Manual Testing"]
  },
  {
    title: "Tools & Management",
    skills: ["Git & GitHub", "Postman", "Agile/Scrum", "Figma", "VS Code"]
  }
];

/* ----------- FIX: EXTENDED TYPE TO INCLUDE logoBgColor ----------- */
export type CertificationItemExtended = CertificationItem & {
  logoBgColor: string;
};
/* ---------------------------------------------------------------- */

export const CERTIFICATIONS_DATA: CertificationItemExtended[] = [
  {
    name: "Javascript Basics",
    issuer: "HackeRank",
    image: "https://cdn.simpleicons.org/hackerrank/2F8D46",
    credentialUrl: "/images/certificates/javaScript basic.pdf",
    logoBgColor: 'white'
  },
  {
    name: "SQL Advanced",
    issuer: "HackerRank",
    image: "https://cdn.simpleicons.org/hackerrank/2F8D46",
    credentialUrl: "/images/certificates/SQL-Advanced.pdf",
    logoBgColor: 'white'
  },
  {
    name: "Programing Fundamentals using Python",
    issuer: "Infosys Springboard",
    image: "https://cdn.simpleicons.org/infosys/2F8D46",
    credentialUrl: "images/certificates/infosys.jpg",
    logoBgColor: 'white'
  },
  {
    name: "Cybersecurity Foundations",
    issuer: "TechMahindra",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Tech_Mahindra_New_Logo.svg",
    credentialUrl: "images/certificates/cyber.jpg",
    logoBgColor: 'white'
  },
  {
    name: "Build With India Competition Certificate",
    issuer: "HAck WITH INDIA",
    image: "https://www.hackwithindia.in/Logo/HWI%20Black.svg",
    credentialUrl: "images/certificates/buildwindia.jpg",
    logoBgColor: 'white'
  }
];

export const LEADERSHIP_DATA: LeadershipItem[] = [
  {
    role: "Technical Lead",
    organization: "College Tech Club",
    description: "Led a team of 20+ students to organize technical workshops and hackathons. Managed the club's digital presence and technical infrastructure.",
    highlight: "Leadership",
    icon: Users
  },
  {
    role: "Campus Ambassador",
    organization: "TechFest 2024",
    description: "Represented the college at national level events, coordinating with 50+ participating institutions and managing logistics for 500+ attendees.",
    highlight: "Outreach",
    icon: Flag
  },
  {
    role: "Hackathon Winner",
    organization: "National Codeathon",
    description: "Secured 1st place among 100+ teams by developing an innovative solution for smart city traffic management using IoT and Machine Learning.",
    highlight: "Achievement",
    icon: Trophy
  },
  {
    role: "Sports Captain",
    organization: "College Badminton Team",
    description: "Led the college team to state-level semi-finals. Organized inter-departmental tournaments and managed team training schedules.",
    highlight: "Teamwork",
    icon: Medal
  }
];
