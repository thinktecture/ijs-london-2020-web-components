export class ArticleService {
    #baseUrl = 'https://articleapi.azurewebsites.net/articles';

    async getAll() {
        const response = await fetch(this.#baseUrl);
        return await response.json();
    }

    async get(id) {
        const response = await fetch(`${this.#baseUrl}/${id}`);
        return await response.json();
    }
}
