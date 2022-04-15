<template>
  <div>
    <button @click="fetchRaces()">Fetch Races</button>
    <ul>
      <li v-for="race in races">
        <a href="#" @click="fetchRace(race.index)">{{ race.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        apiUrl: "https://www.dnd5eapi.co/api/",
        resources: [
          "races",
          "backgrounds",
          "classes",
          "conditions",
          "damage-types",
          "equipment",
          "equipment-categories",
          "feats",
          "spells",
          "magic-items",
          "magic-schools",
          "monsters",
          "rule-sections",
          "rules",
          "subraces",
          "traits",
          "weapon-properties",
        ],
        races: []
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
        this.currentRace
      }
    }
  }
</script>
