export interface Project {
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
}

export interface Experience {
  role: string
  company: string
  location: string
  period: string
  summary: string
  logoUrl?: string
}

export interface Education {
  degree: string
  school: string
  location: string
  period: string
  additionalInfo?: string | string[] // e.g. "Minor in Mathematics", "Concentration in Artificial Intelligence", etc.
  logoUrl?: string
}

export interface PortfolioData {
  name: string
  bio: string
  avatarUrl?: string
  contact: {
    email: string
    github: string
    linkedin: string
    location: string
  }
  experiences: Experience[]
  education: Education[]
  projects: Project[]
}

export const portfolioData: PortfolioData = {
  name: "Ethan",
  bio: `
    Software engineer and student with a love for complex engineering challenges.
    I'm studying computer science at UPenn and recently interned at Microsoft.
  `,
  avatarUrl: "/pfp.png",
  contact: {
    email: "ethan@example.com",
    github: "https://github.com/EPham42747",
    linkedin: "https://linkedin.com/in/ethancpham",
    location: "Boston, MA",
  },
  experiences: [
    {
      role: "Software Engineer Intern",
      company: "Microsoft",
      location: "Redmond, WA",
      period: "May 2026 – Aug 2026",
      summary: "Copilot & Feedback, Visual Studio",
      logoUrl: "/logos/microsoft.png",
    },
    {
      role: "Research Assistant",
      company: "Beth Israel Deaconess Medical Center",
      location: "Remote",
      period: "Jun 2025 – Jan 2026",
      summary: "Neuro-Oncology, Department of Neurology",
      logoUrl: "/logos/bidmc.png",
    },
    {
      role: "AI Engineer Intern",
      company: "Takeda",
      location: "Cambridge, MA",
      period: "Jun 2025 – Aug 2025",
      summary: "US Business Unit DD&T",
      logoUrl: "/logos/takeda.webp",
    },
    {
      role: "Research Assistant",
      company: "University of Massachusetts Amherst",
      location: "Amherst, MA",
      period: "Sep 2024 – May 2025",
      summary: "STIMA Lab, Manning CICS",
      logoUrl: "/logos/umass.png",
    },
    {
      role: "Data Engineer Intern",
      company: "Takeda",
      location: "Remote",
      period: "May 2024 – Aug 2024",
      summary: "Plasma-Derived Therapies DD&T",
      logoUrl: "/logos/takeda.webp",
    },
  ],
  education: [
    {
      degree: "MSE Computer and Information Science",
      school: "University of Pennsylvania",
      location: "Philadelphia, PA",
      period: "2026 – 2028",
      additionalInfo: "Concentration in Artificial Intelligence",
      logoUrl: "/logos/penn.png",
    },
    {
      degree: "BS Computer Science",
      school: "University of Massachusetts Amherst",
      location: "Amherst, MA",
      period: "2023 – 2026",
      additionalInfo: "Business Minor",
      logoUrl: "/logos/umass.png",
    },
  ],
  projects: [
    {
      title: "Quinnfra",
      description: "Low-latency telemetry library for quantitative trading systems.",
      tags: ["Low-Latency", "HFT Trading", "C++"],
      githubUrl: "https://github.com/EPham42747/Quinnfra",
    },
    {
      title: "Super Good Ticketing System",
      description: "High-concurrency distributed ticketing system. CS 426 @ UMass Amherst.",
      tags: ["Microservices", "Docker", "Redis"],
      githubUrl: "https://github.com/RikShah04/Super_Good_Ticketing_System",
    },
    {
      title: "Mallard",
      description: "Full-stack insurance notification platform. CS 320 @ UMass Amherst.",
      tags: ["Full-stack", "Databases", "API Design"],
      githubUrl: "https://github.com/TheVikJ/project-mallard",
    },
    {
      title: "Station Seven",
      description: "Martian survival game inspired by space habitation research. CS 576 @ UMass Amherst.",
      tags: ["Game Dev", "Unity", ".NET"],
      githubUrl: "https://github.com/EPham42747/Station-Seven",
    },
    {
      title: "UMass-BITES",
      description: "Full-stack nutrition tracker tailored for students. HackUMass XII.",
      tags: ["Full-stack", "Databases", "API Design"],
      githubUrl: "https://github.com/Ian-Mei/UMass-BITES",
    },
    {
      title: "LockIn",
      description: "Computer vision-based attention loss detection system. HackUMass XI.",
      tags: ["ML", "Computer Vision", "Arduino"],
      githubUrl: "https://github.com/D-SehKim/LockIn",
    },
  ],
}
