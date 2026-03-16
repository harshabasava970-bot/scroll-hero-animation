"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount1((c) => (c < 95 ? c + 1 : c));
      setCount2((c) => (c < 120 ? c + 1 : c));
      setCount3((c) => (c < 10000 ? c + 200 : c));
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">

      {/* TITLE */}
      <h1 className="hero-title text-5xl font-bold tracking-widest mb-6">
        <span>WELCOME</span>
        <span>ITS</span>
        <span>FIZZ</span>
      </h1>

      {/* DESCRIPTION */}
      <p className="max-w-2xl text-gray-300 mb-10">
        I design and develop modern digital experiences that combine creativity,
        interaction and performance. My goal is to build visually engaging
        interfaces that feel smooth, intuitive and immersive for users.
      </p>

      {/* STATS */}
      <div className="flex gap-12 text-center mb-16">

        <div>
          <h2 className="text-3xl font-bold">{count1}%</h2>
          <p className="text-gray-400">Client satisfaction</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">{count2}+</h2>
          <p className="text-gray-400">Projects delivered</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">{count3}</h2>
          <p className="text-gray-400">Active users</p>
        </div>

      </div>

      {/* CAR */}
      <img
        src="https://pngimg.com/uploads/range_rover/range_rover_PNG65.png"
        alt="car"
        className="w-[500px] animate-bounce"
      />

      <p className="mt-8 text-gray-400">Scroll Down ↓</p>

    </main>
  );
}