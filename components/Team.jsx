import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import TeamCard from "@/components/TeamCard";

const members = [
  { name: "Daniel Ishak", role: "Mechanic", photo: "/images/team/daniel-ishak.png" },
  { name: "Daniel Timothy", role: "Electrical", photo: "/images/team/daniel-timothy.png" },
  { name: "Muhammad Fadil Rizky", role: "Programming", photo: "/images/team/fadil.png" },
  { name: "Ferlinda Aisyatul Adawiyah", role: "Official: Administration & Finance", photo: "/images/team/ferlinda.png" },
  { name: "Ameena Chansalychia Briant", role: "Official: Design & Media Production", photo: "/images/team/ameena.png" },
  { name: "Tsabita Aulia Rakhmah", role: "Official: Web Development", photo: "/images/team/tsabita.png" },
];

export default function Team() {
  return (
    <section id="team" className="relative px-5 py-16 md:px-8 md:py-24">
      <div className="relative z-10 mx-auto max-w-[1080px]">
        <SectionTitle>Our Team</SectionTitle>

        {/* Pembungkus grid: gear dan bintang dipasang relatif ke sini */}
        <div className="relative mt-24">
          {/* Gear: naik di atas kartu pertama, masuk ke belakang kartu */}
          <Image
            src="/images/gear.png"
            alt=""
            aria-hidden
            width={381}
            height={373}
            className="pointer-events-none absolute top-[-203px] right-full hidden h-auto w-[381px] max-w-none translate-x-[130px] lg:block"
          />

          {/* Bintang: masuk ke belakang pojok kanan bawah kartu terakhir */}
          <Image
            src="/images/burst-2.png"
            alt=""
            aria-hidden
            width={311}
            height={391}
            className="pointer-events-none absolute bottom-[-213px] left-full hidden h-auto w-[311px] max-w-none -translate-x-[142px] lg:block"
          />

          <div className="grid grid-cols-2 gap-x-4 gap-y-24 md:gap-x-10 lg:grid-cols-3 lg:gap-x-[117px] lg:gap-y-[85px]">
            {members.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}