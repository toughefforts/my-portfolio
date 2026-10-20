export interface EducationTech {
  name: string;
  tag: string;
  iconType: string;
  color: string;
}

export interface EducationFeature {
  label: string;
  subtext: string;
  icon: "laptop" | "code" | "chart" | "users";
}

export interface EducationCapability {
  title: string;
  desc: string;
  icon: string;
}

export interface EducationStats {
  years: string;
  yearsLabel: string;
  metric1: string;
  metric1Label: string;
  metric2: string;
  metric2Label: string;
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
  highlightWord?: string;
  code: string;
  institution: string;
  shortInstitution: string;
  logoBadge: string;
  description: string;
  image: string;
  campusImage: string;
  mode: string;
  program: string;
  quoteStamp: string;
  stats: EducationStats;
  features: EducationFeature[];
  capabilities: EducationCapability[];
  techStack: EducationTech[];
  duration: string;
  coreAreas: string;
  livePreview: string;
  liveUrl: string;
  overview: string;
  curriculumIntro: string;
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
    title: "Bachelor of Computer Applications",
    highlightWord: "(BCA)",
    code: "BCA",
    institution: "Indira Gandhi National Open University (IGNOU)",
    shortInstitution: "IGNOU",
    logoBadge: "ignou THE PEOPLE'S UNIVERSITY",
    description:
      "Completed BCA from IGNOU, building a strong foundation in computer applications, full-stack software development, and modern technologies.",
    image: "/images/education/bca-screen.jpg",
    campusImage: "/images/education/ignou-campus.jpg",
    mode: "Distance Learning",
    program: "BCA (Undergraduate)",
    quoteStamp: "Learning Today Building Tomorrow...",
    stats: {
      years: "3",
      yearsLabel: "Years Duration",
      metric1: "30+",
      metric1Label: "Subjects & Practicals",
      metric2: "100%",
      metric2Label: "Skill Oriented",
    },
    features: [
      {
        label: "Practical Learning",
        subtext: "Hands-on experience with real-world projects",
        icon: "laptop",
      },
      {
        label: "Modern Technologies",
        subtext: "Industry-relevant tools and frameworks",
        icon: "code",
      },
      {
        label: "Better Career Opportunities",
        subtext: "Open doors to diverse career paths",
        icon: "chart",
      },
      {
        label: "Skill Development",
        subtext: "Enhance technical and problem-solving skills.",
        icon: "users",
      },
    ],
    capabilities: [
      {
        title: "Analytical Thinking",
        desc: "Deep understanding of algorithmic problem solving.",
        icon: "sparkles",
      },
      {
        title: "Full-Stack Perspective",
        desc: "From frontend to backend, complete development exposure.",
        icon: "layers",
      },
      {
        title: "Database Expertise",
        desc: "Hands-on with database design, normalization & query optimization.",
        icon: "database",
      },
      {
        title: "Engineering Discipline",
        desc: "Practiced clean code, modular design and software lifecycle.",
        icon: "code",
      },
    ],
    techStack: [
      { name: "C", tag: "Programming", iconType: "c", color: "#00599C" },
      { name: "Python", tag: "Programming", iconType: "python", color: "#3776AB" },
      { name: "MySQL", tag: "Database", iconType: "mysql", color: "#00758F" },
      { name: "HTML5", tag: "Web Development", iconType: "html", color: "#E34F26" },
      { name: "CSS3", tag: "Web Development", iconType: "css", color: "#1572B6" },
      { name: "JavaScript", tag: "Web Development", iconType: "js", color: "#F7DF1E" },
      { name: "DBMS & SQL", tag: "Database Systems", iconType: "db", color: "#fa4d56" },
      { name: "OOP (C++)", tag: "Object-Oriented", iconType: "cpp", color: "#00599C" },
    ],
    duration: "2023 – 2026",
    coreAreas:
      "Programming, Database, Web Technologies, Software Engineering",
    livePreview: "www.ignou.ac.in",
    liveUrl: "https://www.ignou.ac.in",
    overview:
      "An intensive 3-year undergraduate program focusing on software architecture, modern programming methodologies, database management, full-stack web engineering, and enterprise system designs.",
    curriculumIntro:
      "The BCA curriculum is designed to build a strong foundation in computer applications with a perfect blend of theory, practicals and real-world applications.",
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
      "Database Administrator",
      "System Analyst",
      "Backend Developer / API Engineer",
      "IT Support & System Management",
      "Further Studies (MCA / Higher Education)",
    ],
  },
  {
    id: "adce",
    stepNumber: "02",
    totalSteps: "04",
    tag: "Technical Diploma",
    title: "Advanced Diploma in Computer Engineering",
    highlightWord: "(ADCE)",
    code: "ADCE",
    institution: "Indian Institute of Computer Science (IICS)",
    shortInstitution: "IICS Pitampura",
    logoBadge: "IICS COMPUTER EDUCATION",
    description:
      "Intensive technical diploma focusing on computer hardware, network protocols, operating systems, and practical programming.",
    image: "/images/education/adce-screen.jpg",
    campusImage: "/images/education/iics-campus.jpg",
    mode: "Classroom & Lab Training",
    program: "Diploma (Computer Engineering)",
    quoteStamp: "Hardware to Cloud, Mastering Every Layer...",
    stats: {
      years: "3",
      yearsLabel: "Years Technical",
      metric1: "25+",
      metric1Label: "Hardware & Labs",
      metric2: "100%",
      metric2Label: "Hands-on Practical",
    },
    features: [
      {
        label: "Hardware Diagnostics",
        subtext: "Chip-level troubleshooting and system assembly",
        icon: "laptop",
      },
      {
        label: "Networking Protocols",
        subtext: "Hands-on LAN, WAN, routers and firewall setups",
        icon: "code",
      },
      {
        label: "Linux Systems",
        subtext: "Server administration, terminal shell & security",
        icon: "chart",
      },
      {
        label: "Application Dev",
        subtext: "Practical software development in C++ and Java",
        icon: "users",
      },
    ],
    capabilities: [
      {
        title: "Hardware Architecture",
        desc: "Deep diagnostics of microprocessors, motherboard logic & peripherals.",
        icon: "laptop",
      },
      {
        title: "Network Engineering",
        desc: "Configuration of subnetting, OSI layers, routing tables and security.",
        icon: "layers",
      },
      {
        title: "Linux Administration",
        desc: "Mastery of bash automation, server administration and access permissions.",
        icon: "sparkles",
      },
      {
        title: "OOP Systems Programming",
        desc: "High-performance programming with C++ and enterprise Java.",
        icon: "code",
      },
    ],
    techStack: [
      { name: "C++", tag: "Core Systems", iconType: "cpp", color: "#00599C" },
      { name: "Java", tag: "Enterprise", iconType: "java", color: "#ED8B00" },
      { name: "Linux", tag: "Operating System", iconType: "linux", color: "#FCC624" },
      { name: "TCP/IP", tag: "Networking", iconType: "network", color: "#2563eb" },
      { name: "MySQL", tag: "Database", iconType: "mysql", color: "#00758F" },
      { name: "Git", tag: "Version Control", iconType: "git", color: "#F05032" },
      { name: "Hardware", tag: "System Assembly", iconType: "hardware", color: "#10b981" },
      { name: "Bash", tag: "Shell Scripting", iconType: "bash", color: "#6366f1" },
    ],
    duration: "2023 – 2026",
    coreAreas:
      "Hardware Architecture, Networking, C/C++, Java, Linux Administration",
    livePreview: "www.iicsindia.com",
    liveUrl: "https://www.iicsindia.com",
    overview:
      "A comprehensive technical engineering program bridging computer hardware mechanics, microprocessors, local and wide-area networking protocols, Linux system administration, and enterprise software engineering.",
    curriculumIntro:
      "The ADCE curriculum delivers rigorous engineering training connecting hardware architecture, enterprise networking, and robust systems programming.",
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
      "Systems Integration Analyst",
      "IT Infrastructure Specialist",
      "Hardware Diagnostic Consultant",
    ],
  },
  {
    id: "class-12",
    stepNumber: "03",
    totalSteps: "04",
    tag: "Senior Secondary (10+2)",
    title: "Class 12th",
    highlightWord: "(Arts with Economics)",
    code: "CLASS XII",
    institution: "Central Board of Secondary Education (CBSE)",
    shortInstitution: "CBSE Board",
    logoBadge: "CBSE CENTRAL BOARD",
    description:
      "Completed Senior Secondary education with Arts stream, specializing in Macroeconomics, Microeconomics, and Applied Statistics.",
    image: "/images/education/class12-screen.jpg",
    campusImage: "/images/education/cbse-campus.jpg",
    mode: "Regular Schooling",
    program: "Senior Secondary (10+2)",
    quoteStamp: "Economics, Logic and Creative Analysis...",
    stats: {
      years: "1",
      yearsLabel: "Year Senior Sec",
      metric1: "5",
      metric1Label: "Core Disciplines",
      metric2: "CBSE",
      metric2Label: "Board Certified",
    },
    features: [
      {
        label: "Economic Analysis",
        subtext: "Macro & microeconomic trend interpretation",
        icon: "chart",
      },
      {
        label: "Applied Statistics",
        subtext: "Data collection, dispersion & correlation metrics",
        icon: "laptop",
      },
      {
        label: "Analytical Logic",
        subtext: "Critical policy reasoning and structured thought",
        icon: "code",
      },
      {
        label: "Communication",
        subtext: "Advanced articulation and academic writing",
        icon: "users",
      },
    ],
    capabilities: [
      {
        title: "Market & Trend Analysis",
        desc: "Understanding macroeconomic forces, monetary policies and fiscal models.",
        icon: "chart",
      },
      {
        title: "Quantitative Statistics",
        desc: "Applied calculations for data dispersion, variance and graphical evaluation.",
        icon: "sparkles",
      },
      {
        title: "Structured Reasoning",
        desc: "Formulating clear, deductive arguments and multi-faceted problem analysis.",
        icon: "layers",
      },
      {
        title: "Academic Communication",
        desc: "Clear writing, executive summaries and professional comprehension.",
        icon: "code",
      },
    ],
    techStack: [
      { name: "Microeconomics", tag: "Economics", iconType: "econ", color: "#e11d48" },
      { name: "Macroeconomics", tag: "Analysis", iconType: "econ", color: "#2563eb" },
      { name: "Statistics", tag: "Applied Stats", iconType: "stats", color: "#059669" },
      { name: "Logic", tag: "Reasoning", iconType: "logic", color: "#d97706" },
      { name: "Pol. Science", tag: "Governance", iconType: "gov", color: "#7c3aed" },
      { name: "World History", tag: "Civilizations", iconType: "history", color: "#b45309" },
      { name: "English Core", tag: "Literature", iconType: "english", color: "#0284c7" },
      { name: "Data Logic", tag: "Representation", iconType: "data", color: "#475569" },
    ],
    duration: "2022 – 2023",
    coreAreas:
      "Micro & Macro Economics, Applied Statistics, Analytical Reasoning",
    livePreview: "www.cbse.gov.in",
    liveUrl: "https://www.cbse.gov.in",
    overview:
      "Senior Secondary certification under CBSE specializing in Humanities & Economics. The curriculum nurtured strong analytical thinking, economic trend interpretation, quantitative statistical evaluation, and structured logic formulation.",
    curriculumIntro:
      "Senior Secondary education focused on quantitative economics, statistical interpretation, and sharp analytical methodologies.",
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
      "Quantitative Problem Solver",
      "Communication & Creative Articulation",
    ],
  },
  {
    id: "class-10",
    stepNumber: "04",
    totalSteps: "04",
    tag: "Secondary Examination (10th)",
    title: "Class 10th",
    highlightWord: "(Secondary School Certificate)",
    code: "CLASS X",
    institution: "Central Board of Secondary Education (CBSE)",
    shortInstitution: "CBSE Board",
    logoBadge: "CBSE ALL INDIA",
    description:
      "Completed Secondary Schooling establishing strong foundations in Mathematics, Science and Computer literacy.",
    image: "/images/education/class10-screen.jpg",
    campusImage: "/images/education/cbse-campus.jpg",
    mode: "Regular Schooling",
    program: "Secondary Examination (10th)",
    quoteStamp: "Foundations of Science, Mathematics & Curiosity...",
    stats: {
      years: "1",
      yearsLabel: "Year Secondary",
      metric1: "6",
      metric1Label: "Core Subjects",
      metric2: "CBSE",
      metric2Label: "All India Board",
    },
    features: [
      {
        label: "Mathematics & Logic",
        subtext: "Algebra, geometry and quantitative problem solving",
        icon: "code",
      },
      {
        label: "General Sciences",
        subtext: "Physics, chemistry and biological systems",
        icon: "laptop",
      },
      {
        label: "Computer Basics",
        subtext: "Information technology and fundamental digital literacy",
        icon: "chart",
      },
      {
        label: "Problem Solving",
        subtext: "Analytical discipline across foundational subjects",
        icon: "users",
      },
    ],
    capabilities: [
      {
        title: "Algebraic & Geometric Logic",
        desc: "Strong grounding in mathematical theorem proofs, trigonometry and equations.",
        icon: "code",
      },
      {
        title: "Scientific Inquiry",
        desc: "Physical laws, chemical compounds and systematic empirical reasoning.",
        icon: "sparkles",
      },
      {
        title: "Digital Literacy",
        desc: "Early introduction to algorithmic logic, OS commands and computer tools.",
        icon: "laptop",
      },
      {
        title: "Bilingual Communication",
        desc: "Command over English and Hindi literature, grammar and creative expression.",
        icon: "layers",
      },
    ],
    techStack: [
      { name: "Mathematics", tag: "Algebra & Geometry", iconType: "math", color: "#2563eb" },
      { name: "Physics", tag: "Physical Science", iconType: "physics", color: "#0284c7" },
      { name: "Chemistry", tag: "Chemical Science", iconType: "chem", color: "#059669" },
      { name: "Biology", tag: "Life Processes", iconType: "bio", color: "#16a34a" },
      { name: "Computer IT", tag: "Foundations", iconType: "it", color: "#fa4d56" },
      { name: "Social Science", tag: "History & Geo", iconType: "social", color: "#d97706" },
      { name: "English", tag: "Language Core", iconType: "lang", color: "#7c3aed" },
      { name: "Hindi", tag: "Language Course", iconType: "hindi", color: "#e11d48" },
    ],
    duration: "2020 – 2021",
    coreAreas:
      "Mathematics, Physical & Life Sciences, Computer Fundamentals",
    livePreview: "www.cbse.gov.in",
    liveUrl: "https://www.cbse.gov.in",
    overview:
      "Secondary School Certificate (Class 10) awarded by CBSE, laying the core mathematical, scientific, and computing fundamentals that ignited the passion for technology, logical systems, and engineering.",
    curriculumIntro:
      "Secondary education laying the foundational pillars in STEM, logical algorithms, and structured analytical inquiry.",
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
      "Core Computational Thinking",
      "Analytical Problem Solving",
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
