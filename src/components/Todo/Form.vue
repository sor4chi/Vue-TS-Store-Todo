<template>
  <div class="form">
    <form>
      <h1>Create Some New Todos</h1>
      <p>リロードしたら消えます</p>
      <input type="text" v-model="newTodoItem.title" placeholder="title" />
      <input type="text" v-model="newTodoItem.content" placeholder="content" />
      <button type="submit" @click.prevent="submitTodo">submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from "@vue/runtime-core";
import { useStore } from "@/store/index";

export default defineComponent({
  name: "Form",
  setup() {
    const store = useStore();
    const todoItems = computed(() => store.state.todoItems);

    const newTodoItem = reactive({
      title: "",
      content: "",
    });

    const submitTodo = () => {
      store.commit("addTodoItem", newTodoItem);
      newTodoItem.title = "";
      newTodoItem.content = "";
    };

    return {
      todoItems,
      newTodoItem,
      submitTodo,
    };
  },
});
</script>

<style scoped lang="scss">
.form {
  max-width: 600px;
  margin: 20px auto;
}
input {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin: 8px;
  &:focus {
    outline: 1px solid #42b983;
  }
}
button {
  border: 1px solid #42b983;
  border-radius: 4px;
  padding: 8px;
  margin: 8px;
  background-color: #42b983;
  color: #fff;
  &:focus {
    outline: 1px solid #42b983;
  }
}
</style>
