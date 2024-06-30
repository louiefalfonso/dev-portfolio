import { useContext } from "react";
import { MainContext } from "../Context";

const SectionContainer = ({ name, children }) => {
  const { nav, animation } = useContext(MainContext);
  return (
    <div
      id={name}
      className={`tokyo_tm_section ${
        name == nav ? `animated active ${animation}` : ""
      }`}
    >
      {children}
    </div>
  );
};
export default SectionContainer;
