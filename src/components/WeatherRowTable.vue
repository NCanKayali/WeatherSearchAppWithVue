<template>
  <div>
    <div class="table">
      <table class="weather-main border">
        <tr class="weather-table-row">
          <th>City</th>
          <th>Date</th>
          <th>Main</th>
          <th>Description</th>
          <th>Icon</th>
        </tr>
        <tr
          v-for="(i, index) in this.$store.state.weatherItem"
          :key="index"
          class="border"
        >
          <td class="border">{{ i.searchCity | capitalize }}</td>
          <td class="border">{{ i.date }}</td>
          <td class="border">{{ i.body.weather[0].main }}</td>
          <td class="border">{{ i.body.weather[0].description }}</td>
          <td class="border">
            <img
              :src="`http://openweathermap.org/img/wn/${i.body.weather[0].icon}@2x.png`"
              alt=""
            />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>



<script>
export default {
  filters: {
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>

<style>
</style>