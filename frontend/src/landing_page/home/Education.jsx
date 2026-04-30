import React from 'react';
import './css/Education.css';

function Education() {
    return (
        <div className="container education-section">
            <div className="row">
                <div className="col-6">
                    <img src="/Assets/education.svg"/>
                </div>
                <div className="col-6">
                    <h1 className='mb-3'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education in the world conveying everything from the basics to advanced trading.</p>
                    <a href=''>Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    
                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries</p>
                    <a href=''>TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;
