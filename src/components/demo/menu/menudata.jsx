import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SchoolIcon from '@mui/icons-material/School';
import QuizIcon from '@mui/icons-material/Quiz';

export const Menudata = [
    {
        title: "Home",
        icon: <HomeRoundedIcon></HomeRoundedIcon>,
        link: "/"
    },
    {
        title: "MySchedule",
        icon: <EventAvailableIcon></EventAvailableIcon>,
        link: "/schedule"
    },
    {
        title: "Lessons",
        icon: <SchoolIcon></SchoolIcon>,
        link: "/lesson"
    },
    {
        title: "MyDiagnostic",
        icon: <QuizIcon></QuizIcon>,
        link: "/diagnostic"
    }
]