import React from "react";
import { MainContext } from "@/src/Context";
import { useContext } from "react";
import ModalContainer from "./ModalContainer";

const DetailsModal = () => {
  const { portfolioDetailsModal, setPortfolioDetailsModal } = useContext(MainContext);
  return (
    <ModalContainer nullValue={setPortfolioDetailsModal}>
      <div className="popup_details">
        <div className="top_image">
          <img src={portfolioDetailsModal.thumbnail} alt="image" />
          <div
            className="main"
            data-img-url={portfolioDetailsModal.thumbnail}
            style={{
              backgroundImage: `url(${portfolioDetailsModal.thumbnail})`,
            }}
          />
        </div>
        <div className="portfolio_main_title">
          <h3>{portfolioDetailsModal.title}</h3>
          <span>{portfolioDetailsModal.category}</span>
          <div />
        </div>
        <div className="main_details w-full h-auto clear-both flex mb-[90px]">
          <div className="textbox w-[70%] pr-[40px]">
            {portfolioDetailsModal.text.map((text, i) => (
              <p
                className={
                  portfolioDetailsModal.text.length - 1 == i ? "" : "mb-[20px]"
                }
                key={i}
              >
                {text}
              </p>
            ))}
            <br />
            <p>
              <span className="first font-bold block text-black mb-[3px]">
                Preview Live Site:
              </span>
              {portfolioDetailsModal.link.map((link, i) => (
                <a
                  key={link.id}
                  className="text-[#767676] transition-all duration-300 hover:text-black"
                  href={link.livesite}
                  target="_blank"
                >
                  {link.livesite}
                </a>
              ))}
            </p>
            <br />
            <p>
              <span className="first font-bold block text-black mb-[3px]">
                GitHub Source Code:
              </span>
              {portfolioDetailsModal.link.map((link, i) => (
                <a
                  key={link.id}
                  className="text-[#767676] transition-all duration-300 hover:text-black"
                  href={link.sourcecode}
                  target="_blank"
                >
                  {link.sourcecode}
                </a>
              ))}
            </p>
          </div>
          <div className="detailbox w-[30%] pl-[40px]">
            <ul className="list-none">
              <li className="mb-[8px] w-full float-left">
                <span className="first font-bold block text-black mb-[3px]">
                  Tools:
                </span>
                <span>{portfolioDetailsModal.tools}</span>
              </li>
              <li className="mb-[8px] w-full float-left">
                <span className="first font-bold block text-black mb-[3px]">
                  Category:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="#"
                  >
                    {portfolioDetailsModal.category}
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="additional_images w-full h-auto clear-both float-left">
          <ul className="ml-[-30px] list-none">
            <li className="mb-[30px] float-left w-1/2 pl-[30px]">
              <div className="list_inner w-full h-auto clear-both float-left relative">
                <div className="my_image relative">
                  <img
                    className="opacity-0 min-w-full"
                    src={portfolioDetailsModal.Image1}
                    alt="image"
                  />
                  <div
                    className="main absolute inset-0 bg-no-repeat bg-center bg-cover"
                    data-img-url={portfolioDetailsModal.Image1}
                    style={{
                      backgroundImage: `url(${portfolioDetailsModal.Image1})`,
                    }}
                  />
                </div>
              </div>
            </li>
            <li className="mb-[30px] float-left w-1/2 pl-[30px]">
              <div className="list_inner w-full h-auto clear-both float-left relative">
                <div className="my_image relative">
                  <img
                    className="opacity-0 min-w-full"
                    src={portfolioDetailsModal.Image2}
                    alt="image"
                  />
                  <div
                    className="main absolute inset-0 bg-no-repeat bg-center bg-cover"
                    data-img-url={portfolioDetailsModal.Image1}
                    style={{
                      backgroundImage: `url(${portfolioDetailsModal.Image2})`,
                    }}
                  />
                </div>
              </div>
            </li>
            <li className="mb-[30px] float-left w-1/2 pl-[30px]">
              <div className="list_inner w-full h-auto clear-both float-left relative">
                <div className="my_image relative">
                  <img
                    className="opacity-0 min-w-full"
                    src={portfolioDetailsModal.Image3}
                    alt="image"
                  />
                  <div
                    className="main absolute inset-0 bg-no-repeat bg-center bg-cover"
                    data-img-url={portfolioDetailsModal.Image3}
                    style={{
                      backgroundImage: `url(${portfolioDetailsModal.Image3})`,
                    }}
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </ModalContainer>
  );
};
export default DetailsModal;
