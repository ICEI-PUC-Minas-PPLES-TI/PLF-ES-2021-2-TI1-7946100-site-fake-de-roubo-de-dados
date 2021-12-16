const openModal = () => document.getElementById('modalArtigos')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modalArtigos').classList.remove('active')
}


const getLocalStorage = () => JSON.parse(localStorage.getItem('db_artigo')) ?? []
const setLocalStorage = (dbArtigo) => localStorage.setItem("db_artigo", JSON.stringify(dbArtigo))

// CRUD

const deleteArtigo = (index) => {
    const dbArtigo = readArtigo()
    dbArtigo.splice(index, 1)
    setLocalStorage(dbArtigo)
}

const updateArtigo = (index, artigo) => {
    const dbArtigo = readArtigo()
    dbArtigo[index] = artigo
    setLocalStorage(dbArtigos)
}

const readArtigo = () => getLocalStorage()

const createArtigo = (artigo) => {
    const dbArtigo = getLocalStorage()
    dbArtigo.push (artigo)
    setLocalStorage(dbArtigo)  
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

//Interação com o layout

const clearFields = () => {
    const fields = document.querySelectorAll('.modalArtigos-field')
    fields.forEach(field => field.value = "")
    document.getElementById('nome').dataset.index = 'new'
}

const saveArtigo = () => {
    if (isValidFields()) {
        const artigo = {
            nome: document.getElementById('nome').value,
            artigo: document.getElementById('artigo').value,
            data: document.getElementById('data').value
        }
        const index = document.getElementById('nome').dataset.index
        if (index == 'new') {
            createArtigo(artigo)
            updateTable()
            closeModal()
        } else {
            updateArtigo(index, artigo)
            updateTable()
            closeModal()
        }
    }
}

const createRow = (artigo, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${artigo.nome}</td>
        <td>${artigo.artigo}</td>
        <td>${artigo.data}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}" >Excluir</button>
        </td>
    `
    document.querySelector('#tableArtigo>tbody').appendChild(newRow)
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tableArtigo>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const dbArtigo = readArtigo()
    clearTable()
    dbArtigo.forEach(createRow)
}

const fillFields = (artigo) => {
    document.getElementById('nome').value = artigo.nome
    document.getElementById('descricao').value = artigo.descricao
    document.getElementById('data').value = artigo.data
    document.getElementById('nome').dataset.index = artigo.index
}

const editArtigo = (index) => {
    const artigo = readArtigo()[index]
    artigo.index = index
    fillFields(artigo)
    openModal()
}

const editDelete = (event) => {
    if (event.target.type == 'button') {

        const [action, index] = event.target.id.split('-')

        if (action == 'edit') {
            editArtigo(index)
        } else {
            const artigo = readArtigo()[index]
            const response = confirm(`Deseja realmente excluir o artigo ${artigo.nome}`)
            if (response) {
                deleteArtigo(index)
                updateTable()
            }
        }
    }
}

updateTable()

// Eventos
document.getElementById('cadastrarArtigo')
    .addEventListener('click', openModal)

document.getElementById('modalArtigosClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveArtigo)

document.querySelector('#tableArtigo>tbody')
    .addEventListener('click', editDelete)

document.getElementById('cancelar')
    .addEventListener('click', closeModal)