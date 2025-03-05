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
  languages: ["English (Professional C1)", "Español (Native)", "Portugues (Basic)", "Italiano (Basic)"], // optional: Leave the array empty if you don't want to display languages
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
    link: "mailto:kevinduhamelh@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Developer & AI Engineer</>,
  subline: (
    <>
      I'm Kevin, a Full Stack Developer specializing in JavaScript/TypeScript, React, Python, and AI Engineering. With 3 years of experience in Linux environments and 2+ years in various web technologies, I'm passionate about creating efficient, intelligent solutions. Currently available for new opportunities and projects.
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
        As a Full Stack Developer with a strong focus on AI integration, I combine robust technical expertise in 
        JavaScript, TypeScript, Python, and modern frameworks with a strategic approach to implementing AI solutions. 
        With 3 years of experience in Linux environments and 2+ years in various web technologies, I develop 
        applications ranging from AI-powered systems to desktop POS solutions, e-commerce platforms, and payment processing systems.
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
        role: "Digital Transformation Leader & Full Stack Developer",
        achievements: [
          <>
            Leading digital transformation initiatives with a focus on AI integration, implementing modern frameworks and agile methodologies.
          </>,
          <>
            Developing applications with React, Next.js, TypeScript for frontends and Python (Django, FastAPI) for backends.
          </>,
          <>
            Building and optimizing REST APIs, working with PostgreSQL, MongoDB, and integrating payment systems like Stripe.
          </>,
          <>
            Creating cross-platform desktop applications using Electron.js for POS and business management systems.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/sistemElectron.jpg",
            alt: "Electron POS System",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Kraken Market",
        timeframe: "August 2020 - January 2024",
        role: "Co-Founder & Operations Manager",
        achievements: [
          <>
            Co-founded and expanded a retail business, leading a team of 14 employees across 3 locations.
          </>,
          <>
            Developed and implemented custom e-commerce and inventory management solutions.
          </>,
          <>
            Created data analytics systems to optimize product selection and customer engagement.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/Ecommerce.jpg",
            alt: "Ecommerce Platform",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Freelance Developer",
        timeframe: "2021 - Present",
        role: "Full Stack & AI Developer",
        achievements: [
          <>
            Developed AI-powered applications integrating with LLMs and custom prompt engineering.
          </>,
          <>
            Created payment processing systems with Stripe integration and advanced analytics.
          </>,
          <>
            Built developer tools like the GitHub Contribution Timestamp Visualizer and advanced ToDo applications.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/ollama.jpg",
            alt: "AI Chatbot Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Electro City Rosario",
        timeframe: "2010 - Present",
        role: "Technical Director & Licensed Electrician",
        achievements: [
          <>
            Specialist in electrical installations, renovations, and building maintenance.
          </>,
          <>
            Integrated technological solutions for process automation in industrial and commercial installations.
          </>,
          <>
            Applied engineering knowledge to develop IoT solutions for home and business automation.
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
        description: <>40+ certificates from Platzi and Udemy, extensive training in AI/ML (DeepLearning.AI), and continuous learning through technical challenges and projects.</>,
      },
      {
        name: "Technical Education",
        description: <>Technician in Machine Repair, Methods, and Electromechanical Equipment - Colegio San Jose Rosario</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Languages & Frameworks",
        description: <>JavaScript & TypeScript (React, Next.js, Express, Node.js, Electron.js), Python (Django, FastAPI, Flask, LangChain), CSS (Tailwind, Styled Components), HTML.</>,
      },
      {
        title: "Databases & APIs",
        description: <>PostgreSQL, MongoDB, Firebase, Prisma ORM, REST API development, GraphQL, Strapi CMS, API integrations (Stripe, GitHub, OAuth).</>,
      },
      {
        title: "AI & Machine Learning",
        description: <>LLM integrations (OpenAI, Ollama), custom prompt engineering, AI application development, chatbot creation, document processing systems.</>,
      },
      {
        title: "DevOps & Infrastructure",
        description: <>Docker, Linux, AWS, Vercel, CI/CD with GitHub Actions, Git version control, serverless functions, performance optimization.</>,
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
  description: `Full stack development and AI engineering projects by ${person.name}`,
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
