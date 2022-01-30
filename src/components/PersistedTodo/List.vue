<template>
  <table>
    <tr>
      <th>isDone</th>
      <th>Title</th>
      <th>Content</th>
      <th>Remove</th>
    </tr>
    <tr v-for="todo in todoItems" :key="todo.id">
      <td>
        <input
          type="checkbox"
          :checked="todo.completed"
          @click="changeCompleted(todo.id)"
        />
      </td>
      <td>{{ todo.title }}</td>
      <td>{{ todo.content }}</td>
      <td><button @click="removeTodo(todo.id)">Remove</button></td>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent, computed } from "@vue/runtime-core";
import { useStore } from "@/store/index";

export default defineComponent({
  setup() {
    const store = useStore();
    const todoItems = computed(() => store.state.persistedTodoItems);

    const removeTodo = (id: number) => {
      store.commit("removePersistedTodoItem", id);
    };

    const changeCompleted = (id: number) => {
      store.commit("changePersistedCompleted", id);
    };

    return {
      todoItems,
      removeTodo,
      changeCompleted,
    };
  },
});
</script>

<style scoped lang="scss">
.home {
  max-width: 600px;
  margin: 0 auto;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border-bottom: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
button {
  border: none;
  border-radius: 4px;
  padding: 8px;
  color: #333;
  &:hover {
    color: #fff;
    background-color: #42b983;
  }
}
</style>
