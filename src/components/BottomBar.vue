<template>
  <v-footer color="#01A623" padless dark>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>&copy; Lacasitos Coders</strong>
    </v-col>
  </v-footer>
</template>

<style lang="scss" scoped>
.v-footer {
  text-align: center;
  margin: 0 auto;
  padding: 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
  width: 100%;

  &::before {
    left: -50%;
    width: 200%;
    content: "";
    position: absolute;
    top: 0;
    height: 600px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    background-color: #01a623;
    background-image: url(../assets/green-triangles.png);
    background-size: 156px 154.5px;
    background-position: 50% 28%;
    z-index: -1;
  }

  a {
    color: #ffffff;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 2px 4px 10px #000000;
  }
}
</style>
