export const FILTERS = [
  { id: "original", label: "Original", css: "none" },
  { id: "bw", label: "Black & White", css: "grayscale(1) contrast(1.1)" },
  {
    id: "noir",
    label: "Noir",
    css: "grayscale(1) contrast(1.5) brightness(0.9)",
  },
  {
    id: "brown",
    label: "Brown",
    css: "sepia(0.9) contrast(1.05) brightness(0.95)",
  },
  {
    id: "vintage",
    label: "Vintage",
    css: "sepia(0.4) contrast(1.1) saturate(1.3) hue-rotate(-10deg) brightness(1.05)",
  },
  {
    id: "smooth",
    label: "Smooth",
    css: "contrast(0.9) brightness(1.08) saturate(1.1) blur(0.6px)",
  },
  {
    id: "80s",
    label: "80s",
    css: "saturate(1.6) contrast(1.15) hue-rotate(-20deg) brightness(1.05)",
  },
  {
    id: "warm",
    label: "Warm",
    css: "sepia(0.25) saturate(1.3) brightness(1.05) hue-rotate(-8deg)",
  },
  {
    id: "cool",
    label: "Cool",
    css: "saturate(0.9) hue-rotate(15deg) brightness(1.05)",
  },
  {
    id: "dreamy",
    label: "Dreamy",
    css: "brightness(1.1) contrast(0.85) saturate(1.2) blur(0.8px)",
  },
] as const;

export type FilterId = (typeof FILTERS)[number]["id"];
