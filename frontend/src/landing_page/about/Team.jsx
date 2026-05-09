import React from 'react';

function Team() {
    return (
        <div className="container">

        
            <div className="row py-5 mt-5">
                <h1
                    className="text-center fw-normal"
                    style={{ color: "#424242", fontSize: "2.5rem" }}
                >
                    People
                </h1>
            </div>

            {/* Content */}
            <div className="row py-5 border-top text-muted align-items-center">

                {/* Left Side */}
                <div className="col-md-6 text-center mb-4 mb-md-0">
                    <img
                        src="/Assets/nithinKamath.jpg"
                        alt="profile"
                        className="img-fluid rounded-circle"
                        style={{
                            width: "260px",
                            height: "260px",
                            objectFit: "cover"
                        }}
                    />
                    <h5 className="mt-4 text-dark fw-medium">Nithin Kamath</h5>
                    <p className="text-secondary mb-0">Founder, CEO</p>
                </div>

                {/* Right Side */}
                <div className="col-md-6">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome
                        the hurdles he faced during his decade long stint as a trader.
                        Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
                        and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>Playing basketball is his zen.</p>
                    <p>
                        Connect on{" "}
                        <a href="#" className="text-decoration-none">Homepage</a> /{" "}
                        <a href="#" className="text-decoration-none">TradingQnA</a> /{" "}
                        <a href="#" className="text-decoration-none">Twitter</a>
                    </p>
                </div>

            </div>

        </div>
    );
}

export default Team;