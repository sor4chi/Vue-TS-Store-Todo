import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { TodoItem } from "@/types/index";
import createPersistedState from "vuex-persistedstate";

type State = {
  todoItems: TodoItem[];
  persistedTodoItems: TodoItem[];
};

export const key: InjectionKey<Store<State>> = Symbol("store");

export const store = createStore<State>({
  state: {
    todoItems: [
      {
        id: 1,
        title: "foo",
        content: "bar",
        completed: false,
      },
      {
        id: 2,
        title: "hoge",
        content: "fuga",
        completed: false,
      },
      {
        id: 3,
        title: "piyo",
        content: "poyo",
        completed: false,
      },
    ],
    persistedTodoItems: [
      {
        id: 1,
        title: "foo",
        content: "bar",
        completed: false,
      },
      {
        id: 2,
        title: "hoge",
        content: "fuga",
        completed: true,
      },
      {
        id: 3,
        title: "piyo",
        content: "poyo",
        completed: false,
      },
    ],
  },
  mutations: {
    addTodoItem(state, todoItem: { title: string; content: string }) {
      const newItemId =
        state.todoItems.reduce((maxId, item) => Math.max(item.id, maxId), -1) +
        1;
      const newTodoItem: TodoItem = {
        id: newItemId,
        title: todoItem.title,
        content: todoItem.content,
        completed: false,
      };
      state.todoItems.push(newTodoItem);
    },
    removeTodoItem(state, id: number) {
      state.todoItems = state.todoItems.filter((item) => item.id !== id);
    },
    changeCompleted(state, id) {
      const item = state.todoItems.find((item) => item.id === id);
      if (item) {
        item.completed = !item.completed;
      }
    },
    addPersistedTodoItem(state, todoItem: { title: string; content: string }) {
      const newItemId =
        state.persistedTodoItems.reduce(
          (maxId, item) => Math.max(item.id, maxId),
          -1
        ) + 1;
      const newPersistedTodoItem: TodoItem = {
        id: newItemId,
        title: todoItem.title,
        content: todoItem.content,
        completed: false,
      };
      state.persistedTodoItems.push(newPersistedTodoItem);
    },
    removePersistedTodoItem(state, id: number) {
      state.persistedTodoItems = state.persistedTodoItems.filter(
        (item) => item.id !== id
      );
    },
    changePersistedCompleted(state, id) {
      const item = state.persistedTodoItems.find((item) => item.id === id);
      if (item) {
        item.completed = !item.completed;
      }
    },
  },
  plugins: [
    createPersistedState({
      paths: ["persistedTodoItems"],
      storage: window.sessionStorage,
    }),
  ],
});

export const useStore = (): Store<State> => {
  return baseUseStore<State>(key);
};
