"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import { validatePartner } from "@/lib/validate";

const fields = [
  { name: "name", label: "Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "company", label: "Company", type: "text" },
  { name: "phone", label: "Phone", type: "tel" },
];

const input =
  "w-full rounded-[15px] bg-cream px-5 text-lg text-maroon outline-none focus:ring-4 focus:ring-brick/50";
const label = "flex flex-col gap-1.5 text-base leading-[22px] md:text-[17px]";
const errorText = "text-sm font-medium leading-tight text-brick";

export default function Partner() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null); // { ok, status, message }

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setResult(null);

    const values = Object.fromEntries(new FormData(form));

    // Cek di browser dulu supaya pesan muncul langsung
    const { errors: clientErrors } = validatePartner(values);
    setErrors(clientErrors);
    if (Object.keys(clientErrors).length > 0) return;

    setLoading(true);
    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      let json = null;
      try {
        json = await res.json();
      } catch {
        /* respons bukan JSON */
      }

      if (res.ok) {
        form.reset();
        setResult({ ok: true, status: res.status, message: json?.message });
        return;
      }

      setErrors(json?.errors ?? {});
      setResult({
        ok: false,
        status: res.status,
        message:
          json?.message ??
          (res.status === 404
            ? "Alamat pengiriman form tidak ditemukan."
            : "Terjadi kesalahan. Coba lagi."),
      });
    } catch {
      setResult({
        ok: false,
        status: 0,
        message: "Tidak bisa terhubung ke server. Cek koneksi internetmu.",
      });
    } finally {
      setLoading(false);
    }
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
          noValidate
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
                  aria-invalid={Boolean(errors[field.name])}
                  className={`${input} h-[45px]`}
                />
                {errors[field.name] && (
                  <span className={errorText}>{errors[field.name]}</span>
                )}
              </label>
            ))}
          </div>

          <label className={`${label} mt-5`}>
            What kind of partnership are you considering?
            <textarea
              name="message"
              aria-invalid={Boolean(errors.message)}
              className={`${input} h-[71px] resize-none py-3`}
            />
            {errors.message && (
              <span className={errorText}>{errors.message}</span>
            )}
          </label>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 h-[47px] w-full rounded-[35px] bg-brick text-lg font-semibold text-cream transition hover:brightness-110 disabled:opacity-60 md:text-xl"
          >
            {loading ? "Sending..." : "Send Partnership Request"}
          </button>

          {result && (
            <p
              role="status"
              className={`mt-4 text-center text-base font-medium ${
                result.ok ? "" : "text-brick"
              }`}
            >
              {result.ok
                ? result.message
                : `Error ${result.status || ""}`.trim() +
                  `: ${result.message}`}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
