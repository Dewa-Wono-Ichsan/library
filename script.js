const myLibrary = []

function Book(title, author, pages, read, language, genre) {
    
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.language = language
    this.genre = genre
}

function addBookToLibrary() {

    const containerBook = document.querySelector('div.container-book')
    const containerInformationBook = document.createElement('div')
    containerInformationBook.classList.toggle('container-information-book')
    containerBook.appendChild(containerInformationBook)

    function displayBook(structureDoc, classDoc, contentDoc, container) {

        const create = document.createElement(`${structureDoc}`)
        create.classList.toggle(`${classDoc}`)
        create.textContent = myLibrary[myLibrary.length-1][`${contentDoc}`]
        container.appendChild(create)
    }

    const selectorInput = {
    
        'title book': document.querySelector('input#title-book'),
        'author book': document.querySelector('input#author-book'),
        'pages book': document.querySelector('input#pages-book'),
        'read book': document.querySelector('input[name=read-progress]:checked'),
        'language book': document.querySelector('input#language'),
        'genre book': document.querySelector('input#genre-book'),
    }
    
    myLibrary.push(

        new Book(

            selectorInput['title book'].value,
            selectorInput['author book'].value,
            selectorInput['pages book'].value,
            selectorInput['read book'].value,
            selectorInput['language book'].value,
            selectorInput['genre book'].value,
        )
    )

    displayBook('div', 'title-book', 'title', containerInformationBook)
    displayBook('div', 'author-book', 'author', containerInformationBook)
    displayBook('div', 'pages-book', 'pages', containerInformationBook)
    displayBook('div', 'read-progress-book', 'read', containerInformationBook)
    displayBook('div', 'language-book', 'language', containerInformationBook)
    displayBook('div', 'genre-book', 'genre', containerInformationBook)

    selectorInput['title book'].value = ''
    selectorInput['author book'].value = ''
    selectorInput['pages book'].value = ''
    selectorInput['language book'].value = ''
    selectorInput['genre book'].value = ''

    event.preventDefault()
}

document.querySelector('button[type=submit]').addEventListener('click', addBookToLibrary)