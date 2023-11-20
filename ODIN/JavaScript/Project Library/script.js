//Open pop-up
const dialog = document.querySelector("dialog");

document.getElementById("newBook").addEventListener("click",()=>{
  dialog.showModal();
});


//Close pop-up

document.getElementById("close").addEventListener("click", () => {
  dialog.close();

});



let myLibrary = [];

function Book(title, author, pages, year) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;

}

//Create cards and adds to library
function addBookToLibrary() {

  const container = document.getElementById("container");
  const wrapper = document.getElementById("wrapper");
  container.appendChild(wrapper);

  let title = document.getElementById("title");
  title.textContent = document.getElementById("title").value;

  let author = document.getElementById("author");
  author.textContent = document.getElementById("author").value;

  let pages = document.getElementById("pages");
  pages.textContent = document.getElementById("pages").value;

  let year = document.getElementById("year");
  year.textContent = document.getElementById("year").value;

  const btn = document.getElementById("add"); 

  btn.onclick = ()=>{
  const book = new Book(title.value, author.value, pages.value, year.value);
  myLibrary.push(book); 
  

  const card =document.createElement("div");
  card.id ="card";
  wrapper.appendChild(card);

  title = document.createElement("h1");
  title.id = "title";
  card.appendChild(title);
  title.textContent = document.getElementById("title").value;

  author = document.createElement("h2");
  author.id = "author";
  card.appendChild(author);
  author.textContent = document.getElementById("author").value;

  pages = document.createElement("h3");
  pages.id = "pages";
  card.appendChild(pages);
  pages.textContent =document.getElementById("pages").value +" Pages";

  year = document.createElement("h3");
  year.id = "year";
  card.appendChild(year);
  year.textContent = "Year: "+document.getElementById("year").value;


  const button = document.createElement("button");
  button.textContent="X";
  button.id ="deleteButton";
  card.appendChild(button);



  dialog.close();
  
  }


 
 };

addBookToLibrary();
