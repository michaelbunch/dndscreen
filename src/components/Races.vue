<template>
  <div class="flex mt-2">
    <div class="flex-none w-24 mr-3">
      <ul>
        <li
          class="rounded border bg-slate-200 text-slate-700 font-bold text-xs py-1 px-2 mb-1 cursor-pointer"
          v-for="race in races"
          @click="fetchRace(race.index)">
            {{ race.name }}
        </li>
      </ul>
    </div>
    <div class="flex-1 border p-2 text-sm" v-if="currentRace">
      <div class="text-xl">{{ currentRace.name }}</div>
      <div class="mt-2"><b>Size:</b> {{ currentRace.size_description }}</div>
      <div class="mt-2"><b>Language:</b> {{ currentRace.language_desc }}</div>
      <div class="mt-2"><b>Age:</b> {{ currentRace.age }}</div>
      <div class="mt-2"><b>Alignment:</b> {{ currentRace.alignment }}</div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        apiUrl: "https://www.dnd5eapi.co/api/",
        races: [],
        currentRace: null
      }
    },
    methods: {
      async fetchRaces() {
        const res = await axios.get(this.apiUrl + "races");
        console.log(res);
        this.races = res.data.results;
      },
      async fetchRace(index) {
        const res = await axios.get(this.apiUrl + "races/" + index)
        console.log(res)
        this.currentRace = res.data;
      }
    },
    mounted() {
      this.fetchRaces();
    }
  }
</script>
