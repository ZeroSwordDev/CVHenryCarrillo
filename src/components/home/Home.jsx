import "./home.scss";
import image from "../../assets/test.svg";
import image3 from "../../assets/test.png";
import image2 from "../../assets/asdaxxx.png";
import cv from '../../assets/CVHenry.pdf'
/* import Typed from 'react-typed'; */

const Home = () => {
  return (
    <div className="Home" id="home">
      <img className="shapes" src={image} alt="" />
      <img className="circles" src={image3} alt="" />
      <div className="textcontainer">
        <div className="left">
          <h1>
            Henry <span className="spancarrillo">Carrillo.</span>
          </h1>
         {/*  <Typed
           strings={[
            'FullStack Web',
            'Desing Web']}
            typeSpeed={40}
            backSpeed={50}
            loop 
            className="typed"
          ></Typed> */}
          <p>
            I’m Tanvir, a creative Product Designer. I’ve been helping
            businesses to solve their problems with my design for 2 years.
          </p>
          <div>
            <button className="btnheader btncontact">Contact me </button>
            <a  href={cv} download="CVHenry.pdf" className="btnheader" >
            Download CV
            </a>
          </div>
        </div>
        <div className="right">
          <div className="imgcontainer">
            <img className="img" src={image2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
