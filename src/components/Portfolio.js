import Isotope from "isotope-layout";
import { useContext, useEffect, useRef, useState } from "react";
import { MainContext } from "../Context";
import { main } from "../utils";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

const detailData = [
  {
    id: 1,
    thumbnail: "assets/img/portfolio/kidso/kidso_header.png",
    title: "Kidso Baby Care Project",
    text: [
      "This project is a modern kindergarten and baby care website built using HTML, CSS, JavaScript, React, and NextJS. It features a clean and responsive design, as well as a variety of features to help parents and caregivers learn more about the kindergarten and baby care services offered, and to enroll their children.",
      "The Kidso Modern Kindergarten Baby Care Project is a valuable resource for parents and caregivers, and for the kindergarten and baby care provider. It is a well-designed and feature-rich website that is sure to be a success.",
    ],
    tools:
      "Figma, HTML5, CSS3, SCSS, Bootstrap, JavaScript, ReactJS, NextJS, Vercel",
    category: "Web Development",
    link: [
      {
        id: 1,
        livesite: "https://nextjs-kidso.vercel.app/",
        sourcecode: "https://github.com/louiefalfonso/nextjs-kidso",
      },
    ],
    bigImage: "assets/img/portfolio/kidso/kidso_header.png",
    Image1: "assets/img/portfolio/kidso/kidso_preview_1.png",
    Image2: "assets/img/portfolio/kidso/kidso_preview_2.png",
    Image3: "assets/img/portfolio/kidso/kidso_preview_3.png",
  },
  {
    id: 2,
    thumbnail: "assets/img/portfolio/gardenia/gardenia_header.png",
    title: "Gardenia Services Project",
    text: [
      "This project is a website for Gardenia Landscaping & Gardening Services, a landscaping and gardening company. It is built using HTML, CSS, JavaScript, React, and NextJS. ",
      "It features a clean and responsive design, as well as a variety of features to help customers learn more about the company's services and to request a quote.This website is a valuable resource for customers and for Gardenia Landscaping & Gardening Services. It is a well-designed and feature-rich website that is sure to be a success.",
    ],
    tools:
      "Figma, HTML5, CSS3, SCSS, Bootstrap, JavaScript, ReactJS, NextJS, Vercel",
    category: "Web Development",
    link: [
      {
        id: 1,
        livesite: "https://nextjs-gardenia.vercel.app/",
        sourcecode: "https://github.com/louiefalfonso/nextjs-gardenia",
      },
    ],
    bigImage: "assets/img/portfolio/gardenia/gardenia_header.png",
    Image1: "assets/img/portfolio/gardenia/gardenia_preview_1.png",
    Image2: "assets/img/portfolio/gardenia/gardenia_preview_2.png",
    Image3: "assets/img/portfolio/gardenia/gardenia_preview_3.png",
  },
  {
    id: 3,
    thumbnail: "assets/img/portfolio/cleantac/cleantac_header.png",
    title: "Cleantac Professional Cleaning Services",
    text: [
      "Cleantac Professional Cleaning Services is a leading provider of commercial and residential cleaning services. It is committed to providing clients with the highest quality cleaning services at competitive prices. The website is built using HTML, CSS, JavaScript, React, and Next.js.",
      "The homepage of this website includes a brief overview of our company, our services, and our contact information. We also have a dedicated portfolio page that features images and descriptions of our work. The website is also mobile-friendly, so you can easily view it on your smartphone or tablet.",
    ],
    tools:
      "Figma, HTML5, CSS3, SCSS, Bootstrap, JavaScript ReactJS, NextJS, Vercel",
    category: "Web Development",
    link: [
      {
        id: 1,
        livesite: "https://nextjs-cleantac.vercel.app/",
        sourcecode: "https://github.com/louiefalfonso/nextjs-cleantac",
      },
    ],
    bigImage: "assets/img/portfolio/cleantac/cleantac_header.png",
    Image1: "assets/img/portfolio/cleantac/cleantac_preview_1.png",
    Image2: "assets/img/portfolio/cleantac/cleantac_preview_2.png",
    Image3: "assets/img/portfolio/cleantac/cleantac_preview_3.png",
  },
  {
    id: 4,
    thumbnail: "assets/img/portfolio/roofer/roofer_header.png",
    title: "Burton Roofing Merchants Services",
    text: [
      "Burton Roofing Services is a roofing company website project that specializes in all types of roofing services, from repairs to new installations. They use the latest technologies and materials to ensure that your roof is durable and energy-efficient. They also offer a variety of financing options to make it easy for you to get the roofing services you need.",
      "The website was built using HTML5, CSS3, Bootstrap, React and NextJs. This allows us to provide our customers with a fast, responsive, and user-friendly experience. The website is also fully mobile-friendly, so you can view it on any device.",
    ],
    tools:
      "Figma, HTML5, CSS3, SCSS, Bootstrap, JavaScript ReactJS, NextJS, Vercel",
    category: "Web Development",
    link: [
      {
        id: 1,
        livesite: "https://nextjs-roofer.vercel.app/",
        sourcecode: "https://github.com/louiefalfonso/nextjs-roofer",
      },
    ],
    bigImage: "assets/img/portfolio/roofer/roofer_header.png",
    Image1: "assets/img/portfolio/roofer/roofer_preview_1.png",
    Image2: "assets/img/portfolio/roofer/roofer_preview_2.png",
    Image3: "assets/img/portfolio/roofer/roofer_preview_3.png",
  },
];
const Portfolio = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const data = document.querySelector(".item__");
    if (data.length !== 0) {
      setTimeout(() => {
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".item__",
        });
      }, 3000);
    }
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  useEffect(() => {
    main.portfolioHover();
    main.dataImage();
  });
  const { setPortfolioDetailsModal, modalToggle } = useContext(MainContext);
  return (
    <SectionContainer name={"portfolio"}>
      <div className="container">
        <div className="tokyo_tm_portfolio w-full h-auto clear-both float-left px-0 pt-[100px] pb-[40px]">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle
                pageName={"Portfolio"}
                title={"Completed Projects"}
              />
            </div>
          </div>
          <div className="list_wrapper w-full h-auto clear-both float-left">
            <ul className="portfolio_list gallery_zoom ml-[-40px] list-none">
              <li className="webdev mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div className="entry tokyo_tm_portfolio_animation_wrap">
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[0]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/portfolio/kidso/kidso_header.png"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/kidso/kidso_header.png"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="webdev mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div className="entry tokyo_tm_portfolio_animation_wrap">
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[1]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/portfolio/gardenia/gardenia_header.png"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/gardenia/gardenia_header.png"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="webdev mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div className="entry tokyo_tm_portfolio_animation_wrap">
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[2]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/portfolio/cleantac/cleantac_header.png"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/cleantac/cleantac_header.png"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="webdev mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div className="entry tokyo_tm_portfolio_animation_wrap">
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[3]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/portfolio/roofer/roofer_header.png"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/roofer/roofer_header.png"
                      />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
