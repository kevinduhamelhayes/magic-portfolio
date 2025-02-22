import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Kevin",
  lastName: "Duhamel Hayes",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer & AI Engineer",
  avatar: "/images/avatar.jpg",
  location: "America/Buenos_Aires", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English (Professional Working)", "Español (Native)", "Portugues (Basic)", "Italiano (Basic)"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Tech Newsletter</>,
  description: (
    <>
      I write about JavaScript, Python, AI engineering, and the intersection of software development and artificial intelligence.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/kevinduhamelhayes",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/kevin-duhamel-hayes",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "kevinduhamelh@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Developer & AI Engineer</>,
  subline: (
    <>
      I'm Kevin, a Full Stack Developer specializing in JavaScript/TypeScript, React, Python, and AI Engineering. 
      Currently available for new opportunities and projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://www.linkedin.com/in/kevin-duhamel-hayes/",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        As a Full Stack Developer with a strong focus on AI integration, I combine robust technical expertise in JavaScript, 
        TypeScript, Python, and modern frameworks with a strategic approach to implementing AI solutions. My background in 
        electrical engineering provides me with a unique perspective on system architecture and process automation.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Devink",
        timeframe: "2022 - Present",
        role: "Lead Digital Transformation & Full Stack Developer",
        achievements: [
          <>
            Lead digital transformation initiatives while actively developing software solutions using Python and JavaScript, 
            focusing on API development and system integration.
          </>,
          <>
            Implement innovative solutions to enhance operational efficiency and customer experience, leveraging AI and 
            database technologies for personalized solutions.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Kraken Market",
        timeframe: "2020 - 2024",
        role: "Co-Founder & Technical Lead",
        achievements: [
          <>
            Co-founded and scaled a family business, managing a team of 14 employees across 3 locations while implementing 
            technical solutions for business operations.
          </>,
          <>
            Applied business management and real-time problem-solving skills, strengthening my ability to deliver practical 
            technical solutions in fast-paced environments.
          </>,
        ],
        images: [],
      },
      {
        company: "Prosegur S.A",
        timeframe: "2015 - 2022",
        role: "Electrical Systems Specialist",
        achievements: [
          <>
            Supervised critical security and detection systems, managing technical infrastructure including Data Center 
            environments.
          </>,
          <>
            Specialized in high-technology system maintenance, developing strong troubleshooting and system architecture skills.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education & Certifications",
    institutions: [
      {
        name: "Professional Development",
        description: <>40+ certificates from Platzi, extensive training in AI/ML (DeepLearning.AI), and continuous learning through technical challenges and projects.</>,
      },
      {
        name: "Technical Education",
        description: <>Technical Degree in Machine Repair and Electromechanical Equipment - Colegio San Jose Rosario</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "AI & Automation",
        description: <>Expert in AI integration using OpenAI APIs, LangChain, and custom prompt engineering. Experienced in developing contextual chatbots and document classification systems.</>,
      },
      {
        title: "Frontend Development",
        description: <>Proficient in React, Next.js, TypeScript, and modern CSS (Tailwind). Skilled in building responsive, user-friendly interfaces with optimal performance.</>,
      },
      {
        title: "Backend Development",
        description: <>Strong expertise in Python (Django, FastAPI) and Node.js (Express). Experienced in designing RESTful APIs and implementing AI model integrations.</>,
      },
      {
        title: "DevOps & Tools",
        description: <>Familiar with Docker, AWS (EC2/S3), and version control systems. Experienced in setting up CI/CD pipelines and managing cloud infrastructure.</>,
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
