export const portfolioData = {
  hero: {
    name: "Shakil Ahmed",
    title: "Full Stack Developer",
    subtitle: "Crafting digital experiences with modern technology",
    avatar: "https://portfolio-veciuv.readyplayer.me/avatar",
    description: "Passionate full-stack developer with expertise in both frontend and backend technologies. I love creating seamless, scalable applications that solve real-world problems."
  },

  about: {
    description: "I'm a passionate full-stack developer with a strong foundation in both frontend and backend technologies. With experience in modern frameworks and databases, I enjoy building complete solutions that are both functional and visually appealing.",
    highlights: [
      "5+ years of development experience",
      "Full-stack expertise across multiple technologies",
      "Passionate about clean code and best practices",
      "Always learning and adapting to new technologies"
    ]
  },

  skills: {
    frontend: [
      { name: "HTML", level: 95, category: "markup" },
      { name: "CSS", level: 90, category: "styling" },
      { name: "JavaScript", level: 85, category: "programming" },
      { name: "React", level: 80, category: "framework" },
      { name: "TypeScript", level: 75, category: "programming" },
      { name: "Tailwind CSS", level: 85, category: "styling" }
    ],
    backend: [
      { name: "Python", level: 85, category: "programming" },
      { name: "Java", level: 80, category: "programming" },
      { name: "Node.js", level: 75, category: "runtime" },
      { name: "FastAPI", level: 80, category: "framework" },
      { name: "Spring Boot", level: 75, category: "framework" }
    ],
    database: [
      { name: "SQL", level: 85, category: "query" },
      { name: "PostgreSQL", level: 80, category: "relational" },
      { name: "MongoDB", level: 75, category: "nosql" },
      { name: "Redis", level: 70, category: "cache" }
    ],
    tools: [
      { name: "Git", level: 90, category: "version-control" },
      { name: "Docker", level: 75, category: "containerization" },
      { name: "AWS", level: 70, category: "cloud" },
      { name: "Linux", level: 80, category: "os" }
    ]
  },

  experience: [
    {
      id: 1,
      company: "Tech Innovations Inc",
      position: "Senior Full Stack Developer",
      duration: "2022 - Present",
      location: "Remote",
      description: "Lead development of scalable web applications using React, Python, and cloud technologies. Managed a team of 4 developers and implemented CI/CD pipelines.",
      technologies: ["React", "Python", "PostgreSQL", "AWS", "Docker"],
      achievements: [
        "Improved application performance by 40%",
        "Led migration to microservices architecture",
        "Reduced deployment time by 60% with CI/CD"
      ]
    },
    {
      id: 2,
      company: "Digital Solutions Ltd",
      position: "Full Stack Developer",
      duration: "2020 - 2022",
      location: "New York, NY",
      description: "Developed and maintained multiple client applications using modern web technologies. Collaborated with design teams to implement pixel-perfect UIs.",
      technologies: ["JavaScript", "Java", "MongoDB", "React", "Spring Boot"],
      achievements: [
        "Delivered 15+ successful projects",
        "Increased client satisfaction by 25%",
        "Mentored 3 junior developers"
      ]
    },
    {
      id: 3,
      company: "StartUp Dynamics",
      position: "Junior Developer",
      duration: "2019 - 2020",
      location: "San Francisco, CA",
      description: "Started career building web applications and learning modern development practices. Worked on both frontend and backend features.",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "SQL"],
      achievements: [
        "Built 5 production features from scratch",
        "Learned agile development practices",
        "Contributed to open source projects"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
      features: [
        "Real-time inventory updates",
        "Secure payment processing",
        "Admin analytics dashboard",
        "Mobile-responsive design"
      ],
      github: "https://github.com/MRSHAKILS/ecommerce-platform",
      demo: "https://demo-ecommerce.example.com",
      status: "Completed"
    },
    {
      id: 2,
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, team collaboration, and advanced reporting.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
      technologies: ["React", "Python", "FastAPI", "PostgreSQL", "WebSocket"],
      features: [
        "Real-time collaboration",
        "Advanced project analytics",
        "Team management",
        "Custom workflows"
      ],
      github: "https://github.com/MRSHAKILS/task-manager",
      demo: "https://demo-taskmanager.example.com",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      description: "Data visualization platform for weather patterns with machine learning predictions and interactive charts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
      technologies: ["React", "Python", "TensorFlow", "D3.js", "Redis"],
      features: [
        "ML-powered predictions",
        "Interactive data visualization",
        "Historical data analysis",
        "API integrations"
      ],
      github: "https://github.com/MRSHAKILS/weather-dashboard",
      demo: "https://demo-weather.example.com",
      status: "Completed"
    }
  ],

  achievements: [
    {
      id: 1,
      title: "AWS Certified Developer",
      organization: "Amazon Web Services",
      date: "2023",
      description: "Certified in developing and maintaining applications on AWS platform",
      type: "certification",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80"
    },
    {
      id: 2,
      title: "Best Innovation Award",
      organization: "Tech Innovations Inc",
      date: "2023",
      description: "Received for developing an AI-powered recommendation system that increased user engagement by 45%",
      type: "award",
      image: "https://images.unsplash.com/photo-1�567427018141-95ea69ba8319?w=400&q=80"
    },
    {
      id: 3,
      title: "Open Source Contributor",
      organization: "GitHub",
      date: "2022 - Present",
      description: "Active contributor to various open source projects with 100+ contributions",
      type: "contribution",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&q=80"
    },
    {
      id: 4,
      title: "Full Stack Bootcamp Graduate",
      organization: "Coding Academy",
      date: "2019",
      description: "Completed intensive 12-week full-stack development program with distinction",
      type: "education",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80"
    }
  ],

  contact: {
    email: "work.ahmedshakil@gmail.com",
    linkedin: "https://www.linkedin.com/in/shakil-ahmed-cs/",
    github: "https://github.com/MRSHAKILS",
    location: "Available for Remote Work",
    availability: "Open to new opportunities"
  }
};