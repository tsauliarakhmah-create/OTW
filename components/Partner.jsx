"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";

const fields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "company", label: "Company", type: "text" },
  { name: "phone", label: "Phone", type: "tel" },
];

const input =
  "w-full rounded-[15px] bg-cream px-5 text-lg text-maroon outline-none focus:ring-4 focus:ring-brick/50";
const label = "flex flex-col gap-1.5 text-base leading-[22px] md:text-[17px]";

export default function Partner() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    setSent(true);
  }

  return (
    <section
      id="sponsor"
      className="relative overflow-hidden px-5 py-16 md:px-8 md:pt-24 md:pb-[214px]"
    >
      <SectionTitle>Partner With Us</SectionTitle>

      <div className="relative mx-auto mt-10 max-w-[886px]">
        {/* Roda gigi redup: di belakang panel, keluar dari kiri bawah */}
        <Image
          src="/images/gear.png"
          alt=""
          aria-hidden
          width={816}
          height={799}
          className="pointer-events-none absolute -bottom-[700px] -left-[574px] hidden h-auto w-[816px] max-w-none opacity-40 lg:block"
        />

        <form
          onSubmit={handleSubmit}
          className="relative z-10 rounded-[36px] bg-linear-to-b from-cream to-accent/90 px-6 pt-8 pb-6 text-maroon md:px-8 md:pt-[44px]"
        >
          <h3 className="mb-10 text-center text-3xl font-bold md:text-[45px] md:leading-[46px]">
            Become our Partner
          </h3>

         <div className="grid gap-x-[42px] gap-y-5 md:grid-cols-2">
  {fields.map((field) => (
    <label key={field.name} className={label}>
      {field.label}
      <input
        type={field.type}
        name={field.name}
        required={field.required}
        className={`${input} h-[45px]`}
      />
    </label>
        ))}
      </div>

      <label className={`${label} mt-5`}>
      What kind of partnership are you considering?
      <textarea
    name="message"
    className={`${input} h-[71px] resize-none py-3`}
  />
</label>

<button
  type="submit"
  className="mt-6 h-[47px] w-full rounded-[35px] bg-brick text-lg font-semibold text-cream transition hover:brightness-110 md:text-xl"
>
  Send Partnership Request
</button>
          {sent && (
            <p className="mt-4 text-center text-base font-medium">
              Terima kasih, permintaan partnership kamu sudah kami terima!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}