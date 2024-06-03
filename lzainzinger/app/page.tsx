"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menue";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { SparklesCore } from "@/components/ui/sparkles";
import Link from 'next/link'
import { cn } from "@/utils/cn";

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

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/photography">Photos</Link>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="All"
              href="/projects"
              src="/img/main_bg.jpg"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Pig Out"
              href="/projects"
              src="/img/projects/pig-out.png"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Whatsoever"
              href="/projects"
              src="/img/projects/whatsoever_placeholder.jpg"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="White Rose Records"
              href="/projects"
              src="/img/projects/wrr_Logo.jpg"
              description="Prepare for tech interviews like never before."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://www.linkedin.com/in/lzai/">LinkedIn</HoveredLink>
            <HoveredLink href="mailto:lukas@lzainzinger.com">E-Mail</HoveredLink>
            <HoveredLink href="/resume">Resume</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

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
    <Navbar />
    <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold font-sans hover:font-mono text-center text-white relative z-20">
      Lukas Zainzinger
    </h1>
    <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
      <TypewriterEffectSmooth words={words} />
    </h1>
  </div>
      
  );
}
