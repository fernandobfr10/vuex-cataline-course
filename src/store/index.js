import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    // Toda mutation pode ter acesso ao state e também pode receber um payload que são os parâmetros que esse método irá receber, no caso todos
    // Mutations são comitadas, para isso usamos commit
    // Boa prática é de que apenas as mutations alterem o state
    SET_TODOS(state, todos) {
      // state.todos referencia o array todos criado dentro do estado
      state.todos = todos // Esse todos,vem da action fetchTodos
    }
  },
  actions: {
    // Actions são disparadas, para isso usamos dispatch
    // Toda Action pode receber um contexto, que faz referencia ao próprio vuex
    fetchTodos(context) {
      const todos = [
        { id: 1, text: 'Estudar HTML & CSS', done: true },
        { id: 2, text: 'Conceitos Vuex', done: true },
        { id: 3, text: 'Atomic Design', done: false },
        { id: 4, text: 'Começar com Nuxt', done: false },
        { id: 5, text: 'Back-end com Adonis', done: false }
      ]
      context.commit('SET_TODOS', todos) // A action faz um commit chamando a mutation SET_TODOS e passa para ela a const todos com os todos acima
    }
  },
  getters: {
    allTodos(state) {
      return state.todos
    },
    doneTodos(state) {
      return state.todos.filter((todo) => todo.done)
    }
  }
})
