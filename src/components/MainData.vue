<template>
  <div class="table">
    <table class="weather-main border">
      <tr>
        <th>Temperature (Kelvin)</th>
        <th>Feels Like (hPa)</th>
        <th>Temp Min (%)</th>
        <th>Temp Max</th>
        <th>Pressure</th>
        <th>Humidity</th>
      </tr>

      <tr
        v-for="(i, index) in this.$store.state.weatherItem"
        :key="index"
        class="border"
      >
        <td class="border">{{ i.body.main.temp }}</td>
        <td class="border">{{ i.body.main.feels_like }}</td>
        <td class="border">{{ i.body.main.temp_min }}</td>
        <td class="border">{{ i.body.main.temp_max }}</td>
        <td class="border">{{ i.body.main.pressure }}</td>
        <td class="border">{{ i.body.main.humidity }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style>
.table {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  background-color: #AEFEFF;
  color: rgb(226, 226, 226);
  border-radius: 15px;
  padding: 5px;
  /* min-width: 950px; */
}

.weather-main {
  width: 950px;
  height: 100px;
  padding: 10px;
  font-size: 20px;
}
th {
  margin: 50px;
  color: black;
  font-size: 22px;
  border: 2px solid black;
}
td {
  color: #2f3a8f;
  font-size: 20px;
  text-align: center;
  padding: 10px;
}

.border {
  border: 2px solid black;
  border-radius: 15px;
}
</style>