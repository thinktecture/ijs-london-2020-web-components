import {ArticleService} from './article.service.js';

class ArticleDetailElement extends HTMLElement {
    #articleService = new ArticleService();

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async loadArticle() {
        const id = location.hash.replace('#/articles/', '');
        const { title, price } = await this.#articleService.get(id);
        this.shadowRoot.querySelector('#title').innerText = title;
        this.shadowRoot.querySelector('#price').innerText = price;
    }

    async connectedCallback() {
        this.shadowRoot.innerHTML = `
            <a href="#">Back</a>
            <dl>
                <dt>Title</dt>
                <dd id="title"></dd>
                <dt>Price</dt>
                <dd id="price"></dd>
            </dl>
        `;
        await this.loadArticle();
    }
}

customElements.define('article-detail', ArticleDetailElement);
