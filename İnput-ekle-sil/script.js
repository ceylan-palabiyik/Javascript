const addbutton = document.getElementById("addToDo");
const clearbutton = document.getElementById("clearToDo");
const inputtext = document.getElementById("inputText");
const todocontainer = document.getElementById("toDoContainer");

addbutton.addEventListener("click", function () {

  if(!inputtext.value){
    alert("lütfen bir içerik giriniz")
    return
  }
  const paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  todocontainer.appendChild(paragraph);
  paragraph.innerHTML = inputtext.value;
  inputtext.value = "";

  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });

  paragraph.addEventListener("dblclick", function () {
    todocontainer.removeChild(paragraph);
  });

  clearbutton.addEventListener("click", function () {
    paragraph.remove()
  });
});
