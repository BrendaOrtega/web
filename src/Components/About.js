import React, { Component } from 'react';
import './HomePage.css';
import Fade from 'react-reveal/Fade';
import NavBar2 from './NavBar2';

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

                <title>About us | Tecned</title>
                <NavBar2 />
                <section className="blog-box campus">

                    <Fade bottom>
                        <div className='about-text'>
                            <h2 className='header'>Get to know Tecned Campus</h2>

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
                        </div>
                        <div className="box-images">
                            <div className="company-img img-1" alt="factory image"></div>
                            <div className="company-img img-2" alt="factory image"></div>
                            <div className="company-img img-3" alt="factory image"></div>
                            <div className="company-img img-4" alt="factory image"></div>
                            <div className="company-img img-5" alt="factory image"></div>
                            <div className="company-img img-6" alt="factory image"></div>
                        </div>
                    </Fade>
                </section>
            </section >
        );
    }
}

export default About;