<template>
  <div>
    <h1>All Todos</h1>
    <ul>
      <li v-for="todo in allTodos" :key="todo.id">{{ todo.text }}</li>
    </ul>
    <h1>Done Todos</h1>
    <ul>
      <li v-for="todo in doneTodos" :key="todo.id">{{ todo.text }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    // Pegando os dados do getter allTodos, uma vez que eu não tenho acesso direto ao state da aplicação pelo componente
    allTodos() {
      return this.$store.getters.allTodos
    },
    // Pegando os dados do getter doneTodos, que foi feito uma manipulação de filtro no allTodos
    doneTodos() {
      return this.$store.getters.doneTodos
    }
  },
  created() {
    // Ao criar ainstância do vue, eu quero disparar a action fetchTodos para popular o state.todos
    this.$store.dispatch('fetchTodos')
  }
}
</script>
