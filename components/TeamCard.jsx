import Image from "next/image";

export default function TeamCard({ name, role, photo }) {
  return (
    <article className="relative aspect-[282/346] w-full overflow-hidden bg-linear-to-b from-cream from-[43.27%] to-accent text-left">
      {/* Pola titik: di atas gradasi, di bawah foto */}
      <div className="dots pointer-events-none absolute inset-0" />

      {/* Area foto: di atas bar nama, foto selalu di dalam kotak */}
      <div className="absolute inset-x-0 top-0 bottom-[23.4%]">
        <Image
          src={photo}
          alt={name}
          fill
          sizes="(min-width: 1024px) 282px, 50vw"
          className="object-contain object-bottom"
        />
      </div>

      {/* Bar nama */}
      <div className="absolute inset-x-0 bottom-0 flex h-[23.4%] flex-col justify-center overflow-hidden bg-maroon px-[6px]">
        <p className="font-metal text-sm leading-tight sm:text-lg lg:text-[24px]">
          {name}
        </p>
        <p className="mt-1 ml-1.5 text-[10px] leading-tight text-cream/85 sm:text-xs lg:text-[14px]">
          {role}
        </p>
      </div>
    </article>
  );
}