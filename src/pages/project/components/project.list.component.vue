<template>

<v-container>

    
    <!-- filter -->
    <v-combobox
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
    </v-combobox>

    <!-- cards -->
    <v-flex xl12 sm12>
        <v-container
          fluid
          grid-list-xl
        >
        <!-- <div id="experience-title" class="display-2 font-weight-thin">Project</div>  -->
          <v-layout row wrap>
            <v-flex 
              xs4
              v-for="card in projectData.projects"
              :key="card.title"
            >
              <v-card class="rounded-card" hover>
                <v-img
                  :src="card.cover"
                  height="200px"
                >
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="card.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>

                <v-card-actions class="text-xs-center">
                  <div class="text-xs-center">
                      <v-chip outline small  color="primary">React</v-chip>
                      <v-chip outline small  color="secondary">ionic</v-chip>
                      <v-chip outline small  color="red">Angular</v-chip>
                      <v-chip outline small  color="green">Vuejs</v-chip>
                      <!-- <i class="devicon-vuejs-plain colored"></i> -->
                  </div>
                </v-card-actions>
              </v-card>
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
    projectData,
    chips: ['Angular', 'React', 'Vuejs', 'ionic'],
    items: ['Angular', 'React', 'Vuejs', 'ionic', 'Unity3D', 'WPF']
  }),
   methods: {
      remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
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


