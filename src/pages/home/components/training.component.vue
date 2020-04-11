<template>
  <div class="this-component">
    <v-container>
      <v-layout justify-center>
        <v-flex xs12 sm12>
          <v-container fluid grid-list-xl>
            <div id="experience-title" class="display-2 font-weight-thin">Training</div>
            <v-card>
              <v-list subheader three-line>
                <v-subheader inset>
                  <v-list-tile-title>Fachinformatiker - Anwendungsentwicklung | 2016 ~ 2019</v-list-tile-title>
                </v-subheader>

                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon color="indigo">phonelink</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Software Development</v-list-tile-title>
                    <v-list-tile-sub-title>Robert-Bosch-Schule Ulm</v-list-tile-sub-title>
                    <v-list-tile-sub-title>artiso solutions GmbH</v-list-tile-sub-title>
                    <v-list-tile-sub-title>IHK Ulm</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <flag class="flag" iso="de"/>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>

              <v-divider></v-divider>
              <v-list subheader three-line>
                <v-subheader
                  inset
                >Niveau B2 das kommunikationstraining für die Sprache Deutsch | 2019</v-subheader>

                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon color="indigo">fa-battery-half</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>German Level B2</v-list-tile-title>
                    <v-list-tile-sub-title>KERN Global Language Services</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <flag class="flag" iso="de"/>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>

              <v-divider></v-divider>
              <v-list subheader three-line>
                <v-subheader inset>Niveau B1 der Deutsch-Test für Zuwanderer | 2015 ~ 2016</v-subheader>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon color="indigo">fa-battery-quarter</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>German Level B1</v-list-tile-title>
                    <v-list-tile-sub-title>telc GmbH - The European Language Certificates</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <flag class="flag" iso="de"/>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notifications: false,
      sound: true,
      widgets: false
    };
  }
};
</script>

<style scoped>
.flag {
  margin-left: -10px;
  margin-bottom: 130px;
  font-size: 25px;
}
.flag-second {
  margin-right: 0px;
  margin-bottom: 130px;
  font-size: 25px;
}
.flag-second-one {
  margin-right: -25px;
  margin-bottom: 130px;
  font-size: 25px;
}

.flag-second-title {
  margin-left: -55px;
}
</style>
