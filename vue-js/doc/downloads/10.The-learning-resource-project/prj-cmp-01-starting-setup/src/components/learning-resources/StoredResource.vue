<script>
import LearningResources from './LearningResource'

export  default {
  components: {LearningResources},
  inject: ['resources']

}

</script>


<template>
  <ul>
    <li v-for="res in resources" :key="res.id">
      <learning-resources v-bind="res"  > </learning-resources>
    </li>
  </ul>
</template>



<style scoped>

ul {
  list-style: none;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}

</style>















<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>