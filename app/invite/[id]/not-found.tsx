import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{ backgroundColor: "#f7f6f4" }}
    >
      <div
        className="w-full max-w-sm rounded-3xl p-8 flex flex-col items-center gap-4 text-center"
        style={{
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        }}
      >
        <div className="text-5xl">📭</div>
        <h1 className="text-xl font-bold" style={{ color: "#1a1918" }}>
          Invitación no encontrada
        </h1>
        <p className="text-sm" style={{ color: "#6b6560" }}>
          Este link puede haber expirado o ya fue aceptado.
        </p>
        <Link
          href="/"
          className="mt-2 text-sm font-semibold"
          style={{ color: "#ED541F" }}
        >
          Ir a Dallyst →
        </Link>
      </div>
    </main>
  );
}
