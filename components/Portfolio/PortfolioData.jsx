import PortfolioImg from '@/public/images/portfolio.png';
import MainImage from '@/public/images/portfolio.png';

export const portfolioData = {
    mainData: {
        title: "My Latest Works",
    },
    seoPage: {
        title: 'Portfolio',
        description: 'My Latest Works',
        keywords: 'key1, key2, key3',
    },
    navigationList: [
        {
            title: "Web Development",
            classes: "web",
            dataFilter: ".web"
        },
        {
            title: "Graphics Design",
            classes: "graphics",
            dataFilter: ".graphics"
        },
    ],
    projects: [
        {
            title: 'Kidso Modern Kindergarten',
            slug: 'kidso-modern',
            description: 'This project is a modern kindergarten and baby care website built using HTML, CSS, JavaScript, React, and NextJS. It features a clean and responsive design, as well as a variety of features to help parents and caregivers learn more about the kindergarten and baby care services offered, and to enroll their children. The Kidso Modern Kindergarten Baby Care Project is a valuable resource for parents and caregivers, and for the kindergarten and baby care provider. It is a well-designed and feature-rich website that is sure to be a success.',
            keywords: 'key1, key2, key3',
            category: 'Web Development',
            siteLink: {
                title: 'https://nextjs-kidso.vercel.app/',
                url: 'https://nextjs-kidso.vercel.app/'
            },
            tools: 'Figma, HTML5, CSS, JavaScript, React, NextJS',
            projectLink: {
                title: 'https://github.com/louiefalfonso/nextjs-kidso',
                ur: 'https://github.com/louiefalfonso/nextjs-kidso'
            },
            content: 'This project is a modern kindergarten and baby care website built using HTML, CSS, JavaScript, React, and NextJS. It features a clean and responsive design, as well as a variety of features to help parents and caregivers learn more about the kindergarten and baby care services offered, and to enroll their children.',
            content1: 'The Kidso Modern Kindergarten Baby Care Project is a valuable resource for parents and caregivers, and for the kindergarten and baby care provider. It is a well-designed and feature-rich website that is sure to be a success.',
            mainImage: MainImage,
            images: [
                {
                    image: PortfolioImg,
                    alt: 'Image Alt'
                },
                {
                    image: PortfolioImg,
                    alt: 'Image Alt'
                }
            ],
            imagesLightbox: [
                {
                    image: PortfolioImg,
                    alt: 'Image Alt'
                }
            ],
            trending: true
        },
         {
            title: 'Kidso Modern Kindergarten',
            slug: 'kidso-modern',
            description: 'This project is a modern kindergarten and baby care website built using HTML, CSS, JavaScript, React, and NextJS. It features a clean and responsive design, as well as a variety of features to help parents and caregivers learn more about the kindergarten and baby care services offered, and to enroll their children. The Kidso Modern Kindergarten Baby Care Project is a valuable resource for parents and caregivers, and for the kindergarten and baby care provider. It is a well-designed and feature-rich website that is sure to be a success.',
            keywords: 'key1, key2, key3',
            category: 'Graphics Design',
            siteLink: {
                title: 'https://nextjs-kidso.vercel.app/',
                url: 'https://nextjs-kidso.vercel.app/'
            },
            tools: 'Figma, HTML5, CSS, JavaScript, React, NextJS',
            projectLink: {
                title: 'https://github.com/louiefalfonso/nextjs-kidso',
                ur: 'https://github.com/louiefalfonso/nextjs-kidso'
            },
            content: 'This project is a modern kindergarten and baby care website built using HTML, CSS, JavaScript, React, and NextJS. It features a clean and responsive design, as well as a variety of features to help parents and caregivers learn more about the kindergarten and baby care services offered, and to enroll their children.',
            content1: 'The Kidso Modern Kindergarten Baby Care Project is a valuable resource for parents and caregivers, and for the kindergarten and baby care provider. It is a well-designed and feature-rich website that is sure to be a success.',
            mainImage: MainImage,
            images: [
                {
                    image: PortfolioImg,
                    alt: 'Image Alt'
                },
                {
                    image: PortfolioImg,
                    alt: 'Image Alt'
                }
            ]
        },
        
    ]
};