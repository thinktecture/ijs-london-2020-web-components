import {ArticleService} from './article.service.js';

class ArticleDetailElement extends HTMLElement {
    #articleService = new ArticleService();

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
    }
}

customElements.define('article-detail', ArticleDetailElement);
