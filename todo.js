// OnClick - для добавления
// todoList Array
// {id, title, isDone}

const todoList = [{ id: 1, title: "I'm First", isDone: false }];

function ToDo(title) {
    this.id = Date.now()
    this.title = title
    this.isDone = false
}

const submitFormHandle = (event) => {
  event.preventDefault();
  const field = document.querySelector("#newToDoField");  // field.value
  todoList.push( new ToDo(field.value) );
  field.value = "";
  renderTodoList();
};

const renderTodoList = () => {
  const ul = document.querySelector("#todoList");
  ul.innerHTML = "";
  todoList.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item.title;
    li.id = 'li_' + item.id
    if ( item.isDone ) {
        li.classList.add('done')
    }
    li.addEventListener('click', liClickHandle)
    ul.appendChild(li);
  });
};

const liClickHandle = event => {
    let id = +event.target.id.split('_')[1]
    const index = todoList.findIndex( todo => todo.id === id )
    if ( index === -1 ) {
        return false
    }
    // todoList[index].isDone = true
    todoList[index].isDone = !todoList[index].isDone
    renderTodoList()
}

document
  .querySelector("#todoForm")
  .addEventListener("submit", submitFormHandle);

renderTodoList()
