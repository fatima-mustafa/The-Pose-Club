"use client";

"use client";

import { Mail, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full overflow-x-clip bg-[#FBF3E4]">
      <div className="mx-auto max-w-7xl px-4 pt-4 pb-10 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
        <h1 className="text-center font-spicy-rice text-4xl font-normal text-[#704b3c] sm:text-5xl lg:text-6xl">
          Contact
        </h1>

        <section className="mt-8 rounded-[25px] bg-[linear-gradient(to_bottom,#F4C7D0_0%,#FBF3E4_42%,#9FAA74_100%)] p-5 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left side: Contact information */}
            <div className="pt-2">
              <h2 className="font-spicy-rice text-xl text-[#704b3c] sm:text-2xl">
                Get in touch!
              </h2>

              <p className="mt-6 max-w-3xl font-trocchi text-base leading-8 text-[#704b3c] sm:text-lg">
                Say hi, we’d love to hear from you. Got a question, a bug to
                report, or have new ideas on a filter or frame? Drop us a line
                and we’ll get back to you as soon as we can.
              </p>

              {/* Email with a love-letter icon */}
              <a
                href="mailto:theposeclub@gmail.com"
                className="mt-7 inline-flex items-center gap-3 font-trocchi text-base text-[#704b3c] transition-colors hover:text-[#B8446E] sm:text-lg"
              >
                <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FBF3E4]">
                  <Mail
                    size={50}
                    strokeWidth={1.7}
                    className="text-[#B8446E]"
                  />
                  <Heart
                    size={20}
                    fill="#B8446E"
                    strokeWidth={1.5}
                    className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 text-[#B8446E]"
                  />
                </span>
                theposeclub@gmail.com
              </a>

              <p className="mt-6 max-w-3xl font-trocchi text-base leading-8 text-[#704b3c] sm:text-lg">
                The Pose Club is run by one person, so replies can take 2–3
                business days. Thanks for being patient with us!
              </p>
            </div>

            {/* Right side: Contact form */}
            <div className="rounded-[25px] bg-[#FFF9F5] p-5 shadow-sm sm:p-8">
              <h2 className="font-spicy-rice text-center text-2xl text-[#704b3c] sm:text-3xl">
                Email us ♡
              </h2>

              <p className=" font-trocchi text-sm leading-6 text-[#704b3c]/80">
                Leave us a little note!
              </p>

              <form className="mt-6 space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="font-spicy-rice text-base text-[#704b3c]"
                  >
                    Name
                  </Label>

                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="h-12 rounded-xl border-[#E8C7CB] bg-white/80 font-trocchi text-sm text-[#704b3c] placeholder:text-[#704b3c]/50 focus-visible:ring-[#B8446E]"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="font-spicy-rice text-base text-[#704b3c]"
                  >
                    Email
                  </Label>

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="h-12 rounded-xl border-[#E8C7CB] bg-white/80 font-trocchi text-sm text-[#704b3c] placeholder:text-[#704b3c]/50 focus-visible:ring-[#B8446E]"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="font-spicy-rice text-base text-[#704b3c]"
                  >
                    Message
                  </Label>

                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us what's on your mind..."
                    rows={5}
                    required
                    className="min-h-32 resize-y rounded-xl border-[#E8C7CB] bg-white/80 font-trocchi text-sm text-[#704b3c] placeholder:text-[#704b3c]/50 focus-visible:ring-[#B8446E]"
                  />
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  className="h-auto w-full rounded-xl bg-[#B8446E] px-6 py-3.5 font-spicy-rice text-lg text-[#FBF3E4] hover:bg-[#9F365D]"
                >
                  Send it!
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
