import './schedule.css';
import { useEffect } from 'react';
import Menu from '../../components/demo/menu/menu';
import Calender from '../../components/schedule/calender/calender';
import { useLocation } from 'react-router-dom';

export default function Schedule() {

    const {state} = useLocation()
    console.log(state)

    // fix scroll persistence issue when navigating with routes
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='schedule'>
            <Menu/>

            <Calender level={state!==null ? state.answer : null}/>
        </div>
    )
}



