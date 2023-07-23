import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarked } from '@fortawesome/free-solid-svg-icons'
import logo from "../assets/tecned_color.svg"



class Footer extends Component {

    render() {
        return (
            <section className="footer">
                <div className="footer-box">
                    <div>
                        <img src={logo} alt="logo" />
                        {/* <p>Technics & Production BV's total delivery program includes a wide variety of products including a tracker, a remote control nail box, a pinch valve, etc. Technics & Production BV's total delivery program includes a wide variety of products including a tracker, a remote control nail box, a pinch valve, etc.</p> */}
                    </div>
                    <div>
                        <br />
                        <h3>Tecned</h3>
                        <br />
                        <Link to='/about'>
                            About
                        </Link>
                        <br />
                        <br />
                        <Link to='/products'>
                            Products
                        </Link>
                    </div>
                    <div>
                        <br />
                        <h3>Contact</h3>
                        <br />

                        <a href="tel:31403033781" aria-label="tel" rel="noopener noreferrer">
                            <span> <FontAwesomeIcon icon={faPhone} />  </span> +31 40 303 3781
                        </a>

                        <br />
                        <br />
                        <a href="mailto:info@technicsproduction.nl" aria-label="Mail" rel="noopener noreferrer">
                            <span> <FontAwesomeIcon icon={faEnvelope} />  </span>  info@technicsproduction.nl

                        </a>
                        <br />
                        <br />
                        <a href="https://goo.gl/maps/Br5a2k8B1uYvoMSN8" target="_blank" aria-label="Mail" rel="noopener noreferrer">
                            <span> <FontAwesomeIcon icon={faMapMarked} />  </span>
                            Tecned <br />
                            <span> <FontAwesomeIcon style={{ opacity: "0" }} icon={faMapMarked} />  </span> Urkhovenseweg 17<br />
                            <span> <FontAwesomeIcon style={{ opacity: "0" }} icon={faMapMarked} />  </span>5641 KA Eindhoven<br />
                            <span> <FontAwesomeIcon style={{ opacity: "0" }} icon={faMapMarked} />  </span> The Netherlands

                        </a>

                    </div>
                </div>

                <hr className="divider" />
                <div className="copy">


                    <p>Copyright 2023 © All Right Reserved</p>
                </div>
            </section>
        );
    }
}

export default Footer;