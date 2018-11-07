<template>
  <v-app>

    <v-layout row wrap>
      <v-container>
           <v-flex xs12>
                <v-btn flat small color="black">HOME</v-btn>
                <v-btn flat small color="black">Project</v-btn>
            </v-flex>
      </v-container>
    </v-layout>


    <v-content>
      <HomePage/>
    </v-content>

     
  </v-app>
</template>

<script>
import HomePage from "./pages/home/HomePage";

export default {
  name: "App",
  components: {
    HomePage
  },
  data() {
    return {
      bottomNav: 3
    };
  },

  computed: {
    color() {
      switch (this.bottomNav) {
        case 0:
          return "blue-grey";
        case 1:
          return "teal";
        case 2:
          return "brown";
        case 3:
          return "indigo";
      }
    }
  }
};
</script>

<style>
.menu-btn {
  padding-left: 1px;
  padding-right: 1px;
}
</style>

