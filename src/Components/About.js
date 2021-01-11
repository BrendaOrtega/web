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
                         <meta property="og:url"                content="https://technicsproduction.nl/" />
                        <meta property="og:type"               content="website" />
                        <meta property="og:title"              content="Technics Production BV" />
                        <meta property="og:description"        content="Technics Production B.V. began as a consultancy and outsourcing company for ground" />
                        <meta property="og:image"              content="https://firebasestorage.googleapis.com/v0/b/technics-f1dcc.appspot.com/o/Website-screen.png?alt=media&token=ccb6e98c-1c43-4ebd-be45-499c0a89b90f" />
                        <meta name="Description" content="Technics Production B.V. began as a consultancy and outsourcing company for ground, water
                            and road construction."/>
                        <title>About us | Technics Production</title>
                <div className="banner">
                </div>
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
                            <br/>
                            <br/>
                            <Button text="Contact"/>
                        </div>
                        <div className="company-img" style={{background:`url("https://firebasestorage.googleapis.com/v0/b/technics-f1dcc.appspot.com/o/138266441_969971757180346_9033408708576530543_n.jpg?alt=media&token=4be4cf57-0b8e-493a-8b7a-7baf73e43078")`}}>
                        </div>
                </div>
            </section>
        );
    }
}

export default About;