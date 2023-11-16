let myLibrary = [];

/*function Book(title, author, pages, year) {
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
//Close pop-up
document.getElementById("add").addEventListener("click",function(){
  document.querySelector(".pop-up").style.display= "none";
});

let inputTitle = "";
function input(){
    document.getElementById("title").addEventListener("input",function(){
      inputTitle = document.getElementById("title").value;
      console.log(inputTitle);
    });
 

  }

 

    console.log(input())
