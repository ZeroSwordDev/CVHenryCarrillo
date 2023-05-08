import "./works.scss";
import CardViewWorks from "../cardviewWorks/CardViewWorks";
import { works } from "../../data";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";

const Works = () => {
  const ref = useRef();

  let index = 0;
  const handleClick = (type) => {
    let leftparams = 100;
    if (type === "right") {
      let result = ++index;
      if (result > works.length - 1) {
        index = 0;
        result = index;
        let params = result * leftparams;
        ref.current.style.left = `${params}vw`;
      } else {
        let params = result * leftparams;
        ref.current.style.left = `-${params}vw`;
      }
    } else if (type === "left") {
      let result = --index;
      if (result < 0) {
        index = works.length - 1;
        result = index;
        let params = result * leftparams;
        ref.current.style.left = `-${params}vw`;
      } else {
        let params = result * leftparams;
        ref.current.style.left = `-${params}vw`;
      }
    }
  };

  return (
    <div className="Works" id="works">
      <div className="leftArrow" onClick={() => handleClick("left")}>
        <IoIosArrowBack size={"large"} />
      </div>
      <div className="Slider-works" ref={ref}>
        {works.map((item, index) => (
          <CardViewWorks key={item.id} works={item} />
        ))}
      </div>

      <div className="rightArrow" onClick={() => handleClick("right")}>
        <IoIosArrowForward size={"large"} />
      </div>
    </div>
  );
};

export default Works;
