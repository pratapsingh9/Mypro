import React, { useState, useEffect } from "react";
import "./items/c.css"; 

const ImgLoad = (props) => {
  const { name, imageUrl, id, onRemove } = props;

  return (
    <section className="card">
      <div className="image">
        <button className="remove-button" onClick={onRemove}>
          X
        </button>

        <img
          src={imageUrl}
          alt={name}
          height={240}
          width={240}
        // Only show the image after it's loaded
          onLoad={() => setImageLoaded(true)} // Set image as loaded
        />
      </div>
      <div className="title">
        <h2 className="name">{name} </h2>
      </div>
      <div className="btn">
        <button className="link" onClick={() => handleOpenInNewTab(imageUrl)}>
          View Image
        </button>
      </div>
    </section>
  );
};

export default ImgLoad;
