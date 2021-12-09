<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="data in animalList"
        :key="data.id"
        cols="6"
        sm="6"
        md="4"
        lg="3"
        class="d-flex flex-column align-center"
      >
        <v-card min-height="130px">
          <v-img
            :src="data.image_uri"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="130px"
            position="top center"
          >
            <v-card-actions class="d-flex justify-end">
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-card-actions>
          </v-img>
          <v-spacer></v-spacer>
          <v-card-title>{{ data.name["name-EUes"] }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CardSection",
  props: {
    animalList: Array,
  },
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
i.v-icon.notranslate.mdi.mdi-heart.theme--light {
  color: #ffffff;
}
// .v-card.v-sheet.theme--light {
//   max-width: 256px;
// }

// .v-image.v-responsive.white--text.align-end.theme--light {
//   height: 256px !important;
// }
</style>
