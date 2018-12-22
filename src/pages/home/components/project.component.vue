<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm12>
        <v-container fluid grid-list-xl>
          <div id="experience-title" class="display-2 font-weight-thin">Project</div>
          <v-layout row wrap>
            <v-flex
              v-for="index in 3"
              xs4
              :key="projectData.projects[getProjectLength.projectLength - index].title"
            >
              <!-- //TODO: add computed for projectData.projects[index-1].x-->
              <router-link
                class="router-nav"
                :to=" '/project-' + projectData.projects[getProjectLength.projectLength - index].id"
              >
                <v-card class="rounded-card" hover>
                  <v-img
                    :src="projectData.projects[getProjectLength.projectLength - index].cover"
                    height="200px"
                  >
                    <v-container fill-height fluid pa-2>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span
                            class="headline white--text"
                            v-text="projectData.projects[getProjectLength.projectLength - index].title"
                          ></span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>

                  <v-card-actions class="text-xs-center">
                    <div class="text-xs-left">
                      <v-chip
                        v-for="tech in projectData.projects[getProjectLength.projectLength - index].techs"
                        :key="tech.id"
                        small
                        outline
                        :color="tech.color"
                      >{{tech.name}}</v-chip>
                    </div>
                  </v-card-actions>
                </v-card>
              </router-link>
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
    projectData
  }),
  computed: {
    getProjectLength() {
      return {
        projectLength: projectData.projects.length
      };
    }
  }
};
</script>

<style scoped>
.rounded-card {
  border-radius: 10px;
  margin-bottom: 40px;
}
</style>