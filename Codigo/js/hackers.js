

let storage = [];

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


const createHackers = () => {
    const hackersRow = document.getElementById("hackers-row");

    getHackers().forEach(hacker => {
        hackersRow.innerHTML += createHackersCard(hacker);
    });
	
}

const getHackers = () => {
    return JSON.parse(localStorage.getItem('db_client')) || [];
}

const createHackersCard = (hacker) => {

    if(hacker.image) {
        return `
        <div class="col-md-12 shadow pt-3 mb-5">
            <div class="row d-flex flex-row align-items-center justify-descricao-between">
                <div class="col-md-8">
                    <div class="card border-0">
                        <div class="card-body" id=${hacker.id}>
                            <h5 class="card-title hackers-title">${hacker.titulo} - ${hacker.data}</h5>
                            <p class="card-text">${hacker.descricao}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <img src="${hacker.image}" class="img-fluid p-3" alt="">
                </div>
            </div>
        </div>
        `;
    }

    return `
    <div class="col-md-12 shadow pt-3 mb-5">
        <div class="row d-flex flex-row align-items-center justify-descricao-between">
            <div class="col-md-12">
                <div class="card border-0">
                    <div class="card-body" id=${hacker.id}>
                        <h5 class="card-title hackers-title">${hacker.titulo} - ${hacker.data}</h5>
                        <p class="card-text">${hacker.descricao}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

   
}



setHackersStorage();
createHackers();


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