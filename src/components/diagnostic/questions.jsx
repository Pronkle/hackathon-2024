import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { DiagnosticData } from '../../pages/diagnostic/diagnosticdata';

export default function Questions() {

    const stopPropagation = (event) => {
        event.stopPropagation();
    };

    return (
        <ul className="QuestionList">
            {DiagnosticData.map((val, key) => {
                return (
                    <li
                        key={key}
                        className="row"
                        onClick={(event) => {}}
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
                                    return (
                                        <FormControlLabel 
                                            value={ans} 
                                            control={<Radio />} 
                                            label={ans} 
                                            key={ans}
                                            onClick={stopPropagation} // Stop propagation on the label
                                        />
                                    )
                                })}
                            </RadioGroup>
                        </FormControl>
                    </li>
                );
            })}
        </ul>
    );
}