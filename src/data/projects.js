// Production Projects - Real projects with bigger impact (client or independent)
export const productionProjects = [
  {
    id: 1,
    title: 'Business Management System',
    description: 'Built a multi-tenant business management platform handling inventory, sales, orders, customers, loans, and expenses. Required role-based access control, data isolation per business, real-time updates, and approval workflows for business registration and payment verification.',
    solution: 'Developed a React frontend with Convex serverless backend, implementing multi-tenant data isolation, granular permissions, and real-time state management. Built workflows for business approval, inventory tracking with low-stock alerts, sales processing with automatic stock updates, customer order management, loan tracking, and expense reporting. Used role-based routing and protected routes to enforce access control across admin, owner, and staff roles.',
    technologies: ['React', 'Convex', 'TypeScript', 'Tailwind CSS', 'React Router', 'bcrypt', 'Serverless Backend', 'Real-time Database'],
    github: 'https://github.com/alqazimi/ganasipro',
    demo: 'https://ganacsipro.com',
    featured: true
  },
  {
    id: 2,
    title: 'Full-Stack Project 2',
    description: 'Describe the problem this project solved...',
    solution: 'Explain how you built it and what technologies you used...',
    technologies: ['React', 'Node.js', 'Express', 'Database', 'etc'],
    github: 'https://github.com/alqazimi/repo-name',
    demo: 'https://demo-url.com',
    featured: false
  },
  {
    id: 3,
    title: 'Full-Stack Project 3',
    description: 'Describe the problem this project solved...',
    solution: 'Explain how you built it and what technologies you used...',
    technologies: ['React', 'Node.js', 'Express', 'Database', 'etc'],
    github: 'https://github.com/alqazimi/repo-name',
    demo: 'https://demo-url.com',
    featured: false
  },
  {
    id: 4,
    title: 'Full-Stack Project 4',
    description: 'Describe the problem this project solved...',
    solution: 'Explain how you built it and what technologies you used...',
    technologies: ['React', 'Node.js', 'Express', 'Database', 'etc'],
    github: 'https://github.com/alqazimi/repo-name',
    demo: 'https://demo-url.com',
    featured: false
  }
]

// Side Projects & Tools - Personal or experimental projects
export const sideProjects = [
  {
    id: 5,
    title: 'React Native Mobile App',
    description: 'Describe the problem this mobile app solved...',
    solution: 'Explain how you built it with React Native...',
    technologies: ['React Native', 'JavaScript', 'etc'],
    github: 'https://github.com/alqazimi/mobile-app-repo',
    demo: 'https://demo-url.com' // Optional - App Store/Play Store link if available
  },
  {
    id: 6,
    title: 'Frontend Project',
    description: 'Describe the problem this frontend project solved...',
    solution: 'Explain how you built it...',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'],
    github: 'https://github.com/alqazimi/frontend-project-repo',
    demo: 'https://demo-url.com'
  }
]

// Open Source Contributions - Optional section
export const openSourceProjects = [
  // Add your open source contributions here
  // Example structure:
  // {
  //   id: 5,
  //   title: 'Project Name',
  //   description: 'Contribution description',
  //   github: 'https://github.com/org/repo',
  //   contribution: 'What you contributed'
  // }
]

// Legacy export for backward compatibility (if needed)
export const projects = [...productionProjects, ...sideProjects, ...openSourceProjects]

