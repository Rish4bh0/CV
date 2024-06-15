import {
  ConsultlyLogo,
  EvercastLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { InstagramIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Rishabh Singh",
  initials: "RS",
  location: "FairFax, Virginia, USA | Permanent Resident",
  locationLink: "https://www.google.com/maps/place/Falls+Church,+VA,+USA",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  
    mail:
    "mail@rishabhsingh.com.np",
    mailLink: `mailto:mail@rishabhsingh.com.np`,
    website:
    "https://rishabhsingh.com.np",
    webLink: "https://rishabhsingh.com.np",
  summary:
    "Experienced Full Stack Developer with 2 years in React, React Native, Node.js, PostgreSQL, MongoDB, Docker, and Kubernetes. Skilled in real-time features and performance optimization. Effective collaborator with a strong grasp of modern web practices. Committed to high-quality solutions and continuous learning.",
  avatarUrl: "",
  personalWebsiteUrl: "https://rishabhsingh.com.np",
  contact: {
    email: "mail@rishabhsingh.com.np",
    tel: "999999",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Rish4bh0",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/",
        icon: LinkedInIcon,
      },
      {
        name: "Instagram",
        url: "https://instagram.com/rish4bh.s",
        icon: InstagramIcon,
      },
    ],
  },
  education: [
    {
      school: "London Metropolitan University",
      degree: "Bsc (Hons) Computing, Grade: First Class Honours",
      courseWork:"Coursework: Operating Systems; Databases; Algorithms; Computer Architecture; Logic and problem solving; Software Engineering; Information Systems; Artificial Intelligence.",
      start: "2021",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Dryice Solutions",
      link: "https://dryicesolutions.net",
      badges: ["Kumaripati, Lalitpur"],
      title: "Fullstack Developer",
      logo: ConsultlyLogo,
      start: "08/2023",
      end: null,
      description:
        "Designed and managed a ticketing system with real-time features. Implemented automation with Docker, Kubernetes, Argo CD, GitLab CI/CD, and GitHub Actions. Supported a SaaS product, resolved issues, and performed maintenance. Built RESTful APIs, maintained websites, managed source control, and optimized performance.",
    },
    {
      company: "Featherwebs",
      link: "https://featherwebs.com/",
      badges: ["Kupondole, Lalitpur"],
      title: "React Intern",
      logo: ParabolLogo,
      start: "11/2022",
      end: "02/2023",
      description:
        "Developed multiple React projects using modern web techniques, integrating features like socket.io, state management, and API integration. Collaborated with developers, gaining knowledge of cutting-edge technologies. Implemented and maintained version control with Git for efficient collaboration. Kept accurate records of activities throughout the internship.",
    },
    
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "GO",
    "React/Next.js/React-Native",
    "MongoDB/PostgresSQL",
    "Prisma",
    "Node.js",
    "TailwindCSS",
    "SocketIO",
    "WebRTC",
    "Docker",
    "Git",
    "GitHub Actions",
    "Nginx",
    "Jira",
   
  ],
  projects: [
    {
      title: "Support Desk",
      techStack: [
        "Full Stack Developer",
        "React",
        "TailwindCSS",
        "Node.js",
        "SocketIO",
        "MongoDB",
        "Nginx",
        "Docker",
      ],
      description:
        "A webapp for ticketing, real-time updates, client tracking, analytics, chat, notifications, and more.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://supportdesk.dryicesolutions.net/",
      },
    },
    {
      title: "Finance SaaS",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Bun",
        "Hono.js",
        "PostgresSQL",
      ],
      description:
        "Finance SaaS platform tracks income, expenses, categorizes transactions, connects to banks, and enhances financial management.",
      logo: EvercastLogo,
      link: {
        label: "#",
        href: "#",
      },
    },
    {
      title: "Plinko",
      techStack: [
        "Side Project",
        "TypeScript",
        "React",
        "Vite",
        "TailwindCSS",
        "Node.js",
      ],
      description: "Plinko clone a game originally from Stake, complete with both backend and frontend development.",
      logo: ConsultlyLogo,
      link: {
        label: "#",
        href: "#",
      },
    },
   
  ],
} as const;
