import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#fff" }}>
        <div class="container p-2">

            <Link class="navbar-brand" to="/">
                <img src="media/images/logo.svg" alt="Logo" style={{ width: "25%" }}/>
            </Link>

            <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                <form class="d-flex" role="search">

                    <ul class="navbar-nav mb-lg-0">

                        <li class="nav-item">
                            <Link class="nav-link active text-muted" to="/">
                            Home
                            </Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link active text-muted" to="/about">
                            About
                            </Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link active text-muted" to="/product">
                            Product
                            </Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link active text-muted" to="/pricing">
                            Pricing
                            </Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link active text-muted" to="/support">
                            Support
                            </Link>
                        </li>

                        <li class="nav-item">
                            <Link 
                            class="nav-link active text-muted" 
                            to="/dashboard"       
                            style={{
                                textDecoration: "none",
                                padding: "5px 10px",
                                border: "1px solid black",
                                borderRadius: "50px",
                                color: "black",
                                fontSize: "20px",
                                fontWeight: "500",
                            }}>
                            Dashboard
                            </Link>
                        </li>

                    </ul>

                </form>

            </div>

        </div>
    </nav>
  );
}

export default Navbar;





