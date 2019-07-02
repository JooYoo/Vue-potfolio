<template>
  <v-container fluid>
    <div id="skill-title" class="display-2 font-weight-thin">Skills</div>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="rounded-card">
          <v-card-text class="overflow-hidden py-0">
            <v-layout row align-content-center class="horiz-scroll">

              <v-flex px-1 pb-2>
                <div class="pos-relative">
                  <v-list three-line>
                    <v-subheader>Coding</v-subheader>
                    <v-list-tile v-for="item in coding" :key="item.id">
                      <v-list-tile-action>
                        <img :src="item.icon" width="25px">
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>{{item.name}}</v-list-tile-title>
                        <v-progress-linear :color="item.color" v-model="item.progress"></v-progress-linear>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </div>
              </v-flex>

              <v-flex px-1 pb-2>
                <div class="pos-relative">
                  <v-list three-line>
                    <v-subheader>Frontend Framework</v-subheader>
                    <v-list-tile v-for="item in web" :key="item.id">
                      <v-list-tile-action>
                        <img :src="item.icon" width="25px">
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>{{item.name}}</v-list-tile-title>
                        <v-progress-linear :color="item.color" v-model="item.progress"></v-progress-linear>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </div>
              </v-flex>

               <v-flex px-1 pb-2>
                <div class="pos-relative">
                  <v-list three-line>
                    <v-subheader>UI Framework</v-subheader>
                    <v-list-tile v-for="item in ui" :key="item.id">
                      <v-list-tile-action>
                        <img :src="item.icon" width="25px">
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>{{item.name}}</v-list-tile-title>
                        <v-progress-linear :color="item.color" v-model="item.progress"></v-progress-linear>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </div>
              </v-flex>

              <v-flex px-1 pb-2>
                <div class="pos-relative">
                  <v-list three-line>
                    <v-subheader>Computer Vision</v-subheader>
                    <v-list-tile v-for="item in computerVision" :key="item.id">
                      <v-list-tile-action>
                        <img :src="item.icon" width="25px">
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>{{item.name}}</v-list-tile-title>
                        <v-progress-linear :color="item.progressColor" v-model="item.progress"></v-progress-linear>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </div>
              </v-flex>

              <v-flex px-1 pb-2>
                <div class="pos-relative">
                  <v-list three-line>
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
                </div>
              </v-flex>

            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    coding: [
      {
        name: "Javascript",
        progress: 40,
        icon: "https://cdn.svgporn.com/logos/javascript.svg",
        color: "indigo darken-1"
      },
      {
        name: "HTML5",
        progress: 70,
        icon: "https://cdn.svgporn.com/logos/html-5.svg",
        color: "indigo darken-1"
      },
      {
        name: "CSS",
        progress: 40,
        icon: "https://cdn.svgporn.com/logos/css-3.svg",
        color: "indigo darken-1"
      },
      {
        name: "Git",
        progress: 80,
        icon: "https://cdn.svgporn.com/logos/git-icon.svg",
        color: "indigo darken-1"
      },
      {
        name: "C#",
        progress: 60,
        icon: "https://www.flamingoajans.com/assets/vendors/devicon/icons/csharp/csharp-original.svg",
        color: "indigo darken-1"
      }
    ],
    web: [
      {
        name: "Angular",
        progress: 40,
        icon: "https://cdn.svgporn.com/logos/angular-icon.svg",
        color: "red darken-1"
      },
      {
        name: "Vuejs",
        progress: 30,
        icon: "https://cdn.svgporn.com/logos/vue.svg",
        color: "red darken-1"
      },
      {
        name: "React",
        progress: 20,
        icon: "https://cdn.svgporn.com/logos/react.svg",
        color: "red darken-1"
      },
      {
        name: "ASP.NET Core",
        progress: 40,
        icon: "https://cdn.svgporn.com/logos/dotnet.svg",
        color: "red darken-1"
      }
    ],
    ui: [
      {
        name: "ionic",
        progress: 60,
        icon: "https://cdn.svgporn.com/logos/ionic.svg",
        color: "teal darken-1"
      },
      {
        name: "Bootstrap",
        progress: 80,
        icon: "https://cdn.svgporn.com/logos/bootstrap.svg",
        color: "teal darken-1"
      },
      {
        name: "jQuery",
        progress: 30,
        icon: "https://cdn.svgporn.com/logos/jquery.svg",
        color: "teal darken-1"
      },
      {
        name: "Vuetify",
        progress: 30,
        icon: "https://cdn.svgporn.com/logos/vuetifyjs.svg",
        color: "teal darken-1"
      },
      {
        name: "UIkit",
        progress: 60,
        icon: "https://cdn.svgporn.com/logos/uikit.svg",
        color: "teal darken-1"
      }
    ],
    computerVision: [
      {
        name: "Unity 3D",
        progress: 50,
        icon: "https://cdn.svgporn.com/logos/unity.svg",
        progressColor: "blue darken-1"
      },
      {
        name: "ARCore",
        progress: 60,
        icon: "https://blog.novoda.com/content/images/2018/05/arcore.png",
        progressColor: "blue darken-1"
      },
      {
        name: "Tensorflow",
        progress: 5,
        icon: "https://cdn.svgporn.com/logos/tensorflow.svg",
        progressColor: "blue darken-1"
      },
      {
        name: "OpenCV",
        progress: 2,
        icon: "https://cdn.svgporn.com/logos/opencv.svg",
        progressColor: "blue darken-1"
      }
    ],
    design: [
      {
        name: "Adobe Illustrator",
        progress: 50,
        icon: "https://image.flaticon.com/icons/svg/552/552222.svg",
        progressColor: "orange darken-1"
      },
      {
        name: "Adobe XD",
        progress: 40,
        icon: "https://image.flaticon.com/icons/svg/552/552224.svg",
        progressColor: "orange darken-1"
      },
      {
        name: "Adobe Photoshop",
        progress: 20,
        icon: "https://image.flaticon.com/icons/svg/552/552220.svg",
        progressColor: "orange darken-1"
      },
      {
        name: "Adobe After Effects",
        progress: 15,
        icon: "https://image.flaticon.com/icons/svg/552/552226.svg",
        progressColor: "orange darken-1"
      },
      {
        name: "Keynote",
        progress: 70,
        icon: "https://image.flaticon.com/icons/svg/552/552462.svg",
        progressColor: "orange darken-1"
      },
      {
        name: "iBooks Author",
        progress: 70,
        icon: "https://image.flaticon.com/icons/svg/831/831307.svg",
        progressColor: "orange darken-1"
      }
    ],
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

#skill-container {
  margin-bottom: 50px;
}
.theme--light.v-list {
  background: white;
  color: rgba(0, 0, 0, 0.87);
}

.skill-card {
  border: 0 !important;
}

.overflow-hidden {
  overflow: hidden;
}
.horiz-scroll {
  overflow-y: hidden;
  overflow-x: scroll;
}
</style>