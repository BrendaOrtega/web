import React, { useState, Component } from "react";
import './NavBar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarked, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import logo from "../assets/tecned_bn3.svg"
import logow from "../assets/tecned_bn2.svg"
import menuL from "../assets/menu-light.svg"
import menuD from "../assets/menu-dark.svg"
import close from "../assets/close.svg"

const NavBar = () => {
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
        <section>
            <section className="navbar "
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
                    <img style={
                        toggle
                            ? {
                                display: 'inline',
                            }
                            : { transition: "all .3s" }
                    } className="none logo" src={logo} alt="logo" />
                    <img style={
                        toggle
                            ? {
                                display: 'none',
                            }
                            : { transition: "all .3s" }
                    } className=" logo" src={logow} alt="logo" />
                </Link>
                <section className="mobile">
                    <img style={
                        toggle
                            ? {
                                display: 'inline',
                            }
                            : { transition: "all .3s" }
                    } className="none menuIcon" src={menuD} alt="logo" />
                    <img style={
                        toggle
                            ? {
                                display: 'none',
                            }
                            : { transition: "all .3s" }
                    } className=" menuIcon" src={menuL} alt="logo" />
                </section>

                <div className="pestanas fl web">
                    <Link to="/">
                        <p
                            style={
                                toggle
                                    ? {
                                        color: '#0D0D0D',
                                    }
                                    : { transition: "all .3s" }
                            }
                        >Home</p>
                    </Link>
                    <Link to="/tecned-campus">
                        <p style={
                            toggle
                                ? {
                                    color: '#0D0D0D',
                                }
                                : { transition: "all .3s" }
                        }>About</p>
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
            <section className="menuMobile">
                <div className="mobileLogo">
                    <Link to="/tecned" >
                        <img className=" logo" src={logo} alt="logo" />
                    </Link>
                    <img style={{ width: "32px" }} src={close} />
                </div>
                <div className="mobileTabs">
                    <Link to="/">
                        <p>Home</p>
                    </Link>
                    <Link to="/tecned-campus">
                        <p >About</p>
                    </Link>
                    <Link to="/spike">
                        <p >Spike</p>
                    </Link>
                </div>
                <a href="tel:31403033781" aria-label="tel" rel="noopener noreferrer">
                    <button style={{ width: "100% !important" }} className='btn-secondary'>Call us</button>
                </a>

            </section>
        </section>
    );

}

export default NavBar