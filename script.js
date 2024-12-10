const myLibrary = [];

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    //the contructor...
}

function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}

function render() {
    const libraryBook = document.querySelector("#library");
    libraryBook.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
      const book = myLibrary[i]; // Get each book library array
      const bookEl = document.createElement("div") // Create a new div for the book
      bookEl.classList.add("book-card"); 
  
    bookEl.innerHTML = `
     <p><strong>Title:</strong> ${book.title}</p>
     <p><strong>Author:</strong> ${book.author}</p>
     <p><strong>Pages:</strong> ${book.pages}</p>
     <p><strong>Status:</strong> ${book.isRead ? "Read" : "Not Read"}</p>
     `;
  
    // Append book element to library container
    libraryBook.appendChild(bookEl);
    }
  }
  
// Function to create and display the form
function createForm() {
  if (document.querySelector("#bookForm")) return;

  const formContainer = document.createElement("div");
  formContainer.innerHTML = `
    <form id="bookForm">
      <label for="title">Title:</label>
      <input type="text" id="title" required>
      <br>
      <label for="author">Author:</label>
      <input type="text" id="author" required>
      <br>
      <label for="pages">Pages:</label>
      <input type="number" id="pages" required>
      <br>
      <label for="isRead">Read:</label>
      <input type="checkbox" id="isRead">
      <br>
      <button type="submit">Add Book</button>
      <button type="button" id="cancelButton">Cancel</button>
    </form>
  `;

  document.body.appendChild(formContainer);

  // Add event listener for cancel button
  document.querySelector("#cancelButton").addEventListener("click", () => {
    formContainer.remove();
  });

  document.querySelector("#bookForm").addEventListener("submit", handleFormSubmit);
}

function handleFormSubmit(event) {
  event.preventDefault();

const title = document.querySelector("#title").value;
const author = document.querySelector("#author").value;
const pages = document.querySelector("#pages").value;
const isRead = document.querySelector("#isRead").checked;

// Add new book to library
myLibrary.push(new Book(title, author, pages, isRead));

// Re-render library and remove form
render();
document.querySelector("#bookForm").parentElement.remove();
}

document.querySelector("#newBookButton").addEventListener("click", createForm);
document.querySelector("#library").addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-book")) {
    const bookIndex = event.target.dataset.index
    myLibrary.splice(bookIndex, 1)
    render(); 
  }
});

render();