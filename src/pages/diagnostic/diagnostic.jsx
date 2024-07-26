import './diagnostic.css';
import { useEffect } from 'react';
import Menu from '../../components/demo/menu/menu';
import { DiagnosticData } from './diagnosticdata';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Diagnostic() {

    // fix scroll persistence issue when navigating with routes
    useEffect(() => {
        window.scrollTo(0, 0)
        console.log(DiagnosticData.Answers)
    }, [])

    const handleListItemClick = (event, link) => {
        // Only navigate if the click is on the list item and not on the radio button
        if (event.target.tagName !== 'INPUT') {
            window.location.pathname = link;
        }
    };

    return (
        <div className="Diagnostic">
            <div id='header'>
                Hi. Let's get started.
            </div>
            <div id='info'>
                Welcome to the Diagnostic, you're going to answer some questions to assess your skills and interests.
                <Menu />
            </div>
            <div id='questions'>
                <ul className="QuestionList">
                    {DiagnosticData.map((val, key) => {
                        return (
                            <li
                                key={key}
                                className="row"
                                onClick={(event) => handleListItemClick(event, val.link)}
                            >
                                <div id="title">{val.title}</div>
                                <div id="questions">{val.Question}</div>
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="op1"
                                        name="radio-buttons-group"
                                    >
                                        {val.Answers.map((ans) => {
                                            console.log(ans)
                                            return (<FormControlLabel value={ans} control={<Radio />} label={ans} key={ans}/>)
                                        })}
                                    </RadioGroup>
                                </FormControl>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}


