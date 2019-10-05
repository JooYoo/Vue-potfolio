<template>
    <!-- Project: Infinity Cards -->
  <div class="blog-container">
    <v-container grid-list-md text-xs-left>
      <v-layout row wrap>
        <v-flex xs12 text-xs-center>
          <p class="display-2 font-weight-light">{{ProjectData.projects[6].title}}</p>
          <p>{{ProjectData.projects[6].date}}</p>
          <v-chip
            class="blog-chips white--text"
            :color="tech.color"
            v-for="tech in ProjectData.projects[6].techs"
            :key="tech.id"
          >{{tech.name}}</v-chip>
          <v-divider></v-divider>
        </v-flex>

        <v-flex xs12>
          <br>
          <p class="display-1">Concept</p>
          <p class="body-2 font-weight-regular">{{ProjectData.projects[6].concept}}</p>
        </v-flex>

        <v-flex xs12>
          <br>
          <p class="display-1">Screenshot</p>
          <v-card class="blog-screenshot-card">
            <v-container grid-list-sm fluid>
              <v-layout row wrap>
                <v-flex
                  v-for="screenshot in ProjectData.projects[6].screenshots"
                  :key="screenshot.id"
                  xs4
                  d-flex
                >
                  <v-card tile class="d-flex">
                    <v-img
                      :src="screenshot.img"
                      aspect-ratio="0.5"
                      class="blog-screenshot-img grey lighten-2"
                    >
                      <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-layout>
                    </v-img>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>

        <v-flex xs12>
          <br>
          <br>
          <p class="display-1">Demos</p>
          <v-card class="blog-demos">
            <v-bottom-nav absolute color="transparent" height="100px;">
              <v-btn
                :href="demo.link"
                target="_blank"
                v-for="demo in ProjectData.projects[6].demos"
                :key="demo.id"
                class="v-btn--active"
              >
                <span>{{demo.name}}</span>
                <v-img class="blog-demos-icon" :src="demo.icon"></v-img>
              </v-btn>
            </v-bottom-nav>
          </v-card>
        </v-flex>

        <v-flex xs12 class="blog-techtalk">
          <br>

          <p class="display-1">Tech Talk</p>
          <p>{{ProjectData.projects[6].techTalk}}</p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ProjectData from '../../../data/ProjectData'
export default {
    data:()=>({
        ProjectData
    })
}
</script>

<style scoped>

</style>

