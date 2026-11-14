import Image from "next/image";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="relative px-5 py-16 md:px-8 md:py-24 lg:min-h-[860px]"
    >
      <div
  aria-hidden
  className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block"
>
  <Image
    src="/images/burst.png"
    alt=""
    width={634}
    height={658}
    className="absolute top-[130px] right-0 h-auto w-[634px] max-w-none"
  />
</div>

      <div className="relative z-10 mx-auto max-w-[1088px]">
        <SectionTitle align="left">About Robot</SectionTitle>

        <p className="mt-10 max-w-[640px] text-2xl leading-snug md:text-[32px] md:leading-[41px]">
          XXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXX
        </p>

        <div className="mt-8">
          <Button variant="details" href="/specification">
            See Details
          </Button>
        </div>
      </div>
    </section>
  );
}