export function todoDelete(message: any) {
  let itemIndex = message.slice(23);
  console.log(`item index ${itemIndex}`);

  let listX: any = document.querySelector(`item-${itemIndex}`);
  listX.parentNode.removeChild(listX);
}

export function objRender(todoObj: any, todoList: any) {
  for (let i: number = 0; i < Object.keys(todoObj).length; i++) {
    let ul = document.createElement("ul");
    let body = document.createElement("li");
    let title = document.createElement("h4");
    let content = document.createElement("p");

    title.textContent = Object.keys(todoObj)[i];
    content.textContent = todoObj[Object.keys(todoObj)[i]];

    body.setAttribute("class", Object.keys(todoObj)[i]);

    body.appendChild(title);
    body.appendChild(content);

    ul.appendChild(body);
    todoList.appendChild(ul);
  }
}
