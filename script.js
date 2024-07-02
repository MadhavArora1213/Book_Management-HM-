function addBook() {
  // Get the values from the input fields
  var bookName = document.getElementById("bookName").value;
  var authorName = document.getElementById("authorName").value;

  // Create a new div element for the book
  var bookItem = document.createElement("div");
  bookItem.className = "bookItem";
  bookItem.innerText =
    "Book: " + bookName + "\n\n Author: " + authorName + "\n";
  var removeButton = document.createElement("button");
  removeButton.className = "removeButton";
  removeButton.innerText = "Remove";
  removeButton.onclick = function () {
    bookItem.remove();
  };

  bookItem.appendChild(removeButton);
  bookItem.style.width = "90%";
  bookItem.style.height = "90px";
  bookItem.style.margin = "10px 10px";
  bookItem.style.padding = "20px 20px";
  bookItem.style.backgroundColor = "#ADD899";
  bookItem.style.borderRadius = "10px";
  bookItem.style.boxShadow = "2px 2px 5px 5px lightgrey";
  removeButton.style.padding = "10px 10px";
  removeButton.style.borderRadius = "1vw";
  removeButton.style.backgroundColor = "black";
  removeButton.style.color = "white";
  removeButton.style.marginTop = "5px";
  document.getElementById("bookList").appendChild(bookItem);
  document.getElementById("bookName").value = "";
  document.getElementById("authorName").value = "";
}
var btn = document.getElementsByClassName("btn");
var input = document.querySelectorAll("input");
// btn.addEventListener("click", () => {
//   if (input == "") {
//     alert("Please enter the book name and author name");
//   }
// });
