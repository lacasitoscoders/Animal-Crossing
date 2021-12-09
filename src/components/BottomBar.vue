<template>
  <v-footer color="transparent" padless dark>
    <v-col class="text-center brand-copy" cols="12">
      {{ new Date().getFullYear() }} — <strong>&copy; Lacasitos Coders</strong>
    </v-col>
  </v-footer>
</template>

<style lang="scss" scoped>
.v-footer {
  text-align: center;
  margin: 5rem auto 0 auto;
  padding: 60px;
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
    background-repeat: repeat;
    background-size: 156px 154.5px;
    background-position: 50% 28%;
    z-index: 0;
  }

  .brand-copy {
    color: #ffffff;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    text-shadow: 2px 4px 10px #000000;
    z-index: 1;
  }
}
</style>
