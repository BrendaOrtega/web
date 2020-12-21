import React, { Component } from 'react';
import './HomePage.css';
import {Link} from 'react-router-dom';
import { Carousel } from 'antd';
import {Card} from "./Common/Card"
import {Post} from "./Common/Post";
import Footer from "./Footer";

function onChange(a, b, c) {
    console.log(a, b, c);
}

class HomePage extends Component {

    render() {
        return (
            <section >
                <div className="home-box">
                    <Carousel afterChange={onChange} autoplay>
                        <div className="slider img1">
                            <div className="cover">

                            </div>
                        </div>
                        <div  className="slider img2">
                            <div className="cover">

                            </div>
                        </div>
                        <div className="slider img3">
                            <div className="cover">

                            </div>
                        </div>
                    </Carousel>
                </div>
                <section className="products-box">
                    <h2>Our products</h2>
                    <hr className="line"/>
                    <p className="text">Technics & Production BV develops everything in the field of applications and use of high-tech electronics. Thanks to the accumulated know-how, we are already playing a decisive role in the early stages of a development project.
                        We have this function not only with regard to new products, but also for the improvement and adaptation of existing products.</p>
                    <br/>
                    <br/>
                    <div className="flex-products">
                        <Card
                         image="https://stingerspike.com/images/blog/9868240640498-396-yol-kapani-nedir_2.jpg"
                         name="Spike Stringer"
                         description="Hollow spikes allow air to escape at a controlled rate "
                        />
                        <Card
                            image="https://stingerspike.com/images/blog/9868240640498-396-yol-kapani-nedir_2.jpg"
                            name="Spike Stringer"
                            description="Hollow spikes allow air to escape at a controlled rate "
                        />
                        <Card
                            image="https://stingerspike.com/images/blog/9868240640498-396-yol-kapani-nedir_2.jpg"
                            name="Spike Stringer"
                            description="Hollow spikes allow air to escape at a controlled rate "
                        />
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
                <Footer/>
            </section>
        );
    }
}

export default HomePage;