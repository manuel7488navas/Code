//Open pop-up
const dialog = document.querySelector("dialog");

document.getElementById("newBook").addEventListener("click",()=>{
  dialog.showModal();
});


//Close pop-up

document.getElementById("close").addEventListener("click", () => {
  dialog.close();

});


//My library...
let myLibrary = [
  {
		title: 'The unicorn',
		author: 'Iris Murdoch',
		pages: 345,
    year: 1969,
	},

];
  // the constructor...
function Book(title, author, pages, year) {

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

  const buttonAdd = document.getElementById("add"); 



  const book = new Book(title.value, author.value, pages.value, year.value);
  myLibrary.push(book);
  console.log(myLibrary);


  dialog.close();
  }

  



  function createCard(){

      const card =document.createElement("div");
      card.id ="card";
      wrapper.appendChild(card);

      const title = document.createElement("h1");
      title.id = "title";
      card.appendChild(title);
      title.textContent = document.getElementById("title").value;

      const author = document.createElement("h2");
      author.id = "author";
      card.appendChild(author);
      author.textContent = document.getElementById("author").value;

      const pages = document.createElement("h3");
      pages.id = "pages";
      card.appendChild(pages);
      pages.textContent =document.getElementById("pages").value +" Pages";

      const year = document.createElement("h3");
      year.id = "year";
      card.appendChild(year);
      year.textContent = "Year: "+document.getElementById("year").value;


      const deleteButton = document.createElement("button");
      deleteButton.textContent="X";
      deleteButton.id ="deleteButton";
      card.appendChild(deleteButton);
      deleteButton.addEventListener("click", function(){
        deleteCard();
      });
  
      
      };

    
  


function deleteCard(){
  const wrapper = document.getElementById("wrapper");
  deleteButton.addEventListener("click", () => {
    wrapper.removeChild(card);
      
     });
}