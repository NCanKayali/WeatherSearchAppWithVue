<template>
  <div>
    <div class="main-weather">
      <h2>Weather</h2>
      <input
        class="search-input"
        type="text"
        v-model="city"
        placeholder="Search City"
      />
      <br />
      <button class="search-button" @click="getCurrentValues">Search</button>
      <!-- <div v-for="(data,i) in weatherData" :key="i">{{data.body.name}}</div> -->
      <div v-if="checkData">
        <weather-row-table/><br>
        <main-data/><br>
        <other-data/>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherRowTable from "./WeatherRowTable";
import MainData from "./MainData.vue";
import OtherData from "./OtherData.vue"
export default {
  components: {
    WeatherRowTable,
    MainData,
    OtherData,

  },
  data() {
    return {
      city: "",
    };
  },
  methods: {
    getCurrentValues() {
      const api =
        "https://api.openweathermap.org/data/2.5/find?q=" +
        this.city +
        "&appid=5aa2f0e43364c96302b33979db9d4360";

      this.$http.get(api).then(
        (response) => {
          const date = new Date();
          const value = {
            date: date,
            body: response.body.list[0],
            searchCity: this.city,
          };
          this.$store.commit("setWeatherItem", value);
        },
        (response) => {
          console.log(response);
        }
      );

      setTimeout(() => {
        this.city = ""
      }, 2000);
    },
  },
  computed: {
    checkData() {
      if (this.$store.state.weatherItem[0]) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
.main-weather {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 745px;
  background-image: linear-gradient(to top right, rgb(4, 94, 212), #03abc9);
  /* background-image: linear-gradient(to top , rgb(0, 46, 105), #f5e503); */
  /* background-image: linear-gradient(to bottom ,#f0e771, rgb(4, 83, 185), ); */


}

.search-input {
  width: 200px;
  height: 30px;
  margin-right: 10px;
  border: none;
  border-radius: 10px;
}

.search-input::placeholder {
  /* color: white; */
  text-align: center;
}

.search-button {
  background-color: rgb(3, 177, 3);
  width: 100px;
  height: 27px;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
}
</style>