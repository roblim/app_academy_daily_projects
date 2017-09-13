export const fetchAll = () => {
  return $.ajax ({
    method: 'GET',
    url: 'api/todos'
  });
};

export const postTodo = (todo) => {
  return $.ajax ({
    method: 'POST',
    url: 'api/todos',
    data: { todo: {title: todo.title, body: todo.body, done: todo.done, id: todo.id}}
  });
};
