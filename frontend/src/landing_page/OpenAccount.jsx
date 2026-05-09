import React from 'react';

function OpenAccount() {
    return (
        <div className="container py-5 mb-5">
            <div className="row text-center">
                <h1 className="mt-4 mb-3">Open a Zerodha account</h1>
                <p className="text-muted mb-4">
                    Modern platforms and apps, <b>₹</b>0 investments, and flat <b>₹</b>20 intraday and F&O trades.
                </p>
                {/* both the hero section button and this button looks like similar */}
                <button className="btn btn-primary fs-5 px-4 py-2 mx-auto d-block shadow-sm w-auto">
                    Signup Now
                </button>

            </div>
        </div>
    );
}

export default OpenAccount;
