import React from 'react';

function CreateTicket() {
    return (
        <div className="container my-5">
            {/* Heading */}
            <div className="row mb-5">
                <div className="col">
                    <h1 className="fs-2 text-center">
                        To create a ticket, select a relevant topic
                    </h1>
                </div>
            </div>

            {/* Six Topics */}
            <div className="row text-start">
                {/* 1. Account Opening */}
                <div className="col-12 col-md-4 p-4 mb-4">
                    <h4 className="fs-5 fw-semibold mb-3 ">
                        <i className="fa fa-user-plus support-icon"></i> Account Opening
                    </h4>
                    <a href="#" className="d-block mb-2 text-decoration-none">Online Account Opening</a>
                    <a href="#" className="d-block mb-2 text-decoration-none">Offline Account Opening</a>
                    <a href="#" className="d-block mb-2 text-decoration-none">Company, Partnership & HUF Account Opening</a>
                    <a href="#" className="d-block mb-2 text-decoration-none">NRI Account Opening</a>
                    <a href="#" className="d-block mb-2 text-decoration-none">Charges at Zerodha</a>
                    <a href="#" className="d-block mb-2 text-decoration-none">Zerodha IDFC FIRST Bank 3-in-1 Account</a>
                    <a href="#" className="d-block mb-2 text-decoration-none">Getting Started</a>
                </div>

                {/* 2. Your Zerodha Account */}
                <div className="col-12 col-md-4 p-4 mb-4">
                    <h4 className="fs-5 fw-semibold mb-3 ">
                        <i className="fa fa-id-card support-icon"></i> Your Zerodha Account
                    </h4>
                    <a href="#" className="d-block mb-2 text-decoration-none">Login Issues</a>
                    <a href="#" className="d-block mb-2 text-decoration-none">Profile Updates</a>
                    <a href="#" className="d-block mb-2 text-decoration-none">Account Closure</a>
                    <a href="#" className="d-block mb-2 text-decoration-none">Nominee Addition</a>
                </div>

                {/* 3. Funds */}
                <div className="col-12 col-md-4 p-4 mb-4">
                    <h4 className="fs-5 fw-semibold mb-3 ">
                        <i className="fa fa-university support-icon"></i> Funds
                    </h4>
                    <a href="#" className="d-block mb-2 text-decoration-none">Adding Funds</a>
                    <a href="#" className="d-block mb-2 text-decoration-none">Withdrawals</a>
                    <a href="#" className="d-block mb-2 text-decoration-none">UPI/Netbanking Issues</a>
                    <a href="#" className="d-block mb-2 text-decoration-none">Fund Settlement Timelines</a>
                </div>

                {/* 4. Trading & Kite */}
                <div className="col-12 col-md-4 p-4 mb-4">
                    <h4 className="fs-5 fw-semibold mb-3 ">
                        <i className="fa fa-line-chart support-icon"></i> Trading & Kite
                    </h4>
                    <a href="#" className="d-block mb-2 text-decoration-none">Kite Login</a>
                    <a href="#" className="d-block mb-2 text-decoration-none">Order Placement</a>
                    <a href="#" className="d-block mb-2 text-decoration-none">Charting Tools</a>
                    <a href="#" className="d-block mb-2 text-decoration-none">Mobile App Issues</a>
                </div>

                {/* 5. Brokerage & Charges */}
                <div className="col-12 col-md-4 p-4 mb-4">
                    <h4 className="fs-5 fw-semibold mb-3 ">
                        <i class="fa-solid fa-money-bill-1 me-1"></i>
                        Brokerage & Charges
                    </h4>
                    <a href="#" className="d-block mb-2 text-decoration-none">Equity Delivery</a>
                    <a href="#" className="d-block mb-2 text-decoration-none">Intraday & F&O</a>
                    <a href="#" className="d-block mb-2 text-decoration-none">Commodity Charges</a>
                    <a href="#" className="d-block mb-2 text-decoration-none">AMC & Other Fees</a>
                </div>

                {/* 6. Other Services */}
                <div className="col-12 col-md-4 p-4 mb-4">
                    <h4 className="fs-5 fw-semibold mb-3 ">
                        <i className="fa fa-cogs me-1"></i> Other Services
                    </h4>
                    <a href="#" className="d-block mb-2 text-decoration-none">Smallcase</a>
                    <a href="#" className="d-block mb-2 text-decoration-none">Tickertape</a>
                    <a href="#" className="d-block mb-2 text-decoration-none">Kite Connect API</a>
                    <a href="#" className="d-block mb-2 text-decoration-none">Partner Platforms</a>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;
