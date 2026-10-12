import Link from "next/link";
import SoloLayout from "@/components/core/layouts/sololayout";
import DuoLayout from "@/components/core/layouts/duolayout";
import ClassicLayout from "@/components/core/layouts/triplelayout";
import FullSetLayout from "@/components/core/layouts/fourlayout";
import { ArrowRight } from "lucide-react";

const layouts = [
  {
    name: "The Solo Shot",
    description: "One picture, all the vibes.",
    photos: 1,
    label: "1 PHOTO",
    Preview: SoloLayout,
    background: "bg-[#F4C7D0]/60",
  },
  {
    name: "The Double Take",
    description: "Two shots, double the fun.",
    photos: 2,
    label: "2 PHOTOS",
    Preview: DuoLayout,
    background: "bg-[#9FAA74]/40",
  },
  {
    name: "The Classic Strip",
    description: "Three shots, one little story.",
    photos: 3,
    label: "3 PHOTOS",
    Preview: ClassicLayout,
    background: "bg-[#F4C7D0]/60",
  },
  {
    name: "The Full House",
    description: "Four shots, every expression.",
    photos: 4,
    label: "4 PHOTOS",
    Preview: FullSetLayout,
    background: "bg-[#9FAA74]/40",
  },
];

export default function ChooseLayout() {
  return (
    <div className="min-h-screen w-full overflow-x-clip bg-[#FBF3E4]">
      <div className="mx-auto max-w-7xl px-4 pt-4 pb-10 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
        <h1 className="text-center font-spicy-rice text-4xl font-normal text-[#704b3c] sm:text-5xl lg:text-6xl">
          Layouts
        </h1>

        <section className="mt-8 rounded-[25px] bg-[linear-gradient(to_bottom,#F4C7D0_0%,#FBF3E4_42%,#9FAA74_100%)] p-5 shadow-[0_8px_30px_rgba(112,75,60,0.12)] sm:p-8 lg:p-12">
          <p className="w-full text-center font-trocchi text-base leading-8 text-[#704b3c] sm:text-lg">
            Pick your photo booth style and let's make something cute.
          </p>
          <div className="mt-8 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-10">
            {layouts.map(
              ({ name, description, photos, label, Preview, background }) => (
                <Link
                  key={photos}
                  href={`/booth?layout=${photos}`}
                  className="group flex h-full min-h-[500px] flex-col rounded-[25px] border-2 border-[#6F4C3E] bg-transparent p-5 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(112,75,60,0.18)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6F4C3E] sm:min-h-[540px] sm:p-6 lg:p-7"
                >
                  {/* Preview area */}
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="flex max-h-full max-w-full items-center justify-center">
                      <Preview />
                    </div>
                  </div>

                  {/* Text area */}
                  <div className="flex flex-1 flex-col pt-5">
                    <h2 className="min-h-[36px] font-spicy-rice text-xl text-[#704b3c] sm:text-2xl">
                      {name}
                    </h2>

                    <p className="mt-2 min-h-[48px] font-trocchi text-sm leading-6 text-[#704b3c] sm:text-base">
                      {description}
                    </p>

                    {/* Bottom row stays aligned */}
                    <div className="mt-auto flex items-center justify-between border-t border-[#704b3c]/20 pt-4">
                      <span className="font-trocchi text-xs tracking-wider text-[#704b3c]">
                        {label}
                      </span>

                      <span className="text-[#704b3c] transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRight size={22} strokeWidth={1.7} />
                      </span>
                    </div>
                  </div>
                </Link>
              ),
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
