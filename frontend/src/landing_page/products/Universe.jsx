import React from 'react';

function Universe() {
    return (
        <div className="container mt-5">
            <div className="text-center mb-5">
                <h1 className="fw-bold">The Zerodha Universe</h1>
                <p className="text-muted">
                    Extend your trading and investment experience even further with our partner platforms
                </p>
            </div>

            <div className="row text-center">
                <div className="col-md-4 mb-5">
                    <img src="/Assets/zerodhaFundhouse.png" alt="Zerodha Fundhouse"
                        className="img-fluid mb-3" style={{ maxHeight: "60px" }} />
                    <p className="small text-muted">
                        Our asset management venture creating simple and transparent index funds to help you save for your goals.
                    </p>
                </div>

                <div className="col-md-4 mb-5">
                    <img src="/Assets/sensibullLogo.svg" alt="Sensibull"
                        className="mb-3" style={{ width: "120px", height: "60px", objectFit: "contain" }} />
                    <p className="small text-muted">
                        Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
                    </p>
                </div>

                <div className="col-md-4 mb-5">
                    <img src="/Assets/tijori.svg" alt="Tijori"
                        className="img-fluid mb-3" style={{ maxHeight: "60px" }} />
                    <p className="small text-muted">
                        Investment research platform offering detailed insights on stocks, sectors, supply chains, and more.
                    </p>
                </div>

                <div className="col-md-4 mb-5">
                    <img src="/Assets/streakLogo.png" alt="Streak"
                        className="img-fluid mb-3" style={{ maxHeight: "60px" }} />
                    <p className="small text-muted">
                        Systematic trading platform that allows you to create and backtest strategies without coding.
                    </p>
                </div>

                <div className="col-md-4 mb-5">
                    <img src="/Assets/smallcaseLogo.png" alt="Smallcase"
                        className="img-fluid mb-3" style={{ maxHeight: "60px" }} />
                    <p className="small text-muted">
                        Thematic investing platform that helps you invest in diversified baskets of stocks or ETFs.
                    </p>
                </div>

                <div className="col-md-4 mb-5">
                    <img src="/Assets/ditto-logo.png" alt="Ditto"
                        className="img-fluid mb-3" style={{ maxHeight: "60px" }} />
                    <p className="small text-muted">
                        Personalized advice on life and health insurance. No spam and no mis-selling. Sign up for free.
                    </p>
                </div>

            </div>
            <div className="text-center mt-4">
                <button className="btn btn-primary px-4 py-2 fw-semibold">
                    Sign Up
                </button>
            </div>
        </div >
    );
}

export default Universe;
