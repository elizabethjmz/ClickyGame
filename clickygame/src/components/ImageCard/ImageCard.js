import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <div className="card">
    <div className="img-container text-center">
      <img  src={props.image} />
    </div>
    <span onClick={() => props.switchImage(props.id)}/>
   
  </div>
);

export default ImageCard;
