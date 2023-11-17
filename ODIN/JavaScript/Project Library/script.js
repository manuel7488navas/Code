






















//Open pop-up
document.getElementById("newBook").addEventListener("click",function(){
  document.querySelector(".pop-up").style.display= "flex";
})
//Close pop-up
document.getElementById("add").addEventListener("click",function(){
  document.querySelector(".pop-up").style.display= "none";
});


let myLibrary = [];

function Book(title, author) {
  // the constructor...
  this.title = title;
  this.author = author;


}

 
function addBookToLibrary() {
  // do stuff here
  const title = document.getElementById("title");
  title.textContent = document.getElementById("title").value;
  const author = document.getElementById("author");
  author.textContent = document.getElementById("author").value;
  const btn = document.getElementById("add"); 
  btn.onclick = ()=>{
  const book = new Book(title.value, author.value);
  myLibrary.push(book);  

  }
 

 };


addBookToLibrary();

console.log(myLibrary);
