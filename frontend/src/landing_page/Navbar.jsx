import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom bg-white sticky-top">
            <div className="container-fluid">
                {/* Logo */}
                <a className="navbar-brand" href="#">
                    <img src="/Assets/logo.svg" alt="Logo" style={{ width: "120px" }} />
                </a>

                {/* Toggler for mobile */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Nav links */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link fw-semibold text-primary" href="#">Signup</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold text-primary" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold text-primary" href="#">Product</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold text-primary" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold text-primary" href="#">Support</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
