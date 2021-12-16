const checkLogin = () => {
    return JSON.parse(localStorage.getItem('logged'));
}

const auth = (event) => {
    const loginForm = document.querySelector('#loginForm');
    email = loginForm.querySelector('#email').value;
    password = loginForm.querySelector('#password').value;


    const users = JSON.parse(localStorage.getItem('users'));

    const user = users.find(user => user.email === email && user.password === password);

    if(!user) {
        loginForm.innerHTML += `
        <div class="d-flex flex-row align-items-center justify-content-center text-danger">
            <p>Email ou senha incorretos</p>
        </div>`
    } else {
        localStorage.setItem('logged', true);
        window.location.href = '/admin/homepage.html';
    }
}

const getLocalStorage2 = () => JSON.parse(localStorage.getItem('db_artigo')) ?? []
const setLocalStorage2 = (dbArtigo) => localStorage.setItem("db_artigo", JSON.stringify(dbArtigo))

const setDefaultArticles = () => {
    const articles = getLocalStorage2();

    if(articles.length <= 0) {
        articles.push({ id: 1, nome: "Pishing", data: "09/12/2021", artigo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dignissimos eaque nam autem animi incidunt quod minima fugiat itaque maiores temporibus magni quis, doloremque modi consequuntur nisi nesciunt mollitia quae" })
    }

    setLocalStorage2(articles);

}
setDefaultArticles();
const logout = () => {
    localStorage.removeItem('logged');
    window.location.href = '/index.html';
}

const setHackersStorage = () => {
    if(getHackers().length === 0) {
        const hackers = [
            {
                id: 1, 
                nome: "White Hat",
                titulo: "White Hat",
                data: "06/11/2021",
                descricao: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
                image: "./assets/white-hat.png"
            },
            {
                id: 2, 
                nome: "Black Hat",
                titulo: "Black Hat",
                data: "06/11/2021",
                descricao: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
                image: "./assets/black-hat.png"
            },
            {
                id: 3, 
                nome: "Gray Hat",
                titulo: "Gray Hat",
                data: "06/11/2021",
                descricao: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
                image: "./assets/gray-hat.png"
            },
            {
                id: 4, 
                nome: "Crackers",
                titulo: "Crackers",
                data: "06/11/2021",
                descricao: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
                image: "./assets/crackers.png"
            },
            {
                id: 5, 
                nome: "Elite",
                titulo: "Elite",
                data: "06/11/2021",
                descricao: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
                image: "./assets/elite.png"
            }
        ];
    
        hackers.forEach(hacker => {
            storage.push(hacker);
        });

	    localStorage.setItem('db_client', JSON.stringify(storage));

    
    }
}

setHackersStorage();

