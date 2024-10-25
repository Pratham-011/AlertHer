import React from 'react';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <img 
                        src="../assets/logo.jpg" // Replace with the actual path to your logo image
                        width="30" 
                        height="30" 
                        alt="Logo" 
                        className="d-inline-block align-text-top me-2" // Add margin to the right of the image
                    />
                    <a className="navbar-brand" href="#">Alert Her</a>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> {/* Added ms-auto here */}
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Alert Panel</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a> {/* Changed to 'About' for variety */}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a> {/* Changed to 'Services' for variety */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;