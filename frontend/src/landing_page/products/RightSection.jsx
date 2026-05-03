import React from 'react';
import './Product.css';

function RightSection({
    rightImageURL,
    rightProductName,
    rightProductDescription,
    rightLearnMore
}) {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                {/* Text Section */}
                <div className="col-md-6 p-4">
                    <h1 className="fw-bold">{rightProductName}</h1>
                    <p className="text-muted">{rightProductDescription}</p>

                    {/* Links */}
                    <div className="mt-3">
                        <a href={rightLearnMore} className="text-decoration-none text-primary fw-semibold">
                            Learn more <i className="fa fa-long-arrow-right"></i>
                        </a>
                    </div>

                </div>
                {/* Image Section */}
                <div className="col-md-6 p-4 text-center">
                    <img src={rightImageURL} alt="console image" className="img-fluid hover-effect" />
                </div>
            </div>
        </div>
    );
}

export default RightSection;