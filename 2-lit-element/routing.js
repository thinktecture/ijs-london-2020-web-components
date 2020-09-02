import {Router} from '@vaadin/router';

const outlet = document.querySelector('#outlet');
const router = new Router(outlet);
router.setRoutes([
    { path: '/', component: 'article-list' },
    { path: '/articles/:id', component: 'article-detail' },
]);
