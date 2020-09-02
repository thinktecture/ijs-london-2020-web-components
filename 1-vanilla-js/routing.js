function route() {
    const outlet = document.querySelector('#outlet');
    if (!outlet) {
        console.warn('No outlet defined.');
        return;
    }

    outlet.innerHTML = '';

    if (location.hash === '') {
        const articleListElement = document.createElement('article-list');
        outlet.appendChild(articleListElement);
        return;
    }

    if (location.hash.startsWith('#/articles/')) {
        const articleDetailElement = document.createElement('article-detail');
        outlet.appendChild(articleDetailElement);
    }
}

window.addEventListener('hashchange', () => route());
route();
