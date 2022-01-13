<template>
  <div class="table">
    <table class="weather-main border">
      <tr>
        <th>Sea Level</th>
        <th>Wind (Speed)</th>
        <th>Wind (Deg)</th>
        <th>Country</th>
        <th>Rain</th>
        <th>Snow</th>
      </tr>
      <tr v-for="(i, index) in this.$store.state.weatherItem" :key="index" class="border">
        <td class="border">{{ i.body.main.sea_level }}</td>
        <td class="border">{{ i.body.wind.speed }}</td>
        <td class="border">{{ i.body.wind.deg }}</td>
        <td class="border">{{ i.body.sys.country }}</td>
        <td class="border">{{ i.body.rain | nullOrNot}}</td>
        <td class="border">{{ i.body.snow | nullOrNot }}</td>
      </tr>
    </table>
  </div>
</template>


<script>
export default {
  filters: {
    nullOrNot(value) {
      if (value === null) {
        value = "No";
        return value;
      } else {
        return value;
      }
    },
  },
};
</script>

<style>
</style>