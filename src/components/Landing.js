import React from 'react'
import { Link } from "react-router-dom";
import './../App.css';

export const Landing = () => {
    return (
        <div className="jumbotron jumbotron-fluid vertical-center">
            <div className="container">
            <h1 className="display-4 headerH1 text-white">YOUR FAVORITE SOURCE OF FREE BOOTSTRAP THEMES</h1>
            <hr className="divider my-4"/>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <Link className="btn btn-primary btn-brown btn-lg" to="/todosAnt" role="button">Get Started</Link>
            </div>
        </div>
        )
    }
