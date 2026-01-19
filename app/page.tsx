"use client";

import { useState } from "react";

export default function Home() {
  const [pets, setPets] = useState(0);
  const unlocked = pets >= 3;

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#F6E85A]">
      {/* MAIN DOODLE */}
      <div className="absolute inset-0 z-0">
        {/* Mobile */}
        <img
          src="/doodle-mobile-v2.svg"
          alt="Mobile doodle"
          className="h-full w-full object-contain md:hidden pointer-events-none select-none"
          draggable={false}
        />

        {/* Desktop */}
        <img
          src="/doodle.svg"
          alt="Desktop doodle"
          className="hidden md:block h-full w-full object-contain pointer-events-none select-none bg-white"
          draggable={false}
        />

        {/* 🔗 INSTAGRAM HOTSPOT (DESKTOP) */}
        <a
          href="https://instagram.com/itsniks.v"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="absolute z-10 hidden md:block
                     left-[74%] top-[52%]
                     h-[160px] w-[160px]
                     -translate-x-1/2 -translate-y-1/2"
        />

        {/* 🔗 INSTAGRAM HOTSPOT (MOBILE) */}
        <a
          href="https://instagram.com/itsniks.v"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="absolute z-10 md:hidden
                     left-[60%] top-[34%]
                     h-[120px] w-[120px]
                     -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* 🐱 CAT GAME OVERLAY */}
      {!unlocked && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/70 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4 rounded-3xl bg-white px-10 py-8 shadow-md border border-black/10">
            <div className="text-lg font-medium">Pet the cat 🐾</div>

            <button
              onClick={() => setPets((p) => p + 1)}
              className="text-7xl active:scale-95 transition-transform"
            >
              🐱
            </button>

            <div className="text-sm text-black/70">
              {pets === 0 && "Tap 3 times"}
              {pets === 1 && "Nice… 2 more"}
              {pets === 2 && "One more!"}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
