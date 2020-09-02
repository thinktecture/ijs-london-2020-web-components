import { ArticleService } from './article.service.js';

class ArticleListComponent extends HTMLElement {
    #articleService = new ArticleService();

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        const articles = await this.#articleService.getAll();
        const listElement = document.createElement('ul');
        articles.forEach(article => {
            const listItem = document.createElement('li');
            const articleLink = document.createElement('a');
            articleLink.href = `#/articles/${article.id}`;
            articleLink.innerText = article.title;
            listItem.appendChild(articleLink);
            listElement.appendChild(listItem);
        });
        this.shadowRoot.appendChild(listElement);
    }
}

customElements.define('article-list', ArticleListComponent);
