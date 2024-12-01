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
  
addBookToLibrary("Think Like a Programmer: An Introduction to Creative Problem Solving", "V. Anton Spraul", 256, true);
render();