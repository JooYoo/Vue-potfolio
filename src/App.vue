<template>
  <v-app>

    <v-container>
      <v-layout row wrap>
         <v-flex xs12>
              <v-btn flat small>HOME</v-btn>
              <v-btn flat small color="primary">Project</v-btn>
              <v-btn flat small color="error">Blog</v-btn>
              <v-btn flat small disabled>wait...</v-btn>
          </v-flex>
      </v-layout>
    </v-container>


    <v-content>
      <HelloWorld/>
    </v-content>

     <!-- <v-card height="55px">
     <v-bottom-nav
      :active.sync="bottomNav"
      :color="color"
      :value="true"
      absolute
      shift>
      <v-btn dark>
        <span>Home</span>
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Projects</span>
        <v-icon>apps</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card> -->
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
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

