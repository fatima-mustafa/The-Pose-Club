import { Suspense } from "react";
import BoothCamera from "@/components/core/boothcamera";
import Navbar from "@/components/core/siteheader";

export default function CameraPage() {
  // useSearchParams (used inside BoothCamera) needs a Suspense boundary
  return (
    <Suspense fallback={null}>
      <Navbar />
      <BoothCamera />
    </Suspense>
  );
}
