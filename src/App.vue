<template>
  <v-app>
    <!-- header -->
    <v-toolbar id="nav-bar">
      <router-link class="router-nav" :to="{name: 'Home'}">
        <v-btn flat small color="white">HOME</v-btn>
      </router-link>
      <router-link class="router-nav" to="/project">
        <v-btn flat small color="white">Project</v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <!--TODO: vertical three dots, if nessasary
       <v-btn icon>
        <v-icon color="white">more_vert</v-icon>
      </v-btn>-->
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>

    <!-- Footer -->
    <v-flex>
      <v-footer id="footer" height="auto">
        <v-card
          class="flex"
          flat
          tile
          style="background-image: linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%);"
        >
          <v-card-title>
            <strong class="subheading" style="color:white;">
              &copy;2018 —
              <strong>ZhuYu</strong>
            </strong>
            <v-spacer></v-spacer>

            <v-btn v-for="icon in icons" :key="icon.id" class="mx-3" dark icon>
              <a id="link-color" :href="icon.link" :target="icon.target">
                <v-icon :href="icon.link" size="24px">{{ icon.icon }}</v-icon>
              </a>
            </v-btn>
          </v-card-title>
        </v-card>
      </v-footer>
    </v-flex>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      bottomNav: 3,
      icons: [
        {
          icon: "fab fa-github",
          link: "https://github.com/JooYoo",
          target: "_blank"
        },

        {
          icon: "fas fa-envelope",
          link: "mailto:jooyoo@outlook.com",
          target: ""
        },
        {
          icon: "fab fa-linkedin",
          link: "#",
          target: "_blank"
        }
      ]
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
#nav-bar {
  padding-top: 20px;
  padding-bottom: 20px;
  background-image: linear-gradient(
    to right,
    #3ab5b0 0%,
    #3d99be 31%,
    #56317a 100%
  );
}
.menu-btn {
  padding-left: 1px;
  padding-right: 1px;
}

.router-nav {
  text-decoration: none;
  color: inherit;
}

#footer {
  position: absolute;

  bottom: 0;
  width: 100%;
}

#link-color {
  color: white;
}
</style>

