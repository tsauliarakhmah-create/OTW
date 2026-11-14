import Image from "next/image";
import SpecCard from "@/components/SpecCard";

export const metadata = {
  title: "Spesification | OTW",
};

const cardClass = "lg:h-[374px] lg:gap-[41px] lg:px-[49px]";

const specs = [
  {
    title: "Mechanical",
    edge: "rgba(86,12,5,0.9)",
    text: "XXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXX",
  },
  {
    title: "Electrical",
    edge: "rgba(103,23,15,0.9)",
    text: "XXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXX",
  },
  {
    title: "Programming",
    edge: "rgba(119,34,25,0.9)",
    text: "XXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXX",
  },
];

export default function SpecificationPage() {
  return (
    <main className="relative overflow-hidden px-5 pt-12 pb-20 md:px-8 lg:min-h-[1718px] lg:pt-[73px] lg:pb-[144px]">
      <Image
        src="/images/spec-decor.png"
        alt=""
        aria-hidden
        width={1440}
        height={1815}
        priority
        className="pointer-events-none absolute top-0 left-0 hidden h-auto w-full min-w-[1440px] max-w-none md:block"
      />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="flex max-w-[771px] flex-col gap-[22px]">
          <h2 className="text-5xl font-bold italic md:text-[64px] md:leading-[42px]">
            Spesification
          </h2>
          <div className="h-[20.31px] w-full bg-[linear-gradient(90deg,rgb(255_248_221/0.5)_21.63%,rgb(86_12_5/0.5)_57.69%,rgb(119_34_25/0.5)_100%)]" />
        </div>

        <div className="mt-12 flex flex-col gap-10 lg:mt-[81px] lg:max-w-[1001px] lg:gap-[107px]">
          {specs.map((spec) => (
            <SpecCard
              key={spec.title}
              title={spec.title}
              edge={spec.edge}
              className={cardClass}
            >
              {spec.text}
            </SpecCard>
          ))}
        </div>
      </div>
    </main>
  );
}