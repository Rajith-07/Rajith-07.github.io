import { PageShell } from "@/components/PageShell";
import { About } from "@/components/sections/About";
import { Contact, type ContactSocial } from "@/components/sections/Contact";
import { ExperienceTimeline } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects, type Project } from "@/components/sections/Projects";
import { Research, type ResearchItem } from "@/components/sections/Research";
import { Skills, type SkillCategory } from "@/components/sections/Skills";
import type { ExperienceItem } from "@/components/sections/Experience";

const summary = (
  <div className="space-y-4">
    <p>
      <span className="font-bold text-slate-900">Hi, I’m Rajith S.</span>
      <br />
      You don’t know me yet — but I build systems that do more than just run.
    </p>
    <p>
      I don’t just write code. I build systems that think, scale, and survive production.
    </p>
    <p>
      From AI-driven intelligence to cloud-native architectures, I turn raw ideas into systems that actually work — not just in theory, but under real-world pressure.
    </p>
    <p>
      I operate at the intersection of:
      <br />
      <span className="font-semibold text-blue-600">
        · Software Engineering <br /> · Cloud & DevOps <br /> · Networking <br /> · Artificial Intelligence
      </span>
    </p>
    <p>
      I’m driven by one thing:
      <br />
      <span className="font-bold text-slate-900">
        taking complex systems from prototype → production — without breaking them.
      </span>
    </p>
  </div>
);



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

// const projects: Project[] = [
//   {
//     title: "ECG Arrhythmia Classification",
//     description:
//       "Deep learning pipeline that cleans ECG signals, learns arrhythmia signatures, and visualizes explainable predictions.",
//     tools: ["PyTorch", "scikit-learn", "NumPy", "Matplotlib"],
//     github: "https://github.com/Rajith-07/ECG-Based-Arrhythmia-Classification",
//     image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1000&q=80",
//   },
//   {
//     title: "BookMyMovie Platform",
//     description:
//       "Ticketing experience with personalized recommendations, live seat maps, secure payments, and admin analytics.",
//     tools: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
//     github: "https://github.com/Rajith-07/Full_Stack_Projects/tree/main/Movie_Booking_Platform",
//     image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1000&q=80",
//   },
//   {
//     title: "Gemini Clone",
//     description:
//       "A clone of the Gemini search engine that allows you to search for information and get results.",
//     tools: ["React", "Tailwind CSS", "JavaScript"],
//     github: "https://github.com/Rajith-07/REACT/tree/main/Gemini_Clone/gemini-clone",
//     image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1000&q=80",
//   },
//   {
//     title: "Airline Reservation System",
//     description:
//       "Streamlit-powered airline booking workflow with intelligent pricing, waitlist automation, and airline dashboards.",
//     tools: ["Python", "Streamlit", "Firebase", "Figma"],
//     github: "https://github.com/Rajith-07/Airline_Ticket_Reservation_System",
//     image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80",
//   },
// ];


const projects: Project[] = [
  {
    title: "ChargeIQ",
    description:
      "Real-time EV charging discovery system with geolocation, live availability, and optimized navigation routing.",
    tools: ["Flutter", "Firebase", "SQLite", "Google Maps API", "REST"],
    github: "https://github.com/lithigesh/ChargeIQ",
    image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Smart Employee Onboarding Identity Service",
    description:
      "Serverless onboarding workflow orchestrating identity verification, document pipelines, and secure stage-based access.",
    tools: ["Node.js", "AWS Lambda", "API Gateway", "DynamoDB", "Step Functions", "S3", "CloudFront", "SES"],
    github: "https://github.com/Rajith-07/Smart-Employee-Onboarding-Identity-Service",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Smart Toll System",
    description:
      "Automated toll collection system leveraging real-time vehicle detection and seamless transaction processing.",
    tools: ["IoT", "Embedded Systems", "Backend APIs"], 
    github: "https://github.com/lithigesh/smart-toll",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "ECG Arrhythmia Classification",
    description:
      "Deep learning pipeline for ECG signal preprocessing, feature extraction, and arrhythmia classification with explainability.",
    tools: ["PyTorch", "scikit-learn", "NumPy", "Matplotlib"],
    github: "http://github.com/Rajith-07/ECG-Based-Arrhythmia-Classification",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1000&q=80",
  },
];

const experiences: ExperienceItem[] = [
  {
    role: "AWS Cloud Intern",
    org: "F13 Technologies",
    period: "Feb 2026 - May 2026",
    summary:
      "Migrating on-premise applications to AWS cloud platform.",
    ongoing: true,
  },
  {
    role: "Software Engineering Intern",
    org: "YugaYatra Retail (OPC) Pvt. Ltd.",
    period: "Nov 2025 – Jan 2026",
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
    href: "tel:+919342606595",
    icon: "phone",
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
      <About summary={summary} />
      <Skills categories={skills} />
      <Projects projects={projects} />
      <ExperienceTimeline experiences={experiences} />
      <Research studies={research} />
      <Contact email="rajithsrr@gmail.com" socials={socials} />
    </PageShell>
  );
}
