import React from 'react';
import './css/Awards.css';

function Awards() {
    return (
        <div className='container p-5 mb-5 awards-section'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='/Assets/largestBroker.svg' alt='Hero Image' />
                </div>

                <div className='col-6 p-5 mt-3'>
                    <h1>Largest stock broker in India</h1>

                    <p className='mb-5'> 2+ million Zerodha clients contribute to over 15% of
                        all retail order volumes in India daily by trading and investing in:
                    </p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Features and Options</p>
                                </li>

                                <li>
                                    <p>Commodity derivatives</p>
                                </li>

                                <li>
                                    <p>Currently derivatives</p>
                                </li>

                            </ul>

                        </div>

                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Stocks &amp; IPOs</p>
                                </li>

                                <li>
                                    <p>Direct mutual funds</p>
                                </li>

                                <li>
                                    <p>Bonds and Government</p>
                                </li>

                            </ul>

                        </div>

                    </div>
                    <img src="/Assets/pressLogos.png" alt="Press Logos" style={{width: '90%'}} />
                </div>
            </div>
        </div>
    );
}

export default Awards;