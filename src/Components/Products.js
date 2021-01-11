import React, { Component } from 'react';
import './HomePage';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarked} from '@fortawesome/free-solid-svg-icons'



class Products extends Component {

    componentDidMount() {
        window.scroll(0, 0);
      }
    render() {
        return (
            <section >
                 <meta
                        name="description"
                        content="Our products"
                        />
                        <meta
                        name="keywords"
                        content="spiker, production, laboratory, machine development, bleep gps, spike stringer, pinch valve"
                        />
                        <title>Products | Technics Production</title>
                <div className="banner">
                </div>
                <div className="products">
                    <div className="products-list">
                        <h2>Some of our products</h2>
                        <p className="mg">Technics Production B.V. has also developed their own tools and devices, which are now
                        offered to the world through its innovation lines. We want to make the world better, by sharing
                        our creations.</p>
                        <p>We are currently offering these to the public:</p>
                        <br/>
                        <br/>
                        <div className="product-card">
                            <div className="product-img uno" >
                            </div>
                            <br/>
                            <h3>Spike Stringer</h3>
                            <p>Making use of basic principles, and our exclusive cutting edge software, the Spike STINGER
                            deploys by shooting a foldable highly resistant spike strip across 5 meters (16.4 ft) in less than a
                            second (depending on the weather/ground conditions). Then, once the vehicle to be stopped
                            has come in touch with the Spike STINGER, the strip goes back to its case in just the same
                            time. This can be safely activated at the distance thanks to its LCD remote control.</p>
                        </div>
                    </div>
                    <div className="products-list">
                        <div className="product-card">
                                <div className="product-img dos" >
                                </div>
                                <br/>
                                <h3>Bleeb GPS transmitter®</h3>
                                <p>True worldwide coverage GPS transmitter. While most GPS trackers are able to tell you the
                                location, but not transmit it in real time even in the middle of the ocean, this transmitter is the
                                only one in the world with agreements in every country, to use their 3 and 4 G networks. It has
                                been used to track children, people with disabilities, highly valuable goods, ships, bikes, planes,
                                cars, even military equipment and transport. The Bleeb GPS transmitter
                                ® is able to operate for up to two weeks, after being charged for a few minutes. Its size (as convenient as a lighter) and
                                indestructible materials allows it to be hidden, or just pocketed easily. If you would like to
                                receive further information about the Bleeb GPS transmitter
                                ®, get in touch with us. We will getback at you as soon as possible.</p>
                            </div>
                            <div className="product-card">
                                <div className="product-img tres" >
                                </div>
                                <br/>
                                <h3>Pinch Valve</h3>
                                <p>Used in the medical, petrochemical, and shipping industry, this precision valve allows precise
                                amounts of fluid to pass through. It is the only one in the world with the capacity to calibrate and
                                recalibrate itself automatically after any potential disruption in the tubes. No more replacement
                                for tubes are necessary. The Pinch Valve takes care that even external elements come together
                                to deliver the desired amount of fluids to a 0.01ml per liter error margin.
                                If you wish to receive any further information, do not hesitate to contact us here. We will be glad
                                to provide what you need.</p>
                            </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default Products;