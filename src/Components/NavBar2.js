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
                <Link to="/products">
                    <p ><span style={{ marginRight: '4px' }}>Products</span>  <FontAwesomeIcon icon={faChevronDown} /></p>

                </Link>
            </div>


        </section>
    );

}

export default NavBar2