import React, { useLayoutEffect, useState } from "react"
import { gsap } from 'gsap'
import { ScrollTrigger, CustomEase } from "gsap/all"

import "./style.css"



export default function About() {
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger)

            gsap.from("#about-title", {
                scrollTrigger: {
                    trigger: '.about-section',
                    start: "top top",
                    end: "+=300",
                    scrub: true,
                },
                opacity: 0,
                transform: "translate(0, -200px)",
            })

            gsap.from("#about-description", {
                scrollTrigger: {
                    trigger: '.about-section',
                    start: "top top",
                    end: "+=500",
                    scrub: true,
                },
                opacity: 0,
                transform: "translate(0, 200px)",
            })
            
            gsap.from('.about-info', {
                scrollTrigger: {
                    trigger: '.about-section',
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                    pin: '.about-info',
                },
            })

            gsap.to('.about-section', {
                scrollTrigger: {
                    trigger: '.about-section',
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                },
                backgroundColor: "rgb(210, 207, 239)"
            })

        });
        return () => ctx.revert(); // <- cleanup!
      }, []);

    return (
        <div className="about-section">
            <div className="about-info">
                <h1 id="about-title">Empower Minds. Education for All.</h1>
                <div id="about-description">Flex Ed is an app with an interactive AI that is designed to be highly adaptable to a child's individual needs. The AI takes the local area or specific school that the child is being prepared for, takes the education plan from that area or school, then tutors your child in those areas. This help bridge education gaps from child to child and elevate your child to be a more active learner. The AI can take on any role, from a helper to raise your child's grades, to a tutor to teach your child subjects that they are lacking in.</div>
            </div>
        </div>
    )
}