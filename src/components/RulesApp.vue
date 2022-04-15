<template>
  <div class="border rounded p-2 my-6 border-slate-400">
    <nav>
      <div class="rounded border bg-green-700 text-white font-bold text-xs py-1 px-2 inline-block">Basic Rules Navigator</div>
      <div class="rounded border bg-slate-700 text-white font-bold text-xs py-1 px-2 inline-block cursor-pointer" @click="selectedResource='races'">Races</div>
      <div class="rounded border bg-slate-700 text-white font-bold text-xs py-1 px-2 inline-block cursor-pointer" @click="selectedResource='classes'">Classes</div>
      <div class="rounded border bg-slate-700 text-white font-bold text-xs py-1 px-2 inline-block cursor-pointer">Equipment</div>
      <div class="rounded border bg-slate-700 text-white font-bold text-xs py-1 px-2 inline-block cursor-pointer">Spells</div>
      <div class="rounded border bg-slate-700 text-white font-bold text-xs py-1 px-2 inline-block cursor-pointer">Monsters</div>
      <div class="rounded border bg-slate-200 text-slate-700 font-bold text-xs py-1 px-2 inline-block cursor-pointer" @click="selectedResource=''">X</div>
    </nav>
    <div class="resource">
      <races-component v-if="selectedResource == 'races'"></races-component>
      <classes-component v-if="selectedResource == 'classes'"></classes-component>
    </div>
  </div>
</template>

<script>
  import RacesComponent from "./Races.vue";
  import ClassesComponent from "./Classes.vue";
  export default {
    components: {
      RacesComponent,
      ClassesComponent
    },
    data() {
      return {
        selectedResource: ""
      }
    }
  };
</script>
