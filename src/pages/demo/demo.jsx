import './demo.css';
import { useEffect } from 'react';
import Menu from '../../components/demo/menu/menu';

export default function Demo() {

    // fix scroll persistence issue when navigating with routes
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className = 'Demo'>
            <Menu/>
        </div>
    )
}



