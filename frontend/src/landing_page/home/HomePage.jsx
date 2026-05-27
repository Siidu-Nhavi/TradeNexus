import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';

function HomePage() {
    const [flashMessage, setFlashMessage] = useState('');
    const location = useLocation();

    useEffect(() => {
        const storedMessage = sessionStorage.getItem('authFlash');
        if (storedMessage) {
            setFlashMessage(storedMessage);
            sessionStorage.removeItem('authFlash');
            window.scrollTo(0, 100);
        }
    }, [location]);

    return ( 
        <>
            {flashMessage && (
                <div className="container pt-3" id="flash-banner-container">
                    <div className="auth-flash-banner" role="alert" aria-live="polite" aria-atomic="true">
                        <span className="auth-flash-text">{flashMessage}</span>
                        <button
                            type="button"
                            className="auth-flash-close"
                            aria-label="Dismiss message"
                            onClick={() => setFlashMessage('')}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />


        </>
     );
}

export default HomePage;