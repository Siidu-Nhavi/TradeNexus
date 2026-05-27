import React from 'react';
import './css/Hero.css';
import { Link } from 'react-router-dom';


function Hero() {
    return (
        <header className="container py-5 text-center">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <img
                        src="/Assets/homeHero.png"
                        alt="Hero Image"
                        className="img-fluid mb-5"
                    />

                    <h1 className="fw-semibold mb-3">
                        Invest in everything
                    </h1>

                    <p className="text-muted mb-4 fs-5">
                        Online platform to invest in stocks, derivatives, mutual funds, and more
                    </p>

                    <Link to="/signup" className="btn btn-primary fs-5 px-4 py-2">
                        Sign Up
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Hero;
