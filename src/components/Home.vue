<template>
  <div>
    <Counter/>
    <CounterSquared/>
    <Button/>
    <Input/>
  </div>
</template>

<script>
import Counter from './Counter.vue';
import CounterSquared from './CounterSquare.vue';
import Button from './Button.vue';
import Input from './Input.vue';

export default {
  name: "Home",
  components:{
    Counter,
    CounterSquared,
    Button,
    Input
  },
 
};
</script>

<style scoped>
div {
  margin-bottom: 10px;
}

.counter {
  font-size: 80px;
}


</style>