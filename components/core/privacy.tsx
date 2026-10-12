"use client";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen w-full overflow-x-clip bg-[#FBF3E4]">
      <div className="mx-auto max-w-7xl px-4 pt-4 pb-10 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
        <h1 className="text-center font-spicy-rice text-4xl font-normal text-[#704b3c] sm:text-5xl lg:text-6xl">
          Privacy Policy
        </h1>
        <section className="mt-8 rounded-[25px] bg-[linear-gradient(to_bottom,#F4C7D0_0%,#FBF3E4_42%,#9FAA74_100%)] p-5 sm:p-8 lg:p-12">
          <h2 className="font-spicy-rice text-xl text-[#704b3c] sm:text-2xl">
            Last updated: June 6, 2024
          </h2>
          <p className="mt-6 w-full font-trocchi text-base leading-8 text-[#704b3c] sm:text-lg">
            The Pose Club is built for fun, not for collecting your data. Here's
            exactly what happens (and doesn't happen) with your photos.
          </p>
          <h3 className="mt-8 font-spicy-rice text-lg text-[#704b3c] sm:text-xl lg:text-3xl">
            Your photos stay yours
          </h3>
          <p className="mt-6 w-full font-trocchi text-base leading-8 text-[#704b3c] sm:text-lg">
            Every photo you take in the booth stays on your device. We never
            upload, save, or store your pictures on our servers, in a database,
            or anywhere else. When you close or refresh the page, your photos
            are gone unless you've downloaded them.
          </p>
          <h3 className="mt-8 font-spicy-rice text-lg text-[#704b3c] sm:text-xl lg:text-3xl">
            How the booth works
          </h3>
          <p className="mt-6 w-full font-trocchi text-base leading-8 text-[#704b3c] sm:text-lg">
            The photo booth runs entirely in your web browser. Your camera feed
            is processed locally on your device, and your Polaroids and photo
            strips are created right there too. Nothing is sent to us, so we
            couldn't see your photos even if we wanted to.
          </p>
          <h3 className="mt-8 font-spicy-rice text-lg text-[#704b3c] sm:text-xl lg:text-3xl">
            Camera access
          </h3>
          <p className="mt-6 w-full font-trocchi text-base leading-8 text-[#704b3c] sm:text-lg">
            We ask for permission to use your camera only so you can take
            photos. You're always in control: We only access your camera while
            you're using the booth. The camera turns off when you leave the
            page. You can revoke permission any time in your browser settings.
          </p>
          <h3 className="mt-8 font-spicy-rice text-lg text-[#704b3c] sm:text-xl lg:text-3xl">
            Sharing
          </h3>
          <p className="mt-6 w-full font-trocchi text-base leading-8 text-[#704b3c] sm:text-lg">
            We don't share, sell, or hand over your photos to anyone, because we
            never have them. If you download your photos or share them on social
            media, that's your choice, and it happens outside of our site.
          </p>
          <h3 className="mt-8 font-spicy-rice text-lg text-[#704b3c] sm:text-xl lg:text-3xl">
            What we do collect
          </h3>
          <p className="mt-6 w-full font-trocchi text-base leading-8 text-[#704b3c] sm:text-lg">
            We don't ask you to create an account or give us your name, email,
            or any personal details to use the booth. Like most websites, our
            hosting provider may keep basic technical logs (such as browser type
            and approximate region) for security and performance.
          </p>
          <h3 className="mt-8 font-spicy-rice text-lg text-[#704b3c] sm:text-xl lg:text-3xl">
            Changes to this page
          </h3>
          <p className="mt-6 w-full font-trocchi text-base leading-8 text-[#704b3c] sm:text-lg">
            If we ever change how The Pose Club handles your data, we'll update
            this page and the date at the top. Our promise that your photos stay
            on your device is the heart of this site, and we plan to keep it
            that way.
          </p>
          <h3 className="mt-8 font-spicy-rice text-lg text-[#704b3c] sm:text-xl lg:text-3xl">
            Questions?
          </h3>
          <p className="mt-6 w-full font-trocchi text-base leading-8 text-[#704b3c] sm:text-lg">
            Reach out any time at theposeclub@gmail.com, or through our{" "}
            <u>
              {" "}
              <Link href="/contact">Contact</Link>
            </u>{" "}
            page.
          </p>
        </section>
      </div>
    </div>
  );
}
