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
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 6, suffix: "+", label: "Highly Satisfied Clients" },
  { value: 50, suffix: "+", label: "Completed Projects" },
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
  { name: "Vodafone" },
  { name: "Qiddiya" },
  { name: "Toyota" },
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
      "Abhirami started her career as a Full Stack Developer Intern at Brototype, where she gained extensive hands-on experience in building scalable applications and integrating payment gateways. She consistently delivered high-quality work with modern tech stacks.",
    imgPath: "/images/brototype-logo.png",
    logoPath: "/images/brototype.png",
    title: "Full Stack Developer Intern",
    company: "Brototype",
    date: "Jan 2023 – November 2023",
    responsibilities: [
      "Developed full-stack applications using React.js, Next.js, and Node.js.",
      "Integrated Razorpay and PayPal payment gateways with secure API flows.",
      "Built reusable UI components with SCSS and Tailwind CSS.",
      "Implemented real-time features with Socket.IO (chat, notifications, live updates).",
      "Collaborated with mentors and peers to improve app performance and deployment.",
    ],
    techStack:
      "React.js, Next.js, Node.js, JavaScript, SCSS, Tailwind CSS, Socket.IO, Razorpay, PayPal",
  },
  {
    review:
      "Currently at Ortmor, Abhirami is working as a Full Stack Developer, handling both frontend and backend responsibilities. She leads feature development, optimizes performance, and ensures scalability of applications.",
    imgPath: "/images/ortmor-logo.png",
    logoPath: "/images/ortmor-logo.png",
    title: "Full Stack Developer",
    company: "Ortmor",
    date: "December 2023 – Present",
    responsibilities: [
      "Developing scalable full-stack applications using React.js, Next.js, and Node.js.",
      "Building real-time features with Socket.IO for chats, notifications, and live systems.",
      "Optimizing frontend performance with lazy loading, caching, and reusable components.",
      "Integrating REST APIs and third-party services into client-facing applications.",
      "Collaborating with cross-functional teams while maintaining high coding standards.",
    ],
    techStack:
      "React.js, Next.js, Node.js, JavaScript, SCSS, Tailwind CSS, Socket.IO",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/AbhiramiVV/",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    link: "https://github.com/AbhiramiVV",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/abhirami-v-v-28a876259/",
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
  { title: "React  & Next js Development", icon: mobile },
  { title: "Backend Node Js Services", icon: backend },
  { title: "Touchscreen & Interactive Screen Design", icon: creator },
];

const technologies = [
  { name: "CSS3", icon: css },
  { name: "js", icon: javascript },
  { name: "ts", icon: typescript },
  { name: "rjs", icon: reactjs },
  { name: "rtkt", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Next JS", icon: nextJs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "socket.io", icon: socket },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Sko",
    description:
      "Sko is an e-commerce platform designed for purchasing shoes online. Explore our user-friendly e-commerce website where you can discover and purchase dresses that match your style.It provides a seamless shopping experience with secure payment integration.",
    tags: [
      { name: "HBS", color: "blue-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
      { name: "Razorpay", color: "yellow-text-gradient" },
    ],
    image: Aeshion,
    source_code_link: "https://github.com/AbhiramiVV/sKo-e-commerce-project",
  },
  {
    name: "Elance Magic",
    description:
      "Elance Magic is an event management application that enables users to browse and book events in specific locations. Vendors represent event management teams, and users can chat directly with them to clarify event-related queries.",
    tags: [
      { name: "React js", color: "blue-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
      { name: "PayPal", color: "teal-text-gradient" },
      // { name: "Socket.io", color: "orange-text-gradient" },
    ],
    image: Taskify,
    source_code_link: "https://github.com/AbhiramiVV/Elance_Magic-Project",
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
