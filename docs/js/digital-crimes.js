const getLocalStorage = () => JSON.parse(localStorage.getItem('db_artigo')) ?? []
const setLocalStorage = (dbArtigo) => localStorage.setItem("db_artigo", JSON.stringify(dbArtigo))

const setDefaultArticles = () => {
    const articles = getLocalStorage();

    if(articles.length <= 0) {
        articles.push({ id: 1, nome: "Pishing", data: "09/12/2021", artigo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dignissimos eaque nam autem animi incidunt quod minima fugiat itaque maiores temporibus magni quis, doloremque modi consequuntur nisi nesciunt mollitia quae" })
    }


    setLocalStorage(articles);

}

setDefaultArticles();

const createArticles = () => {
    const artigosHtml = document.getElementById('artigos');
    getLocalStorage().forEach(artigo => {
        artigosHtml.innerHTML += `
        <div class="col-md-12 shadow p-3 mt-5">
            <h4>${artigo.nome} - ${artigo.data}</h4>

            <p>${artigo.artigo}</p>
        </div>
        `
    });
}


createArticles();


const menuAccess = () => {
    const menu = document.getElementById('menuList');

    if(localStorage.getItem('logged') == 'true') {
        menu.innerHTML += `
        <li class="nav-item menu-item">
            <a class="nav-link text-info" href="./admin/homepage.html">Painel Administrador</a>
        </li>
        `;
    } else {
        menu.innerHTML += `
        <li class="nav-item menu-item">
            <a class="nav-link text-info" href="./admin/login/index.html">Login</a>
        </li>
        `;
    }
}

menuAccess();