import { Fragment } from "react";
const Intro = () => {
  return (
    <Fragment>
      <div className="about_title w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[20px] mb-[30px]">
        <h3 className="text-[22px] font-bold">Louie Alfonso</h3>
        <span>Full Stack Developer</span>
      </div>
      <div className="about_text w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[31px] mb-[30px]">
        <p className="mb-[11px]">
          Hi, my name is Louie Alfonso and I'm an enthusiastic frontend
          developer with a passion for creating user-friendly, responsive
          websites. I'm proficient in the core technologies like HTML, CSS, and
          JavaScript, and I'm constantly learning new frameworks and libraries
          to stay ahead of the curve. I'm eager to contribute my skills to a
          team and gain experience working on real-world projects.
        </p>
        <p>
          One of my specialties is taking an idea from scratch and creating a
          full-fledged platform. I go beyond to produce sites with a unique,
          outstanding, contemporary look-and-feel. With extensive knowledge of
          web mechanics, I’m able to optimize complex integrations to require
          little-to-no maintenance while running on their own for years.
        </p>
        <p></p>
      </div>
      <div className="about_text w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[31px] mb-[30px]">
        <h3 className="text-[20px] font-bold">Tech Stach:</h3>
        <p className="techstack">
          <img
            src="assets/img/stacks/figma-original.svg"
            title="Figma"
            alt="Figma"
            width={40}
            height={40}
          />
          <img
            src="assets/img/stacks/wordpress-plain.svg"
            title="Figma"
            alt="Figma"
            width={40}
            height={40}
          />
        </p>
      </div>

      <div className="tokyo_tm_button" data-position="left">
        <a href="https://github.com/louiefalfonso">
          <span>Github Link</span>
        </a>
      </div>
    </Fragment>
  );
};
export default Intro;
