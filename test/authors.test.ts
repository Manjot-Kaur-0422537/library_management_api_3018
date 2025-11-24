import { db } from "../src/api/v1/config/firebaseConfig";
import { Author } from "../src/api/v1/models/authorModels";

const COLLECTION = "authors";

export class AuthorsRepository {
  async getAllAuthors(): Promise<Author[]> {
    const snapshot = await db.collection(COLLECTION).get();
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Omit<Author, "id">)
    }));
  }

  async getAuthorById(id: string): Promise<Author | null> {
    const doc = await db.collection(COLLECTION).doc(id).get();
    if (!doc.exists) return null;

    return {
      id: doc.id,
      ...(doc.data() as Omit<Author, "id">)
    };
  }

  async addAuthor(data: any): Promise<Author> {
    const ref = await db.collection(COLLECTION).add({
      ...data,
      createdAt: new Date().toISOString()
    });
    const doc = await ref.get();

    return {
      id: doc.id,
      ...(doc.data() as Omit<Author, "id">)
    };
  }

  async updateAuthor(id: string, data: any): Promise<Author | null> {
    const ref = db.collection(COLLECTION).doc(id);
    const doc = await ref.get();
    if (!doc.exists) return null;

    await ref.update({
      ...data,
      updatedAt: new Date().toISOString()
    });

    const updated = await ref.get();

    return {
      id: updated.id,
      ...(updated.data() as Omit<Author, "id">)
    };
  }

  async deleteAuthor(id: string): Promise<boolean> {
    const ref = db.collection(COLLECTION).doc(id);
    const doc = await ref.get();
    if (!doc.exists) return false;

    await ref.delete();
    return true;
  }
}
