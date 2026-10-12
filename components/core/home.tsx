"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const photos1 = [
  "/photo_A1.png",
  "/photo_A2.png",
  "/photo_A3.png",
  "/photo_A4.png",
];

const photos2 = [
  "/photo_B1.png",
  "/photo_B2.png",
  "/photo_B3.png",
  "/photo_B4.png",
];

function LeftPhotoStrip() {
  return (
    <div className="relative isolate">
      <div className="pointer-events-none absolute -left-10 top-5 z-0 h-40 w-40">
        <Image src="/pinkstar.svg" alt="" fill className="object-contain" />
      </div>
      <div className="pointer-events-none absolute -bottom-6 -right-9 z-0 h-40 w-40">
        <Image src="/pinkstar.svg" alt="" fill className="object-contain" />
      </div>
      <div
        className="relative z-10 w-[125px] rotate-[10deg] rounded-[3px]
          border border-[#e9d9bd] bg-[#fffaf0] p-1
          shadow-[0_6px_12px_rgba(73,54,40,0.14)]
          sm:w-[145px] lg:w-[160px]"
      >
        {photos1.map((photo, index) => (
          <div
            key={photo}
            className={`relative aspect-[4/3] w-full overflow-hidden
              border-b-4 border-[#fffaf0]
              ${index === photos1.length - 1 ? "border-b-0" : ""}`}
          >
            <Image
              src={photo}
              alt={`Photo booth pose ${index + 1}`}
              fill
              priority={index === 0}
              sizes="160px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function RightPhotoStrip() {
  return (
    <div aria-hidden="true" className="relative isolate">
      <div className="pointer-events-none absolute -right-10 -top-6 z-0 h-40 w-40">
        <Image src="/pinkstar.svg" alt="" fill className="object-contain" />
      </div>
      <div className="pointer-events-none absolute -bottom-7 -left-10 z-0 h-40 w-40">
        <Image src="/pinkstar.svg" alt="" fill className="object-contain" />
      </div>
      <div
        className="relative z-10 h-[320px] w-[120px] rotate-[-11deg]
          bg-[#fbf3e4]
          shadow-[0_6px_12px_rgba(73,54,40,0.12)]
          sm:h-[380px] sm:w-[135px]
          lg:h-[450px] lg:w-[150px]"
      >
        {photos2.map((photo, index) => (
          <div
            key={photo}
            className={`relative aspect-[4/3] w-full overflow-hidden
              border-b-4 border-[#fffaf0]
              ${index === photos2.length - 1 ? "border-b-0" : ""}`}
          >
            <Image
              src={photo}
              alt={`Photo booth pose ${index + 5}`}
              fill
              priority={index === 0}
              sizes="160px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LandingHero() {
  return (
    <main
      className="relative isolate mt-8 flex min-h-[68svh] items-center
    justify-center overflow-visible px-4 py-12
    sm:px-6 sm:py-14 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-9rem] z-0
  aspect-[1432/1050] w-[min(130vw,1200px)]
  -translate-x-1/2"
      >
        <Image
          src="/sagestar.png"
          alt=""
          fill
          sizes="(max-width: 768px) 130vw, 1200px"
          className="object-contain"
        />
      </div>

      {/* Left photo strip */}
      <div
        className="absolute left-[5%] top-1/2 hidden
        -translate-y-1/2 md:block lg:left-[7%]"
      >
        <LeftPhotoStrip />
      </div>

      {/* Right photo strip */}
      <div
        className="absolute right-[5%] top-1/2 hidden
        -translate-y-1/2 md:block lg:right-[7%]"
      >
        <RightPhotoStrip />
      </div>

      {/* Main content */}
      <section
        className="relative z-10 mx-auto w-full max-w-2xl
text-center text-[#704b3c] translate-y-14"
      >
        <h1
          className="font-spicy-rice text-3xl leading-tight
        sm:text-4xl lg:text-5xl"
        >
          The Pose Club is open!
        </h1>

        <p
          className="mx-auto mt-3 max-w-md font-trocchi
      text-base leading-relaxed sm:text-lg"
        >
          Little moments, forever memories.
        </p>
        <Button
          render={<Link href="/booth" />}
          className="mt-6 h-auto rounded-[18px] bg-[#bd4275]
            px-5 py-2.5 font-trocchi text-sm text-white
            shadow-[0_5px_10px_rgba(95,55,60,0.18)]
            transition-all duration-300
            hover:-translate-y-1 hover:bg-[#a93666]
            sm:text-base lg:text-lg"
        >
          Go to the booth!
        </Button>
      </section>
    </main>
  );
}
