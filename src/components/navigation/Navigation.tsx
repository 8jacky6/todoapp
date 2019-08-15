import React from "react";
import "./Navigation.css";
import { Nav as NavBootstrap, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export const Navigation = () => {
    return (
        <Navbar variant="dark" expand="xl" sticky="top" className="navigation">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <NavBootstrap className="mr-auto">
                    <Link to="/" className="nav-link">
                        <img
                            className="home-icon"
                            src="https://png.pngtree.com/svg/20161111/92b7fe1e9e.svg"
                            alt="Home"
                        />
                    </Link>
                    <Link to="/list" className="nav-link">
                        <p>List</p>
                    </Link>
                    <Link to="/about" className="nav-link">
                        <p>About</p>
                    </Link>
                </NavBootstrap>
            </Navbar.Collapse>
        </Navbar>
    );
};
