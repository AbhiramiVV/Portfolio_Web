import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  nextJs,
  socket,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Aeshion,
  Taskify,
  voicee,
} from "../assets";

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];
const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Highly Satisfied Clients" },
  { value: 15, suffix: "+", label: "Completed Projects" },
  { value: 95, suffix: "%", label: "Client Retention Rate" },
];
const logoIconsList = [
  { imgPath: "/images/company1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
  { imgPath: "/images/logos/company-logo-9.png" },
  { imgPath: "/images/logos/company-logo-10.png" },
  { imgPath: "/images/logos/company-logo-11.png" },
];
const companies = [
  { name: "Ortmor Agency" },
  { name: "Qiddiya" },
  { name: "Gym Stream" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];
const expCards = [
  {
    review:
      "Currently at Ortmor, Abhirami is working as a Full Stack Developer, handling both frontend and backend responsibilities. She leads feature development, optimizes performance, and ensures scalability of applications.",
    imgPath: "/images/ortmor-logo.png",
    logoPath: "/images/ortmor-logo.png",
    title: "Full Stack Developer",
    company: "Ortmor Agency",
    date: "December 2023 – Present",
    responsibilities: [
      "Architected and launched the company corporate website using Next.js with SSR and SSG, improving SEO and Core Web Vitals.",
      "Contributed to Gym Stream, a multi-tenant SaaS fitness platform, managing global state with Redux Toolkit and integrating payment gateways (Stripe, Razorpay).",
      "Implemented WebSocket-based real-time workout streaming and built role-aware UI components for Gym Owners and Admins.",
      "Developed a scalable MERN dashboard for Qiddiya E-sports World Cup, managing real-time match data and AWS S3 media storage.",
      "Built Yas In School, an educational platform with QR scanning, backed by a Node.js REST API and deployed on DigitalOcean with Nginx.",
    ],
    techStack:
      "React.js, Next.js, Node.js, TypeScript, Tailwind CSS, Socket.IO, AWS S3, DigitalOcean, Nginx",
  },
  {
    review:
      "During the intensive MERN stack program at Brototype, Abhirami built several full-stack applications and gained proficiency in modern web technologies through hands-on development and real-world projects.",
    imgPath: "/images/brototype-logo.png",
    logoPath: "/images/brototype.png",
    title: "MERN Stack Developer",
    company: "Brototype",
    date: "2022 – 2023",
    responsibilities: [
      "Completed an intensive 600+ hour hands-on training program in Full Stack MERN development.",
      "Built 'Event Management System', a full-stack platform with role-based portals for Users, Vendors, and Admins.",
      "Developed 'sKo E-Commerce Platform', implementing product catalog, cart management, and Razorpay integration.",
      "Gained deep expertise in React, Node.js, Express.js, MongoDB, REST APIs, and Agile development workflows.",
      "Implemented real-time features using WebSockets and handled complex relational data modelling in MongoDB.",
    ],
    techStack:
      "React.js, Node.js, Express, MongoDB, JavaScript, Redux Toolkit, Tailwind CSS, Socket.IO, PayPal, Razorpay",
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/github.webp",
    link: "https://github.com/AbhiramiVV",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/abhirami-v-v-28a876259/",
  },
  {
    name: "email",
    imgPath: "/images/chat.png",
    link: "mailto:abhiramiofficial123@gmail.com",
  },
];

const testimonialsNew = [
  {
    name: "Kajal Prasad",
    mentions: "@kajalprasad",
    link: "https://www.linkedin.com/in/kajal-prasad-02938721b/",
    review: [
      "I had the pleasure of working with Abhirami on multiple blockchain projects, where she was a key frontend developer. She skillfully integrated complex smart contract logic into intuitive, user-friendly interfaces. Beyond her technical expertise, Abhirami stands out for her strong research skills and ability to stay ahead of trends. She’s always exploring new tools and frameworks to improve user experience. A highlight was her smooth and efficient implementation of Telegram Mini Apps, which aligned perfectly with our goals. Her dedication, problem-solving mindset, and collaborative nature make her a valuable team member. I’d gladly work with her again on future projects.",
    ],
    imgPath: "/images/kajal-person.png",
  },
  {
    name: "Sakina",
    mentions: "@sakina",
    link: "https://www.linkedin.com/in/sakina-a-3652a12bb",
    review: [
      "Working with Abhirami has always been a pleasure. She is not only a brilliant software engineer with strong technical skills, but also an exceptional team player. Her ability to solve complex problems efficiently, along with her positive attitude and willingness to help others, makes her a truly valuable colleague. I’ve always admired her dedication, professionalism, and collaborative nature. Any team would be lucky to have her!",
    ],
    imgPath: "/images/sakina-person.png",
  },
  {
    name: "Anas Malik",
    mentions: "@anas_malik",
    link: "https://www.linkedin.com/in/anas-malik-01",
    review: [
      "Working with Abhirami has been one of the best experiences for me. We've collaborated on several Web3 and other projects, and it's always a pleasure teaming up with her. She brings great energy, a strong problem-solving mindset, and a constant drive to explore and integrate new technologies. As a backend developer, having someone like Abhirami on the frontend is truly a blessing. Her reliability and enthusiasm make every project smoother. I genuinely look forward to working with her again in the future.",
    ],
    imgPath: "/images/anas-person.png",
  },
  {
    name: "Himanshu Sachan",
    mentions: "@himanshu_sachan",
    link: "https://www.linkedin.com/in/sachanh",
    review: [
      "I had the pleasure of working with Abhirami on our Telegram Mini Apps, where I served as the product owner. Her contribution was truly exceptional — she played a key role in the successful launch of our apps on the Telegram platform. Abhirami consistently brings a strong focus on improving the product, always exploring ways to enhance functionality and user experience. Having her on the team was a great advantage, both technically and collaboratively. I genuinely look forward to working with her again in the future.",
    ],
    imgPath: "/images/himanshu-person.png",
  },
  {
    name: "Ashraya Dargarh",
    mentions: "@ashray_dargarh",
    link: "https://www.linkedin.com/in/ashraya-dargarh-20393916b",
    review: [
      "If I talk about my experience working with you then here is my experience: I had a great experience working with you. I got to learn so many new things, and today, you’ve truly made a huge impact on my development journey. One of the most valuable lessons I’ve learned is to always aim to write the best possible code while keeping the bigger picture in mind especially thinking about how my logic would perform if thousands or even millions of users were on the platform. So yeah, it’s been an amazing experience, and I’m really happy to have had such a supportive coding partner.",
    ],
    imgPath: "/images/ashray-person.png",
  },
];

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Full Stack Web Development", icon: web },
  { title: "React & Next.js Development", icon: mobile },
  { title: "Backend Node.js Services", icon: backend },
  { title: "SaaS & Cloud Architecture", icon: creator },
];

const technologies = [
  { name: "TypeScript", icon: typescript },
  { name: "Next JS", icon: nextJs },
  { name: "React JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "MongoDB", icon: mongodb },
  { name: "Socket.io", icon: socket },
  { name: "Three JS", icon: threejs },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  { name: "AWS", icon: docker },
  { name: "JavaScript", icon: javascript },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Ortmor Agency",
    icon: nextJs,
    iconBg: "#383E56",
    date: "December 2023 - Present",
    points: [
      "Architected and launched the company website using Next.js with SSR/SSG, improving SEO ranking and performance.",
      "Contributed to Gym Stream, a SaaS fitness streaming platform, managing complex multi-tenant data flows using RTK.",
      "Integrated Stripe and Razorpay payment gateways and implemented real-time workout streaming with Socket.io.",
      "Built a scalable MERN stack dashboard for Qiddiya E-sports World Cup and Yas In School educational platform.",
    ],
  },
  {
    title: "MERN Stack Developer (Trainee)",
    company_name: "Brototype",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "2022 - 2023",
    points: [
      "Completed an intensive 600+ hour training program in Full Stack MERN development.",
      "Engineered an Event Management System with real-time chat, PayPal integration, and RBAC.",
      "Developed sKo E-Commerce Platform with Razorpay integration and SSR using Handlebars.",
      "Applied indexed MongoDB strategies for efficient querying and modelled complex relational data.",
    ],
  },
  {
    title: "M.Sc. Computer Science",
    company_name: "Kannur University",
    icon: web,
    iconBg: "#383E56",
    date: "2020 - 2022",
    points: [
      "Completed Master of Science in Computer Science, building a strong foundation in software engineering and algorithms.",
      "Studied core subjects including Data Structures, Database Management, and Web Technologies.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Abhirami proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Abhirami does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Abhirami optimized our website, our traffic increased by 50%. We can't thank her enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Event Management System",
    description:
      "A full-stack event management platform with role-based portals, real-time chat using Socket.io, and secure PayPal payment integration. Features comprehensive booking management and RBAC.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Socket.io", color: "pink-text-gradient" },
      { name: "PayPal", color: "teal-text-gradient" },
      { name: "Redux Toolkit", color: "orange-text-gradient" },
    ],
    image: Taskify,
    source_code_link: "https://github.com/AbhiramiVV/Elance_Magic-Project",
  },
  {
    name: "sKo E-Commerce",
    description:
      "A full-stack shoe e-commerce platform featuring product catalog, cart management, Razorpay integration, and a secure admin dashboard. Optimized for SEO using Handlebars SSR.",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Handlebars", color: "pink-text-gradient" },
      { name: "Razorpay", color: "yellow-text-gradient" },
    ],
    image: Aeshion,
    source_code_link: "https://github.com/AbhiramiVV/sKo-e-commerce-project",
  },
];

export {
  services,
  testimonialsNew,
  words,
  technologies,
  experiences,
  testimonials,
  projects,
  counterItems,
  expCards,
  socialImgs,
  logoIconsList,
  companies,
  abilities,
};
