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
                },
                ease: "none",
                duration: 3
            })

            gsap.to('#pin1', {
                scrollTrigger: {
                    trigger: '.map-holder',
                    start: "top top",
                    end: "+=100px",
                    toggleActions: "restart",
                    scrub: true
                },
                transform: "translate(0, 0px)",
                opacity: 1,
                ease: "none",
            }, )

            gsap.to('#pin2', {
                scrollTrigger: {
                    trigger: '.map-holder',
                    start: "top top",
                    end: "+=500px",
                    toggleActions: "restart",
                    scrub: true
                },
                transform: "translate(0, 0px)",
                opacity: 1,
                ease: "none",
            }, )

            gsap.to('#pin3', {
                scrollTrigger: {
                    trigger: '.map-holder',
                    start: "top top",
                    end: "+=900px",
                    toggleActions: "restart",
                    scrub: true
                },
                transform: "translate(0, 0px)",
                opacity: 1,
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
                <div className="list-animation">
                    <div id='item1'>King's Palace Cafe</div>
                    <div id='item2'>Blue's Hall</div>
                    <div id='item3'>Rum Boogie Cafe</div>
                </div>
            </div>
        </div>
    )

}
