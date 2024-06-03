import React from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { SparklesCore } from "@/components/ui/sparkles";

const words = [
  {
    text: "DevOps,",
    className: "text-teal-500 dark:text-teal-500"
  },
  {
    text: "Student,",
    className: "text-cyan-500 dark:text-cyan-500"
  },
  {
    text: "Photographer,",
    className: "text-emerald-500 dark:text-emerald-500"
  },
  {
    text: "Cat Dad.",
    className: "text-blue-500 dark:text-blue-500",
  },
];

export default function BackgroundGradientAnimationDemo() {
  return (
    <div className="h-[100vh] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
    <div className="w-full absolute inset-0 h-screen">
      <SparklesCore
        id="tsparticlesfullpage"
        background="#475569"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full"
        particleColor="#99f6e4"
      />
    </div>
    <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold font-sans hover:font-mono text-center text-white relative z-20">
      Lukas Zainzinger
    </h1>
    <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
      <TypewriterEffectSmooth words={words} />
    </h1>
  </div>
      
  );
}
