import React, { useLayoutEffect, useState } from "react"
import { gsap } from 'gsap'
import { ScrollTrigger, CustomEase } from "gsap/all"

import "./style.css"



export default function ScrollTransition() {


    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger)

            const groundTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '.bg1',
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                    pin: ".ground",
                    pinSpacing: false,
                    snap: {
                        snapTo: 'labels', // snap to the closest label in the timeline
                        duration: { min: 1, max: 1 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                        ease: "elastic.out" // the ease of the snap animation ("power3" by default)
                    }
                }
            })
        
            groundTimeline.addLabel('summer-fall')
                .fromTo('.ground', { transform: "translate(0, 0)" }, { transform: "translate(-100vw, 0)" })
                .addLabel('fall-winter')
                .fromTo('.ground', { transform: "translate(-100vw, 0)" }, { transform: "translate(-200vw, 0)" })
                .addLabel('winter-spring')
                .fromTo('.ground', { transform: "translate(-200vw, 0)" }, { transform: "translate(-300vw, 0)" })
                

            gsap.to('#first', {
                scrollTrigger: {
                    trigger: '.bg1',
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                    pin: "#first",
                    pinSpacing: false,
                },
                scale: 1,
                transform: "translate(-70px, 55px)",
                ease: "none",
            })

            gsap.from('#view-window', {
                scrollTrigger: {
                    trigger: '.animation2',
                    start: "top top",
                    end: "+=1900",
                    scrub: 2,
                    pin: '#view-window',
                    pinSpacing: false,
                },
                scaleY: 0,
                ease: "none",
            })

            gsap.to('#second', {
                scrollTrigger: {
                    trigger: '.bg2',
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                    // pin: '#second',
                    pinSpacing: false,
                },
                transform: "translate(0, -150vh)",
                ease: "none",
            })

        });
        return () => ctx.revert(); // <- cleanup!
      }, []);


    return (
        <div className="scroll-transition-section">
            <div className="bg1">

                <div className="animation1">
                    <img id='first' src="/braintree.png"/>
                    <div className="ground">
                        <div id='summer'></div>
                        <div id='fall'></div>
                        <div id='winter'></div>
                        <div id='spring'></div>
                    </div>
                </div>
            </div>
            
            <div className="bg2">
            <div className="animation2">
                <div id="view-window">
                    <div id="second"></div>
                </div>
            </div>
            </div>

        </div>
    )

}