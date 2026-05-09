import { db } from "./firebase-admin";

export type Invitation = {
  listId: string;
  listName: string;
  listIcon: string;
  listIconColor: string;
  invitedEmail: string;
  invitedBy: string;
  invitedByName: string;
  status: "pending" | "accepted" | "declined";
};

export async function getInvitation(id: string): Promise<Invitation | null> {
  const doc = await db.collection("invitations").doc(id).get();
  if (!doc.exists) return null;
  return doc.data() as Invitation;
}
