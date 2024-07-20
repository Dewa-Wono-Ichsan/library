const myLibrary = []

const selectorInput = {

    'title book': document.querySelector('input#title-book'),
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
        new Book(selectorInput['title book'].value)
    )
    event.preventDefault()

}

selectorInput['submit book'].addEventListener('click', AddBookToLibrary)