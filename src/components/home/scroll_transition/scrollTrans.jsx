import React, { useLayoutEffect, useState } from "react"
import { gsap } from 'gsap'
import { ScrollTrigger, CustomEase } from "gsap/all"

import "./style.css"



export default function ScrollTransition() {


    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger)

            gsap.from("#title1", {
                transform: "translate(0, -100px)"
            })

            gsap.to(".title-container", {
                scrollTrigger: {
                    trigger: '.bg1',
                    start: "top top",
                    end: "+=1000",
                    scrub: true,
                    pin: ".title-container",
                },
                opacity: 0,
                transform: "translate(500px, 0)"
            })

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

            gsap.from('#info1', {
                scrollTrigger: {
                    trigger: '#info1',
                    start: "top center",
                    end: "+=500",
                    scrub: true,
                    pin: '#info1',
                },
                opacity: 0,
                transform: "translate(0, 100px)",
            })
            gsap.from('#info2', {
                scrollTrigger: {
                    trigger: '#info2',
                    start: "top center",
                    end: "+=500",
                    scrub: true,
                    pin: '#info2',
                },
                opacity: 0,
                transform: "translate(0, 100px)",
            })
            gsap.from('#info3', {
                scrollTrigger: {
                    trigger: '#info3',
                    start: "top center",
                    end: "+=500",
                    scrub: true,
                    pin: '#info3',
                },
                opacity: 0,
                transform: "translate(0, 100px)",
            })

        });
        return () => ctx.revert(); // <- cleanup!
      }, []);


    return (
        <div className="scroll-transition-section">
            <div className="title-container">
                <img id="title1" src="/flexed_logo.png"/>
                {/* <h1 id="title1">Flex</h1>
                <h1 id="title2">•</h1>
                <h1 id="title3">Ed</h1> */}
            </div>

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
                <div className="info-slides">
                    <div id="info1">asdf</div>
                    <div id="info2">asdf</div>
                    <div id="info3">asdf</div>
                </div>
            </div>
            </div>

        </div>
    )

}
