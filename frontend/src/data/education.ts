export interface EducationTech {
  name: string;
  tag: string;
  iconType: string;
  color: string;
}

export interface EducationFeature {
  label: string;
  icon: "laptop" | "code" | "chart" | "users";
}

export interface EducationCurriculumModule {
  title: string;
  topics: string[];
}

export interface EducationSlide {
  id: string;
  stepNumber: string;
  totalSteps: string;
  tag: string;
  title: string;
  code: string;
  institution: string;
  shortInstitution: string;
  logoBadge: string;
  description: string;
  image: string;
  features: EducationFeature[];
  techStack: EducationTech[];
  duration: string;
  coreAreas: string;
  livePreview: string;
  liveUrl: string;
  overview: string;
  keyHighlights: string[];
  curriculum: EducationCurriculumModule[];
  careerOutcomes: string[];
}

export const educationSlides: EducationSlide[] = [
  {
    id: "bca",
    stepNumber: "01",
    totalSteps: "04",
    tag: "Undergraduate Program",
    title: "Bachelor of Computer Applications (BCA)",
    code: "BCA",
    institution: "Indira Gandhi National Open University (IGNOU)",
    shortInstitution: "IGNOU",
    logoBadge: "ignou THE PEOPLE'S UNIVERSITY",
    description:
      "Currently pursuing BCA from IGNOU, building a strong foundation in computer applications, full-stack software development, and modern technologies.",
    image: "/images/education/bca-screen.jpg",
    features: [
      { label: "Practical Learning", icon: "laptop" },
      { label: "Modern Technologies", icon: "code" },
      { label: "Better Career Opportunities", icon: "chart" },
      { label: "Skill Development", icon: "users" },
    ],
    techStack: [
      { name: "C", tag: "C Language", iconType: "c", color: "#00599C" },
      { name: "Python", tag: "Python", iconType: "python", color: "#3776AB" },
      { name: "MySQL", tag: "MySQL", iconType: "mysql", color: "#00758F" },
      { name: "HTML", tag: "HTML5", iconType: "html", color: "#E34F26" },
      { name: "CSS", tag: "CSS3", iconType: "css", color: "#1572B6" },
      { name: "JavaScript", tag: "JS", iconType: "js", color: "#F7DF1E" },
    ],
    duration: "2023 – Present",
    coreAreas:
      "Programming, Database, Web Technologies, Software Engineering",
    livePreview: "www.ignou.ac.in",
    liveUrl: "https://www.ignou.ac.in",
    overview:
      "The Bachelor of Computer Applications (BCA) is an intensive 3-year undergraduate degree program focusing on software architecture, advanced programming methodologies, modern database management, full-stack web engineering, and enterprise system designs.",
    keyHighlights: [
      "Deep understanding of algorithmic problem solving & data structures.",
      "Comprehensive full-stack development covering modern web standards.",
      "Relational database design, normalization & query optimization with MySQL.",
      "Software engineering lifecycle, agile practices & modular code architecture.",
    ],
    curriculum: [
      {
        title: "Semester I & II — Core Foundations",
        topics: [
          "Computer Basics & PC Software Lab",
          "Foundations of Mathematics & Logic",
          "Problem Solving through C Programming",
          "Digital Logic & Computer Organization",
        ],
      },
      {
        title: "Semester III & IV — Advanced Programming & Systems",
        topics: [
          "Data Structures & Algorithm Design",
          "Database Management Systems (DBMS & SQL)",
          "Object-Oriented Programming with C++ & Python",
          "Operating Systems & System Software",
        ],
      },
      {
        title: "Semester V & VI — Modern Web & Enterprise Tech",
        topics: [
          "Web Programming (HTML5, CSS3, JavaScript, APIs)",
          "Computer Networks & Cloud Protocols",
          "Software Engineering Principles & Quality Assurance",
          "Major Capstone Project & Real-World Lab Application",
        ],
      },
    ],
    careerOutcomes: [
      "Full-Stack Web Developer",
      "Software Engineer / Application Developer",
      "Database Administrator & Analyst",
      "Backend & API Engineer",
    ],
  },
  {
    id: "adce",
    stepNumber: "02",
    totalSteps: "04",
    tag: "Technical Diploma",
    title: "Advanced Diploma in Computer Engineering (ADCE)",
    code: "ADCE",
    institution: "Indian Institute of Computer Science (IICS), Pitampura",
    shortInstitution: "IICS Pitampura",
    logoBadge: "IICS COMPUTER EDUCATION",
    description:
      "Intensive technical diploma focusing on computer hardware, network protocols, operating systems, and practical programming.",
    image: "/images/education/adce-screen.jpg",
    features: [
      { label: "Hardware Diagnostics", icon: "laptop" },
      { label: "Networking Protocols", icon: "code" },
      { label: "Linux Systems", icon: "chart" },
      { label: "Application Dev", icon: "users" },
    ],
    techStack: [
      { name: "C++", tag: "C++ Core", iconType: "cpp", color: "#00599C" },
      { name: "Java", tag: "Java", iconType: "java", color: "#ED8B00" },
      { name: "Linux", tag: "Linux OS", iconType: "linux", color: "#FCC624" },
      { name: "TCP/IP", tag: "Networking", iconType: "network", color: "#2563eb" },
      { name: "MySQL", tag: "Database", iconType: "mysql", color: "#00758F" },
      { name: "Git", tag: "Git VCS", iconType: "git", color: "#F05032" },
    ],
    duration: "2023 – 2026",
    coreAreas:
      "Hardware Architecture, Networking, C/C++, Java, Linux Administration",
    livePreview: "www.iicsindia.com",
    liveUrl: "https://www.iicsindia.com",
    overview:
      "The Advanced Diploma in Computer Engineering (ADCE) from IICS provides in-depth technical training bridging system hardware architecture, TCP/IP networking, Linux terminal system administration, and enterprise software programming in C++ & Java.",
    keyHighlights: [
      "Hands-on computer hardware assembly, chip-level diagnostics & maintenance.",
      "Comprehensive LAN/WAN topology configuration & routing protocols.",
      "Linux server deployment, bash scripting, file permissions & security.",
      "Object-oriented programming and application building with C++ and Java.",
    ],
    curriculum: [
      {
        title: "Module 1 — Computer Hardware & Architecture",
        topics: [
          "Motherboard Components & Microprocessor Architecture",
          "Memory Subsystems, BIOS/UEFI Configuration & Troubleshooting",
          "Power Management, Storage Technologies & Hardware Diagnostics",
          "Peripheral Interfacing & Device Driver Installation",
        ],
      },
      {
        title: "Module 2 — Network Engineering & Protocols",
        topics: [
          "OSI & TCP/IP Model Deep Dive",
          "IP Addressing, Subnetting, Routers & Switches Setup",
          "Network Security, Firewalls & VPN Configurations",
          "Client-Server Architecture & Remote Access Protocols",
        ],
      },
      {
        title: "Module 3 — Systems & Practical Programming",
        topics: [
          "Linux Installation, Kernel Commands & Administration",
          "C++ Object-Oriented System Programming",
          "Core Java & Database Connectivity (JDBC)",
          "Git Version Control & Deployment Workflows",
        ],
      },
    ],
    careerOutcomes: [
      "Computer Engineering Specialist",
      "Network Administrator / Engineer",
      "Linux System Administrator",
      "Software & System Support Engineer",
    ],
  },
  {
    id: "class-12",
    stepNumber: "03",
    totalSteps: "04",
    tag: "Senior Secondary (10+2)",
    title: "Class 12th (Arts with Economics)",
    code: "CLASS XII",
    institution: "Central Board of Secondary Education (CBSE)",
    shortInstitution: "CBSE Board",
    logoBadge: "CBSE CENTRAL BOARD",
    description:
      "Completed Senior Secondary education with Arts stream, specializing in Macroeconomics, Microeconomics, and Applied Statistics.",
    image: "/images/education/class12-screen.jpg",
    features: [
      { label: "Economic Analysis", icon: "chart" },
      { label: "Applied Statistics", icon: "laptop" },
      { label: "Analytical Logic", icon: "code" },
      { label: "Communication", icon: "users" },
    ],
    techStack: [
      { name: "Microeconomics", tag: "Economics", iconType: "econ", color: "#e11d48" },
      { name: "Macroeconomics", tag: "Analysis", iconType: "econ", color: "#2563eb" },
      { name: "Statistics", tag: "Applied Stats", iconType: "stats", color: "#059669" },
      { name: "Logic", tag: "Reasoning", iconType: "logic", color: "#d97706" },
    ],
    duration: "2022 – 2023",
    coreAreas:
      "Micro & Macro Economics, Applied Statistics, Analytical Reasoning",
    livePreview: "www.cbse.gov.in",
    liveUrl: "https://www.cbse.gov.in",
    overview:
      "Senior Secondary certification under CBSE specializing in Humanities & Economics. The curriculum nurtured strong analytical thinking, economic trend interpretation, quantitative statistical evaluation, and structured logic formulation.",
    keyHighlights: [
      "Mastery of economic models: demand-supply mechanics, market equilibriums & GDP.",
      "Applied statistical methods: index numbers, dispersion, correlation & analysis.",
      "Critical reasoning, policy evaluation & governance perspectives.",
      "High-level written comprehension and academic communication.",
    ],
    curriculum: [
      {
        title: "Discipline 1 — Economics & Quantitative Statistics",
        topics: [
          "Introductory Microeconomics: Consumer Behavior & Production Theory",
          "Introductory Macroeconomics: National Income, Banking & Monetary Policy",
          "Statistics for Economics: Collection, Organization & Graphical Presentation",
          "Measures of Central Tendency & Correlation Analysis",
        ],
      },
      {
        title: "Discipline 2 — Social Sciences & Humanities",
        topics: [
          "Political Science: Constitutional Framework & Democratic Governance",
          "History: Indian & World Civilization Transformations",
          "English Core: Advanced Writing Skills & Literary Analysis",
        ],
      },
    ],
    careerOutcomes: [
      "Analytical & Data Logic Foundations",
      "Economics & Business Strategy Thinking",
      "Public Policy & Research Foundations",
    ],
  },
  {
    id: "class-10",
    stepNumber: "04",
    totalSteps: "04",
    tag: "Secondary Examination (10th)",
    title: "Class 10th (Secondary School Certificate)",
    code: "CLASS X",
    institution: "Central Board of Secondary Education (CBSE)",
    shortInstitution: "CBSE Board",
    logoBadge: "CBSE ALL INDIA",
    description:
      "Completed Secondary Schooling establishing strong foundations in Mathematics, Science and Computer literacy.",
    image: "/images/education/class10-screen.jpg",
    features: [
      { label: "Mathematics & Logic", icon: "code" },
      { label: "General Sciences", icon: "laptop" },
      { label: "Computer Basics", icon: "chart" },
      { label: "Problem Solving", icon: "users" },
    ],
    techStack: [
      { name: "Mathematics", tag: "Algebra & Geo", iconType: "math", color: "#2563eb" },
      { name: "Sciences", tag: "Physics/Chem", iconType: "science", color: "#059669" },
      { name: "Computing", tag: "IT Basics", iconType: "it", color: "#fa4d56" },
      { name: "English", tag: "Language", iconType: "lang", color: "#7c3aed" },
    ],
    duration: "2020 – 2021",
    coreAreas:
      "Mathematics, Physical & Life Sciences, Computer Fundamentals",
    livePreview: "www.cbse.gov.in",
    liveUrl: "https://www.cbse.gov.in",
    overview:
      "Secondary School Certificate (Class 10) awarded by CBSE, laying the core mathematical, scientific, and computing fundamentals that ignited the passion for technology, logical systems, and engineering.",
    keyHighlights: [
      "Strong foundation in Algebra, Geometry, Trigonometry, and Statistics.",
      "Comprehensive understanding of Physics, Chemistry, and Life Sciences.",
      "Introduction to computer architecture, software tools & digital ethics.",
      "Linguistic proficiency in Hindi and English with emphasis on communication.",
    ],
    curriculum: [
      {
        title: "Core Mathematical & Scientific Disciplines",
        topics: [
          "Mathematics: Number Systems, Algebra, Coordinate Geometry, Trigonometry",
          "Science: Chemical Reactions, Electricity, Magnetic Effects, Life Processes",
          "Social Science: History, Geography, Democratic Politics, Economic Development",
        ],
      },
      {
        title: "Language & Computing Disciplines",
        topics: [
          "English Language & Literature",
          "Hindi Course A",
          "Computer Fundamentals, Data Processing & Basic Applications",
        ],
      },
    ],
    careerOutcomes: [
      "Strong STEM & Quantitative Reasoning Base",
      "Foundation for Engineering & Software Careers",
    ],
  },
];

export const bottomRibbonStats = [
  {
    value: "10+",
    label: "Projects Delivered",
    iconBg: "bg-[#fee2e2]",
    iconColor: "text-[#fa4d56]",
    type: "grid",
  },
  {
    value: "8+",
    label: "Happy Clients",
    iconBg: "bg-[#fee2e2]",
    iconColor: "text-[#fa4d56]",
    type: "users",
  },
  {
    value: "5+",
    label: "Industries Served",
    iconBg: "bg-[#fee2e2]",
    iconColor: "text-[#fa4d56]",
    type: "chart",
  },
  {
    value: "100%",
    label: "Commitment to Quality",
    iconBg: "bg-[#fee2e2]",
    iconColor: "text-[#fa4d56]",
    type: "shield",
  },
];
