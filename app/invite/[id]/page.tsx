import { getInvitation } from "@/lib/invitations";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.martinkutzner.cotask";
const APP_SCHEME = "dallyst://invite/";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const invitation = await getInvitation(id);
  if (!invitation) return { title: "Invitation — Dallyst" };
  return {
    title: `${invitation.invitedByName} invited you to ${invitation.listName} — Dallyst`,
    description: `Join the list "${invitation.listName}" on Dallyst`,
  };
}

export default async function InvitePage({ params }: Props) {
  const { id } = await params;
  const invitation = await getInvitation(id);

  if (!invitation) notFound();

  const deepLink = `${APP_SCHEME}${id}`;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 p-6">
      <div className="max-w-sm w-full bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 flex flex-col items-center gap-6 text-center">
        {/* List icon */}
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl"
          style={{ backgroundColor: invitation.listIconColor + "33" }}
        >
          {invitation.listIcon}
        </div>

        {/* Invitation text */}
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold text-gray-800 dark:text-gray-100">
              {invitation.invitedByName}
            </span>{" "}
            invited you to join
          </p>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {invitation.listName}
          </h1>
        </div>

        {/* CTAs */}
        <div className="w-full flex flex-col gap-3">
          <a
            href={deepLink}
            className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-2xl transition-colors"
          >
            Open in Dallyst
          </a>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-6 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold rounded-2xl transition-colors"
          >
            Download on Play Store
          </a>
        </div>

        <p className="text-xs text-gray-400 dark:text-gray-600">
          Open the link from your Android device
        </p>
      </div>
    </main>
  );
}
