class Book {
  constructor(Title, Author, ISBN) {
    this.Title = Title;
    this.Author = Author;
    this.ISBN = ISBN;
  }
}
class UserInterface {
  AddBookToArray(b ) {
    console.log(b);
    const tbody = document.getElementById('book-list');
    // créer l'element tr
    const tr = document.createElement('tr');

    tr.innerHTML = `
        <td> ${b.Title} </td>
        <td> ${b.Author}</td>
        <td> ${b.ISBN}</td>
    `;

    tbody.appendChild(tr);
    this.emptyInputs();
  }

  // vider les valeurs des entrées (Title, Author, ISBN)
  emptyInputs() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

const form = document.getElementById('book-form');

form.addEventListener('submit', createBook);

function createBook(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  if (title === '' || author === '' || isbn === '') {
    alert('remplis tous les champs');
  } else {
    // instancier un objet Book
    const livre = new Book(title, author, isbn);

    // instancier un objet UserInterface
    const ui = new UserInterface();

    ui.AddBookToArray(livre);
  }
}
