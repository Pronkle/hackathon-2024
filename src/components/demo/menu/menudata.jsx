import React from 'react'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SchoolIcon from '@mui/icons-material/School';
import QuizIcon from '@mui/icons-material/Quiz';

export const Menudata = [
    {
        title: "",
        icon: <KeyboardReturnIcon></KeyboardReturnIcon>,
        link: "/"
    },
    {
        title: "",
        icon: <EventAvailableIcon></EventAvailableIcon>,
        link: "/schedule"
    },
    {
        title: "",
        icon: <SchoolIcon></SchoolIcon>,
        link: "/lesson"
    },
    {
        title: "",
        icon: <QuizIcon></QuizIcon>,
        link: "/diagnostic"
    }
]