import {LitElement, html} from 'lit-element';
import {ArticleService} from './article.service';

class ArticleDetailElement extends LitElement {
    #articleService = new ArticleService();

    constructor() {
        super();
    }

    static get properties() {
    }

    render() {
    }
}

customElements.define('article-detail', ArticleDetailElement);
