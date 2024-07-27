import React, { useLayoutEffect, useState } from "react"
import { gsap } from 'gsap'
import { ScrollTrigger, CustomEase } from "gsap/all"

import "./style.css"



export default function About() {
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger)
            
            gsap.from('.about-info', {
                scrollTrigger: {
                    trigger: '.about-section',
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                    pin: '.about-info',
                },
            })

        });
        return () => ctx.revert(); // <- cleanup!
      }, []);

    return (
        <div className="about-section">
            <div className="about-info">
                <h1 id="about-title">Our Promise</h1>
                <div id="about-description">We aim to provide quality education, free for all, in order to not have another crowdstrike outage lol.</div>
            </div>
        </div>
    )
}