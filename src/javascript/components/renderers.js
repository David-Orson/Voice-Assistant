export function objDelete(message, todoObj) {
    let itemIndex = message.slice(23);
    console.log(`item index ${itemIndex}`);
    delete todoObj[itemIndex];
}
export function objRender(todoObj, todoList) {
    for (let i = 0; i < Object.keys(todoObj).length; i++) {
        let ul = document.createElement("ul");
        let body = document.createElement("li");
        let title = document.createElement("h4");
        let content = document.createElement("p");
        title.textContent = Object.keys(todoObj)[i];
        content.textContent = todoObj[Object.keys(todoObj)[i]];
        body.setAttribute("class", `item-${Object.keys(todoObj)[i]}`);
        body.appendChild(title);
        body.appendChild(content);
        ul.appendChild(body);
        todoList.appendChild(ul);
    }
}
