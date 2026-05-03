import React from 'react';
import './Product.css';

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                {/* Image Section */}
                <div className="col-md-6 p-4 text-center">
                    <img src={imageURL} alt="product" className="img-fluid hover-effect" />
                </div>

                {/* Text Section */}
                <div className="col-md-6 p-4">
                    <h1 className="fw-bold">{productName}</h1>
                    <p className="text-muted">{productDescription}</p>

                    {/* Links */}
                    <div className="mt-3">
                        <a href={tryDemo} className="me-4 text-decoration-none text-primary fw-semibold">
                            Try demo <i className="fa fa-long-arrow-right"></i>
                        </a>
                        <a href={learnMore} className="text-decoration-none text-primary fw-semibold">
                            Learn more <i className="fa fa-long-arrow-right"></i>
                        </a>
                    </div>

                    {/* Store Badges */}
                    <div className="mt-4 d-flex align-items-center">
                        <a href={googlePlay}>
                            <img src="/Assets/googlePlayBadge.svg" alt="Google Play" className="img-fluid hover-effect" />
                        </a>
                        <a href={appStore} className="ms-4">
                            <img src="/Assets/appstoreBadge.svg" alt="App Store" className="img-fluid hover-effect" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
