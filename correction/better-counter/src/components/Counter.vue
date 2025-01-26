<template>
  <div>{{ counter }}</div>
  <button @click="increment">Incrémenter</button>
  <button @click="decrement">Décrémenter</button>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);

function increment() {
  counter.value++;
}

function decrement() {
  counter.value--;
}
</script>