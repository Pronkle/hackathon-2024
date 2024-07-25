import React, { useLayoutEffect, useState } from "react"
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/all"

import "./style.css"



export default function ScrollTransition() {


    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger)
        
            gsap.to('#first', {
                scrollTrigger: {
                    trigger: '#first',
                    start: "top top",
                    end: "+=500",
                    scrub: true,
                    pin: true,
                    pinSpacing: false,
                    markers: true
                },
                scale: 0.9,
                opacity: 0,
                ease: "none",
                duration: 3
            })

            gsap.to('.map-holder', {
                scrollTrigger: {
                    trigger: '.map-holder',
                    start: "top top",
                    end: "+=2000",
                    scrub: true,
                    pin: true,
                    pinSpacing: false,
                    markers: true
                },
                ease: "none",
                duration: 3
            })

            gsap.from('#pin1', {
                scrollTrigger: {
                    trigger: '.map-holder',
                    start: "top top",
                    toggleActions: "restart",
                    markers: true
                },
                transform: "translate(0, -50px)",
                opacity: 0,
                duration: 0.2,
                ease: "none",
            }, )

            gsap.from('#pin2', {
                scrollTrigger: {
                    trigger: '.map-holder',
                    start: "top top",
                    toggleActions: "restart",
                    markers: true
                },
                transform: "translate(0, -50px)",
                opacity: 0,
                duration: 0.5,
                ease: "none",
            }, )

            gsap.from('#pin3', {
                scrollTrigger: {
                    trigger: '.map-holder',
                    start: "top top",
                    toggleActions: "restart",
                    markers: true
                },
                transform: "translate(0, -50px)",
                opacity: 0,
                duration: 0.8,
                ease: "none",
            }, )
        });
        return () => ctx.revert(); // <- cleanup!
      }, []);


    return (
        <div className="scroll-transition-section">
            <img id='first' src="/Memphis.jpg"/>
            <div className="map-holder">
                <img id='pin1' src="/map_pin.png"/>
                <img id='pin2' src="/map_pin.png"/>
                <img id='pin3' src="/map_pin.png"/>
                <img id='second' src="/mapdemo.png"/>
            </div>
        </div>
    )

}
