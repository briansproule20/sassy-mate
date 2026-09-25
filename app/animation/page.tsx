import type { Metadata } from "next";
import { AnimationViewer } from "./animation-viewer";

export const metadata: Metadata = {
  title: "Animation",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function AnimationPage() {
  return (
    <main className="fixed inset-0 bg-white dark:bg-neutral-950">
      <AnimationViewer />
    </main>
  );
}
