let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks() {
    const display = document.getElementById('library-display');
    display.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        card.classList.add('book-card');

        card.setAttribute('data-index', index);

        card.innerHTML = `
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <p>${book.pages}</p>
        <p>${book.read ? "deja lu" : "pas encore lu"}</p>
        <button class="read-btn" onclick="toggleRead(${index})">Lu</button>
        <button class="remove-btn" onclick="removeBook(${index})">Supprimer</button>
        `;
        display.appendChild(card);
    })
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function toggleRead(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
}

const modal = document.getElementById('book-modal');
const btnNewBook = document.getElementById('new-book-btn');
const btnClose = document.getElementById('close-btn');

btnNewBook.onclick = () => modal.showModal();

btnClose.onclick = () => modal.close();

const form = document.getElementById('book-form');

form.onsubmit = (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    addBookToLibrary(title, author, pages, read);

    form.reset();
    modal.close();
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, false);
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, false);
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, false);
