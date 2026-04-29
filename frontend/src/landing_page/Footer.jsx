import React from 'react';

function Footer() {
    return (
        <footer className="bg-light border-top py-3 mt-4">
            <div className="container d-flex justify-content-between align-items-center">
                <small className="text-muted mb-0">Copyright {new Date().getFullYear()} TradeNexus</small>
                <div className="d-flex gap-3">
                    <i className="fa-brands fa-linkedin" aria-label="LinkedIn"></i>
                    <i className="fa-brands fa-x-twitter" aria-label="X"></i>
                    <i className="fa-brands fa-github" aria-label="GitHub"></i>
                </div>
            </div>
        </footer>
    );
}

export default Footer;