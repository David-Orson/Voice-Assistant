export function todoRender(message, todoList, remover) {
    let ul = document.createElement("ul");
    let content = document.createElement("li");
    let listTxt = message.slice(remover);
    content.textContent = listTxt;
    ul.appendChild(content);
    todoList.appendChild(ul);
}
