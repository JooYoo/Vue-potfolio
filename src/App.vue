<template>
  <v-app>

    <v-layout row wrap>
      <v-container>
           <v-flex xs12>
             <router-link class="router-nav" :to="{name: 'Home'}">
                <v-btn flat small color="black">HOME</v-btn>
             </router-link>
             <router-link class="router-nav" to="/project">
                <v-btn flat small color="black">Project</v-btn>
             </router-link>
            </v-flex>
      </v-container>
    </v-layout>


    <v-content>
      <router-view/>
    </v-content>

     
  </v-app>
</template>

<script>

export default {
  name: "App",
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

.router-nav{
  text-decoration: none;
  color: inherit;
}
</style>

