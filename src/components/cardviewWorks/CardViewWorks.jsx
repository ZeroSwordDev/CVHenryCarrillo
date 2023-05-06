import "./CardViewWorks.scss";

const CardViewWorks = ({works}) => {
  return (
    <div className="container-works">
      <div className="items">
        <div className="izq-works">
          <h1>{works.title}</h1>
          <p>{works.desc}</p>
        </div>
        <div className="derecha-works">
          <img  src={works.url}/> 
        </div>
      </div>
    </div>
  );
};

export default CardViewWorks;
