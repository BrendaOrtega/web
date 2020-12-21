import React, { Component } from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'



class Footer extends Component {

    render() {
        return (
            <section className="footer">
                <div className="footer-box">
                    <div>
                        <img src="https://firebasestorage.googleapis.com/v0/b/technics-f1dcc.appspot.com/o/1-removebg-preview.png?alt=media&token=242b1147-a5e4-4174-8e04-2df584874a2d" alt="logo"/>
                        <p>Technics & Production BV's total delivery program includes a wide variety of products including a tracker, a remote control nail box, a pinch valve, etc. Technics & Production BV's total delivery program includes a wide variety of products including a tracker, a remote control nail box, a pinch valve, etc.</p>
                    </div>
                    <div>
                        <br/>
                        <br/>
                        <h3>Contact</h3>
                        <br/>
                        <a href="tel:+18475555555" aria-label="Whats app" target={"blank"} rel="noopener noreferrer">
                            <span>  <FontAwesomeIcon icon={faPhone} /> </span>   +52 555 55 55
                        </a>
                        <br/>
                        <br/>
                        <a href="mailto:contacto@prospikestinger.com" aria-label="Mail" rel="noopener noreferrer">
                            <span> <FontAwesomeIcon icon={faWhatsapp} />  </span> +52 555 55 55
                        </a>

                        <br/>
                        <br/>
                        <a href="mailto:contacto@prospikestinger.com" aria-label="Mail" rel="noopener noreferrer">
                            <span> <FontAwesomeIcon icon={faEnvelope} />  </span>  contacto@prospikestinger.com
                        </a>

                    </div>
                </div>

                <hr className="divider"/>
                <div className="copy">


                <p>Copyright 2020 All Right Reserved</p>
                </div>
            </section>
        );
    }
}

export default Footer;