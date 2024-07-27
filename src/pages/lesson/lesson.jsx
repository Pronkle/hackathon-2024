import './lesson.css';
import { useEffect } from 'react';
import Menu from '../../components/demo/menu/menu';
import OpenAI from "openai";
import LessonComp from '../../components/lesson/lessoncomp';

export default function Lesson() {

    //const openai = new OpenAI({apiKey: API_KEY, dangerouslyAllowBrowser: true});


    // const handleSubmit = async (prompt) => {
        
    //   try {
    //     const result = await openai.chat.completions.create({
    //         messages: [{ role: "user", content: prompt }],
    //         model: "gpt-4o-mini",
    //       });

    //       return result.data.choices[0].message.content  
    //   } catch (e) {
    //     console.log(e);
    //     return "Something went wrong, try again..."
    //   }

    // };

    // fix scroll persistence issue when navigating with routes
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <LessonComp/>
            <Menu/>
        </div>
    )
}



