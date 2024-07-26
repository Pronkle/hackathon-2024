import React, { useLayoutEffect, useState } from "react"
import { gsap } from 'gsap'
import { ScrollTrigger, CustomEase } from "gsap/all"

import "./style.css"



export default function Calender() {
    
    return (
        <div className="calender">
            <div className="calender-row">
                <div className="calender-column"></div>
                <div className="calender-column"></div>
                <div className="calender-column"></div>
                <div className="calender-column"></div>
                <div className="calender-column"></div>
            </div>
        </div>
    )
}
