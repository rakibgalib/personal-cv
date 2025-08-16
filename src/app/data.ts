// ===== Types =====
export interface Basics {
  name: string;
  title: string;
  location?: string;
  email: string;
  phone?: string;
  linkedin?: string;
  summary?: string;
  resumeUrl?: string;
  social?: SocialLink[];  // fixed
}

export interface SkillGroup { title: string; items: string[]; }

export interface Project {
  name: string;
  description: string;
  links?: { label: string; url: string }[];
  stack?: string[];
}

export interface Experience {
  company: string;
  role: string;
  start: string;
  end: string;
  logo: string;
  bullets: string[];
}

export interface EducationItem {
  school: string;
  degree?: string;
  start?: string;
  end?: string;
}
export interface SocialLink {
  label: string;
  url: string;
}
export interface Certification { name: string; org?: string; }
export interface Reference { name: string; title?: string; phone?: string; }

export interface Portfolio {
  basics: Basics;
  
  skills: SkillGroup[];
  projects: Project[];
  experience: Experience[];
  education: EducationItem[];
  certifications: Certification[];
  references?: Reference[];
}

// ===== Data =====
export const PORTFOLIO: Portfolio = {
  basics: {
    name: 'Rakib Hossain',
    title: 'Full stack web developer | .NET, Angular & Blockchain',
    location: 'Dhaka, Bangladesh',
    email: 'rakibhossaingalib@gmail.com',
    phone: '+8801707564757',
    linkedin: 'https://linkedin.com/in/galibwow',
    resumeUrl: 'assets/RakibHossainLatx.pdf',
    social: [
      { label: 'facebook', url: 'https://facebook.com/username' },
      { label: 'twitter', url: 'https://twitter.com/username' },
      { label: 'github', url: 'https://github.com/username' },
      { label: 'dribbble', url: 'https://dribbble.com/username' }
    ],
    summary:
      'Full-stack engineer with 7+ years building secure, scalable web apps. Strong in ASP.NET Core, Web API, Angular, SQL Server, and Ethereum smart contracts.'
  },

  skills: [
    { title: 'Languages', items: ['C#', 'JavaScript', 'Node JS', 'SQL', 'HTML5', 'CSS3', 'Python', 'Solidity'] },
    { title: 'Frameworks & Libraries', items: ['ASP.NET MVC', 'Web API', '.NET Core', 'Angular', 'jQuery', 'Bootstrap'] },
    { title: 'Databases', items: ['SQL Server', 'Oracle 11g', 'MongoDB'] },
    { title: 'Tools & Platforms', items: ['Visual Studio','selenium', 'AWS DevOps', 'Git', 'Bitbucket', 'Remix IDE', 'ReSharper'] },
    { title: 'Specialties', items: ['Blockchain (Ethereum)', 'Payment/SMS Gateways', 'RoomXML'] }
  ],

  projects: [
    {
      name: 'Online Travel Agency (OTA) Solution',
      description: 'OTA offers a modern travel app with holiday, flight, and hotel reservation functionalities, enabled with dynamic pricing, filtered search, rewards program, mobile booking, etc. Travelers get complete travel planners, while tour providers get full business control and one integrated payment gateway.',
      links: [
        { label: 'buy tickets', url: 'https://buytickets.com.bd' },
        { label: 'go bee fly', url: 'https://gobeefly.com/' },
        { label: 'flights nepal', url: 'https://flightsnepal.com' },
        { label: 'cosmos holiday', url: 'https://cosmosholiday.com/' }
      ],
      stack: ['.NET','Html', 'Bootstrap','CSS','Jquery', 'Angular', 'SQL Server']
    },
    {
      name: 'Trincome',
      description: 'Trincome provides a comprehensive solution for airlines, automating ticketing, invoice management, and BSP reconciliation in one place. It streamlines financial processes, consolidates revenue, and offers customizable reporting to help airlines enhance efficiency, reduce errors, and maximize profits while adapting to industry changes.',
      links: [{ label: 'Trincome', url: 'https://trincome.com' }],
      stack: ['.NET Core', 'Html', 'Bootstrap','CSS','Jquery','SQL Server']
    },
    {
      name: 'Banglalink DMS',
      description: 'The Distributor Management System (DMS) is a comprehensive, web-based application designed to optimize distribution operations, streamline supply chain management, and provide valuable insights into distributor activities. By automating manual processes and providing real-time data, DMS helps businesses enhance efficiency, reduce errors, and improve overall performance in distribution management.',
      links: [{ label: 'Dms Banglalink', url: 'https://blkdms.banglalink.net' }],
      stack: ['.NET', 'Html', 'Bootstrap','CSS','Jquery', 'Jquery']
    },
    {
      name: 'Educhain',
      description: 'One of the vital problems in now a day is that, the fake certificate which is can be found here and there. The verification system which is another name of hassle where the candidates has to run behind the verifier which cost lot of valuable times. Fake certificate causes many problems in times of going aboard and other valuable time. LEADS EduChain enable individuals to hold their own records and share them directly with others for verification. The blockchain acts here as a notary that can always attest to the authenticity of certificates. With this system the authority can create and issues certificates digitally to the certificate owners with QR and unique hash code. The owner then can easily share his certificate to others for verification. Verifier can instantly verify certificates with a single click. Using blockchain technology, this apps ensures the convenience, privacy, trust, originality and immutability of identities.',
      links: [{ label: 'Educhain', url: 'https://leads.com.bd/digital-innovation/educational-certificate-verification/' }],
      stack: ['.NET', 'Ethereum', 'Solidity','Html','CSS','Mongo DB','SQL Server','Jquery']
    },
       {
      name: 'Pharmachain',
      description: 'One of the major problems in pharmaceuticals industry is that the fake medicine which cost the loss of Lives as well as the loss in the business. The identification of duplicate medicine and track down the original one is tough without proper information.Through PharmaChain pharmaceutical companies will be able to monitor and track their full distribution process. This will also notify them when a fake medicine is being sold inside the distribution channel or to the end customers.',
      links: [{ label: 'Pharmachain', url: 'https://leads.com.bd/digital-innovation/pharmaceutical-products-tracker/' }],
      stack: ['.NET', 'Ethereum', 'Solidity','Html','CSS','Mongo DB','SQL Server','Jquery']
    },
    {
      name: 'HX Manager',
      description: 'Automation tool that monitors booking/ticket expiration and triggers alerts & auto-cancel.',
      stack: ['.NET', 'C#', 'SQL Server']
    }
  ],

  experience: [
    {
      company: 'Prime Tech Solutions Ltd',
      role: 'Senior Software Engineer',
      start: 'Jan 2022',
      end: 'Present',
      logo: 'https://primetechbd.com/img/whitelogo.png',
      bullets: [
        'Led task distribution and cross-team collaboration; improved on-time delivery.',
        'Reduced post-deployment issues by ~15% through better QA & deployment practices.',
        'Integrated third-party APIs and optimized back-end performance.'
      ]
    },
    {
      company: 'Prime Tech Solutions Ltd',
      role: 'Software Engineer',
      start: 'Jul 2019',
      end: 'Jan 2022',
      logo: 'https://primetechbd.com/img/whitelogo.png',
      bullets: [
        'Built modules to client specs with quality and deadlines.',
        'R&D with new tech to solve complex issues; aligned with team integration plans.'
      ]
    },
    {
      company: 'Leads Corporation Ltd',
      role: 'Software Engineer',
      start: 'Oct 2017',
      end: 'Jul 2019',
      logo: 'https://leads.com.bd/wp-content/uploads/2022/02/LEADS-1-150x29.png',
      bullets: [
        'Developed Ethereum dApps and smart contracts; ensured security and compliance.',
        'Integrated blockchain components into existing systems.'
      ]
    },
    {
      company: 'Nerd Castle Ltd',
      role: 'Jr. Software Engineer (Intern)',
      logo: 'https://nerdcastlebd.com/wp-content/uploads/2023/10/Removal-411.png',
      start: 'Feb 2016',
      end: 'Sep 2016',
      bullets: [
        'Delivered client-specific modules, met tight deadlines, assisted SEIP/Top Up IT programs.'
      ]
    }
  ],

  education: [
    { school: 'American International University-Bangladesh (AIUB)', degree: 'B.Sc. in Software Engineering', start: '2011', end: '2016' },
    { school: 'Udayan High School, Barisal', degree: 'HSC (Science)', start: '2008', end: '2010' },
    { school: 'Govt. Barisal College', degree: 'SSC (Science)', start: '2008', end: '' }
  ],

  certifications: [
    { name: 'Certified Blockchain Developer – Blockchain Council' },
    { name: 'IBM Blockchain Essentials –IBM' },
   
    { name: 'Ethereum Development – Blockchain at Berkeley' },
    { name: 'Fundamentals of Blockchain and Bitcoin -Udemy' },
    { name: 'Web Application Development – .NET (BITM)' }
  ],

};
