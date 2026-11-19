const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[0-9][0-9\s-]{6,18}$/;

export function validatePartner(raw) {
  const data = {
    name: String(raw?.name ?? "").trim(),
    email: String(raw?.email ?? "").trim().toLowerCase(),
    company: String(raw?.company ?? "").trim(),
    phone: String(raw?.phone ?? "").trim(),
    message: String(raw?.message ?? "").trim(),
  };

  const errors = {};

  if (data.name.length < 2) errors.name = "Nama minimal 2 huruf.";
  else if (data.name.length > 100) errors.name = "Nama maksimal 100 huruf.";

  if (!data.email.includes("@")) errors.email = "Email harus memakai tanda @.";
  else if (!EMAIL_RE.test(data.email))
    errors.email = "Format email belum benar, contoh: nama@perusahaan.com.";

  if (data.company.length < 2) errors.company = "Company minimal 2 huruf.";
  else if (data.company.length > 100)
    errors.company = "Company maksimal 100 huruf.";

  if (data.phone && !PHONE_RE.test(data.phone))
    errors.phone = "Nomor telepon hanya boleh angka, 7 sampai 19 digit.";

  if (data.message.length < 2)
    errors.message = "Jenis kerja sama minimal 2 huruf.";
  else if (data.message.length > 1000)
    errors.message = "Jenis kerja sama maksimal 1000 huruf.";

  return { data, errors };
}