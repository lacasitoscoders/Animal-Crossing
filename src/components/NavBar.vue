<template>
  <div>
    <v-app-bar color="#FDD10A" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-img class="header-img" src="../assets/acnh-logo.png"></v-img>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <div
        class="drawer-container d-flex flex-column flex-end"
        style="height: 100%"
      >
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
        <v-spacer></v-spacer>
        <v-img src="../assets/acnh-logo.png" contain></v-img>
      </div>
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
.row {
  flex-wrap: inherit;
}

.mdi-menu::before {
  font-size: 2.5rem;
}

.v-image {
  max-height: 100%;
  max-width: 800px;
}

.header-img {
  margin: -5px 0 0 0;
  max-width: 6.5rem;
}

.v-navigation-drawer {
  padding: 1rem;
}

.v-icon.mdi.mdi-menu.theme--dark {
  color: #ffffff !important;
}

.v-icon.mdi.mdi-menu.theme--light {
  color: #fdd10a !important;
}

.v-list {
  padding: 2rem 0 0 0;
}

.v-list-item.v-list-item--link,
i.v-icon.notranslate.mdi {
  color: #4bbc4b !important;
}

.v-application--is-ltr .v-list-item__action:first-child,
.v-application--is-ltr .v-list-item__icon:first-child {
  margin-right: 1rem;
}

.v-list-item__title {
  font-size: 1rem !important;
}

.v-image.v-responsive.theme--light {
  max-height: 12rem;
}

.v-responsive__sizer {
  padding-bottom: 1rem !important;
}
</style>
