export default {
  // changeName (state, newName) {
  //   state.name = newName
  // }
  addTodo (state, todo) {
    state.todos.push(todo)
  },
  del (state, ind) {
    state.todos.splice(ind)
  }
}
