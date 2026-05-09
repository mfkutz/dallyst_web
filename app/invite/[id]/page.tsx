import { getInvitation } from "@/lib/invitations";
import { notFound } from "next/navigation";
import Image from "next/image";

export const dynamic = "force-dynamic";

const ICON_EMOJI: Record<string, string> = {
  "cart-outline": "🛒",
  "home-outline": "🏠",
  "briefcase-outline": "💼",
  "school-outline": "🎓",
  dumbbell: "🏋️",
  airplane: "✈️",
  "food-fork-drink": "🍽️",
  "currency-usd": "💵",
  "heart-outline": "❤️",
  pill: "💊",
  "baby-carriage": "👶",
  paw: "🐾",
  "gift-outline": "🎁",
  "map-marker-outline": "📍",
  "coffee-outline": "☕",
  tools: "🔧",
  "star-outline": "⭐",
  bike: "🚲",
};

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.martinkutzner.cotask";
const APP_SCHEME = "dallyst://invite/";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const invitation = await getInvitation(id);
  if (!invitation) return { title: "Invitation — Dallyst" };
  return {
    title: `${invitation.invitedByName} te invitó a ${invitation.listName} — Dallyst`,
    description: `Únete a la lista "${invitation.listName}" en Dallyst`,
  };
}

export default async function InvitePage({ params }: Props) {
  const { id } = await params;
  const invitation = await getInvitation(id);

  if (!invitation) notFound();

  const deepLink = `${APP_SCHEME}${id}`;

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{ backgroundColor: "#1c1917" }}
    >
      {/* Logo */}
      <div className="mb-8 flex items-center gap-2">
        <span
          className="text-2xl font-bold tracking-tight"
          style={{ color: "#fafaf9" }}
        >
          Dallyst
        </span>
      </div>

      {/* Card */}
      <div
        className="w-full max-w-sm rounded-3xl p-8 flex flex-col items-center gap-6 text-center"
        style={{
          backgroundColor: "#292524",
          boxShadow: "0 4px 32px rgba(0,0,0,0.4)",
          border: "1px solid #3c3735",
        }}
      >
        {/* List icon */}
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl"
          style={{ backgroundColor: "rgba(237,84,31,0.18)" }}
        >
          {ICON_EMOJI[invitation.listIcon] ?? "📋"}
        </div>

        {/* Text */}
        <div className="flex flex-col gap-2">
          <p className="text-sm" style={{ color: "#a8a29e" }}>
            <span className="font-semibold" style={{ color: "#fafaf9" }}>
              {invitation.invitedByName}
            </span>{" "}
            te invitó a unirte a
          </p>
          <h1 className="text-2xl font-bold" style={{ color: "#fafaf9" }}>
            {invitation.listName}
          </h1>
        </div>

        {/* CTAs */}
        <div className="w-full flex flex-col gap-3 mt-2">
          <a
            href={deepLink}
            className="w-full py-3 px-6 font-semibold rounded-2xl transition-opacity hover:opacity-90 text-white text-center"
            style={{ backgroundColor: "#ED541F" }}
          >
            Abrir en Dallyst
          </a>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-6 font-semibold rounded-2xl transition-colors text-center"
            style={{
              backgroundColor: "#3c3735",
              color: "#fafaf9",
              border: "1px solid #57534e",
            }}
          >
            Descargar en Play Store
          </a>
        </div>

        <p className="text-xs" style={{ color: "#78716c" }}>
          Abrí el link desde tu dispositivo Android
        </p>
      </div>

      {/* Footer */}
      <p className="mt-8 text-xs" style={{ color: "#57534e" }}>
        © 2026 Dallyst
      </p>
    </main>
  );
}
