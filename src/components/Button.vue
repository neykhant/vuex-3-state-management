<template>
    <div class="buttons">
      <button @click="$store.dispatch('decrementCounter')">-</button>
      <button @click="$store.dispatch('incrementCounter')">+</button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.buttons button {
  font-size: 50px;
  width: 100px;
  margin: 0 10px;
}
</style>