const myLibrary = []

function Book(title, author, pages, read, language, genre) {
    
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.language = language
    this.genre = genre
}

Book.prototype.sayHello = {
    say: function() {alert('hello world!')},
}

function addBookToLibrary() {

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

    selectorInput['title book'].value = ''
    selectorInput['author book'].value = ''
    selectorInput['pages book'].value = ''
    selectorInput['language book'].value = ''
    selectorInput['genre book'].value = ''

    event.preventDefault()

}

document.querySelector('button[type=submit]').addEventListener('click', addBookToLibrary)