import './lesson.css';
import { useEffect } from 'react';

export default function Lesson() {

    // fix scroll persistence issue when navigating with routes
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            Hi from Lesson
        </div>
    )
}



