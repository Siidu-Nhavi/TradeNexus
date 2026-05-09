import React from 'react';
import { Link } from 'react-router-dom';
export default function PageNotFound() {
    return (
        <div className="container py-5 mb-5">
            <div className="row text-center">
                <h1 className="mt-4 mb-3">404 Page Not Found</h1>
                <p className="text-muted mb-4">
                   Sorry, the page you are looking for does not exist.
                </p>
                {/* both the hero section button and this button looks like similar */}
                <Link className="btn btn-primary fs-5 px-4 py-2 mx-auto d-block shadow-sm w-auto" to="/">
                    Go to Home
                </Link>

            </div>
        </div>
    );
}

