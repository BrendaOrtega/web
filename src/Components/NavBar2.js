import React, { useState, Component } from "react";
import './NavBar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarked, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import logo from "../assets/logo-tecned.svg"
import logow from "../assets/tecned-white.svg"


const NavBar2 = () => {
    let [toggle, setToggle] = useState(false);

    window.onscroll = (e) => {
        window.requestAnimationFrame(function () {
            if (window.scrollY > 100) {
                setToggle(true);
            } else {
                setToggle(false);
            }
        });
    };
    return (
        <section className="navbar2"
            style={
                toggle
                    ? {
                        transition: "all .3s",
                        background: "white",
                        color: 'black',
                        margin: 0,
                        width: "100%",
                        padding: "0 5%",
                        borderBottom: "1px solid #f2f2f2"
                    }
                    : { transition: "all .3s" }
            }>

            <Link to="/tecned" >
                <img src={logo} alt="logo" />

            </Link>
            <div className="pestanas fl">
                <Link to="/">
                    <p

                    >Home</p>
                </Link>
                <Link to="/T&P-campus">
                    <p >About</p>
                </Link>
                <div className="menuD">
                    <p className="tab-products" style={
                        toggle
                            ? {
                                color: '#0D0D0D',
                            }
                            : { transition: "all .3s" }
                    }>

                        <span style={{ marginRight: '4px' }}>Products</span>  <FontAwesomeIcon icon={faChevronDown} /></p>
                    <div className="drop">
                        {/* <span>Chimera XR</span>
                        <span>Horus</span>
                        <span>PPSS</span>
                        <span>SlashPRO</span> */}
                        <Link to="/spike">
                            <p>Spike Stinger</p>
                        </Link>
                        {/* <span>Bleeb GPS transmitter®</span>
                        <span>Catch systems</span>
                        <span>Technocod</span> */}
                    </div>
                </div>
                <a href="tel:31403033781" aria-label="tel" rel="noopener noreferrer">
                    <button className='btn-secondary'>Call us</button>
                </a>
            </div>


        </section>
    );

}

export default NavBar2