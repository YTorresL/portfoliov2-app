import { Project } from "../../domain/entities/Project"
import { IProjectRepository } from "../../domain/repositories/ProjectRepository"
import { db } from "../services/firebase/client"
import { FIREBASE_COLLECTIONS } from "../services/firebase/config"

export function ProjectRepository(): IProjectRepository {
  return {
    getAllProjects: async () => {
      return db
        .collection(FIREBASE_COLLECTIONS.PROJECTS)
        .orderBy("createdAt", "desc")
        .get()
        .then((snapshot) => {
          return snapshot.docs.map((doc) => {
            const id = doc.id
            const data = doc.data()
            const createdAt =
              data.createdAt &&
              typeof data.createdAt === "object" &&
              data.createdAt.seconds
                ? new Date(
                    data.createdAt.seconds * 1000 +
                      data.createdAt.nanoseconds / 1_000_000,
                  ).toISOString()
                : data.createdAt || null

            return JSON.parse(
              JSON.stringify({
                id,
                createdAt,
                images: data.images || [],
                type: data.type || "",
                description: data.description || "",
                languages: data.languages || [],
                title: data.title || "",
                technologies: data.technologies || [],
                links: data.links || [],
                content: data.content || [],
                state: data.state || "",
                visibility: data.visibility
              }),
            ) as Project
          })
        })
    },
  }
}
