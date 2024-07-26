import './lesson.css';
import { useEffect } from 'react';
import Menu from '../../components/demo/menu/menu';
import OpenAI from "openai";


const API_KEY = process.env.API_KEY


export default function Lesson() {

    console.log(API_KEY)
    const openai = new OpenAI({apiKey: API_KEY});


    const handleSubmit = async (prompt) => {
        
      try {
        const result = await openai.chat.completions.create({
            messages: [{ role: "user", content: prompt }],
            model: "gpt-4o-mini",
          });
        

          return result.data.choices[0].message.content  
      } catch (e) {
        console.log(e);
        return "Something went wrong, try again..."
      }

    };

    // fix scroll persistence issue when navigating with routes
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            Hi from Lesson
            <Menu/>
        </div>
    )
}



