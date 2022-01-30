<template>
  <div class="commentary">
    <h1>Commentary</h1>
    <h2>構成</h2>
    <div class="compose_list">
      <a href="https://cli.vuejs.org/">VueCLI</a>
      <a href="https://jp.vuejs.org/v2/guide/typescript.html">Typescript</a>
      <a href="https://vuex.vuejs.org/ja/">VueX</a>
      <a
        href="https://vue-loader-v14.vuejs.org/ja/configurations/pre-processors.html"
        >scss</a
      >
      <a href="https://github.com/vuejs/eslint-plugin-vue">eslint</a>
      <a href="https://github.com/meteorlxy/eslint-plugin-prettier-vue"
        >prittier</a
      >
    </div>
    <h2>説明</h2>
    <h3>Todo</h3>
    <p>
      ToDoのデータをStoreに保持させてみました。（当然VueXのStoreは一度リロードすると消えますが）
      Form.vue（コンポーネント内）からemitを使わずにToDoを追加/削除(Stateを変更)しています。
      Typescriptでは、Storeで型定義が必要になるので```types/index.d.ts```内でTodo型を自作/定義してます。
    </p>
    <h3>PersistedTodo</h3>
    <p>
      基本的な構造はTodoのStoreと同じですが、VueXのプラグインvuex-persistedstateを使ってデータを永続化しています。
      （今回はSessionStorageを使用しているので、セッションが切れたらorタブやブラウザを閉じたらリセットされます）
    </p>
    <h3>Storeについて</h3>
    <p>
      今回はStoreの機能のうち、state(初期データ）、mutations(Stateの変更メソッド)、plugins(vuex-persistedstate)を使用しています。
      そのほかにもaction(Stateの変更メソッド（非同期処理も可能、基本それ以外はmutationに書く）)、getters(算出用の（Store内で使う）メソッド)があります。
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({});
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
}
.commentary {
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
}
.compose_list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  a {
    margin: 10px;
    text-align: center;
    width: calc(100% / 3 - 20px);
    text-decoration: none;
    color: #2c3e50;
    height: 50px;
    line-height: 50px;
    border-radius: 10px;
    box-shadow: 3px 3px 5px rgb(189, 189, 189), -3px -3px 5px rgb(243, 243, 243);
    transition: 0.3s;
    &:hover {
      transition: 0.3s;
      background: #42b983;
      color: white;
    }
  }
}
</style>
