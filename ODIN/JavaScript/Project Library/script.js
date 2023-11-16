/*const myLibrary = [];

function Book(title, author, pages, year) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;

}

function addBookToLibrary() {
  // do stuff here
  for (let i=0;i<myLibrary.length;i++){
  }
}*/


//Open pop-up
document.getElementById("newBook").addEventListener("click",function(){
  document.querySelector(".pop-up").style.display= "flex";
})
//Close pop-up after add content
document.getElementById("add").addEventListener("click",function(){
  document.querySelector(".pop-up").style.display= "none";
})