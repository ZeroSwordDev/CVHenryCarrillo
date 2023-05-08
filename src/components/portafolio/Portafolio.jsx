import { useEffect, useState } from "react";
import "./portafolio.scss";
import {
  freatured,
  webfreatured,
  mobilefreatured,
  uxuifreatured,
  ilustrationfreatured,
} from "../../data";
import PortafolioList from "../portafolioList/PortafolioList";
import CardView from "../cardview/CardView";
import image from "../../assets/test2.svg"

const Portafolio = () => {
  const [activebtn, setActivebtn] = useState("web");
  const [cardFreaturedlist, setCardFreaturedlist] = useState([]);
 

  useEffect(() => {
   switch(activebtn){
    case "web":
      if(setCardFreaturedlist.length === 6){
         setCardFreaturedlist( [])
        return setCardFreaturedlist(webfreatured)
      } 
      return setCardFreaturedlist(webfreatured)
      case "mobile":
      if(setCardFreaturedlist.length === 6){
        setCardFreaturedlist(  [])
        return setCardFreaturedlist(mobilefreatured)
      } 
      return setCardFreaturedlist(mobilefreatured)

      case "ui/ux":
        if(setCardFreaturedlist.length === 6){
          setCardFreaturedlist( [])
          return setCardFreaturedlist(uxuifreatured)
        } 
        return setCardFreaturedlist(uxuifreatured)

        case "ilustration":
          if(setCardFreaturedlist.length === 6){
            setCardFreaturedlist( [])
            return setCardFreaturedlist(ilustrationfreatured)
          } 
          return setCardFreaturedlist(ilustrationfreatured)
    default:
      break;
   }
  }, [activebtn, cardFreaturedlist]);

  return (
    <div className="folio" id="portafolio">
      {/* <img className="imgporfafolio" src={image} alt="" /> */}
      <div className="containerportafolio">
        <div className="top">
          <h1 className="titlefolio">Portafolio</h1>
          <div className="ulportafolio">
            <ul className="ulfolio">
              {freatured.map((cate) => (
                <PortafolioList
                  key={cate.id}
                  folio={cate}
                  active={activebtn === cate.id}
                  setActivebtn={setActivebtn}
                />
              ))}

              {/* 
              <li className="active">Web</li>
              <li>mobile</li>
              <li>UX / UI</li>
              <li>Ilustration</li> */}
            </ul>
          </div>
        </div>
        <div className="boton">
       {
        cardFreaturedlist.map(card => (
          <CardView key={card.id} card={card}/>
        ))
       }
       </div>
      </div>
    </div>
  );
};

export default Portafolio;
