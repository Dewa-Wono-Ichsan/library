const myLibrary = []

function Book(title, author, pages, read) {
    
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    
}

function addBookToLibrary() {

    const selectorInput = {
    
        'title book': document.querySelector('input#title-book'),
        'author book': document.querySelector('input#author-book'),
        'pages book': document.querySelector('input#pages-book'),
        'read book': document.querySelector('input[name=read-progress]:checked'),
        }
    
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

document.querySelector('button[type=submit]').addEventListener('click', AddBookToLibrary)