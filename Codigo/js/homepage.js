
let storage = [];

const relevantTopics = [
    {
        id: 1, 
        name: "Engenharia Social",
        content: "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
    },
    {
        id: 2, 
        name: "Pix",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
    },
    {
        id: 3, 
        name: "Email",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
    },
    {
        id: 4, 
        name: "SMS",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
    }
];

const createModal = (topic_id) => {

    const topic = relevantTopics.find(topic => topic.id == topic_id);

    if(!topic) {
        return;
    }

    const title = document.getElementById("relevant-title");
    title.innerHTML = topic.name;

    const body = document.getElementById("relevant-body");
    body.innerHTML = topic.content;


}

const createRelavantTopicSection = () => {
    let contentRow = document.getElementById("relevant-row");


    relevantTopics.forEach(topic => {
        
        contentRow.innerHTML += createTopicCard(topic);
        
    });

}

const createTopicCard = (topic) => {
    const topicContent = topic.content.substr(0, 150) + (topic.content.length > 150 ? '...' : '');

    let topicCard = `
    <div class="col-md-6 pb-5">
        <div class="card border-0">
            <div class="content">
                <h3 class="pb-3">${topic.name}</h3>
                <p>${topicContent}</p>
                <button class="btn btn-outline-info mt-3" onclick="createModal(${topic.id})" data-bs-toggle="modal" data-bs-target="#myModal"><span>Aprenda mais</span></button>
            </div>
        </div>
    </div>
    `;

    return topicCard;
}

createRelavantTopicSection();

function filterByKeyword(filterKeyword) {
	if (filterKeyword === ' ' || filterKeyword === ''){
		return;
	}
	
	let divSearch = document.getElementById('filteredList');
	
	if (divSearch && divSearch.firstChild){
		divSearch.removeChild(divSearch.firstChild);
	}
			
	const elementHomeID = "relevant-row";
	let newFilteredUl = document.createElement('ul'),
		newLi = document.createElement('li'), 
		list = [];
	
	let cardsHackers = JSON.parse(localStorage.getItem('db_client'));
			
	(cardsHackers || []).forEach(e => {
		list.push(e)
	});
	
	nodesHome = document.querySelector('#'+elementHomeID).childNodes;
	nodesHome.forEach(item => {
		if (item && item.nodeType && item.nodeType !== 1 && item.nextSibling) {
			list.push(item);
		}
	})
					
	try {
		(list || []).forEach(item => {
			if (item && item.nodeType && item.nodeType !== 1 && item.nextSibling) {
				let textItem = item.nextSibling.innerText.toLowerCase();
				filterKeyword = filterKeyword.toLowerCase();
			
				if (textItem.indexOf(filterKeyword) !== -1) {
					let newLiText = document.createElement('p')
					let id

					console.log(item)

					if (item && item.id) {
						id = item.id;
					} else if (item.parentElement && item.parentElement.id) {
						id = item.parentElement.id;
					}
					

					newLiText.innerHTML = '<a href="#'+id+'" title='+item.nextSibling.innerText+'">'+item.nextSibling.innerText+'</a>'
					newLi.appendChild(newLiText)
				}
			} else if (item && item.id) {
				let textItem = item.title.toLowerCase();
				filterKeyword = filterKeyword.toLowerCase();
			
				if (textItem.indexOf(filterKeyword) !== -1) {
					let newLiText = document.createElement('p')
					let id

					if (item && item.id) {
						id = item.id;
					}
					
					newLiText.innerHTML = '<a href="hackers.html#'+id+'" title='+item.innerText+'">'+item.innerText+'</a>'
					newLi.appendChild(newLiText)
				}
			}
		})

		if (newLi) {
			newFilteredUl.appendChild(newLi)
		}
	} catch (e) { 
	  console.error(e)
	}
	
	return newFilteredUl
}

let button = document.querySelector('#search')

button.onclick = function() {
	
	let keyword = document.querySelector('#keyword').value

	let filteredListItem = document.querySelector('#filteredList')
	
	filteredListItem.className += ' shadow p-5';

	if(!keyword) {
		filteredListItem.innerHTML = "Nada encontrado.";
		return;
	}

	let newList = filterByKeyword(keyword)
	const lis = newList.getElementsByTagName('li');

	for (let item of lis) {
		item.innerText.length > 0 ? null : newList.removeChild(item);
	}

	if(lis.length === 0) return filteredListItem.innerHTML = "Nada encontrado.";

	filteredListItem.appendChild(newList);

}

const getHackers = () => {
    return JSON.parse(localStorage.getItem('db_client')) || [];
}

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