<template>
  <h2>{{ customTitle }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <p data-testid="counter">{{ counter }}</p>

  <div>
    <button @:click="increase">+1</button>
    <button @:click="decrease">-1</button>
  </div>
</template>

<script>
export default {
  // props que recibira el componente, agrega primero para mostrarselo al equipo de desarrollo
  props: {
    title: String,
    // Se hace esto para realizar un tipado "estatico" y hacer que este valor se requerido
    start: {
      type: Number,
      default: 100,
      validator(value) {
        return value >= 0;
      },
      // required: true
    },
  },
  name: "Counter",

  data() {
    return {
      counter: this.start,
    };
  },

  methods: {
    increase() {
      return this.counter++;
    },
    decrease() {
      return this.counter--;
    },
  },

  computed: {
    squareCounter() {
      return this.counter ** 2;
    },
    customTitle() {
      return this.title || "Counter";
    },
  },
};
</script>

<style>
button {
  background-color: #64bbb7;
  color: white;
  border-radius: 5px;
  border: 1px solid white;
  cursor: pointer;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
  margin: 0 5px;
}
</style>