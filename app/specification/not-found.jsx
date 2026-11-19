import Button from "@/components/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-5 text-center">
      <h1 className="text-6xl font-semibold">404</h1>
      <p className="text-xl">Halaman yang kamu cari tidak ditemukan.</p>
      <Button href="/">Kembali ke beranda</Button>
    </main>
  );
}