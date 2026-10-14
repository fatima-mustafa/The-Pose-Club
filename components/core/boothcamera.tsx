"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { MoveLeft, Camera, RotateCcw, Upload, Zap, ZapOff } from "lucide-react";
import { FILTERS, type FilterId } from "@/lib/filters";
import { Button } from "@/components/ui/button";

const WIDTH = 1280;
const HEIGHT = 960; // 4:3, matches your photo slots
const COUNTDOWN_SECONDS = 3;

type CameraStatus = "requesting" | "ready" | "denied" | "unsupported";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function BoothCamera() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Number of photos comes from the template page: /booth?layout=3
  const layoutParam = parseInt(searchParams.get("layout") ?? "", 10);
  const shots = layoutParam >= 1 && layoutParam <= 4 ? layoutParam : 4;

  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cancelRef = useRef(false);

  const [status, setStatus] = useState<CameraStatus>("requesting");
  const [photos, setPhotos] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [flashOn, setFlashOn] = useState(false);
  const [flashing, setFlashing] = useState(false);
  const [filterId, setFilterId] = useState<FilterId>("original");

  const filter = FILTERS.find((f) => f.id === filterId) ?? FILTERS[0];

  // Keep the latest filter available inside the async capture loop
  const filterRef = useRef<(typeof FILTERS)[number]>(FILTERS[0]);
  useEffect(() => {
    filterRef.current = filter;
  }, [filter]);

  const isFull = photos.length >= shots;

  /* ---------- Camera ---------- */

  const startCamera = useCallback(async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setStatus("unsupported");
      return;
    }

    setStatus("requesting");
    streamRef.current?.getTracks().forEach((t) => t.stop());

    try {
      // The browser shows its permission prompt here
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 960 },
        },
        audio: false,
      });

      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setStatus("ready"); // only now is the camera shown
    } catch {
      setStatus("denied");
    }
  }, []);

  useEffect(() => {
    cancelRef.current = false;
    startCamera();
    return () => {
      cancelRef.current = true;
      streamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, [startCamera]);

  /* ---------- Drawing (applies filter + crops to 4:3) ---------- */

  const renderToDataUrl = useCallback(
    (source: CanvasImageSource, sw: number, sh: number, mirror: boolean) => {
      const canvas = document.createElement("canvas");
      canvas.width = WIDTH;
      canvas.height = HEIGHT;
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;

      ctx.filter = filterRef.current.css;

      // "object-cover" style crop
      const scale = Math.max(WIDTH / sw, HEIGHT / sh);
      const dw = sw * scale;
      const dh = sh * scale;
      const dx = (WIDTH - dw) / 2;
      const dy = (HEIGHT - dh) / 2;

      if (mirror) {
        ctx.translate(WIDTH, 0);
        ctx.scale(-1, 1);
      }
      ctx.drawImage(source, dx, dy, dw, dh);
      return canvas.toDataURL("image/jpeg", 0.92);
    },
    [],
  );

  const captureFrame = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.videoWidth) return null;
    return renderToDataUrl(video, video.videoWidth, video.videoHeight, true);
  }, [renderToDataUrl]);

  /* ---------- Start: countdown -> flash -> capture, repeated ---------- */

  const startSession = async () => {
    if (busy || status !== "ready") return;
    setBusy(true);

    let current = [...photos];

    while (current.length < shots && !cancelRef.current) {
      for (let i = COUNTDOWN_SECONDS; i > 0; i--) {
        setCountdown(i);
        await sleep(1000);
      }
      setCountdown(null);

      if (flashOn) {
        setFlashing(true);
        await sleep(200);
      }

      const shot = captureFrame();

      if (flashOn) {
        await sleep(150);
        setFlashing(false);
      }

      if (!shot) break;

      current = [...current, shot];
      setPhotos(current);
      await sleep(700); // short pause to strike the next pose
    }

    setCountdown(null);
    setFlashing(false);
    setBusy(false);
  };

  /* ---------- Upload ---------- */

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []).slice(
      0,
      shots - photos.length,
    );
    const urls: string[] = [];

    for (const file of files) {
      const bitmap = await createImageBitmap(file);
      const url = renderToDataUrl(bitmap, bitmap.width, bitmap.height, false);
      bitmap.close();
      if (url) urls.push(url);
    }

    setPhotos((prev) => [...prev, ...urls].slice(0, shots));
    e.target.value = "";
  };

  /* ---------- Continue to next page ---------- */

  const handleContinue = () => {
    sessionStorage.setItem("poseclub:photos", JSON.stringify(photos));
    sessionStorage.setItem("poseclub:layout", String(shots));
    router.push(`/result?layout=${shots}`);
  };

  /* ---------- UI ---------- */

  return (
    <div className="min-h-screen w-full bg-[#FBF3E4]">
      {/* Full-screen white flash */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-0 z-50 bg-white transition-opacity duration-150 ${
          flashing ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="mx-auto max-w-3xl px-4 pt-4 pb-12 sm:px-6">
        <h1 className="text-center font-spicy-rice text-4xl text-[#704b3c] sm:text-5xl">
          Say cheese!
        </h1>
        <p className="mt-2 text-center font-trocchi text-base text-[#704b3c] sm:text-lg">
          Photo {Math.min(photos.length + 1, shots)} of {shots}
        </p>

        {/* Camera view */}
        <div className="relative mx-auto mt-6 aspect-[4/3] w-full overflow-hidden rounded-[25px] border-2 border-[#6F4C3E] bg-[#704b3c]/10 shadow-[0_8px_30px_rgba(112,75,60,0.12)]">
          <video
            ref={videoRef}
            playsInline
            muted
            className={`h-full w-full -scale-x-100 object-cover ${
              status === "ready" ? "opacity-100" : "opacity-0"
            }`}
            style={{ filter: filter.css }}
          />

          {status !== "ready" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center font-trocchi text-[#704b3c]">
              {status === "requesting" && (
                <p>Please allow camera access to start the booth…</p>
              )}
              {status === "denied" && (
                <>
                  <p>
                    We can't see your camera. Allow access in your browser's
                    address bar, then try again. You can still upload photos.
                  </p>
                  <Button
                    onClick={startCamera}
                    className="rounded-[18px] bg-[#bd4275] px-5 py-2.5 text-white transition-colors hover:bg-[#a93666]"
                  >
                    Try again
                  </Button>
                </>
              )}
              {status === "unsupported" && (
                <p>
                  Your browser doesn't support camera access. You can still
                  upload photos.
                </p>
              )}
            </div>
          )}

          {countdown !== null && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-spicy-rice text-9xl text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                {countdown}
              </span>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-center gap-3 sm:gap-5">
          <Button
            type="button"
            variant="outline"
            onClick={() => setFlashOn((v) => !v)}
            aria-pressed={flashOn}
            disabled={busy}
            className={`h-12 rounded-[18px] border-2 border-[#6F4C3E] px-4 font-trocchi text-sm sm:text-base ${
              flashOn
                ? "bg-[#9FAA74] text-white hover:bg-[#9FAA74]/90 hover:text-white"
                : "bg-transparent text-[#704b3c] hover:bg-[#F4C7D0]/60 hover:text-[#704b3c]"
            }`}
          >
            {flashOn ? (
              <Zap className="size-5" />
            ) : (
              <ZapOff className="size-5" />
            )}
            Flash {flashOn ? "on" : "off"}
          </Button>

          {isFull ? (
            <Button
              type="button"
              onClick={handleContinue}
              disabled={busy}
              className="h-12 rounded-[18px] bg-[#bd4275] px-6 font-trocchi text-base text-white shadow-[0_5px_10px_rgba(95,55,60,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#a93666] sm:text-lg"
            >
              Continue
            </Button>
          ) : (
            <Button
              type="button"
              onClick={startSession}
              disabled={busy || status !== "ready"}
              className="h-12 rounded-[18px] bg-[#bd4275] px-6 font-trocchi text-base text-white shadow-[0_5px_10px_rgba(95,55,60,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#a93666] sm:text-lg"
            >
              <Camera className="size-5" />
              {busy ? "Taking photos…" : "Start"}
            </Button>
          )}

          <Button
            type="button"
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            disabled={busy || isFull}
            className="h-12 rounded-[18px] border-2 border-[#6F4C3E] bg-transparent px-4 font-trocchi text-sm text-[#704b3c] hover:bg-[#F4C7D0]/60 hover:text-[#704b3c] sm:text-base"
          >
            <Upload className="size-5" />
            Upload
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            hidden
            onChange={handleUpload}
          />
        </div>

        {/* Filters */}
        <div className="mt-8">
          <p className="mb-3 text-center font-spicy-rice text-xl text-[#704b3c]">
            Filters
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {FILTERS.map((f) => (
              <Button
                key={f.id}
                type="button"
                variant="outline"
                onClick={() => setFilterId(f.id)}
                aria-pressed={filterId === f.id}
                className={`h-auto rounded-full border-2 border-[#6F4C3E] px-4 py-1.5 font-trocchi text-sm ${
                  filterId === f.id
                    ? "bg-[#bd4275] text-white hover:bg-[#a93666] hover:text-white"
                    : "bg-transparent text-[#704b3c] hover:bg-[#F4C7D0]/60 hover:text-[#704b3c]"
                }`}
              >
                {f.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Taken photos */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex justify-center gap-3">
            {Array.from({ length: shots }).map((_, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] w-20 overflow-hidden rounded-md border-2 border-dashed border-[#6F4C3E]/50 bg-[#fffaf0] sm:w-24"
              >
                {photos[i] && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={photos[i]}
                    alt={`Captured photo ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>

          {photos.length > 0 && !busy && (
            <Button
              type="button"
              variant="link"
              onClick={() => setPhotos([])}
              className="h-auto p-0 font-trocchi text-sm text-[#704b3c]"
            >
              <RotateCcw className="size-4" />
              Retake all
            </Button>
          )}
        </div>

        <p className="mt-8 text-center font-trocchi text-sm text-[#704b3c]">
          <Link
            href="/booth"
            className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline"
          >
            <MoveLeft size={16} />
            Change layout
          </Link>
        </p>
      </div>
    </div>
  );
}
