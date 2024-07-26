import './diagnostic.css';
import * as React from 'react';
import { useEffect } from "react"
import { Link } from 'react-router-dom';

export default function Start() {

    // fix scroll persistence issue when navigating with routes
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])

    return (
    <div className="welcome_box">
        <div className="row box">
            <p>Try your best on this diagnostic!</p>
            <p>Click to begin.</p>
            <Link to="/questions">
              <button className="Startbutton">Start the Quiz</button>
            </Link>
        </div>
    </div>
    )
}


