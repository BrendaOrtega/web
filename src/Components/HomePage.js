import React, { Component } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
import { Card } from "./Common/Card"
import { Button } from "./Common/Button"
import logo from "../assets/logo.png"
import image from "../assets/20201105_105139.jpg"
import image2 from "../assets/20201208_161944.jpg"
import image3 from "../assets/car.png"
import Fade from 'react-reveal/Fade';

function onChange(a, b, c) {
    console.log(a, b, c);
}

class HomePage extends Component {
    componentDidMount() {
        window.scroll(0, 0);
    }

    render() {

        return (
            <section >
                <meta property="og:url" content="https://technicsproduction.nl/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Technics Production BV" />
                <meta property="og:description" content="Technics Production B.V. began as a consultancy and outsourcing company for ground" />
                <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/technics-f1dcc.appspot.com/o/Website-screen.png?alt=media&token=ccb6e98c-1c43-4ebd-be45-499c0a89b90f" />
                <meta name="Description" content="Technics Production B.V. began as a consultancy and outsourcing company for ground, water
                            and road construction."/>
                <title> Technics Production</title>
                <div className="home-box">
                    <Carousel afterChange={onChange} autoplay>
                        <div className="slider img1">
                            <div className="cover">
                                <div>
                                    <h2>Build your ideas</h2>
                                    <p style={{ width: "400px" }}> Grow the potential of your ideas, by developing a whole ecosystem (software and hardware) around them.</p>
                                    <br />
                                    <Link to="/contact">
                                        <Button text="Contact us" />
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className="slider img2">
                            <div className="cover">
                                <div>
                                    <h2>Develop your projects</h2>
                                    <p style={{ width: "400px" }}> Technics Production B.V. created the T&P Campus to give you all the necessary tools to establish and grow your projects</p>
                                    <br />
                                    <a href="https://calendly.com/spikestinger/15min?month=2021-01" target="_blank" rel="noopener noreferrer">
                                        <Button text="Schedule" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="slider img3">
                            <div className="cover">
                                <div>
                                    <h2>Become the most influential Tech Hub</h2>
                                    <p style={{ width: "400px" }}> If you think your project or company should be in the T&P Campus, send us an email with a brief description of it and contact info. We will get in touch with you as soon as possible.</p>
                                    <br />
                                    <Link to="/contact">
                                        <Button text="Contact us" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
                <section className="products-box">
                    <Fade bottom>
                        <h2>Our services</h2>
                        <hr className="line" />
                        <p className="text"> <strong>Technics Production BV </strong> develops everything in the field of applications and use of high-tech electronics. Thanks to the accumulated know-how, we are already playing a decisive role in the early stages of a development project.
                            We have this function not only with regard to new products, but also for the improvement and adaptation of existing products.</p>
                        <br />
                        <br />
                        <div className="flex-products">
                            <Card
                                image={image}
                                name="Mentorship"
                                description="What and how on hardware and software to bring your idea to fruition "
                            />
                            <Card
                                image={image3}
                                name="Production"
                                description="If you already have an existing and finished product, we can assemble it,
                                manufacture it in pieces and/or mass-produce it for you"
                            />
                            <section className="card">
                                <div className="img_box">
                                    <img src={image2} alt="image-product" />
                                </div>
                                <div className="space">
                                    <h3>T&P Campus</h3>
                                    <p>Need a company or a place to begin your own creations, <span>click here</span> </p>
                                    <br />
                                </div>
                            </section>
                        </div>
                    </Fade>
                </section>
                <section className="clients-box">
                    <div className="clients">
                        <img src={logo} alt="partner " />
                        <img src={logo} alt="partner " />
                        <img src={logo} alt="partner " />
                        <img src={logo} alt="partner " />
                        <img src={logo} alt="partner " />
                        <img src={logo} alt="partner " />
                        <img src={logo} alt="partner " />
                        <img src={logo} alt="partner " />
                    </div>
                </section>
                <section>
                    <Fade bottom>
                        <div className="container">
                            <div className="company-info">
                                <h2>About Technics Production BV</h2>
                                <p>Technics Production B.V. began as a consultancy and outsourcing company for ground, water
                                    and road construction. It always leaned towards electronic solutions for these fields, to the point
                                    that it ventured in unimaginable areas (from traffic control, to equipment tracking, among several
                                    others). Just as unimaginable was the success it had, when providing unconventional but highly
                                    efficient solutions.
                                </p>
                                <p>Nowadays, Technics Production B.V. helps you grow the potential of your ideas, by developing
                                    a whole ecosystem (software and hardware) around them. It does not matter which industry you
                                    need it for, we go from mobile applications to high-end mechanics/electronics. We specialized in
                                    transforming ideas into realities. The wildest the dream, the better the challenge. Let us make
                                    your wishes come true. Tell us what you wish, and we will take care of how to do it.
                                    Do you want to get started, <a href="https://calendly.com/spikestinger/15min?month=2021-01" target="_blank" rel="noopener noreferrer"> <span>click here</span> </a> and we will get in touch with you as soon as possible.
                                </p>
                                <br />
                                <br />
                                <Link to="/contact">
                                    <Button text="Contact us" />
                                </Link>
                            </div>
                            <div className="company-image" >
                            </div>
                        </div>
                    </Fade>
                </section>

            </section>
        );
    }
}

export default HomePage;