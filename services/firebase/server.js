import admin from "firebase-admin"

try {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  })
} catch (error) {
  if (!error.message.includes("already exists"))
    console.error("Firebase admin initialization error", error.stack)
}

export const firestore = admin.firestore()
