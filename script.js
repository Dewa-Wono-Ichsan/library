const myLibrary = []

const selectorInput = {

    'title book': document.querySelector('input#title-book'),
    'author book': document.querySelector('input#author-book'),
    'pages book': document.querySelector('input#pages-book'),
    'read book': document.querySelector('input#read-book'),
    'submit book': document.querySelector('button[type=submit]'),

}

function Book(title, author, pages, read) {

    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    
}

function AddBookToLibrary() {

    myLibrary.push(
        new Book(
            selectorInput['title book'].value,
            selectorInput['author book'].value,
            selectorInput['pages book'].value,
            selectorInput['read book'].value,
        )
    )
    event.preventDefault()

}

selectorInput['submit book'].addEventListener('click', AddBookToLibrary)