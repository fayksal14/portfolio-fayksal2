// src/config.ts
export const SITE = {
  name: "Faysal Kamboui Bagour",
  title: "SysAdmin & Cloud Specialist",
  description: "Técnico en Administración de Sistemas, Redes y Ciberseguridad | 1er puesto Melilla Skills AWS | SpainSkills",
  url: "https://www.fayksal.es",
  accentColor: "#0ea5e9", // azul cielo moderno (cámbialo si quieres otro)
};

export const NAV = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export const HERO = {
  title: "Faysal Kamboui",
  subtitle: "SysAdmin | Cloud & Cybersecurity",
  description: "Estudiante de ASIR • Ganador Melilla Skills AWS • Erasmus+ Turquía",
  cta: "Descargar CV",
  ctaLink: "/cv-faysal-kamboui.pdf", // luego subes tu CV a /public/
};

export const ABOUT = `
  Técnico en IT con experiencia internacional (Erasmus+ en Estambul) y premios en computación en la nube.
  Especializado en administración de sistemas Linux/Windows, redes, AWS y ciberseguridad.
  Proactivo, resolutivo y apasionado por la infraestructura segura y escalable.
`;

export const EXPERIENCE = [
  {
    company: "I.E.S. Miguel Fernández",
    role: "Técnico IT",
    period: "Ene 2025 – Mar 2025",
    tasks: [
      "Resolución de incidencias hardware/software",
      "Mantenimiento de equipos y redes locales",
      "Actualización de bases de datos educativas"
    ]
  },
  {
    company: "Meydan Mimarlık – Erasmus+ (Estambul)",
    role: "Técnico IT Internacional",
    period: "Abr 2024 – May 2024",
    tasks: [
      "Documentación técnica bilingüe",
      "Mantenimiento de infraestructura IT",
      "Colaboración en entorno multinacional"
    ]
  },
  {
    company: "I.E.S. Miguel Fernández",
    role: "Técnico IT (Prácticas FCT)",
    period: "Mar 2024 – Abr 2024",
    tasks: ["Soporte técnico y reparación de equipos"]
  }
];

export const EDUCATION = [
  {
    school: "I.E.S. Leopoldo Queipo – Melilla",
    degree: "Grado Superior ASIR (en curso)",
    period: "2024 – Presente",
    notes: "1er puesto Cloud Computing (AWS) – Melilla Skills • Representante SpainSkills"
  },
  {
    school: "I.E.S. Leopoldo Queipo – Melilla",
    degree: "Grado Medio Sistemas Microinformáticos y Redes",
    period: "2022 – 2024",
    notes: "Internship Erasmus+ en Turquía"
  }
];

export const SKILLS = [
  "Linux", "AWS", "Windows Server", "Redes TCP/IP", "Bash Scripting",
  "CyberSecurity", "MySQL", "Docker", "Virtualización", "Python", "JavaScript"
];

export const PROJECTS = [
  {
    name: "Infraestructura AWS Educativa",
    description: "Diseño y despliegue de VPC, EC2 y S3 para entorno educativo (proyecto premiado)",
    tech: ["AWS", "Terraform", "Python"],
    link: "https://github.com/fayksal14/aws-melilla-skills"
  },
  {
    name: "Script de Hardening Linux",
    description: "Automatización de seguridad CIS Benchmark para servidores Ubuntu",
    tech: ["Bash", "Ansible"],
    link: "https://github.com/fayksal14/linux-hardening"
  }
];
