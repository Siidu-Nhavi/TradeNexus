import React from 'react';
import './css/Stats.css';

function Stats() {
    return (
        <div className='container p-5 stats-section'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1>Trust with confidence</h1>
                    <h3>Customer first always</h3>
                    <p>That's why ₹1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.</p>
                    <h3>No spam or gimmicks</h3>
                    <p>No gimmicks spam, "gamification", or annoying push notifications. High quality apps that you use at your pace , the way you like.</p>
                    <h3>The Zerodha universe</h3>
                    <p>Not just a platform. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h3>Do better with money</h3>
                    <p>With initiative like Nudge and kill Switch, we don't just faciliate transactions, but actively help you do better with your money.</p>
                </div>

                <div className='col-6 p-5'>
                    <img src='/Assets/ecosystem.png' alt='Stats Image' style={{ width: "90%" }} />
                    <div className='text-center'>
                        <a href='' className='mx-3'>
                            Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                        <a href=''>
                            Try kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Stats;
