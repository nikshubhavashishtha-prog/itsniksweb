export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-[#F6E85A]">
      <div className="relative h-full w-full">
        {/* MOBILE */}
        <div className="relative h-full w-full md:hidden bg-[#F6E85A]">
          <img
            src="/doodle-mobile.svg"
            alt="Its Niks mobile doodle"
            className="block h-full w-full object-contain pointer-events-none select-none"
            draggable={false}
          />

          {/* Instagram hotspot (MOBILE) */}
          <a
            href="https://instagram.com/itsniks.v"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="absolute z-20 left-[60%] top-[34%] h-[120px] w-[120px]
                       -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          >
            <span className="sr-only">Instagram</span>
          </a>
        </div>

        {/* DESKTOP */}
        <div className="relative hidden h-full w-full md:block bg-white">
          <img
            src="/doodle.svg"
            alt="Its Niks doodle"
            className="block h-full w-full object-contain pointer-events-none select-none"
            draggable={false}
          />

          {/* Instagram hotspot (DESKTOP) - BIGGER so the whole icon is clickable */}
          <a
            href="https://instagram.com/itsniks.v"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="absolute z-20 left-[74%] top-[52%] h-[160px] w-[160px]
                       -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          >
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </div>
    </main>
  );
}
