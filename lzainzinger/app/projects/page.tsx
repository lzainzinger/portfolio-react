"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function Projects() {
  return <HeroParallax products={products} />;
}
const products = [
  {
    title: "Portfolio",
    link: "https://lzainzinger.com",
    thumbnail:
      "/img/main_bg.jpg",
  },
  {
    title: "Pig Out",
    link: "https://www.pig-out.app/",
    thumbnail:
      "/img/projects/pig-out.png",
  },
  {
    title: "Musify",
    link: "https://musify.at",
    thumbnail:
      "/img/projects/musify_logo.jpeg",
  },
  {
    title: "Pet 2 Go",
    link: "https://lzainzinger.com",
    thumbnail:
      "/img/projects/pet2go.jpg",
  },
  {
    title: "Jarvis",
    link: "https://lzainzinger.com",
    thumbnail:
      "/img/projects/jarvis.jpg",
  },
  {
    title: "Whatsoever",
    link: "https://whatsoever.at",
    thumbnail:
      "/img/projects/whatsoever_placeholder.jpg",
  },
  {
    title: "White Rose Records",
    link: "https://whiteroserecords.com",
    thumbnail:
    "/img/projects/wrr_Logo.jpg",
  },
];
