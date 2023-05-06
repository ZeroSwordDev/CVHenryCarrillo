import React from "react";

const CardView = ({card}) => {
  return (
   
      <div className="cardimg">
        <img
          src={card.url}
          alt=""
        />
      </div>
    
  );
};

export default CardView;
