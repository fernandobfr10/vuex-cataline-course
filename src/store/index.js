import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    // Toda mutation pode ter acesso ao state e também pode receber um payload que são os parâmetros que esse método irá receber, no caso todos
    // Mutations são comitadas, para isso usamos commit para enviarmos dados para uma mutation
    // Boa prática é de que apenas as mutations alterem o state
    SET_TODOS(state, todos) {
      // state.todos referencia o array todos criado dentro do estado
      state.todos = todos // Esse todos,vem da action fetchTodos
    }
  },
  actions: {
    // Actions são disparadas, para isso usamos dispatch para dispara-las
    // Toda Action pode receber um contexto, que faz referencia ao próprio vuex
    fetchTodos(context) {
      const todos = [
        { id: 1, text: 'Estudar HTML & CSS', done: true },
        { id: 2, text: 'Conceitos Vuex', done: true },
        { id: 3, text: 'Atomic Design', done: false },
        { id: 4, text: 'Começar com Nuxt', done: false },
        { id: 5, text: 'Back-end com Adonis', done: false }
      ]
      context.commit('SET_TODOS', todos) // A action faz um commit injetando os todos dentro da mutation
    }
  },
  getters: {
    // Getters servem para acessar o state, uma vez que os componentes não podem acessar diretamente o state
    // O componente que chamar esse getter, terá como retorno o array com os todos, vindo direto do state
    allTodos(state) {
      return state.todos
    },
    // Se precisarmos fazer qualquer tipo de tratamento no state, faremos aqui com getters
    doneTodos(state) {
      return state.todos.filter((todo) => todo.done)
    }
  }
})
