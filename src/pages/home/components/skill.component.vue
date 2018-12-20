<template>
  <v-container>
    <div id="skill-title" class="display-2 font-weight-thin">Skills</div>
    <v-layout id="skill-container">
      <v-flex d-flex>
        <v-list subheader three-line>
          <v-subheader>Frontend</v-subheader>
          <v-list-tile v-for="item in frontend" :key="item.id">
            <v-list-tile-action>
              <img :src="item.icon" width="25px">
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{item.name}}</v-list-tile-title>
              <v-progress-linear :color="item.color" v-model="item.progress"></v-progress-linear>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-list subheader three-line>
          <v-subheader>Design</v-subheader>
          <v-list-tile v-for="item in design" :key="item.id">
            <v-list-tile-action>
              <img :src="item.icon" width="25px">
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{item.name}}</v-list-tile-title>
              <v-progress-linear :color="item.progressColor" v-model="item.progress"></v-progress-linear>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-list subheader three-line>
          <v-subheader>Others</v-subheader>
          <v-list-tile v-for="item in others" :key="item.id">
            <v-list-tile-action>
              <img :src="item.icon" width="25px">
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{item.name}}</v-list-tile-title>
              <v-progress-linear :color="item.progressColor" v-model="item.progress"></v-progress-linear>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    frontend: [
      {
        name: "Angular",
        progress: 40,
        icon: "https://cdn.svgporn.com/logos/angular-icon.svg",
        color: "blue lighten-4"
      },
      {
        name: "ionic",
        progress: 60,
        icon: "https://cdn.svgporn.com/logos/ionic.svg",
        color: "blue lighten-3"
      },
      {
        name: "Vuejs",
        progress: 30,
        icon: "https://cdn.svgporn.com/logos/vue.svg",
        color: "blue lighten-2"
      },
      {
        name: "Bootstrap",
        progress: 80,
        icon: "https://cdn.svgporn.com/logos/bootstrap.svg",
        color: "blue lighten-1"
      },
      {
        name: "jQuery",
        progress: 30,
        icon: "https://cdn.svgporn.com/logos/jquery.svg",
        color: "blue darken-1"
      },
      {
        name: "Vuetify",
        progress: 40,
        icon: "https://cdn.svgporn.com/logos/vuetifyjs.svg",
        color: "blue darken-2"
      }
    ],
    design: [
      {
        name: "Adobe Illustrator",
        progress: 50,
        icon: "https://image.flaticon.com/icons/svg/552/552222.svg",
        progressColor: "teal lighten-4"
      },
      {
        name: "Adobe XD",
        progress: 60,
        icon: "https://image.flaticon.com/icons/svg/552/552224.svg",
        progressColor: "teal lighten-3"
      },
      {
        name: "Adobe After Effects",
        progress: 30,
        icon: "https://image.flaticon.com/icons/svg/552/552226.svg",
        progressColor: "teal lighten-2"
      },
      {
        name: "Garageband",
        progress: 70,
        icon: "https://image.flaticon.com/icons/svg/552/552460.svg",
        progressColor: "teal lighten-1"
      }
    ],
    others: [
      {
        name: "Unity 3D",
        progress: 50,
        icon: "https://cdn.svgporn.com/logos/unity.svg",
        progressColor: "blue-grey lighten-4"
      },
      {
        name: "ARCore",
        progress: 60,
        icon: "https://image.flaticon.com/icons/svg/552/552224.svg",
        progressColor: "blue-grey lighten-3"
      },
      {
        name: "ASP.NET Core",
        progress: 40,
        icon: "https://cdn.svgporn.com/logos/dotnet.svg",
        progressColor: "blue-grey lighten-2"
      },
      {
        name: "Tensorflow",
        progress: 2,
        icon: "https://cdn.svgporn.com/logos/tensorflow.svg",
        progressColor: "blue-grey lighten-1"
      }
    ]
  })
};
</script>

<style>
#skill-content {
  margin-top: 40px;
  margin-bottom: 40px;
}
#skill-title {
  margin-top: 40px;
  margin-bottom: 50px;
}

#skill-container{
    margin-bottom: 50px;
}
.theme--light.v-list {
    background:white;
    color: rgba(0,0,0,0.87);
}
</style>