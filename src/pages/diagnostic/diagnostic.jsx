import './diagnostic.css';
import { useEffect } from 'react';
import Menu from '../../components/demo/menu/menu';
import { DiagnosticData } from './diagnosticdata';
import * as React from 'react';
import Questions from '../../components/diagnostic/questions';

export default function Diagnostic() {

    // fix scroll persistence issue when navigating with routes
    useEffect(() => {
        window.scrollTo(0, 0)
        console.log(DiagnosticData.Answers)
    }, [])

    return (
        <div className="Diagnostic">
            <div id='header'>
                Hi. Let's get started.
            </div>
            <div id='info'>
                  Welcome to the Diagnostic, you're going to answer some questions to assess your skills and interests.
                <Menu />
            </div>
            <div id='questions'>
                <Questions/>
            </div>
        </div>
    )
}


