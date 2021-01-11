import React, { Component } from 'react';
import './HomePage.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarked} from '@fortawesome/free-solid-svg-icons'
import {Button} from "./Common/Button"


class Contact extends Component {
    componentDidMount() {
        window.scroll(0, 0);
      }

    render() {
        return (
            <section className="contact-form">
                 <div className="banner">
                </div>
                        <meta
                        name="description"
                        content=" Contact us"
                        />
                        <title>Contact | Technics Production</title>
                
                  <div className="">
           
                        <div className="contacto">
                        <div className="map">
                            <iframe
                            title="map-fixter"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.678357055867!2d5.524512815767693!3d51.44570057962508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6d8984df40151%3A0x819e5775916b5124!2sUrkhovenseweg%2017%2C%205641%20KA%20Eindhoven%2C%20Netherlands!5e0!3m2!1sen!2smx!4v1610328861146!5m2!1sen!2smx"
                            frameBorder={0}
                            style={{ border: "0" }}
                            allowFullScreen="true"
                            ></iframe>
                        </div>
                        <div className="contact">
                            <h2 >Contact us</h2>
                            <p className="text">We will get in touch with you as soon as possible.</p>
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
                            <div style={{ display:"flex", justifyContent:"center"}}>
                            <Button  text="Submit" />
                            </div>
                        </div>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Contact;