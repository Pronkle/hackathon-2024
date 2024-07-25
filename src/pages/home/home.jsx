import './home.css';
import { useEffect } from 'react';

import Navbar from '../../components/home/navbar/navbar';


export default function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Navbar/>
            <div className="home-section">

            </div>
            Hi from Home
        </div>
    )
}



