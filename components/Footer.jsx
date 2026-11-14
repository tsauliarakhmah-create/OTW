import Image from "next/image";

const navigation = [
  { label: "About Robot", href: "/#about" },
  { label: "Spesification", href: "/#about" },
  { label: "Team", href: "/#team" },
  { label: "Partner", href: "/#sponsor" },
];

const contacts = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "X", href: "#" },
  { label: "Email", href: "mailto:halo@otw.id" },
];

function Column({ title, items }) {
  return (
    <div className="flex flex-col text-xl leading-[30px] text-maroon">
      <p className="mb-1 text-2xl font-bold italic">{title}</p>
      {items.map((item) => (
        <a key={item.label} href={item.href} className="hover:underline">
          {item.label}
        </a>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="mt-0 border-t-[16px] border-accent bg-linear-to-b from-cream to-accent"
    >
      {/* Bagian atas: titik-titik hanya ada di sini, berhenti tepat di garis */}
      <div className="relative px-5 pt-8 pb-10 md:px-8">
        <div className="dots pointer-events-none absolute inset-0" />

        <div className="relative mx-auto max-w-[1088px]">
          <div className="grid gap-10 md:grid-cols-[1fr_auto_auto] md:gap-x-[110px] md:pr-[90px]">
            <Image
              src="/images/logo-footer.png"
              alt="On The Way to Win"
              width={264}
              height={176}
              className="h-auto w-48 self-start md:-mt-8 md:-ml-10 md:w-[264px]"
            />
            <Column title="Navigation" items={navigation} />
            <Column title="Contact" items={contacts} />
          </div>
        </div>
      </div>

      {/* Bagian bawah: tanpa titik, latar gradasi tetap menyambung */}
      <div className="pb-5">
        <div className="mx-5 border-t border-maroon/50 md:mx-7" />
        <p className="px-5 pt-3 text-left text-sm font-medium tracking-normal text-maroon/80 md:pl-[52px] md:text-base">
          © 2026 OTW. On The Way to Win
        </p>
      </div>
    </footer>
  );
}