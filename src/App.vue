<template>
  <div id="app">
    <CurretnData></CurretnData>
  </div>
</template>

<script>
import CurretnData from "./components/CurrentData"


export default {
  name: 'App',
  components: {
    CurretnData
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
