import { PageShell } from "@/components/PageShell";
import { About } from "@/components/sections/About";
import { Contact, type ContactSocial } from "@/components/sections/Contact";
import { ExperienceTimeline } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects, type Project } from "@/components/sections/Projects";
import { Research, type ResearchItem } from "@/components/sections/Research";
import { Skills, type SkillCategory } from "@/components/sections/Skills";
import type { ExperienceItem } from "@/components/sections/Experience";

const summary =
  "BTech CCE student (2023–2027) at Amrita Vishwa Vidyapeetham, I combine research-driven curiosity with hands-on engineering to build intelligent, cloud-native, and network-aware systems that move from prototype to reliable production deployments.";

const interests = [
  "AI",
  "Deep Learning",
  "Full Stack",
  "Cloud Native",
  "DevOps",
  "Networking"
];

const highlights = [
  "President, Intel IoT Club — leading multidisciplinary build sprints, mentoring peers, and driving campus-wide initiatives.",
  "Co-Lead, Intel IoT Club — orchestrated learning tracks and technical sessions spanning embedded systems, cloud, and AI tooling.",
  "Skilled across AI, Cloud Native, and DevOps solutions for building scalable, efficient, and secure systems.",
  "Focused on translating research in AI and quantum-inspired computing into impactful prototypes.",
];

const skills: SkillCategory[] = [
  { category: "Programming", items: ["Python", "C", "C++", "Java", "JavaScript", "SQL"] },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "Tailwind", "Bootstrap", "React", "Next.js"],
  },
  { category: "Backend", items: ["Node.js", "Express.js"] },
  { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"] },
  {
    category: "ML & AI",
    items: ["TensorFlow", "PyTorch", "scikit-learn", "OpenCV", "Pandas", "NumPy"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "CI/CD"],
  },
  { category: "Tools", items: ["Git", "GitHub", "GitLab", "VS Code"] },
];

const projects: Project[] = [
  {
    title: "ECG Arrhythmia Classification",
    description:
      "Deep learning pipeline that cleans ECG signals, learns arrhythmia signatures, and visualizes explainable predictions.",
    tools: ["PyTorch", "scikit-learn", "NumPy", "Matplotlib"],
    github: "https://github.com/Rajith-07/ECG-Based-Arrhythmia-Classification",
  },
  {
    title: "BookMyMovie Platform",
    description:
      "Ticketing experience with personalized recommendations, live seat maps, secure payments, and admin analytics.",
    tools: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    github: "https://github.com/Rajith-07/Full_Stack_Projects/tree/main/Movie_Booking_Platform",
  },
  {
    title: "Gemini Clone",
    description:
      "A clone of the Gemini search engine that allows you to search for information and get results.",
    tools: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Rajith-07/REACT/tree/main/Gemini_Clone/gemini-clone",
  },
  
  {
    title: "Airline Reservation System",
    description:
      "Streamlit-powered airline booking workflow with intelligent pricing, waitlist automation, and airline dashboards.",
    tools: ["Python", "Streamlit", "Firebase", "Figma"],
    github: "https://github.com/Rajith-07/Airline_Ticket_Reservation_System",
  },
];

const experiences: ExperienceItem[] = [
  {
    role: "Software Engineering Intern",
    org: "YugaYatra Retail (OPC) Pvt. Ltd.",
    period: "Nov 2025 – Jan 2026 (Ongoing)",
    summary:
      "Developing web applications for YugaYatra Retail (OPC) Pvt. Ltd. using React, Node.js, and MongoDB.",
  },
  {
    role: "President",
    org: "Intel IoT Club",
    period: "Feb 2025 – Jul 2025",
    summary:
      "Led cross-domain build sprints, managed partnerships, and scaled the club’s research pods focused on AI for IoT.",
  },
  {
    role: "Co-Lead",
    org: "Intel IoT Club",
    period: "Jun 2024 – Jan 2025",
    summary:
      "Designed learning roadmaps, introduced rapid prototyping practices, and mentored cohorts on embedded + cloud stacks.",
  },
];

const research: ResearchItem[] = [
  {
    title: "Deep Learning Architectures for Skin Lesion Classification",
    status: "Ongoing",
    summary:
      "Investigating hybrid CNN-transformer ensembles with dermoscopy augmentations to push melanoma detection accuracy and trust.",
  },
  {
    title: "Reversible ALU Design Using Quantum Gates",
    status: "Ongoing",
    summary:
      "Exploring low-power reversible logic blocks using quantum gate primitives to architect energy-efficient ALUs for edge devices.",
  },
];

const socials: ContactSocial[] = [
  {
    label: "Phone",
    href: "mailto:rajiths",
    icon: "email",
  },
  {
    label: "Email",
    href: "mailto:rajithsrr@gmail.com",
    icon: "email",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rajith-s-582697235/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/rajith-07",
    icon: "github",
  },
];

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <About summary={summary} interests={interests} highlights={highlights} />
      <Skills categories={skills} />
      <Projects projects={projects} />
      <ExperienceTimeline experiences={experiences} />
      <Research studies={research} />
      <Contact email="rajithsrr@gmail.com" socials={socials} />
    </PageShell>
  );
}
