import React, { Component } from 'react';
import './HomePage';
import producto1 from "../assets/chimera.png"
import producto2 from "../assets/h2.png"
import producto3 from "../assets/jx.png"
import producto4 from "../assets/ss.png"
import producto5 from "../assets/spike.png"
import producto6 from "../assets/gps.png"
import producto7 from "../assets/sistem.png"
import producto8 from "../assets/camera.png"

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
                    <h2>Some of our products</h2>
                    <p className="mg">Technics Production B.V. has also developed their own tools and devices, which are now
                        offered to the world through its innovation lines. We want to make the world better, by sharing
                        our creations.</p>
                    <p>We are currently offering these to the public:</p>
                    <div className='box'>
                        <div className='card-p'>
                            <div className='card-img'>
                                <img src={producto1} alt="chimera xr product" />
                            </div>
                            <div>
                                <h3>Chimera XR</h3>
                                <p>It is a virtual reality firearm training system to provide officers with safer training experience.</p>
                                <strong>Specifications</strong>
                                <ul>
                                    <li>Zero projectiles</li>
                                    <li>Safe option for high risk training</li>
                                    <li>No risk for the agency if the kit is lost</li>
                                    <li>Safe-to-fail learning environment</li>
                                    <li>Cost effective simulation (10x lower than screen simulation)</li>
                                    <li>Faster set up and tear down for reduced time and personnel requirement
                                    </li>
                                    <li>No supervision or administrator required</li>
                                    <li>Remote training for reduced travel costs</li>
                                    <li>Ability to push out updates and training programs nationally without travel restriction </li>
                                    <li>Lower live ammunition requirements</li>
                                    <li>Less live range requirements and better use oftime on live range</li>
                                    <li>Reduction in time and liability for scenario actors</li>
                                </ul>
                            </div>
                        </div>
                        <div className='card-p'>
                            <div className='card-img'>
                                <img src={producto2} alt="horus product" />
                            </div>
                            <div>
                                <h3>Horus</h3>
                                <p>It is a virtual reality sniper training device that offers</p>
                                <strong>Specifications</strong>
                                <ul>
                                    <li>Increased Sniper/spotter competency by dry fire repetition</li>
                                    <li>Decreased time to determine wind call/ leads on movers</li>
                                    <li>No Range Restrictions (Close Proximity, Human Movers)</li>
                                    <li>Custom programing available for purchase</li>
                                    <li>Portable pelican case / 10min setup / 8’x8’ footprint</li>
                                    <li>Uses ATRAG Ballistic Software to allow for ANY ballistics</li>
                                    <li>Any Horus Reticle (H59, TREMOR3, TREMOR8, etc.)</li>
                                    <li>Ability to manipulate atmospherics and wind</li>
                                </ul>
                                <strong>Training</strong>
                                <ul>
                                    <li>Basic, Intermediate, Single variable, Multi-variable, Military, Spotter, Moving threats. </li>
                                    <li>Build your own range with static and moving targets</li>
                                    <li>Work wind cosine equations with varying winds</li>
                                    <li>Shoot realistic human & vehicle movers at variousspeeds</li>
                                    <li>Known and unknown range settings (Range, DOPE, ToF)</li>
                                </ul>
                            </div>
                        </div>
                        <div className='card-p'>
                            <div className='card-img'>
                                <img src={producto3} alt="PPSS product" />
                            </div>
                            <div className='card-info'>
                                <h3>PPSS</h3>
                                <p>it is a stab resistant body armor that provides protection against knife attacks and stabbings,
                                    spikes, improvised weapons, and blunt force trauma - all officially tested and certified in accordance with governing standards.
                                </p>
                                <strong>Specifications</strong>
                                <ul>
                                    <li>Ultra lightweight protects all the vital organs</li>
                                    <li>Redesigned for quick donning</li>
                                    <li>Will not degrade unlike other body armor materials</li>
                                    <li>Protection Levels</li>
                                    <li>CAST certification - KR1 (Knife)</li>
                                    <li>CAST certification - SP1 (Spike)</li>
                                    <li>VPAM certification - W5 (Blunt Force)</li>
                                    <li>Sizes: s - 3xl </li>
                                    <li>Weight: (Inc' panel) 1.75kg care & maintenance panel easly removed to allow for machine washing of outer cover </li>
                                    <li>Color: white</li>
                                </ul>
                            </div>
                        </div>
                        <div className='card-p'>
                            <div className='card-img'>
                                <img src={producto4} alt="SlashPRO product" />
                            </div>
                            <div className='card-info'>
                                <h3>SlashPRO</h3>
                                <p>It is a set of proactive and resistant clothes to edged weapons.
                                </p>
                                <strong>Specifications</strong>
                                <ul>
                                    <li><strong>Material:</strong>100% cut-tex PRO</li>
                                    <li><strong>Size:</strong>S - 3XL</li>
                                    <li><strong>Clothing care:</strong>Machine washable up to 40º Celsius</li>
                                    <li><strong>Place of manufacture:</strong>UK</li>
                                    <li><strong>Features & benefits:</strong>Offering comfortable yet effective cut protection, machine washable and 100% latex free.</li>
                                </ul>
                                <strong>Who is this product suitable for?</strong>
                                <ul>
                                    <li>Law efforcement</li>
                                    <li>Military</li>
                                    <li>Correction / Prison service</li>
                                    <li>Inmigration</li>
                                    <li>Customs</li>
                                    <li>Border control</li>
                                    <li>Private security & military contractors</li>
                                    <li>Civil enforcement</li>
                                </ul>
                            </div>
                        </div>
                        <div className='card-p'>
                            <div className='card-img'>
                                <img src={producto5} alt="Spike stinger product" />
                            </div>
                            <div className='card-info'>
                                <h3>Spike Stinger</h3>
                                <p>Spike stinger aims to hold the title of global leader in vehicle stop systems and ensuring the safety of law-enforcement officers in the world.
                                </p>
                                <strong>Rust-Free, Harden Metal Body</strong>
                                <ul>
                                    <li>Length: 835 mm (32.87 in)</li>
                                    <li>Width: 460 mm (18.11 in)</li>
                                    <li>Height: 115 mm (4.52 in)</li>
                                    <li>Weight: 23 kg (50.07 lbs)</li>
                                </ul>
                                <strong>Reinforced Spike Strip/Mat</strong>
                                <ul>
                                    <li>Reach: 5.5 m (18.04 ft)</li>
                                    <li>Spike Height: 5 cm (1.97 in)</li>
                                    <li>120 spikes (10 spikes per line)</li>
                                </ul>
                                <a href="https://spikestingerinternational.com/" target="_blank" rel="noopener noreferrer">
                                    Read more
                                </a>
                            </div>
                        </div>
                        <div className='card-p'>
                            <div className='card-img'>
                                <img src={producto6} alt="Bleed GPS product" />
                            </div>
                            <div className='card-info'>
                                <h3>Bleeb GPS transmitter®</h3>
                                <p>True worldwide coverage GPS transmitter.
                                </p>
                                <strong>Specifications:</strong>
                                <p>While most GPS trackers are able to tell ypu the location, but not transmit it in real time even in the middle of the ocean, this
                                    transmitter is the only one in the world with agreements in every country, to use their 3 and 4G networks. It has been used to track children, people with disabilities, higly valuable
                                    goods, ships, bikes, planes, cars, even military equipment and transport. The Bleeb GPS transmitter® is able to operate for up to two weeks, after
                                    being charged for a few minutes. It's size (as convenient as a lighter) and indestructible materials allows it to be hidden, or just pocketed easily.
                                </p>
                            </div>
                        </div>
                        <div className='card-p'>
                            <div className='card-img'>
                                <img src={producto7} alt="catch system product" />
                            </div>
                            <div className='card-info'>
                                <h3>Catch systems</h3>
                                <p>Catch systems has been active in the field of license plate recognition and associated technologies.
                                </p>
                                <strong>Specifications:</strong>
                                <p>Together with Dutch KLPD, CathSystems was pioneer in the development of the ANPR (Automatic Number Plate Recognition) technology.
                                    <b />
                                    With the CatchKen technology, images from special infrared cameras can be used for the recognition of license plates.
                                </p>
                            </div>
                        </div>
                        <div className='card-p'>
                            <div className='card-img'>
                                <img src={producto8} alt="Technocod product" />
                            </div>
                            <div className='card-info'>
                                <h3>Technocod</h3>
                                <p>Technocod has a catalog of cameras, digital video recorders, home alarm systems and more.
                                </p>
                                <strong>Specifications:</strong>
                                <strong>EPCOM cameras</strong>
                                <ul>
                                    <li>Eyeball TURBOHD 4K</li>
                                    <li>Gran angular 10º lente 2.8 mm</li>
                                    <li>Exterior IP67</li>
                                    <li>IR Exir 30 mts</li>
                                    <li>dWDR</li>
                                    <li>TVI-AHD-CVI-CVBS</li>
                                </ul>
                                <strong>Audio recorder</strong>
                                <ul>
                                    <li>Audio by coaxitron DVR8</li>
                                    <li>Channels 2 megapixel</li>
                                    <li>(1080p) Lite / 8 channels)</li>
                                    <li>Turbo HD + 2 channels</li>
                                    <li>IP / 1 Disk Bay</li>
                                    <li>Hard / H.264+ /Output</li>
                                    <li>Full HD Video</li>
                                </ul>
                                <strong>Alarm Set</strong>
                                <ul>
                                    <li>Hybrid Alarm Panel</li>
                                    <li>IP (Version 2.0) / Wi-fI / 8 wired zones</li>
                                    <li>Direct to Panel / 56</li>
                                    <li>Expandable zones: Wireless or wired by means</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <div className="products">
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

                </div> */}
            </section >
        );
    }
}

export default Products;