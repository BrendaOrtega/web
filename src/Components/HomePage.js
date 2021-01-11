import React, { Component } from 'react';
import './HomePage.css';
import {Link} from 'react-router-dom';
import { Carousel } from 'antd';
import {Card} from "./Common/Card"
import {Post} from "./Common/Post";
import Footer from "./Footer";
import {Button} from "./Common/Button"

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
                  <meta property="og:url"                content="https://technicsproduction.nl/" />
                        <meta property="og:type"               content="website" />
                        <meta property="og:title"              content="Technics Production BV" />
                        <meta property="og:description"        content="Technics Production B.V. began as a consultancy and outsourcing company for ground" />
                        <meta property="og:image"              content="https://firebasestorage.googleapis.com/v0/b/technics-f1dcc.appspot.com/o/Website-screen.png?alt=media&token=ccb6e98c-1c43-4ebd-be45-499c0a89b90f" />
                        <meta name="Description" content="Technics Production B.V. began as a consultancy and outsourcing company for ground, water
                            and road construction."/>
                        <title> Technics Production</title>
                <div className="home-box">
                    <Carousel afterChange={onChange} autoplay>
                        <div className="slider img1">
                            <div className="cover">
                                <div>
                                    <h2>Build your ideas</h2>
                                    <p style={{width:"400px"}}> Grow the potential of your ideas, by developing a whole ecosystem (software and hardware) around them.</p>
                                    <br/>
                                    <Link to="/contact">
                                        <Button text="Contact"/>
                                    </Link>
                            
                                </div>
                            </div>
                        </div>
                        <div  className="slider img2">
                            <div className="cover">
                                <div>
                                    <h2>Develop your projects</h2>
                                    <p style={{width:"400px"}}> Technics Production B.V. created the T&P Campus to give you all the necessary tools to establish and grow your projects</p>
                                    <br/>
                                    <a href="https://calendly.com/spikestinger/15min?month=2021-01" target="_blank" rel="noopener noreferrer">
                                       <Button text="Schedule"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="slider img3">
                            <div className="cover">
                                <div>
                                    <h2>Become the most influential Tech Hub</h2>
                                    <p style={{width:"400px"}}> If you think your project or company should be in the T&P Campus, send us an email with a brief description of it and contact info. We will get in touch with you as soon as possible.</p>
                                    <br/>
                                    <Link to="/contact">
                                       <Button text="Contact"/>
                                       </Link>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
                <section className="products-box">
                    <h2>Our services</h2>
                    <hr className="line"/>
                    <p className="text"> <strong>Technics Production BV </strong> develops everything in the field of applications and use of high-tech electronics. Thanks to the accumulated know-how, we are already playing a decisive role in the early stages of a development project.
                        We have this function not only with regard to new products, but also for the improvement and adaptation of existing products.</p>
                    <br/>
                    <br/>
                    <div className="flex-products">
                        <Card
                         image="https://firebasestorage.googleapis.com/v0/b/technics-f1dcc.appspot.com/o/138081765_2852502075076419_7973199817792376016_n.jpg?alt=media&token=411bd277-091d-44cf-b70e-5b2ea6b983bb"
                         name="Mentorship"
                         description="What and how on hardware and software to bring your idea to fruition "
                        />
                        <Card
                            image="https://firebasestorage.googleapis.com/v0/b/technics-f1dcc.appspot.com/o/138058318_2731463860451020_1699365138474611813_n.jpg?alt=media&token=343c3900-7861-45c5-aed7-1a4289164479"
                            name="Production"
                            description="If you already have an existing and finished product, we can assemble it,
                                manufacture it in pieces and/or mass-produce it for you"
                        />
                         <section className="card">
                            <div className="img_box">
                                <img src="https://firebasestorage.googleapis.com/v0/b/technics-f1dcc.appspot.com/o/138028174_704693463528396_5733506577261889889_n.jpg?alt=media&token=174d3d21-b37b-42c8-8c2d-0f26ba8817ed" alt="image-product"/>
                            </div>
                            <div className="space">
                                <h3>T&P Campus</h3>
                                <p>Need a company or a place to begin your own creations, <span>click here</span> </p>
                                <br/>
                            </div>
                        </section>
                    </div>
                </section>
                <section className="clients-box">
                    <div className="clients">
                        <img src="https://firebasestorage.googleapis.com/v0/b/technics-f1dcc.appspot.com/o/1-removebg-preview.png?alt=media&token=242b1147-a5e4-4174-8e04-2df584874a2d" alt="partner "/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/technics-f1dcc.appspot.com/o/1-removebg-preview.png?alt=media&token=242b1147-a5e4-4174-8e04-2df584874a2d" alt="partner "/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/technics-f1dcc.appspot.com/o/1-removebg-preview.png?alt=media&token=242b1147-a5e4-4174-8e04-2df584874a2d" alt="partner "/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/technics-f1dcc.appspot.com/o/1-removebg-preview.png?alt=media&token=242b1147-a5e4-4174-8e04-2df584874a2d" alt="partner "/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/technics-f1dcc.appspot.com/o/1-removebg-preview.png?alt=media&token=242b1147-a5e4-4174-8e04-2df584874a2d" alt="partner "/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/technics-f1dcc.appspot.com/o/1-removebg-preview.png?alt=media&token=242b1147-a5e4-4174-8e04-2df584874a2d" alt="partner "/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/technics-f1dcc.appspot.com/o/1-removebg-preview.png?alt=media&token=242b1147-a5e4-4174-8e04-2df584874a2d" alt="partner "/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/technics-f1dcc.appspot.com/o/1-removebg-preview.png?alt=media&token=242b1147-a5e4-4174-8e04-2df584874a2d" alt="partner "/>
                    </div>
                </section>
                <section className="blog-box">
                    <h2>Blog</h2>
                    <hr className="line"/>
                    <div className="flex-posts">
                        <Post
                        image="https://stingerspike.com/images/blog/9868240640498-396-yol-kapani-nedir_2.jpg"
                        name="What use Stinger Spike?"
                        description="The Stinger Spike System is a tire deflation device used in stopping high-speed pursuits. ... When the vehicle runs over the Stinger Spike System, sharp hollow spikes penetrate and remain in one or more tires. Air passes through the spikes for a controlled tire deflation."
                        />
                        <Post
                            image="https://stingerspike.com/images/blog/9868240640498-396-yol-kapani-nedir_2.jpg"
                            name="What use Stinger Spike?"
                            description="The Stinger Spike System is a tire deflation device used in stopping high-speed pursuits. ... When the vehicle runs over the Stinger Spike System, sharp hollow spikes penetrate and remain in one or more tires. Air passes through the spikes for a controlled tire deflation."
                        />

                        <Post
                            image="https://stingerspike.com/images/blog/9868240640498-396-yol-kapani-nedir_2.jpg"
                            name="What use Stinger Spike?"
                            description="The Stinger Spike System is a tire deflation device used in stopping high-speed pursuits. ... When the vehicle runs over the Stinger Spike System, sharp hollow spikes penetrate and remain in one or more tires. Air passes through the spikes for a controlled tire deflation."
                        />
                    </div>
                </section>
            </section>
        );
    }
}

export default HomePage;