<template>
  <div>
    <input type="text" placeholder="Enter color code" v-model="colorCode" />
  </div>
</template>

<script>
export default {
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(newValue) {
        console.log("first", newValue);
        this.$store.dispatch("setColorCode", newValue);
      },
    },
  },
};
</script>

<style scoped>
</style>