import React, { Component } from 'react';
import './Spike.css';
import Fade from 'react-reveal/Fade';
import NavBar from '../NavBar';
import safety from "../../assets/user-protection.svg"
import laptop from "../../assets/laptop.svg"
import award from "../../assets/award2.svg"
import calibration from "../../assets/calibration.svg"
import tracking from "../../assets/tracking.svg"
import fast from "../../assets/fast-time.svg"
import faster from "../../assets/fast.svg"
import battery from "../../assets/battery.svg"
import display from "../../assets/display 1.svg"
import develop from "../../assets/deployment 1.svg"
import car from "../../assets/car 3.svg"
import easy from "../../assets/easy 1.svg"
import mantain from "../../assets/Vector.svg"
import guarantee from "../../assets/guarantee 1.svg"
import support from "../../assets/support 2.svg"


const test = "https://firebasestorage.googleapis.com/v0/b/technics-f656c.appspot.com/o/270623TechnicsProduction-55.jpg?alt=media&token=b945632d-104b-4d62-a568-ee3bf2d88d7e"
const spike = "https://firebasestorage.googleapis.com/v0/b/technics-f656c.appspot.com/o/270623TechnicsProduction-70__1_-removebg-preview.png?alt=media&token=26aa0ab2-c4d8-4c3d-a9c6-6df00706cf95"

class Spike extends Component {
    componentDidMount() {
        window.scroll(0, 0);
    }

    render() {
        return (
            <section >
                <meta
                    name="description"
                    content=" Spike"
                />
                <meta
                    name="keywords"
                    content="spiker, production, laboratory, machine development, history"
                />

                <title>Spike | Tecned</title>
                <NavBar />
                <section >
                    <div className="spike">
                        <div className="cover">
                            <div>
                                <h3>Spike</h3>
                                <p>The #1 Vehicle Stopping System around the world</p>
                                <button className='btnGhost'>Visit Spike Website</button>
                            </div>
                        </div>

                    </div>
                    <section className='content'>
                        <Fade bottom>
                            <h2 style={{ textAlign: 'center' }} className='header'>The exclusive capacities of the<span className='underline'> Spike </span></h2>
                            <div className='circles'>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className='spike-container'>
                                <div>
                                    <p className='txt'>The Spike is the only autonomous
                                        device able to stop any vehicle from motorcycles to
                                        trailer trucks in seconds. Its unique capacities for
                                        pairing and non-stop operation have also granted it
                                        the preference of military organizations. It can be used
                                        fixed or during mobile operations. The Spike
                                        is effectively stopping vehicles all across the globe.
                                        You can find these in every continent, excluding Antarctica.
                                    </p>
                                    <p className='txt'>
                                        At Spike, we aim to secure the life of every law-enforcement official around the world, by finishing a vehicle pursuit in the safest possible way… even for those being chased. To achieve this, our team is carrying on constant research and development to improve every individual aspect regarding our technologies. We have set the bar high, and we are setting it higher by the day.
                                    </p>
                                    <br />  <br />
                                    <button className='btn-primary'>Contact us</button>
                                </div>
                                <img src={test} className='' />
                            </div>
                        </Fade>

                    </section>
                    <section className='benefits'>
                        <h2 style={{ textAlign: 'center' }} className='header'>The Vehicle Stopping System around the world</h2>
                        <div className='circles'>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className='box'>
                            <div>

                                <img src={safety} />

                                <h3>Safety</h3>
                                <p>Conventional spike has been highly controversial. These are needed to stop vehicles but have also increased the numbers of injuries or even death among law enforcement officers and suspects. Because these spike strips are manually operated, the users are directly exposed to the vehicles driving at dangerous speeds. The Spike avoids all risks thanks to its remote operation capacities and its online controlled deflation mechanism.</p>
                            </div>
                            <div>
                                <img src={award} />

                                <h3>Cost Efficiency </h3>
                                <p>Conventional spike has been highly controversial. These are needed to stop vehicles but have also increased the numbers of injuries or even death among law enforcement officers and suspects. Because these spike strips are manually operated, the users are directly exposed to the vehicles driving at dangerous speeds. The Spike avoids all risks thanks to its remote operation capacities and its online controlled deflation mechanism.</p>
                            </div>
                            <div>
                                <img src={laptop} />

                                <h3>Spike-OP Program</h3>
                                <p>Conventional spike has been highly controversial. These are needed to stop vehicles but have also increased the numbers of injuries or even death among law enforcement officers and suspects. Because these spike strips are manually operated, the users are directly exposed to the vehicles driving at dangerous speeds. The Spike avoids all risks thanks to its remote operation capacities and its online controlled deflation mechanism.</p>
                            </div>
                        </div>
                    </section>
                    <section className='keyBox'>
                        <h2 style={{ textAlign: 'center' }} className='header'>Key Features</h2>
                        <div className='circles'>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className='container'>
                            <div className='left'>
                                <div className='feature'>
                                    <img src={calibration} />
                                    <h3>Automatic Self Calibration</h3>
                                </div>
                                <div className='feature'>
                                    <img src={tracking} />
                                    <h3>SMART RECorder tracking and recording </h3>
                                </div>

                                <div className='feature'>
                                    <img src={fast} />
                                    <h3>Fastest extension time (1 second or less)</h3>
                                </div>
                                <div className='feature'>
                                    <img src={faster} />
                                    <h3>Fastest recovery time </h3>
                                </div>
                                <div className='feature'>
                                    <img src={battery} />
                                    <h3>Most deployments on a full battery</h3>
                                </div>
                                <div className='feature'>
                                    <img src={display} />
                                    <h3>LCD display with diagnosing data on the remote controller</h3>
                                </div>
                            </div>
                            <img className='spikeImage' src={spike} />
                            <div className='right'>
                                <div className='feature'>
                                    <img src={develop} />
                                    <h3>Capacity to deploy while charging </h3>
                                </div>
                                <div className='feature'>
                                    <img src={car} />
                                    <h3>Capacity to charge from a vehicle  </h3>
                                </div>
                                <div className='feature'>
                                    <img src={easy} />
                                    <h3>Easiest to transport </h3>
                                </div>
                                <div className='feature'>
                                    <img src={mantain} />
                                    <h3>Easiest to maintain </h3>
                                </div>
                                <div className='feature'>
                                    <img src={guarantee} />
                                    <h3>Best warranty coverage  </h3>
                                </div>
                                <div className='feature'>
                                    <img src={support} />
                                    <h3>Best customer support </h3>
                                </div>
                            </div>
                        </div>
                        <button className='btnBlue'>Download our flat sheet</button>
                    </section>
                    <section style={{ backgroundColor: "rgba(231, 238, 249, .4)" }} className='container-contact'>
                        <Fade bottom>
                            <div className='contact'>
                                <h2 className='header'>Request a quote</h2>
                                <div style={{ justifyContent: 'flex-start' }} className='circles'>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <p className='txt'>We will get in touch with you as soon as possible.</p>
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
                                <div>
                                    <button className='btn-primary' >Submit</button>
                                </div>
                            </div>
                            <div className='collage'>
                                <div className='line1'>
                                    <div className='img1'></div>
                                    <div className='boxline'>
                                        <div className='img2'></div>
                                        <div className='img3'></div>
                                    </div>
                                </div>
                                <div className='line2'>
                                    <div className='img4'></div>
                                    <div className='img5'></div>
                                    <div className='img6'></div>
                                </div>
                            </div>
                        </Fade>
                    </section>

                </section>
            </section >
        );
    }
}

export default Spike;