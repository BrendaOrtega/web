import React, { Component } from 'react';
import './HomePage.css';
import {Link} from 'react-router-dom';
import {Button} from "./Common/Button"

class About extends Component {
    componentDidMount() {
        window.scroll(0, 0);
      }

    render() {
        return (
            <section className="about">
                 <meta
                        name="description"
                        content=" About us"
                        />
                        <meta
                        name="keywords"
                        content="spiker, production, laboratory, machine development, history"
                        />
                
                        <title>About us | Technics Production</title>
                <div className="banner">
                </div>
                <section className="blog-box campus">
                    <h2>Get to know T&P Campus</h2>
                    <hr className="line"/>
                    <p>2020 came with different unexpected challenges, from a pandemic virus, to natural disasters.
                    Technics Production B.V. took this as an opportunity to help those in need and created the T&P
                    Campus. It is located in one of the most technologically driven cities in Europe, Eindhoven. It
                    contributes to it, by hosting several small and medium size international organizations. Technics
                    Production B.V. gives them all the necessary tools to establish and grow their projects.</p>
                    <p> This technological hub has strived to become a sign of innovation across borders. Professionals
                    from every industry and nationality come together in this campus to create, test and improve
                    every single one of our products. Although it has not reached its goal yet, to become the most
                    influential Tech Hub in the world, the T&P Campus is very well on its way to do it</p>
                    <p>
                    If you think your project or company should be in the T&P Campus,  <a href="mailto:info@technicsproduction.nl" aria-label="Mail" rel="noopener noreferrer"> <span>send us an email </span> </a> with a
                    brief description of it and contact info. We will get in touch with you as soon as possible.
                    </p>
                    <div className="box-images">
                        <div className="company-img img-1"></div>
                        <div className="company-img img-2"></div>
                        <div className="company-img img-3"></div>
                        <div className="company-img img-4"></div>
                        <div className="company-img img-5"></div>
                        <div className="company-img img-6"></div>
                        <div className="company-img img-7"></div>
                    </div>
                </section>
            </section>
        );
    }
}

export default About;