import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="relative z-10 px-3 pt-2 sm:px-5 lg:px-6">
      <nav
        aria-label="Main navigation"
        className="flex h-10 items-center justify-between
          gap-3 rounded-xl bg-[#f3c4ce]
          px-3 shadow-sm sm:h-17 sm:px-5 lg:px-6"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="The Pose Club home"
          className="relative block w-32 shrink-0 sm:w-36 lg:w-40"
        >
          <Image
            src="/logo.png"
            alt="The Pose Club"
            width={300}
            height={120}
            priority
            className="h-full w-auto object-contain"
          />
        </Link>

        {/* Navigation links */}
        <div
          className="flex items-center justify-end gap-1.5
            font-trocchi text-xs text-[#704b3c]
            sm:gap-3 sm:text-sm md:gap-4 md:text-base
            lg:gap-5"
        >
          <Link
            href="/booth"
            className="transition-colors hover:text-[#bd4275]"
          >
            Booth
          </Link>

          <span aria-hidden="true" className="text-[#d95b8b]">
            ★
          </span>

          <Link
            href="/about"
            className="transition-colors hover:text-[#bd4275]"
          >
            About
          </Link>

          <span aria-hidden="true" className="text-[#d95b8b]">
            ★
          </span>

          <Link
            href="/contact"
            className="transition-colors hover:text-[#bd4275]"
          >
            Contact
          </Link>

          <span aria-hidden="true" className="text-[#d95b8b]">
            ★
          </span>

          <Link
            href="/privacy"
            className="transition-colors hover:text-[#bd4275]"
          >
            Privacy
          </Link>
        </div>
      </nav>
    </header>
  );
}
