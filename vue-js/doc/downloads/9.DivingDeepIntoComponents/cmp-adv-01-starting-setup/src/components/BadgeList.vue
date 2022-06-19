<template>
  <section>

    <h2>Available Badges</h2>
    <ul>
      <li v-for="badge in badgeList" :key="badge">
        <base-badge :type="badge" :caption="badge.toUpperCase()"></base-badge>
      </li>
<!--      <li>-->
<!--        <base-badge type="author" caption="AUTHOR"></base-badge>-->
<!--      </li>-->
    </ul>
  </section>
</template>

<script>

export default {

  inject: ['badgeList']

};
</script>

<style>
section h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>