import './schedule.css';
import { useEffect } from 'react';
import Menu from '../../components/demo/menu/menu';
import Calender from '../../components/schedule/calender/calender';

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

            <Calender/>
        </div>
    )
}



