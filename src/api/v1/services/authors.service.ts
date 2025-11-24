import { AuthorsRepository } from "../repositories/authors.repository";

export class AuthorsService {
  private repo: AuthorsRepository;

  constructor(repo: AuthorsRepository) {
    this.repo = repo;
  }

  async getAuthors() {
    return this.repo.getAllAuthors();
  }

  async getAuthor(id: string) {
    return this.repo.getAuthorById(id);
  }

  async createAuthor(data: any) {
    return this.repo.addAuthor(data);
  }

  async updateAuthor(id: string, data: any) {
    return this.repo.updateAuthor(id, data);
  }

  async deleteAuthor(id: string) {
    return this.repo.deleteAuthor(id);
  }
}
