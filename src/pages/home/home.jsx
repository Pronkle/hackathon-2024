import './home.css';
import { useEffect } from 'react';

import Navbar from '../../components/home/navbar/navbar';
import ScrollTransition from '../../components/home/scroll_transition/scrollTrans';
import About from '../../components/home/about/about';
import Credit from '../../components/home/credits/credits';

import Menu from '../../components/demo/menu/menu';

export default function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Navbar/>
            <div className="home-section">
                <ScrollTransition/>
                <About/>
                <Credit/>
            </div>
        </div>
    )
}



