<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="data in animalList"
        :key="data.name"
        cols="6"
        sm="5"
        md="3"
        lg="2"
      >
        <v-card min-height="130px">
          <v-img
            :src="data.image_uri"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="130px"
            position="top center"
          >
            <v-card-actions>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-card-actions>
          </v-img>
          <v-spacer></v-spacer>
          <v-card-title>{{ data.name }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CardSection",
  props: {
    animalList: Object,
  },
  data: () => ({}),
};
</script>
