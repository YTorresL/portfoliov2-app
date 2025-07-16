import { firestore } from "@/services/firebase/server"

export async function GET() {
  try {
    const snapshot = await firestore
      .collection("projects")
      .orderBy("create", "desc")
      .get();

    const projects = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return new Response(JSON.stringify(projects), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}
