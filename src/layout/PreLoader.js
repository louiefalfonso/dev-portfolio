import { useEffect } from "react";
import { main } from "../utils";

const PreLoader = () => {
  useEffect(() => {
    main.preloader();
  }, []);

  return (
    <div id="preloader">
      <div className="loader_line"></div>
    </div>
  );
};
export default PreLoader;
