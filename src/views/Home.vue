<template>
  <card-section :animalList="animalList"></card-section>
</template>

<script>
import CardSection from "../components/CardSection.vue";
import ApiRepository from "../api/infrastructure/ApiRepository";

export default {
  name: "Home",
  data: () => ({
    animalList: {},
  }),
  components: {
    CardSection,
  },
  methods: {},
  created: async function () {
    const url = "https://acnhapi.com/v1/villagers/";
    const api = await new ApiRepository(url);
    this.animalList = await api.getAllData();
    // console.log(this.animalList);
  },
};
</script>
