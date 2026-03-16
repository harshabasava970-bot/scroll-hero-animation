"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "@studio-freight/lenis"
import CountUp from "react-countup"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {

  const heroRef = useRef(null)
  const carRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {

    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // HEADLINE ANIMATION
    gsap.from(".letter", {
      opacity: 0,
      y: 80,
      rotateX: 90,
      stagger: 0.06,
      duration: 1.2,
      ease: "power3.out"
    })

    // STATISTICS ANIMATION
    gsap.from(".stat", {
      opacity: 0,
      y: 40,
      stagger: 0.3,
      delay: 1
    })

    // CAR SCROLL ANIMATION
    gsap.to(carRef.current, {
      x: 900,
      y: -120,
      rotation: 8,
      scale: 1.25,
      ease: "power1.out",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    })

    // PARALLAX BACKGROUND
    gsap.to(bgRef.current, {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    })

    ScrollTrigger.refresh()

  }, [])

  const text = "WELCOME ITZ FIZZ"
    .split("")
    .map((letter) => letter === " " ? "\u00A0" : letter)

  return (

    <main className="h-[200vh] bg-black text-white overflow-x-hidden">

      <section
        ref={heroRef}
        className="relative h-screen flex flex-col justify-start items-center pt-32 gap-10 px-6">

        {/* BACKGROUND */}
        <div
          ref={bgRef}
          className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"
        ></div>

        {/* HEADLINE */}
        <h1 className="relative text-5xl md:text-7xl tracking-[0.35em] flex flex-wrap justify-center text-center">

          {text.map((letter, i) => (
            <span key={i} className="letter">
              {letter}
            </span>
          ))}

        </h1>

        {/* DESCRIPTION */}
        <p className="relative text-gray-400 text-center max-w-2xl leading-relaxed">
          Welcome to my creative space. I focus on building modern digital
          experiences that combine design, interaction and performance.
          My goal is to create engaging user interfaces that feel smooth,
          intuitive and visually impactful.
        </p>

        {/* STATISTICS */}
        <div className="relative flex gap-16 flex-wrap justify-center mt-4">

          <div className="stat text-center max-w-[180px]">
            <h2 className="text-4xl font-bold">
              <CountUp end={95} duration={3}/>%
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              Client satisfaction across multiple projects
            </p>
          </div>

          <div className="stat text-center max-w-[180px]">
            <h2 className="text-4xl font-bold">
              <CountUp end={120} duration={3}/>+
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              Projects successfully delivered
            </p>
          </div>

          <div className="stat text-center max-w-[180px]">
            <h2 className="text-4xl font-bold">
              <CountUp end={10000} duration={3}/>
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              Users interacting with digital products
            </p>
          </div>

        </div>

        {/* CAR IMAGE */}
        <img
          ref={carRef}
          src="/car.png"
          className="relative w-[380px] mt-10"
        />

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-10 text-gray-400 animate-bounce">
          SCROLL ↓
        </div>

      </section>

    </main>
  )
}