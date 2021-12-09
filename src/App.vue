<template>
  <v-app>
    <nav-bar />
    <v-main>
      <card-section />
      <router-view />
    </v-main>
    <bottom-bar />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import BottomBar from "./components/BottomBar.vue";
import CardSection from "./components/CardSection.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    NavBar,
    BottomBar,
    CardSection,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap");

.application,
.v-application {
  font-family: "Bree Serif", serif;
  font-size: 16px;
}
</style>
