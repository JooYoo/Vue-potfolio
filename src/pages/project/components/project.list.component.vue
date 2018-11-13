<template>

<v-container>

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
             
              v-for="card in cards"
              v-bind="{ [`xs${card.flex}`]: true }"
              :key="card.title"
            >
              <v-card class="rounded-card" hover>
                <v-img
                  :src="card.src"
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
                      <v-chip small outline color="primary">React</v-chip>
                      <v-chip small outline color="secondary">ionic</v-chip>
                      <v-chip small outline color="red">Angular</v-chip>
                      <v-chip small outline color="green">Vuejs</v-chip>
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
export default {
  data: () => ({
    cards: [
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 4
      },
      {
        title: "Favorite road",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 4
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 4
      },
      {
          title: "Test 01",
          src:"https://picsum.photos/200/300/?random",
          flex:4
      },
      {
          title: "Test 02",
          src:"https://picsum.photos/200/300/?image=161",
          flex:4
      },
      {
          title: "Test 03",
          src:"https://picsum.photos/200/300/?image=160",
          flex:4
      },
      {
          title: "Test 04",
          src:"https://picsum.photos/200/300/?image=159",
          flex:4
      }
    ],
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


