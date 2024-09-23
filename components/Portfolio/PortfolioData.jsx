import KidsoImg from "@/public/images/kidso_header.webp";
import KidsoImg1 from "@/public/images/kidso_preview_1.webp";
import KidsoImg2 from "@/public/images/kidso_preview_2.webp";
import KidsoImg3 from "@/public/images/kidso_preview_3.webp";
import KidsoImg4 from "@/public/images/kidso_preview_4.webp";

import GardImg from "@/public/images/gardenia_header.webp";
import GardImg1 from "@/public/images/gardenia_preview_1.webp";
import GardImg2 from "@/public/images/gardenia_preview_2.webp";
import GardImg3 from "@/public/images/gardenia_preview_3.webp";
import GardImg4 from "@/public/images/gardenia_preview_4.webp";

import CleanImg from "@/public/images/cleantac_header.webp";
import CleanImg1 from "@/public/images/cleantac_preview_1.webp";
import CleanImg2 from "@/public/images/cleantac_preview_2.webp";
import CleanImg3 from "@/public/images/cleantac_preview_3.webp";
import CleanImg4 from "@/public/images/cleantac_preview_4.webp";

import BurtImg from "@/public/images/roofer_header.webp";
import BurtImg1 from "@/public/images/roofer_preview_1.webp";
import BurtImg2 from "@/public/images/roofer_preview_2.webp";
import BurtImg3 from "@/public/images/roofer_preview_3.webp";
import BurtImg4 from "@/public/images/roofer_preview_4.webp";

import CiteCoreImg from "@/public/images/citecore_header.png";
import CiteCoreImg1 from "@/public/images/citecore_preview_1.png";
import CiteCoreImg2 from "@/public/images/citecore_preview_2.png";
import CiteCoreImg3 from "@/public/images/citecore_preview_3.png";
import CiteCoreImg4 from "@/public/images/citecore_preview_4.png";



export const portfolioData = {
  mainData: {
    title: "My Latest Works",
  },
  seoPage: {
    title: "Portfolio",
    description: "My Latest Works",
    keywords: "key1, key2, key3",
  },
  navigationList: [
    {
      title: "Web Development",
      classes: "web",
      dataFilter: ".web",
    },
    {
      title: "Graphics Design",
      classes: "graphics",
      dataFilter: ".graphics",
    },
  ],
  projects: [
    {
      title: "Burton Roofing Merchants",
      slug: "burton-roofing",
      description:
        "Burton Roofing Services is a roofing company website project that specializes in all types of roofing services, from repairs to new installations. They use the latest technologies and materials to ensure that your roof is durable and energy-efficient. They also offer a variety of financing options to make it easy for you to get the roofing services you need.",
      keywords: "key1, key2, key3",
      category: "web",
      siteLink: {
        title: "https://nextjs-roofer.vercel.app/",
        url: "https://nextjs-roofer.vercel.app/",
      },
      tools: "HTML5, CSS, JavaScript, React, NextJS",
      projectLink: {
        title: "https://github.com/louiefalfonso/nextjs-roofer",
        url: "https://github.com/louiefalfonso/nextjs-roofer",
      },
      tech: [
        {
          list: "HTML5: Provides the basic structure and content of the website.",
        },
        {
          list: "CSS3: Styles the website's visual elements, ensuring a clean and responsive design.",
        },
        {
          list: "Bootstrap: Utilizes a pre-built CSS framework for faster development and responsive design.",
        },
        {
          list: "React: A popular JavaScript library for building interactive user interfaces",
        },
        {
          list: "Next.js: A React framework that offers server-side rendering (SSR) and static site generation (SSG) functionalities for enhanced performance and SEO.",
        },
      ],
      features: [
        {
          list: "Clean and Modern Design: Leverages Bootstrap and CSS3 to create a visually appealing and user-friendly website.",
        },
        {
          list: "Responsive Layout: Adapts seamlessly to different screen sizes, ensuring a smooth experience on desktops, tablets, and mobile devices.",
        },
        {
          list: "Compelling Content: Highlights Burton's services, products, and unique selling points through text, images, and potentially video.",
        },
        {
          list: "Clear Call to Action (CTA): Encourages visitors to contact Burton for a quote or additional information",
        },
        {
          list: "Fast Loading Times: Optimizes code and utilizes Next.js functionalities to ensure a smooth user experience.",
        },
        {
          list: "SEO Friendly: Implements best practices for search engine optimization to improve Burton's online visibility. ",
        },
      ],
      content:
        "This project showcases a short case study website for Burton Roofing Merchants Services, a company specializing in supplying roofing materials and related services. Built with modern web development technologies, the website aims to effectively communicate offerings and expertise to potential clients.",
      mainImage: BurtImg,
      images: [
        {
          image: BurtImg1,
          alt: "Burton Roofing Merchants",
        },
        {
          image: BurtImg2,
          alt: "Burton Roofing Merchants",
        },
        {
          image: BurtImg3,
          alt: "Burton Roofing Merchants",
        },
        {
          image: BurtImg4,
          alt: "Burton Roofing Merchants",
        },
      ],

      trending: true,
    },
    {
      title: "Citicore Energy Ticket System",
      slug: "citecore-system",
      description:
        "Ticket system built with the MERN stack that allows teams to manage bugs, requests, and other support tickets. Utilizes Charts.js to visualize and display a summary of all available tickets.",
      keywords: "key1, key2, key3",
      category: "web",
      siteLink: {
        title: "https://mern-citecoreapp.netlify.app",
        url: "https://mern-citecoreapp.netlify.app",
      },
      projectLink: {
        title: "https://github.com/louiefalfonso/mern-ticketsystem-app",
        url: "https://github.com/louiefalfonso/mern-ticketsystem-app",
      },
      tech: [
        {
          list: "Frontend: React.js, Tailwind CSS, Headless UI",
        },
        {
          list: "Backend: Node.js, Express.js, MongoDB, GraphQL, Apollo Client",
        },
        {
          list: "Authentication: Json Web TOken (JWT)",
        },
        {
          list: "Deployment: Netlify, Render",
        },
        {
          list: "Visualization: Charts.js",
        },
      ],
      features: [
        {
          list: "Full-stack Ticket System Platform with Express, MongoDB, GraphQL API, Apollo Client and ReactJs.",
        },
        {
          list: "Use JWT for Authentication and Create a Login System in Node.js, Express, MongoDB and Headless UI with Tailwind CSS for styling UI.",
        },
        {
          list: "Deployed Backend at Render  & Frontend at Netlify",
        },
        {
          list: "Demo Login: username: superadmin@citicoreenergy.com |  password: 87TupR5SvUlNtFY8 ",
        },
      ],
      content:
        "Ticket system built with the MERN stack that allows teams to manage bugs, requests, and other support tickets. Utilizes Charts.js to visualize and display a summary of all available tickets.",
      content1:
        "icket system built with the MERN stack that allows teams to manage bugs, requests, and other support tickets. Utilizes Charts.js to visualize and display a summary of all available tickets.",
      mainImage: CiteCoreImg,
      images: [
        {
          image: CiteCoreImg1,
          alt: "Citicore Energy Ticket System",
        },
        {
          image: CiteCoreImg2,
          alt: "Citicore Energy Ticket System",
        },
        {
          image: CiteCoreImg3,
          alt: "Citicore Energy Ticket System",
        },
        {
          image: CiteCoreImg4,
          alt: "Citicore Energy Ticket System",
        },
      ],
      trending: true,
    },
    {
      title: "Kidso Modern Kindergarten",
      slug: "kidso-modern",
      description:
        "This project is a modern kindergarten and baby care website built using HTML, CSS, JavaScript, React, and NextJS. It features a clean and responsive design, as well as a variety of features to help parents and caregivers learn more about the kindergarten and baby care services offered, and to enroll their children. The Kidso Modern Kindergarten Baby Care Project is a valuable resource for parents and caregivers, and for the kindergarten and baby care provider. It is a well-designed and feature-rich website that is sure to be a success.",
      keywords: "key1, key2, key3",
      category: "web",
      siteLink: {
        title: "https://nextjs-kidso.vercel.app/",
        url: "https://nextjs-kidso.vercel.app/",
      },
      tools: "Figma, HTML5, CSS, JavaScript, React, NextJS",
      projectLink: {
        title: "https://github.com/louiefalfonso/nextjs-kidso",
        url: "https://github.com/louiefalfonso/nextjs-kidso",
      },
      tech: [
        {
          list: "HTML5: Provides the basic structure and content of the website.",
        },
        {
          list: "CSS3: Styles the website's visual elements, ensuring a clean and responsive design.",
        },
        {
          list: "Bootstrap: Utilizes a pre-built CSS framework for faster development and responsive design.",
        },
        {
          list: "React: A popular JavaScript library for building interactive user interfaces",
        },
        {
          list: "Next.js: A React framework that offers server-side rendering (SSR) and static site generation (SSG) functionalities for enhanced performance and SEO.",
        },
      ],
      features: [
        {
          list: "Clean and Modern Design: Leverages Bootstrap and CSS3 to create a visually appealing and user-friendly website.",
        },
        {
          list: "Responsive Layout: Adapts seamlessly to different screen sizes, ensuring a smooth experience on desktops, tablets, and mobile devices.",
        },
        {
          list: "Compelling Content: Highlights services, products, and unique selling points through text, images, and potentially video.",
        },
        {
          list: "Clear Call to Action (CTA): Encourages visitors to contact for a quote or additional information",
        },
        {
          list: "Fast Loading Times: Optimizes code and utilizes Next.js functionalities to ensure a smooth user experience.",
        },
        {
          list: "SEO Friendly: Implements best practices for search engine optimization to improves online visibility. ",
        },
      ],
      content:
        "This project is a modern kindergarten and baby care website built using HTML, CSS, JavaScript, React, and NextJS. It features a clean and responsive design, as well as a variety of features to help parents and caregivers learn more about the kindergarten and baby care services offered, and to enroll their children.",
      content1:
        "The Kidso Modern Kindergarten Baby Care Project is a valuable resource for parents and caregivers, and for the kindergarten and baby care provider. It is a well-designed and feature-rich website that is sure to be a success.",
      mainImage: KidsoImg,
      images: [
        {
          image: KidsoImg1,
          alt: "Kidso Modern Kindergarten",
        },
        {
          image: KidsoImg2,
          alt: "Kidso Modern Kindergarten",
        },
        {
          image: KidsoImg3,
          alt: "Kidso Modern Kindergarten",
        },
        {
          image: KidsoImg4,
          alt: "Kidso Modern Kindergarten",
        },
      ],

      trending: true,
    },
    {
      title: "Gardenia Landscaping Services",
      slug: "gardenia-services",
      description:
        "This project is a website for Gardenia Landscaping & Gardening Services, a landscaping and gardening company. It is built using HTML, CSS, JavaScript, React, and NextJS. It features a clean and responsive design, as well as a variety of features to help customers learn more about the company services and to request a quote.",
      keywords: "key1, key2, key3",
      category: "web",
      siteLink: {
        title: "https://nextjs-gardenia.vercel.app/",
        url: "https://nextjs-gardenia.vercel.app/",
      },
      tools: "Figma, HTML5, CSS, JavaScript, React, NextJS",
      projectLink: {
        title: "https://github.com/louiefalfonso/nextjs-gardenia",
        url: "https://github.com/louiefalfonso/nextjs-gardenia",
      },
      tech: [
        {
          list: "HTML5: Provides the basic structure and content of the website.",
        },
        {
          list: "CSS3: Styles the website's visual elements, ensuring a clean and responsive design.",
        },
        {
          list: "Bootstrap: Utilizes a pre-built CSS framework for faster development and responsive design.",
        },
        {
          list: "React: A popular JavaScript library for building interactive user interfaces",
        },
        {
          list: "Next.js: A React framework that offers server-side rendering (SSR) and static site generation (SSG) functionalities for enhanced performance and SEO.",
        },
      ],
      features: [
        {
          list: "Clean and Modern Design: Leverages Bootstrap and CSS3 to create a visually appealing and user-friendly website.",
        },
        {
          list: "Responsive Layout: Adapts seamlessly to different screen sizes, ensuring a smooth experience on desktops, tablets, and mobile devices.",
        },
        {
          list: "Compelling Content: Highlights services, products, and unique selling points through text, images, and potentially video.",
        },
        {
          list: "Clear Call to Action (CTA): Encourages visitors to contact for a quote or additional information",
        },
        {
          list: "Fast Loading Times: Optimizes code and utilizes Next.js functionalities to ensure a smooth user experience.",
        },
        {
          list: "SEO Friendly: Implements best practices for search engine optimization to improves online visibility. ",
        },
      ],
      content:
        "This project is a website for Gardenia Landscaping & Gardening Services, a landscaping and gardening company. It is built using HTML, CSS, JavaScript, React, and NextJS. It features a clean and responsive design, as well as a variety of features to help customers learn more about the company services and to request a quote.",
      content1:
        "This website is a valuable resource for customers and for Gardenia Landscaping & Gardening Services. It is a well-designed and feature-rich website that is sure to be a success.",
      mainImage: GardImg,
      images: [
        {
          image: GardImg1,
          alt: "Gardenia Landscaping Services",
        },
        {
          image: GardImg2,
          alt: "Gardenia Landscaping Services",
        },
        {
          image: GardImg3,
          alt: "Gardenia Landscaping Services",
        },
        {
          image: GardImg4,
          alt: "Gardenia Landscaping Services",
        },
      ],

      trending: true,
    },
    {
      title: "Cleantac Professional Services",
      slug: "clentac-services",
      description:
        "Cleantac Professional Cleaning Services is a leading provider of commercial and residential cleaning services. It is committed to providing clients with the highest quality cleaning services at competitive prices. The website is built using HTML, CSS, JavaScript, React, and Next.js.",
      keywords: "key1, key2, key3",
      category: "web",
      siteLink: {
        title: "https://nextjs-cleantac.vercel.app/",
        url: "https://nextjs-cleantac.vercel.app/",
      },
      tools: "Figma, HTML5, CSS, JavaScript, React, NextJS",
      projectLink: {
        title: "https://github.com/louiefalfonso/nextjs-cleantac",
        url: "https://github.com/louiefalfonso/nextjs-cleantac",
      },
      tech: [
        {
          list: "HTML5: Provides the basic structure and content of the website.",
        },
        {
          list: "CSS3: Styles the website's visual elements, ensuring a clean and responsive design.",
        },
        {
          list: "Bootstrap: Utilizes a pre-built CSS framework for faster development and responsive design.",
        },
        {
          list: "React: A popular JavaScript library for building interactive user interfaces",
        },
        {
          list: "Next.js: A React framework that offers server-side rendering (SSR) and static site generation (SSG) functionalities for enhanced performance and SEO.",
        },
      ],
      features: [
        {
          list: "Clean and Modern Design: Leverages Bootstrap and CSS3 to create a visually appealing and user-friendly website.",
        },
        {
          list: "Responsive Layout: Adapts seamlessly to different screen sizes, ensuring a smooth experience on desktops, tablets, and mobile devices.",
        },
        {
          list: "Compelling Content: Highlights services, products, and unique selling points through text, images, and potentially video.",
        },
        {
          list: "Clear Call to Action (CTA): Encourages visitors to contact for a quote or additional information",
        },
        {
          list: "Fast Loading Times: Optimizes code and utilizes Next.js functionalities to ensure a smooth user experience.",
        },
        {
          list: "SEO Friendly: Implements best practices for search engine optimization to improves online visibility. ",
        },
      ],
      content:
        "Cleantac Professional Cleaning Services is a leading provider of commercial and residential cleaning services. It is committed to providing clients with the highest quality cleaning services at competitive prices. The website is built using HTML, CSS, JavaScript, React, and Next.js.",
      content1:
        "The homepage of our website includes a brief overview of our company, our services, and our contact information. We also have a dedicated portfolio page that features images and descriptions of our work. The website is also mobile-friendly, so you can easily view it on your smartphone or tablet.",
      mainImage: CleanImg,
      images: [
        {
          image: CleanImg1,
          alt: "Cleantac Professional Services",
        },
        {
          image: CleanImg2,
          alt: "Cleantac Professional Services",
        },
        {
          image: CleanImg3,
          alt: "Cleantac Professional Services",
        },
        {
          image: CleanImg4,
          alt: "Cleantac Professional Services",
        },
      ],
      trending: true,
    },
  ],
};