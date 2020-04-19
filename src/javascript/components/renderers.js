export function todoRender(message, todoList) {
    let ul = document.createElement("ul");
    let content = document.createElement("li");
    let listTxt = message.slice(24);
    content.textContent = listTxt;
    ul.appendChild(content);
    todoList.appendChild(ul);
}
