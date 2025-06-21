
  export interface Project {
    title: string;
    subtitle: string; 
    description: string;
    image: string;
    link: string;
  }

export const Projects: Project[] = [
    {
      title: 'Portfolio Website',
      subtitle: '',
      description: 'A personal portfolio built using Ionic and Angular.A personal portfolio built using Ionic and Angular',
      image: 'assets/images/Screenshot 2025-06-21 140916.png',
      link: 'https://github.com/Harshwardhan-Rajapure',
    },
    {
      title: 'Chat Application',
      subtitle: '',
      description: 'Ionic-Angular-ChatApp-using-Firebase',
      image: 'assets/images/Screenshot 2025-06-21 142231.png',
      link: 'https://github.com/Harshwardhan-Rajapure',
    },
    {
      title: 'E-Commerce App',
      subtitle: '',
      description: 'A mobile-friendly shopping app with a clean UI and responsive.',
      image: '/assets/images/Screenshot 2025-06-21 144125.png',
      link: 'https://github.com/Harshwardhan-Rajapure',
    },
    // {
    //   title: 'Open Source Contribution Open Source Contribution',
    //   subtitle: '',
    //   description: 'Contributed to various open-source repositories on GitHub.Contributed to various open-source repositories on GitHub',
    //   image: 'https://ionicframework.com/docs/img/demos/card-media.png',
    //   link: 'https://github.com/Harshwardhan-Rajapure',
    // },
  ];

  // -------------Skills Section---------------------------------

  export interface Skill {
    name: string;
    logo: string; 
    proficiency: number; 
  }
  
  export const Skills: Skill[] = [
    { name: 'Angular', logo: 'https://angular.io/assets/images/logos/angular/angular.png', proficiency: 95 },
    { name: 'TypeScript', logo: 'https://cdn3d.iconscout.com/3d/free/thumb/free-typescript-3d-icon-download-in-png-blend-fbx-gltf-file-formats--microsoft-logo-angular-language-javascript-static-type-coding-lang-pack-logos-icons-7577992.png', proficiency: 80 },
    { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', proficiency: 70 },
    { name: 'HTML', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png', proficiency: 95 },
    { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg', proficiency: 90 },
    { name: 'Ionic', logo: 'data:image/png;base64,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', proficiency: 85 },
    { name: 'Spring Boot', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8i4zPog-0j0JR_yZglxPhTPZXxN2iMTQ3Dw&s', proficiency: 85 },
    { name: 'Node.js', logo: 'https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png', proficiency: 85 },
    { name: ' Java', logo: 'https://cdn-icons-png.flaticon.com/512/226/226777.png', proficiency: 85 },
    { name: ' Firebase', logo: 'data:image/png;base64,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', proficiency: 85 },
    { name: ' MySQL', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRkKaJr1t5xC9B_Dd2iDR8nwkd_bbhSmizMA&s', proficiency: 85 },
    { name: ' MongoDB', logo: 'data:image/png;base64,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', proficiency: 85 },
  ];

  // -------------------- Experience Section--------------------------------

  export interface Experience {
    role: string;
    company: string;
    duration: string;
    projects: string[];
    description?: string;
  }

  export const Experiences: Experience[] = [
    {
      role: 'Software Developer',
      company: 'Scalar Techhub',
      duration: '3 Months (Dec 2024 - Feb 2025)', 
      projects: ['Eyva.io', 'Platfio'],
      description: 'Contributed to web development projects using modern frameworks.',
    },
    {
      role: 'Software Developer',
      company: 'Scalar Techhub',
      duration: '3 Months (Dec 2024 - Feb 2025)', 
      projects: ['Eyva.io', 'Platfio'],
      description: 'Contributed to web development projects using modern frameworks.',
    }, {
      role: 'Software Developer',
      company: 'Scalar Techhub',
      duration: '3 Months (Dec 2024 - Feb 2025)', 
      projects: ['Eyva.io', 'Platfio'],
      description: 'Contributed to web development projects using modern frameworks.',
    },
  ];