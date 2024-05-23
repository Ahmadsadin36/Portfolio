import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  html,
  css,
  js,
  react,
  tailwind,
  database,
  wordpress,
  bootstrap,
  ecoland,
  bag1,
  avadapng,
  gmail,
  git,
  linkedin,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "1",
    title: "About me",
    url: "#about",
  },
  {
    id: "3",
    title: "Skills",
    url: "#skills",
    
  },
  {
    id: "4",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "5",
    title: "Contact",
    url: "#contact",
  }

];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Ecoland App",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: ecoland,
    colorful: true,
  },
  {
    id: "1",
    title: "Bag Shop App",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "done",
    imageUrl: bag1,
  },
  {
    id: "2",
    title: "Avada App",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: avadapng,
  },
  // {
  //   id: "3",
  //   title: "Integration with APIs",
  //   text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
  //   date: "May 2023",
  //   status: "progress",
  //   imageUrl: roadmap4,
  // },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];
export const digitalSkill = [
  {
    id: "0",
    title: "Web Development",
    skills: [
      "HTML / ",
      "CSS / ",
      "Responsive design / ",
      "JavaScript / ",
      "JQUERY / ",
      "AJAX / ",
      "ReactJs / ",
      "Redux / ",
      "Bootstrap / ",
      "Tailwind / ",
      "SASS / ",
      "WordPress / ",
      "Content management / ",
      "SEO",
    ],
  },
  {
    id: "1",
    title: "Database Management",
    skills: ["Graph Databases / ", " Linked Data (RDF, SPARQL, Triple Stores) / ", " SHACL"],
  },
  {
    id: "2",
    title: "Soft Skills",
    skills: ["Teamwork / ", "Time management"],
  },
  {
    id: "3",
    title: "Languages",
    motherTongue: "Persian",
    skills: ["English / ", "Italian / ", "Turkish"],
  }

];

export const collabApps = [
  {
    id: "0",
    title: "html",
    icon: html,
    width: 48,
    height: 48,
  },
  {
    id: "1",
    title: "css",
    icon: css,
    width: 48,
    height: 48,
  },
  {
    id: "2",
    title: "javascript",
    icon: js,
    width: 48,
    height: 48,
  },
  {
    id: "3",
    title: "react",
    icon: react,
    width: 48,
    height: 48,
  },
  {
    id: "4",
    title: "tailwind",
    icon: tailwind,
    width: 48,
    height: 48,
  },
  {
    id: "5",
    title: "bootstrap",
    icon: bootstrap,
    width: 48,
    height: 48,
  },
  {
    id: "6",
    title: "database",
    icon: database,
    width: 48,
    height: 48,
  },
  {
    id: "7",
    title: "wordpress",
    icon: wordpress,
    width: 48,
    height: 48,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const abouts = [
  {
    id: "0",
    // title: "Educational Background",
    subtitle: "Master's degree in computer engineering",
    subsubtitle: "University of Padova",
    fieldOfStudy: "Web information and data engineering",
    thesis: " not yet",
    internship: " not yet",
    thesisGrade: " not yet",
    internshipGrade: " not yet",
    thesisContent: " not yet",
    text: "",
    duration: "2022 - Current",
  },
  {
    id: "1",
    // title: "Educational Background",
    subtitle: "Bachelor's degree in computer engineering",
    subsubtitle: "Azad University West Tehran Branch",
    fieldOfStudy: "Software Engineering",
    thesis: "Web Application Development",
    internship: "Web Development",
    thesisGrade: "Thesis Grade: 20/20",
    internshipGrade: "Internship Grade: 19.5/20 ",
    thesisContent: "For my bachelor's thesis, I undertook a project focused on frontend development of a Web Application. This involved leveraging HTML5, CSS, the Bootstrap framework, JavaScript, and jQuery to create the user interface and functionalities. Under the guidance of my professor, I successfully implemented these technologies to fulfil the project requirements and achieve its objectives.",
    text: "I graduated ",
    duration: "2017-2022",
  },
  // {
  //   id: "5",
  //   title: "Improve everyday",
  //   text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
  //   backgroundUrl: "./src/assets/benefits/card-6.svg",
  //   iconUrl: benefitIcon2,
  //   imageUrl: benefitImage2,
  // },
];
export const abouts2 = [
  {
    id: "2",
    // title: "Work Experience", 
    subtitle: "Web content manager",
    subsubtitle: "Faramin Office Furniture",
    jobDescription: "During my tenure at Faramin Office Furniture, I focused on generating SEO-friendly content in both English and Persian languages. My responsibilities included crafting engaging website content to enhance online visibility and user engagement.",
    duration: "2021 - 2022",

    
  },
  {
    id: "3",
    // title: "Work Experience",
    subtitle: "Web developer",
    subsubtitle: "Hayatt Media",
    jobDescription: "During my time at Hayatt Media, I specialized in crafting captivating web experiences and SEO-friendly content. My primary responsibilities included creating website pages using WordPress with the Elementor plugin, alongside developing a diverse range of articles tailored for optimal search engine visibility. Some notable projects I contributed to include:majelan-tour.com, mofidtravel.com, touraktravel.com, d5gh.com, irangashttour.com, arshianseir.comAdditionally, I served as a front-end developer on various projects, employing HTML, CSS, JavaScript, jQuery, and Bootstrap frameworks to enhance user interfaces and functionality.",
    duration: "2019 - 2020",
  },
  {
    id: "4",
    // title: "Work Experience",
    subtitle: "Social Media and Web Content Manager / Sales Administrator",
    subsubtitle: "Sadinsafe",
    jobDescription: "As the Remote Social Media and Web Content Manager/Sales Administrator for my family business, I oversaw the digital presence and e-commerce activities from a remote location. My role involved managing various social media platforms, curating engaging content, and maintaining the company website. Additionally, I was responsible for overseeing the buy and sell transactions of safeboxes through the administrative panel. This included editing, creating, and deleting product listings as needed. Furthermore, I played a key role in creating SEO-friendly articles to enhance online visibility and drive traffic to the website.",
    duration: "2015 - 2022",
  },
];

export const socials = [
  {
    id: "0",
    title: "linkedin",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/in/ahmad-sadin-94b781179/",
  },
  {
    id: "1",
    title: "git",
    iconUrl: git,
    url: "https://github.com/Ahmadsadin36",
  },
  {
    id: "2",
    title: "gmail",
    iconUrl: gmail,
    url: "mailto:sadinn.ahmad@gmail.com",
  },
  // {
  //   id: "3",
  //   title: "Telegram",
  //   iconUrl: telegram,
  //   url: "#",
  // },
  // {
  //   id: "4",
  //   title: "Facebook",
  //   iconUrl: facebook,
  //   url: "#",
  // },
];
