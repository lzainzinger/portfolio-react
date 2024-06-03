"use client";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

export default function ParallaxScrollDemo() {
  return (
    <div className="h-[100vh]">
        <ParallaxScroll images={images} />
    </div>
  );
}

const images = [
  "/img/photography/1.jpg",
  "/img/photography/2.jpg",
  "/img/photography/3.jpg",
  "/img/photography/4.jpg",
  "/img/photography/5.jpg",
  "/img/photography/6.jpg",
  "/img/photography/7.jpg",
  "/img/photography/8.jpg",
  "/img/photography/9.jpg",
  "/img/photography/10.jpg",
  "/img/photography/11.jpg",
  "/img/photography/12.jpg",
  "/img/photography/13.jpg",
  "/img/photography/14.jpg",
  "/img/photography/15.jpg",
];
