import React, { useLayoutEffect, useState } from "react"
import { gsap } from 'gsap'
import { ScrollTrigger, CustomEase } from "gsap/all"

import "./style.css"



export default function Credit() {
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger)
            
        });
        return () => ctx.revert(); // <- cleanup!
      }, []);

    return (
        <div className="credit-section">
            <div className="people-holder">
                <div id="credit-item">
                    <h2>Alan Ji - Tech Lead</h2>
                    <img src=""/>
                </div>
                <div id="credit-item">
                    <h2>Allen Guo - Tech Co-Lead</h2>
                    <img src=""/>
                </div>
                <div id="credit-item">
                    <h2> Kennedy Jefferson : Ai trainer/ Lead Graphic designer</h2>
                    <img src=""/>
                </div>
                <div id="credit-item">
                    <h2>Catheryn Jeff - Marketing</h2>
                    <img src=""/>
                </div>
            </div>

        </div>
    )
}