<template>
  <card-section :animalList="animalList"></card-section>
</template>

<script>
import CardSection from "../components/CardSection.vue";
import ApiRepository from "../api/infrastructure/ApiRepository";

export default {
  name: "Home",
  data: () => ({
    animalList: [],
  }),
  components: {
    CardSection,
  },
  methods: {
    getVillagers(data, name) {
      for (let index = 0; index < 4; index++) {
        let villager = name + `${index}`;
        this.animalList.push(data[villager]);
      }
      console.log(this.animalList);
    },
  },
  created: async function () {
    const url = "https://acnhapi.com/v1/villagers/";
    const api = await new ApiRepository(url);
    let allAnimal = await api.getAllData();

    this.getVillagers(allAnimal, "ant0");
    this.getVillagers(allAnimal, "bea0");
    this.getVillagers(allAnimal, "brd0");
  },
};
</script>
