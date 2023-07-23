import React, { Component } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
import { Card } from "./Common/Card"
import { Button } from "./Common/Button"
import logo from "../assets/logo.png"
import image from "../assets/20201105_105139.jpg"
import image2 from "../assets/maquinas.jpg"
import image3 from "../assets/car.png"
import Fade from 'react-reveal/Fade';
import NavBar from './NavBar';

function onChange(a, b, c) {
    console.log(a, b, c);
}

const test = "https://firebasestorage.googleapis.com/v0/b/technics-f656c.appspot.com/o/test4.png?alt=media&token=c9a35d15-ef64-46b9-8745-d4d442945b6b"
const camera = "https://firebasestorage.googleapis.com/v0/b/technics-f656c.appspot.com/o/security-camera%20(1).svg?alt=media&token=83955718-a639-4de0-810f-dc8c1d4a3819"

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
                <section className="home-box">
                    <NavBar />
                    <div className='welcome'>
                        <div className="overlay">
                            <Fade bottom>
                                <div>
                                    <h1 className="title">Build your ideas and develop your projects</h1>
                                    <p className="slogan"> Grow the potential of your ideas, by developing a whole ecosystem (software and hardware) around them.</p>
                                    <button className='btn-primary'>See products</button>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </section>
                <section className="products-box">
                    <Fade bottom>
                        <h2 className='header'>Met our <span className='underline'>services</span></h2>
                        <div className='circles'>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <p className='txt'><strong>Tecned </strong> develops everything in the field of applications and use of high-tech electronics. Thanks to the accumulated know-how, we are already playing a decisive role in the early stages of a development project.
                            We have this function not only with regard to new products, but also for the improvement and adaptation of existing products.</p>
                    </Fade>
                    <Fade bottom>
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
                <section className='content'>
                    <div className='info'>
                        <Fade bottom>
                            <h2 className='header'>Why <span className='underline'>Tecned?</span></h2>
                            <div className='circles'>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <p className='txt'> Lorem ipsum dolor sit amet consectetur. Nisl pellentesque molestie mauris leo malesuada ultricies volutpat felis. Nibh sed elit velit feugiat etiam vitae aliquam tincidunt. Fringilla vel purus dapibus tempus commodo. Non platea facilisis mi nec id lectus ultricies ornare. Natoque venenatis nulla posuere quam lectus semper massa lobortis nisi. Ante elit id arcu quam odio amet. Euismod sem ipsum vitae morbi morbi ut. Arcu urna nulla dignissim quam. Massa mauris elementum lacus vel a quis. Nunc phasellus donec gravida vel dictum tincidunt ut faucibus. Diam mauris et leo in sed risus urna. Nulla proin morbi quam at habitant scelerisque at leo vitae. </p>

                            <div className='box-p'>
                                <div>
                                    <div className='product-card'>
                                        <img src={camera} />
                                        <h3>10,000 +</h3>
                                        <p>Lorem</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='product-card'>
                                        <img src={camera} />
                                        <h3>Security cameras</h3>
                                        <p>Lorem</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='product-card'>
                                        <img src={camera} />
                                        <h3>Security cameras</h3>
                                        <p>Lorem</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='product-card'>
                                        <img src={camera} />
                                        <h3>Security cameras</h3>
                                        <p>Lorem</p>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </section>
                <section className='content'>
                    <Fade bottom>
                        <h2 style={{ textAlign: 'center' }} className='header'>More about <span className='underline'>TECNED</span></h2>
                        <div className='circles'>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className='about-container'>
                            <img src={test} className='' />
                            <div>
                                <p className='txt'>Technics Production B.V. began as a consultancy and outsourcing company for ground, water
                                    and road construction. It always leaned towards electronic solutions for these fields, to the point
                                    that it ventured in unimaginable areas (from traffic control, to equipment tracking, among several
                                    others). Just as unimaginable was the success it had, when providing unconventional but highly
                                    efficient solutions.
                                </p>
                                <p className='txt'>Nowadays, Technics Production B.V. helps you grow the potential of your ideas, by developing
                                    a whole ecosystem (software and hardware) around them. It does not matter which industry you
                                    need it for, we go from mobile applications to high-end mechanics/electronics. We specialized in
                                    transforming ideas into realities. The wildest the dream, the better the challenge. Let us make
                                    your wishes come true. Tell us what you wish, and we will take care of how to do it.
                                    Do you want to get started, <a href="https://calendly.com/spikestinger/15min?month=2021-01" target="_blank" rel="noopener noreferrer"> <span>click here</span> </a> and we will get in touch with you as soon as possible.
                                </p>
                                <button className='btn-primary'>Contact us</button>
                            </div>
                        </div>
                    </Fade>
                </section>
                <section className='container-banner'>
                    <Fade bottom>
                        <div className='banner'>
                            <div className='back'>
                                <div>
                                    <h3>Met our new office</h3>
                                    <p>We will be celebrated the opening of our new building at our TP Campus in Eindhoven, the Netherlands. We have introduced our different lines of equipment to those agents honoring us with their presence.</p>
                                    <button className='btn-primary'>Read more</button>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </section>
                <section className='container-contact'>
                    <Fade bottom>
                        <div className='contact'>
                            <h2 className='header'>Request a quote</h2>
                            <div style={{ justifyContent: 'flex-start' }} className='circles'>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <p className='txt'>We will get in touch with you as soon as possible.</p>
                            <input

                                name="displayName"
                                placeholder="Name"
                                type="text"
                                required={true}

                            />
                            <input

                                name="email"
                                placeholder="Email"
                                type="text"
                                required={true}

                            />
                            <input

                                name="tel"
                                placeholder="Phone"
                                type="number"

                            />
                            <textarea

                                name="text"
                                placeholder="Message"
                                type="text"

                            />

                            <br />
                            <br />
                            <div>
                                <button className='btn-primary' >Submit</button>
                            </div>
                        </div>
                        <div className='collage'>
                            <div className='line1'>
                                <div className='img1'></div>
                                <div className='boxline'>
                                    <div className='img2'></div>
                                    <div className='img3'></div>
                                </div>
                            </div>
                            <div className='line2'>
                                <div className='img4'></div>
                                <div className='img5'></div>
                                <div className='img6'></div>
                            </div>
                        </div>
                    </Fade>
                </section>



            </section >
        );
    }
}

export default HomePage;