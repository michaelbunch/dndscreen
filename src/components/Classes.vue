<template>
  <div class="flex mt-2">
    <div class="flex-none w-24 mr-3">
      <ul>
        <li
          class="rounded border bg-slate-200 text-slate-700 font-bold text-xs py-1 px-2 mb-1 cursor-pointer"
          v-for="item in classes"
          @click="fetchClass(item.index)">
            {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="flex-1 border p-2 text-sm" v-if="currentClass">
      <div class="text-xl">{{ currentClass.name }}</div>
      <div class="mt-2"><b>Hit Die:</b> d{{ currentClass.hit_die }}</div>
      <div class="mt-2">
        <b>Proficiencies:</b><br>
        <span v-for="prof in currentClass.proficiencies" class="inline-block mr-1 rounded border bg-slate-700 text-slate-200 text-xs py-1 px-2">{{ prof.name }}</span>
      </div>
      <div class="mt-2">
        <b>Proficiencies Choices:</b><br>
        <div v-for="skill_prof in currentClass.proficiency_choices">
          <div>Choose {{ skill_prof.choose }}:</div>
          <span v-for="from in skill_prof.from" class="inline-block mr-1 rounded border bg-slate-700 text-slate-200 text-xs py-1 px-2">{{ from.name }}</span>
        </div>
      </div>
      <div class="mt-2"><b>Alignment:</b> {{ currentClass.alignment }}</div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        apiUrl: "https://www.dnd5eapi.co/api/",
        classes: [],
        currentClass: null
      }
    },
    methods: {
      async fetchClasses() {
        const res = await axios.get(this.apiUrl + "classes");
        console.log(res);
        this.classes = res.data.results;
      },
      async fetchClass(index) {
        const res = await axios.get(this.apiUrl + "classes/" + index)
        console.log(res)
        this.currentClass = res.data;
      }
    },
    mounted() {
      this.fetchClasses();
    }
  }
</script>
