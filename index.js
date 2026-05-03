let todos = [];

document.querySelector(".add-button").addEventListener("click", function () {
  // Add todo: save the data
  const todo = document.querySelector(".todo").value;
  const date = document.querySelector(".date").value;
  todos.push({ todo, date });

  // Add todo: generate the HTML:
  html = "";
  for (i = 0; i < todos.length; i++) {
    html += `<p>${todos[i].todo} ${todos[i].date} <button id ='delete-btn-${i}'>DELETE</button> </p>`;
  }
  document.querySelector(".todo-list").innerHTML = html;

  // Delete todo: add event listener to the delete button:

  function deleteTodo() {
    for (i = 0; i < todos.length; i++) {
      document
        .querySelector(`#delete-btn-${i}`)
        .addEventListener("click", function () {
          console.log("Education is key!");
          todos.splice(i, 1);
          html = "";
          for (i = 0; i < todos.length; i++) {
            html += `<p>${todos[i].todo} ${todos[i].date} <button id ='delete-btn-${i}'>DELETE</button> </p>`;
          }
          document.querySelector(".todo-list").innerHTML = html;
          deleteTodo();
        });
    }
  }
  deleteTodo;
});
