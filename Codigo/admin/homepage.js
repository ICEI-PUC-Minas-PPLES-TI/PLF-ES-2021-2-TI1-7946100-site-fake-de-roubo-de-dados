const getHackersSize = () => {
    const hackers = localStorage.getItem('db_client') ? JSON.parse(localStorage.getItem('db_client')) : [];
    return hackers.length;
}

const getArticlesSize = () => {
    const articles = localStorage.getItem('db_artigo') ? JSON.parse(localStorage.getItem('db_artigo')) : [];
    return articles.length;
}

const fillDashboardCounters = () => {
    const hackers = getHackersSize();
    const articles = getArticlesSize();
    document.getElementById('hackers-counter').innerHTML = hackers;
    document.getElementById('articles-counter').innerHTML = articles;
}

fillDashboardCounters();