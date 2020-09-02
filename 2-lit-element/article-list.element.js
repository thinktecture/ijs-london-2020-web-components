import {LitElement, html} from 'lit-element';
import {ArticleService} from './article.service.js';

class ArticleListComponent extends LitElement {
    #articleService = new ArticleService();

    constructor() {
        super();
        this.articles = [];
        this.loadArticles();
    }

    static get properties() {
        return { articles: { type: Array } };
    }

    async loadArticles() {
        this.articles = await this.#articleService.getAll();
    }

    render() {
        return html`<ul>${this.articles.map(article => html`<li><a href="/articles/${article.id}">${article.title}</a></li>`)}</ul>`
    }
}

customElements.define('article-list', ArticleListComponent)
