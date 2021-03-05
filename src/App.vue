<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <!-- There are two ways to include components -->
    <list-table></list-table>
  </section>
</template>

<script>
import ListTable from './components/ListTable.vue';
export default {
  components: { ListTable },
  data() {
    return {
      
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
</style>
