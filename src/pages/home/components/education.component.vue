<template>
<v-container>
    <v-layout justify-center>
    <v-flex xs12 sm12>
        <v-container fluid grid-list-xl>
             <div id="experience-title" class="display-2 font-weight-thin">Education</div>
      <v-card>

        <v-list
          subheader
          three-line
        >
          <v-subheader inset>Bachelor | 2012 ~ 2014</v-subheader>

          <v-list-tile>
            <v-list-tile-action>
              <v-icon color="indigo">school</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>财务管理学士</v-list-tile-title>
              <v-list-tile-sub-title>中国云南财经大学</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-action>
              <v-icon color="indigo">school</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>管理学学士</v-list-tile-title>
              <v-list-tile-sub-title>澳大利亚什么大学</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-divider></v-divider>

        <v-list
          subheader
          three-line
        >
          <v-subheader inset >Master | 2012 ~ 2014</v-subheader>

          <v-list-tile>
            <v-list-tile-action>
              <v-icon color="indigo">school</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>项目管理科学硕士</v-list-tile-title>
              <v-list-tile-sub-title>英国格林威治大学</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

        

        </v-list>

        <v-divider></v-divider>
        <v-list
          subheader
          three-line
        >
        
          <v-subheader inset>Ausbildung | 2012 ~ 2014</v-subheader>

          <v-list-tile>
            <v-list-tile-action>
              <v-icon color="indigo">school</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Anwendungsentwicklung</v-list-tile-title>
              <v-list-tile-sub-title>RBS</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

        

        </v-list>
      </v-card>

        </v-container>
     
    </v-flex>
  </v-layout>

</v-container>

</template>

<script>
  export default {
    data () {
      return {
        notifications: false,
        sound: true,
        widgets: false
      }
    }
  }
</script>

<style scoped>

</style>
