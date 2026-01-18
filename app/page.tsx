"use client";

import { useState } from "react";

export default function Home() {
  const [pets, setPets] = useState(0);
  const [unlocked, setUnlocked] = useState(false);

  const petCat = () => {
    if (unlocked) return;
    const next = pets + 1;
    setPets(next);
    if (next >= 3) setUnlocked(true);
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#F6E85A]">
      {/* MAIN DOODLE PAGE (always rendered) */}
      <div className="absolute inset-0">
        {/* Mobile */}
        <img
          src="/doodle-mobile.svg"
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
      </div>

      {/* GAME OVERLAY */}
      {!unlocked && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-white/70 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4 rounded-3xl bg-white px-10 py-8 shadow-md border border-black/10">
            <div className="text-lg font-medium">
              Pet the cat 🐾
            </div>

            {/* Visible cat */}
            <button
              onClick={petCat}
              className="text-7xl active:scale-95 transition-transform"
              aria-label="Pet the cat"
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
