import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{ backgroundColor: "#1c1917" }}
    >
      <div
        className="w-full max-w-sm rounded-3xl p-8 flex flex-col items-center gap-4 text-center"
        style={{
          backgroundColor: "#292524",
          boxShadow: "0 4px 32px rgba(0,0,0,0.4)",
          border: "1px solid #3c3735",
        }}
      >
        <div className="text-5xl">📭</div>
        <h1 className="text-xl font-bold" style={{ color: "#fafaf9" }}>
          Invitación no encontrada
        </h1>
        <p className="text-sm" style={{ color: "#a8a29e" }}>
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
