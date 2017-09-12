export const allTodos = (state) => (
  Object.keys(state.todos).map((key) => state.todos[key])
);

export const allSteps = (state) => (
  Object.keys(state.steps).map((key) => state.steps[key])
);

export const stepsByTodoId = (state, todo_id) => {
  let result = [];
  let steps = allSteps(state);
  steps.forEach((step) => {
    if (step.todo_id === todo_id) {
      result.push(step);
    }
  });
  return result;
};

window.stepsByTodoId = stepsByTodoId;
window.allSteps = allSteps;
