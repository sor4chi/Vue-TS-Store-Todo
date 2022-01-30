<template>
  <div class="home">
    <Form />
    <List />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Form from "@/components/Todo/Form.vue";
import List from "@/components/Todo/List.vue";

export default defineComponent({
  components: {
    Form,
    List,
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
</style>
