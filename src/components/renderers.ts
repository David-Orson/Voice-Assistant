export function todoRender(message: any, todoList: any, remover: number) {
  let ul = document.createElement("ul");
  let content = document.createElement("li");
  let listTxt = message.slice(remover);

  content.setAttribute("class", "list-item");

  content.textContent = listTxt;

  ul.appendChild(content);

  todoList.appendChild(ul);
}

export function todoDelete() {
  let listX: any = document.querySelector(".list-item");
  listX.parentNode.removeChild(listX);
}