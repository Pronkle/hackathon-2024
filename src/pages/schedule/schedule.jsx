import './schedule.css';
import { useEffect } from 'react';
import Menu from '../../components/demo/menu/menu';

export default function Schedule() {

    // fix scroll persistence issue when navigating with routes
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='schedule'>
            <Menu/>
            <div className="schedule-controls">
                <h1 id="schedule-title"></h1>
                <button id="generate"></button>
            </div>

            <div className="calender">
                <div id="day1">
                    <button className='regenerate'></button>
                </div>
                <div id="day2">
                    <button className='regenerate'></button>
                </div>
                <div id="day3">
                    <button className='regenerate'></button>
                </div>
                <div id="day4">
                    <button className='regenerate'></button>
                </div>
                <div id="day5">
                    <button className='regenerate'></button>
                </div>
            </div>
        </div>
    )
}



