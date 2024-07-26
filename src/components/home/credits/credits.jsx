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
                    <h2>Allen Gue - Assistant Tech Lead</h2>
                    <img src=""/>
                </div>
                <div id="credit-item">
                    <h2>Kennedy Jefferson - Art/Design</h2>
                    <img src=""/>
                </div>
                <div id="credit-item">
                    <h2>Catherine Jeff - Marketing</h2>
                    <img src=""/>
                </div>
            </div>

            {/* <div className="footer">
                <div
            </div> */}

        </div>
    )
}