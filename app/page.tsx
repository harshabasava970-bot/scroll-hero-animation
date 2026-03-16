"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [users, setUsers] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {

      setClients(c => c < 95 ? c + 1 : 95);
      setProjects(p => p < 120 ? p + 2 : 120);
      setUsers(u => u < 10000 ? u + 200 : 10000);

    }, 40);

    return () => clearInterval(timer);

  }, []);

  return (

    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">

      {/* HERO TITLE */}

      <h1 className="hero-title text-6xl font-bold tracking-widest mb-8">

        <span>WELCOME</span>
        <span>ITS</span>
        <span>FIZZ</span>

      </h1>

      {/* DESCRIPTION */}

      <p className="max-w-2xl text-gray-300 mb-12 leading-relaxed">

        I design and develop modern digital experiences that combine creativity,
        interaction and performance. My goal is to build visually engaging
        interfaces that feel smooth, intuitive and immersive for users.

      </p>

      {/* STATISTICS */}

      <div className="flex gap-16 mb-16">

        <div className="stat-box">
          <h2 className="text-4xl font-bold">{clients}%</h2>
          <p className="text-gray-400">Client satisfaction</p>
        </div>

        <div className="stat-box">
          <h2 className="text-4xl font-bold">{projects}+</h2>
          <p className="text-gray-400">Projects delivered</p>
        </div>

        <div className="stat-box">
          <h2 className="text-4xl font-bold">{users}</h2>
          <p className="text-gray-400">Active users</p>
        </div>

      </div>

      {/* CAR IMAGE */}

      <img
        src="https://pngimg.com/uploads/range_rover/range_rover_PNG65.png"
        className="w-[450px] animate-bounce"
      />

      <p className="mt-8 text-gray-400">Scroll Down ↓</p>

    </main>

  );
}