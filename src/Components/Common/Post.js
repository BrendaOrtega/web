import React, { Component } from 'react';
import './Common.css';

export const Post = ({image, name, description}) => {


    return (
        <section className="post">
            <img src={image} alt="image-product"/>
            <div style={{padding:"16px 0"}}>
                <h3>{name}</h3>
                <p>{description}</p>
                <br/>
                <span>Read more →</span>
            </div>
        </section>


        // <section style={{ backgroundImage: `url(${image})` }} className="post" >
        //     <div className="back">
        //         <div className="info">
        //             <h3>{name}</h3>
        //             <br/>
        //             <span>Read more →</span>
        //         </div>
        //     </div>
        // </section>

    );
};
