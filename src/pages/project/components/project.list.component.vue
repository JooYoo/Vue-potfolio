<template>
  <v-container>
    <!-- TODO: filter -->
    <!-- <v-combobox
        v-model="chips"
        :items="items"
        label="Your favorite Tech"
        chips
        clearable
        prepend-icon="filter_list"
        solo
        multiple
    >
        <template slot="selection" slot-scope="data">
          <v-chip
            :selected="data.selected"
            close
            @input="remove(data.item)"
            class="primary"
            color="white--text"
          >
            <strong>{{ data.item }}</strong>&nbsp;
          </v-chip>
        </template>
    </v-combobox>-->
    <!-- cards -->
    <v-flex xl12 sm12>
      <v-container fluid grid-list-xl>
        <!-- <div id="experience-title" class="display-2 font-weight-thin">Project</div>  -->
        <v-layout row wrap>
          <v-flex xs4 v-for="project in projectData.projects" :key="project.title">
            <router-link class="router-nav" :to=" '/project-' + project.id">
              <v-card class="rounded-card" hover>
                <v-img :src="project.cover" height="200px">
                  <v-container fill-height fluid pa-2>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="project.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>

                <v-card-actions class="text-xs-center">
                  <div class="text-xs-left">
                    <v-chip
                      v-for="tech in project.techs"
                      :key="tech.id"
                      outline
                      small
                      :color="tech.color"
                    >{{tech.name}}</v-chip>
                  </div>
                </v-card-actions>
              </v-card>
            </router-link>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-container>
</template>

<script>
import projectData from "../../../data/ProjectData";

export default {
  data: () => ({
    projectData

    //TODO: a part of Filter
    // chips: ['Angular', 'React', 'Vuejs', 'ionic'],
    // items: ['Angular', 'React', 'Vuejs', 'ionic', 'Unity3D', 'WPF']
  }),
  methods: {
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
      this.chips = [...this.chips];
    }
  }
};
</script>

<style>
.rounded-card {
  border-radius: 10px;
  margin-bottom: 40px;
}
</style>


