import Image from "next/image";

const links = [
  { label: "About Robot", href: "/#about" },
  { label: "Spesification", href: "/#about" },
  { label: "Team", href: "/#team" },
  { label: "Sponsor", href: "/#sponsor" },
];

export default function Navbar() {
  return (
    <header className="relative z-20 h-[82px] bg-cream/[0.28] px-5 md:px-8 xl:px-[12.2vw]">
     <nav className="flex h-full items-center justify-between">  
        <a href="/" aria-label="OTW, ke beranda">
          <Image
            src="/images/logo.png"
            alt="OTW"
            width={138}
            height={92}
            priority
            className="h-auto w-28 md:w-[138px]"
          />
        </a>

        <ul className="hidden items-center gap-8 text-2xl leading-[30px] font-medium text-ink md:flex xl:gap-[90px]">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="transition hover:opacity-70">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}