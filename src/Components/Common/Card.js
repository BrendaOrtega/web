import React, { Component } from 'react';
import './Common.css';

export const Card = ({image, name, description}) => {


    return (
        <section className="card">
            <div className="img_box">
                <img src={image} alt="image-product"/>
            </div>
            <div className="space">
                <h3>{name}</h3>
                <p>{description}</p>
                <br/>
            </div>

        </section>
    );
};
