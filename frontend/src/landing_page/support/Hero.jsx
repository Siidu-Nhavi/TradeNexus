import React from 'react';

function Hero() {
    return (
        <div className="container py-5 bg-white">
            <div className="row align-items-center">

                {/* Left side: Heading + Search bar */}
                <div className="col-md-6 mb-3 mb-md-0">
                    <h4 className="fw-semibold mb-3 text-dark">
                        Support Portal
                    </h4>

                    <input
                        type="text"
                        className="form-control shadow-sm"
                        placeholder="Eg: How do I open my account, How do I activate F&O..."
                    />
                </div>

                {/* Right side: My tickets button */}
                <div className="col-md-6 text-md-end text-center">
                    <button className="btn btn-primary px-4">
                        My tickets
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Hero;