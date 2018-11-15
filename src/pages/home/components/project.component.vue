<template>

<v-container>
  <v-layout justify-center>
    <v-flex xs12 sm12>
        <v-container
          fluid
          grid-list-xl
        >
        <div id="experience-title" class="display-2 font-weight-thin">Project</div> 
          <v-layout row wrap>
            <v-flex
              v-for="index in 3"
              xs4
              :key="projectData.projects[index-1].title"
            >
              <v-card class="rounded-card" hover>
                <v-img
                  :src="projectData.projects[index-1].cover"
                  height="200px"
                >
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" 
                              v-text="projectData.projects[index-1].title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>

                <v-card-actions class="text-xs-center">
                  <div class="text-xs-center">
                      <v-chip small outline color="primary">React</v-chip>
                      <v-chip small outline color="secondary">ionic</v-chip>
                      <v-chip small outline color="red">Angular</v-chip>
                      <v-chip small outline color="green">Vuejs</v-chip>
                  </div>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
          <router-link to="/project">
            <div class="text-xs-center">
              <v-btn dark color="primary" round large>more Projects</v-btn>
            </div>
          </router-link>
        </v-container>
    </v-flex>
  </v-layout>
  </v-container>


</template>

<script>
import projectData from "../../../data/ProjectData";
export default {
  data: () => ({
    projectData,
  })
};
</script>

<style scoped>
.rounded-card {
  border-radius: 10px;
  margin-bottom: 40px;
}
</style>





