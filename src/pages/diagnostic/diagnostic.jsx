import './diagnostic.css';
import { useEffect } from 'react';
import Menu from '../../components/demo/menu/menu';
import { DiagnosticData } from './diagnosticdata';
import * as React from 'react';
import Questions from '../../components/diagnostic/questions';
import Start from './start';

export default function Diagnostic() {

    // fix scroll persistence issue when navigating with routes
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="Diagnostic">
            <div className='Start_Header'>
            </div>
            <div id='test'>
                    <Start/>
                    <Menu/>
            </div>
        </div>
    )
}


