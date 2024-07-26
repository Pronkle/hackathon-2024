import './lesson.css';
import { useEffect } from 'react';
import Menu from '../../components/demo/menu/menu';
import { Configuration, OpenAIApi } from "openai"

const API_KEY = process.env.REACT_APP_API_KEY

export default function Lesson() {

    let configuration = new Configuration({ apiKey: API_KEY,});

    // Delete it
    delete configuration.baseOptions.headers['User-Agent'];

    const openai = new OpenAIApi(configuration);

    const handleSubmit = async (prompt) => {
        
      try {
        //console.log("Prompt: " + prompt)
        const result = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
        //   model: "text-davinci-003",
          messages: [{ role: "user", content: prompt }],
        //   prompt: prompt,
        //   temperature: 0.3,
        //   max_tokens: 500,
        });
        //console.log("response", result.data.choices[0].text);
        // setApiResponse(result.data.choices[0].text);
        //console.log("result: "+ result.data.choices[0].message.content)
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



