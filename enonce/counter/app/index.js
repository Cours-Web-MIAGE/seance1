const { createApp, ref } = Vue;

createApp({
  setup() {
    // Create a variable named "counter" and initialized at zero.

    // Create two functions named "increment" and "decrement" that does exactly what their names suggest.

    return { counter, decrement, increment };
  },
}).mount("#app-wrapper");