const myLibrary = [];

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function displayBooks() {
    const library = document.querySelector("#library")
    myLibrary.forEach((book) => {
        const newBook = document.createElement("div")
        newBook.classList.add("book")
        library.appendChild(newBook)

        const title = document.createElement("div")
        title.textContent = book.title
        title.setAttribute("style", "font-weight: 900")

        const author = document.createElement("div")
        author.textContent = book.author

        const pages = document.createElement("div")
        pages.textContent = book.pages + " pages"

        const read = document.createElement("div")
        read.textContent = `Book was read: ${book.read ? 'Yes' : 'No'}`

        newBook.appendChild(title)
        newBook.appendChild(author)
        newBook.appendChild(pages)
        newBook.appendChild(read)
    })
}

function clearDisplay() {
    const library = document.querySelector("#library")
    library.innerHTML = ''
}

const form = document.querySelector("#myForm")
form.addEventListener('submit', () => {
    event.preventDefault()

    const title = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const pages = Number(document.querySelector("#pages").value)
    const read = document.querySelector("#read").value === "Yes"

    const book = new Book(title, author, pages, read, crypto.randomUUID())
    addBookToLibrary(book)

    form.reset()
    clearDisplay()
    displayBooks()
})

const book1 = new Book("L'Etranger", "Albert Camus", 100, true, crypto.randomUUID())
const book2 = new Book("Crime and punishment", "Dostoevsky", 300, true, crypto.randomUUID())
const book3 = new Book("Brothers Karamazov", "Dostoevsky", 900, true, crypto.randomUUID())
const book4 = new Book("The Trial", "Kafka", 200, true, crypto.randomUUID())
const book5 = new Book("Les Miserables", "Victor Hugo", 900, false, crypto.randomUUID())
const book6 = new Book("Candide", "Voltaire", 300, false, crypto.randomUUID())

addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)
addBookToLibrary(book4)
addBookToLibrary(book5)
addBookToLibrary(book6)

displayBooks()