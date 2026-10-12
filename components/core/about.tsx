"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full overflow-x-clip bg-[#FBF3E4]">
      <div className="mx-auto max-w-7xl px-4 pt-4 pb-10 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
        <h1 className="text-center font-spicy-rice text-4xl font-normal text-[#704b3c] sm:text-5xl lg:text-6xl">
          About
        </h1>

        {/* Gradient box */}
        <section className="mt-8 rounded-[25px] bg-[linear-gradient(to_bottom,#F4C7D0_0%,#FBF3E4_42%,#9FAA74_100%)] p-6 sm:p-8 lg:p-12">
          <h3 className="font-spicy-rice text-lg text-[#704b3c] sm:text-xl lg:text-3xl">
            How The Pose Club started
          </h3>

          <p className="mt-6 w-full font-trocchi text-base leading-8 text-[#704b3c] sm:text-lg">
            It began at a cafe photobooth. My sister-in-law went in to get a
            polaroid, but the camera showed no countdown and nothing seemed to
            be working. So she stepped out to find a waiter for help.
            <br />
            That’s exactly when it clicked.
            <br />
            Before she could sit down, it clicked again. By the last shot, her
            mouth was wide open, my brother was half in the frame, and my niece
            was poking her head in from the edge. It was chaotic, and it was the
            best and funniest photo strip we’d ever seen.
          </p>

          <h3 className="mt-8 font-spicy-rice text-lg text-[#704b3c] sm:text-xl lg:text-3xl">
            Why I made this
          </h3>

          <p className="mt-6 w-full font-trocchi text-base leading-8 text-[#704b3c] sm:text-lg">
            That strip made me realize the best photos aren’t the perfect ones.
            They’re the silly, unplanned ones.
            <br /> So I built The Pose Club: a cute, girly corner of the
            internet where you can take polaroids and photostrips with your
            friends, make a mess, and keep the memories.
          </p>

          <h3 className="mt-8 font-spicy-rice text-lg text-[#704b3c] sm:text-xl lg:text-3xl">
            The best part
          </h3>

          <p className="mt-6 w-full font-trocchi text-base leading-8 text-[#704b3c] sm:text-lg">
            No regrets, no spending money on a silly photo strip. Take as many
            as you like, for free.
          </p>
        </section>
      </div>
    </div>
  );
}
