import {LitElement, html} from 'lit-element';
import {ArticleService} from './article.service';

class ArticleDetailElement extends LitElement {
    #articleService = new ArticleService();

    constructor() {
        super();
    }

    static get properties() {
        return {
            article: { type: Object },
            location: { type: Object },
        };
    }

    async firstUpdated() {
        this.article = await this.#articleService.get(this.location.params.id);
    }

    render() {
        return html`
            <a href="/">Back</a>
            <dl>
                <dt>Title</dt>
                <dd>${this.article?.title}</dd>
                <dt>Price</dt>
                <dd>${this.article?.price}</dd>
            </dl>
        `;
    }
}

customElements.define('article-detail', ArticleDetailElement);
