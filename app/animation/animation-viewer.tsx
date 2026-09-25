"use client";

import { useEffect, useRef, useState } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        alt?: string;
        autoplay?: boolean;
        "animation-name"?: string;
        "animation-crossfade-duration"?: string;
        "camera-controls"?: boolean;
        "camera-orbit"?: string;
        "interpolation-decay"?: string;
        "shadow-intensity"?: string;
        "interaction-prompt"?: string;
        "touch-action"?: string;
      };
    }
  }
}

const IDLE_CLIP = "Proud_Strut";
const CHARGE_CLIP = "Running";

// Pulling the orbit radius in makes him read as closing the distance on you.
const IDLE_ORBIT = "0deg 90deg 115%";
const CHARGE_ORBIT = "0deg 88deg 32%";

const CHARGE_MS = 5000;

type ModelViewerElement = HTMLElement & {
  animationName: string;
  cameraOrbit: string;
};

export function AnimationViewer() {
  const [ready, setReady] = useState(false);
  const viewerRef = useRef<ModelViewerElement | null>(null);
  const chargingRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  // model-viewer touches `window` at import time, so it can only load in the browser.
  useEffect(() => {
    let cancelled = false;
    import("@google/model-viewer").then(() => {
      if (!cancelled) setReady(true);
    });
    return () => {
      cancelled = true;
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    };
  }, []);

  function handleClick() {
    const viewer = viewerRef.current;
    if (!viewer || chargingRef.current) return;

    chargingRef.current = true;
    viewer.animationName = CHARGE_CLIP;
    viewer.cameraOrbit = CHARGE_ORBIT;

    timerRef.current = window.setTimeout(() => {
      viewer.animationName = IDLE_CLIP;
      viewer.cameraOrbit = IDLE_ORBIT;
      chargingRef.current = false;
      timerRef.current = null;
    }, CHARGE_MS);
  }

  if (!ready) return null;

  return (
    <model-viewer
      ref={viewerRef}
      onClick={handleClick}
      src="/models/animation.glb"
      alt="Looping 3D animation. Click to make him charge."
      autoplay
      animation-name={IDLE_CLIP}
      animation-crossfade-duration="300"
      camera-controls
      camera-orbit={IDLE_ORBIT}
      interpolation-decay="120"
      touch-action="pan-y"
      shadow-intensity="0"
      interaction-prompt="none"
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        cursor: "pointer",
      }}
    />
  );
}
