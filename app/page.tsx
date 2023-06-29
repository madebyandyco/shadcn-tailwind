'use client';

import * as React from 'react';
import { useRef, useEffect } from 'react';

// next.js
import Image from 'next/image';
import Link from 'next/link';

// shadcn/ui
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

//gsap
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default function ModeToggle() {
  const { setTheme } = useTheme();

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;
  let scrollDirection = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 6, //amount of inertia { 0: none, 1: some, 10: excessive }
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (scrollDirection = e.direction * -1),
      },
      x: '-500px',
    });
    //auto scroll text
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    //scroll text on mouse scroll
    requestAnimationFrame(animate);
    xPercent += 0.1 * scrollDirection;
  };

  return (
    <main className="">
      <div className="relative mb-[100vh] flex h-screen overflow-hidden">
        <header className="fixed z-50 flex h-14 w-full items-center justify-end border-b border-black/20 bg-white/30 font-mono drop-shadow-xl backdrop-blur-xl dark:bg-zinc-500/20">
          <div className="container flex h-14 items-center">
            <div className="mr-5 uppercase">Next.JS, GSAP, shadcn/UI & Tailwind demo</div>
            <div className="flex flex-1 items-center justify-end space-x-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        <div
          className="top-0  h-auto w-full overflow-hidden before:absolute before:top-0 before:z-[1] before:h-full before:w-full before:bg-gradient-to-t
          before:from-black/50 before:from-20% before:to-black/20 before:to-90% before:transition-all
          dark:before:from-black/70 dark:before:to-black/30 "
        >
          <Image src="/greenery.jpg" fill={true} alt="background" className="object-cover" quality={30} priority />
        </div>

        <div className="absolute top-[calc(100vh-300px)] z-[2]">
          <div ref={slider} className="relative whitespace-nowrap">
            <p ref={firstText} className="relative font-inter text-[10rem] text-zinc-100 dark:text-[#e4ff02]">
              GSAP, shadcn & Tailwind, oh my!&nbsp;&nbsp;
            </p>
            <p ref={secondText} className="absolute left-full top-0 font-inter text-[10rem] text-zinc-100 dark:text-[#e4ff02]">
              GSAP, shadcn & Tailwind, oh my!&nbsp;&nbsp;
            </p>
          </div>
        </div>
      </div>

      <footer className="container relative bottom-0 w-full py-10">
        <p className="relative flex w-full items-center font-mono text-black dark:text-white">
          Demo:&nbsp;
          <Link href={'https://madebyandy.co'} className="group  relative ease-out">
            Made by Andy
            <span className="absolute top-1/2 block h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full dark:bg-white"></span>
          </Link>
        </p>
        <p className="relative flex w-full items-center font-mono text-black dark:text-white">
          Photography:&nbsp;
          <Link href={'https://unsplash.com/@chrisleeiam'} className="group  relative ease-out">
            Chris Lee
            <span className="absolute top-1/2 block h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full dark:bg-white"></span>
          </Link>
        </p>
      </footer>
    </main>
  );
}
