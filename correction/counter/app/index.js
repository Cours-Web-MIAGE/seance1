const { createApp, ref } = Vue;

// The selector to find the container to include the application into.
const selector = "#app-wrapper"

const app = createApp({
  setup() {
    const counter = ref(0);

    function increment() {
      counter.value ++;
    }

    function decrement() {
      counter.value --;
    }

    return { counter, decrement, increment };
  },
});

app.mount(selector);