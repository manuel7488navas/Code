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
let myLibrary = [];
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

  const title = document.getElementById("title");
  title.textContent = document.getElementById("title").value;

  const author = document.getElementById("author");
  author.textContent = document.getElementById("author").value;

  const pages = document.getElementById("pages");
  pages.textContent = document.getElementById("pages").value;

  const year = document.getElementById("year");
  year.textContent = document.getElementById("year").value;

  const buttonAdd = document.getElementById("add"); 

  const book = new Book(title.value, author.value, pages.value, year.value);
  myLibrary.push(book);
  console.log(myLibrary);
  resetInputFields();
  dialog.close();
  }

  



  function createCard(){
    const wrapper = document.getElementById("wrapper");

    
      const card =document.createElement("div");
      card.id ="card";
      card.setAttribute("index", myLibrary.length); 
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

      const toggle = document.createElement("label");
      toggle.classList.add("switch");
      card.appendChild(toggle);

      const read = document.createElement("h3");
      read.textContent="Read?";
      toggle.appendChild(read);

      const input = document.createElement("input");
      input.type="checkbox";
      input.checked = false;
      toggle.appendChild(input);

      const span=document.createElement("span");
      span.classList.add("slider", "round");
      toggle.appendChild(span);



      const deleteButton = document.createElement("button");
      deleteButton.textContent="X";
      deleteButton.id ="deleteButton";
      card.appendChild(deleteButton);
      deleteButton.addEventListener("click", function(){
        wrapper.removeChild(card); 

        // Retrieve the index from the data attribute
        const cardIndex = parseInt(card.getAttribute("index"), 10);

        // Remove the corresponding book from myLibrary
        if (!isNaN(cardIndex)) {
          myLibrary.splice(cardIndex, 1);
          console.log(myLibrary);
      }
      });
      
      };

      function resetInputFields() {
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("pages").value = "";
        document.getElementById("year").value = "";
      }