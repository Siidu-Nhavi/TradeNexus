import React from 'react';
import './css/Pricing.css';

function Pricing() {
    return (
        <div className='container pricing-section'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discounting broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href=''>See pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>

                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className="col pricing-box">
                            <h1>₹0</h1>
                            <p>Free equity delivery and<br/> direct mutual funds</p>
                        </div>
                        <div className="col pricing-box">
                            <h1>₹20</h1>
                            <p>Intraday and F&amp;O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
