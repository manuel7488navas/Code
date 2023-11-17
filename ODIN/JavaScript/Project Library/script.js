
//Open pop-up
document.getElementById("newBook").addEventListener("click",function(){
  document.querySelector(".pop-up").style.display= "flex";
})
//Close pop-up
document.getElementById("add").addEventListener("click",function(){
  document.querySelector(".pop-up").style.display= "none";
});


let myLibrary = [];

function Book(title, author, pages, year) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;

}

 
function addBookToLibrary() {
  // do stuff here
  const title = document.getElementById("title");
  title.textContent = document.getElementById("title").value;

  const author = document.getElementById("author");
  author.textContent = document.getElementById("author").value;

  const pages = document.getElementById("pages");
  pages.textContent = document.getElementById("pages").value;

  const year = document.getElementById("year");
  year.textContent = document.getElementById("year").value;

  const btn = document.getElementById("add"); 

  btn.onclick = ()=>{
  const book = new Book(title.value, author.value, pages.value, year.value);
  myLibrary.push(book);  
  return myLibrary;
  }
 
 };


addBookToLibrary();

console.log(myLibrary);
