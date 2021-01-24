import React, { Component } from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'



class NavBar extends Component {

    render() {
        return (
            <section className="navbar">
                <div className="menu fl">
                    <Link to="/" >
                        <img src="https://firebasestorage.googleapis.com/v0/b/technics-f1dcc.appspot.com/o/1-removebg-preview.png?alt=media&token=242b1147-a5e4-4174-8e04-2df584874a2d" alt="logo"/>
                    </Link>
                    <hr className="division"/>
                    <div className="pestanas fl">
                        <Link to="/T&P-campus">
                            <p>T&P Campus</p>
                        </Link>
                        <Link to="/products">
                            <p>Products</p>
                        </Link>
                        {/* <Link to="/blog">
                            <p>Blog</p>
                        </Link> */}

                        <Link to="/contact">
                            <p>Contact</p>
                        </Link>
                    </div>
                </div>
                <div className="redes fl">
                    <a href="mailto:info@technicsproduction.nl" aria-label="Mail" rel="noopener noreferrer">
                   <span> <FontAwesomeIcon icon={faEnvelope} />  </span>  info@technicsproduction.nl
                    </a>
                    <a href="tel:31403033781"  aria-label="Tel" rel="noopener noreferrer">
                       <span>  <FontAwesomeIcon icon={faPhone} /> </span>   +31 40 303 3781
                    </a>
                </div>

            </section>
        );
    }
}

export default NavBar;