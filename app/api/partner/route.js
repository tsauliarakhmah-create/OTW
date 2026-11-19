import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { validatePartner } from "@/lib/validate";

function reply(status, message, errors) {
  return NextResponse.json(
    { ok: status < 400, status, message, errors },
    { status },
  );
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return reply(400, "Data yang dikirim tidak valid. Coba kirim ulang form.");
  }

  const { data, errors } = validatePartner(body);
  if (Object.keys(errors).length > 0) {
    return reply(400, "Periksa lagi isian form kamu.", errors);
  }

  try {
    const supabase = getSupabase();
    const { error } = await supabase.from("partners").insert({
      name: data.name,
      email: data.email,
      company: data.company,
      phone: data.phone || null,
      message: data.message,
    });

    if (error) throw error;

    return reply(201, "Terima kasih! Permintaan partnership kamu sudah kami terima.");
  } catch (err) {
    console.error("POST /api/partner gagal:", err);
    return reply(500, "Server sedang bermasalah. Coba lagi beberapa saat lagi.");
  }
}