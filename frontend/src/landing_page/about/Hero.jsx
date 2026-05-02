import React from 'react';

const paragraphStyle = {
    color: "#6c757d", // Bootstrap muted color
    fontFamily: "Inter, sans-serif",
    fontSize: "1.1rem",
    lineHeight: "1.8",
    marginBottom: "15px",
    fontWeight: "500"
};

function Hero() {
    return (
        <div className="container">
            {/* Heading */}
            <div className="row py-5 my-5">
                <h1
                    className="text-center"
                    style={{
                        color: "#424242",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "1.5rem",
                        fontWeight: "500"
                    }}
                >
                    We pioneered the discount broking model in India.<br />
                    Now, we are breaking ground with our technology.
                </h1>
            </div>

            {/* Content */}
            <div className="row py-5 border-top">

                {/* Left */}
                <div className="col-lg-6 col-12 px-4">
                    <p style={paragraphStyle}>
                        We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                    </p>

                    <p style={paragraphStyle}>
                        Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                    </p>

                    <p style={paragraphStyle}>
                        Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                    </p>
                </div>

                {/* Right */}
                <div className="col-lg-6 col-12 px-4">
                    <p style={paragraphStyle}>
                        In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                    </p>

                    <p style={paragraphStyle}>
                        <a href="#" style={{ textDecoration: "none", color: "#387ed1", fontWeight: "500" }}>
                            Rainmatter
                        </a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                    </p>

                    <p style={paragraphStyle}>
                        And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Hero;