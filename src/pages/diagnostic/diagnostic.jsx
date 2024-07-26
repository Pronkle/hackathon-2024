import './diagnostic.css';
import { useEffect } from 'react';
import Menu from '../../components/demo/menu/menu';

export default function Diagnostic() {

    // fix scroll persistence issue when navigating with routes
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            Hi from Diagnostic
            <Menu/>
        </div>
    )
}



