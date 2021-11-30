<template>
  <div>
    <v-app-bar color="#FDD10A" dense dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-img class="brand-img" src="../assets/acnh-logo.png" contain></v-img>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-img class="brand-img" src="../assets/acnh-logo.png" contain></v-img>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  data: () => ({
    drawer: false,
    group: null,
    items: [
      { title: "Inicio", icon: "mdi-home" },
      { title: "Mis favoritos", icon: "mdi-heart-multiple" },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-image {
  max-height: 100%;
}
</style>
