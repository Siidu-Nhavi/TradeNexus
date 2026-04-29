import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
            <div className="container">
                <a className="navbar-brand fw-semibold" href="#">
                    <i className="fa-solid fa-chart-line me-2" aria-hidden="true"></i>
                    TradeNexus
                </a>
            </div>
        </nav>
    );
}

export default Navbar;