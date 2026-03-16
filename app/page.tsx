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

  useEffect(() => {

    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Headline animation
    gsap.from(".letter", {
      opacity: 0,
      y: 60,
      stagger: 0.05,
      duration: 1,
      ease: "power3.out"
    })

    // Statistics animation
    gsap.from(".stat", {
      opacity: 0,
      y: 30,
      stagger: 0.3,
      delay: 1
    })

    // Car scroll animation
    gsap.to(carRef.current, {
      x: 850,
      y: -120,
      rotation: 10,
      scale: 1.2,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    })

    ScrollTrigger.refresh()

  }, [])

  const text = "WELCOME ITS FIZZ"

  return (

    <main className="h-[200vh] bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-x-hidden">

      <section
        ref={heroRef}
        className="h-screen flex flex-col items-center text-center pt-32 px-6">

        {/* HEADLINE */}
        <h1 className="text-6xl md:text-7xl font-bold tracking-[0.25em] mb-8 flex flex-wrap justify-center gap-4">

          {text.split(" ").map((word, i) => (
            <span key={i} className="flex gap-1">
              {word.split("").map((letter, j) => (
                <span key={j} className="letter">
                  {letter}
                </span>
              ))}
            </span>
          ))}

        </h1>

        {/* DESCRIPTION */}
        <p className="max-w-2xl text-gray-400 leading-relaxed mb-12">

          I design and develop modern digital experiences that combine
          creativity, interaction and performance. My goal is to build
          visually engaging interfaces that feel smooth, intuitive and
          immersive for users.

        </p>

        {/* STATISTICS */}
        <div className="flex gap-16 flex-wrap justify-center mb-16">

          <div className="stat text-center">
            <h2 className="text-4xl font-bold">
              <CountUp end={95} duration={3} suffix="%" />
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              Client satisfaction
            </p>
          </div>

          <div className="stat text-center">
            <h2 className="text-4xl font-bold">
              <CountUp end={120} duration={3} suffix="+" />
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              Projects delivered
            </p>
          </div>

          <div className="stat text-center">
            <h2 className="text-4xl font-bold">
              <CountUp end={10000} duration={3} />
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              Active users
            </p>
          </div>

        </div>

        {/* CAR */}
        <img
          ref={carRef}
          src="/car.png"
          className="w-[380px]"
        />

        {/* SCROLL TEXT */}
        <p className="mt-10 text-gray-500 animate-bounce">
          Scroll Down ↓
        </p>

      </section>

    </main>

  )
}