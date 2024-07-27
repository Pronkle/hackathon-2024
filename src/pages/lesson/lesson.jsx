import './lesson.css';
import { useEffect } from 'react';
import Menu from '../../components/demo/menu/menu';
import OpenAI from "openai";
import LessonComp from '../../components/lesson/lessoncomp';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Lesson() {

    const { state } = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
        if (state === null) {
          alert("Please Select a Lesson from your Schedule!")
          navigate("/schedule")
          return
        }
    }, [])

    return (
        <div>
            {
              (state !== null) ?
              <LessonComp subject={state!==null?state.subject : null }/> 
              :
              <></>
            }
            <Menu/>
        </div>
    )
}



