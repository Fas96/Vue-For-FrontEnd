<template>
  <div class="container">
    <header v-if="this.$slots.header">
      <slot name="header" >
        <h2>Default document base Header</h2>
      </slot>
    </header>
    <main v-if="this.$slots.default">
      <slot>
        <h2>This is to test default slow</h2>
      </slot>
    </main>
    <footer v-if="this.$slots.footer">
      <slot name="footer"> Base Slot selection</slot>
    </footer>
  </div>
</template>

<script>
export default {

  mounted() {
    console.log(this.$slots.header)
    console.log(this.$slots.default)
  }
}
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
header {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

}

header h1 {
  color: white;
  margin: 0;
}
</style>