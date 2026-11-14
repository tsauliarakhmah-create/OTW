import Image from "next/image";
import Button from "@/components/Button";

const stars = [
  "lg:top-[-74px] lg:right-[-34px]",
  "lg:top-[-99px] lg:right-[-89px]",
  "lg:top-[-35px] lg:right-[-74px]",
];

const otwSize =
  "text-[110px] leading-[0.75] font-semibold tracking-[0.1em] sm:text-[200px] lg:text-[300px]";

function Star({ position }) {
  return (
    <svg
      viewBox="0 0 55 72"
      aria-hidden
      strokeWidth="1"
      className={`absolute hidden fill-gold stroke-gold lg:block lg:h-[72px] lg:w-[55px] ${position}`}
    >
      <path d="M27.5 0C29 20 35 31 55 36C35 41 29 52 27.5 72C26 52 20 41 0 36C20 31 26 20 27.5 0Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-16 pb-20 md:px-8 md:pt-24 lg:min-h-[1000px] lg:pt-[190px]">
      {/* Sinar kiri atas: mulai di bawah navbar, berhenti di akhir hero */}
      <Image
        src="/images/rays.png"
        alt=""
        aria-hidden
        width={720}
        height={1000}
        priority
        className="pointer-events-none absolute top-0 left-0 hidden max-w-none md:block"
      />

      <div className="relative mx-auto flex max-w-[939px] flex-col items-center text-center">
        <p className="text-lift text-2xl font-medium md:text-[40px] md:leading-[50px]">
          On The Way to Win
        </p>

        <div className="relative mt-4 w-fit lg:mt-[10px]">
          <span
            aria-hidden
            className={`otw-back absolute top-0 left-0 translate-x-1.5 translate-y-[3px] lg:translate-x-[17px] lg:translate-y-[8px] ${otwSize}`}
          >
            OTW
          </span>
          <h1 className={`otw-text relative ${otwSize}`}>OTW</h1>

          {stars.map((position) => (
            <Star key={position} position={position} />
          ))}
        </div>

        <blockquote className="mt-6 font-metal text-xl leading-snug md:text-3xl lg:mt-8 lg:w-max lg:text-[36px] lg:leading-[40px]">
          “We are not there yet, but every move we make is on the way to win.”
        </blockquote>

        <div className="mt-8 lg:mt-[30px]">
          <Button href="#about">Discover More</Button>
        </div>
      </div>
    </section>
  );
}