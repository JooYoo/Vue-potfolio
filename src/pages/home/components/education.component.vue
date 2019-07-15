<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm12>
        <v-container fluid grid-list-xl>
          <div id="experience-title" class="display-2 font-weight-thin">Education</div>
          <v-card>
            <v-list subheader three-line>
              <v-subheader inset>
                <v-list-tile-title>IT Specialist | 2016 ~ 2019</v-list-tile-title>
              </v-subheader>

              <v-list-tile>
                <v-list-tile-action>
                  <v-icon color="indigo">laptop_mac</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Application Development</v-list-tile-title>
                  <v-list-tile-sub-title>Robert-Bosch-Schule Ulm</v-list-tile-sub-title>
                  <v-list-tile-sub-title>artiso solutions GmbH</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <flag class="flag" iso="de"/>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>

            <v-divider></v-divider>
            <v-list subheader three-line>
              <v-subheader inset>Master of Science | 2012 ~ 2014</v-subheader>

              <v-list-tile>
                <v-list-tile-action>
                  <v-icon color="indigo">timer</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Project Management</v-list-tile-title>
                  <v-list-tile-sub-title>University of Greenwich</v-list-tile-sub-title>
                  <v-list-tile-sub-title>Yunnan University of Finance and Economics</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <flag class="flag-second-one" iso="gb"/>
                </v-list-tile-action>
                <v-list-tile-action>
                  <flag class="flag-second" iso="cn"/>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>

            <v-divider></v-divider>
            <v-list subheader three-line>
              <v-subheader inset>Bachelor of Business Studies | 2008 ~ 2012</v-subheader>

              <v-list-tile>
                <v-list-tile-action>
                  <v-icon color="indigo">people</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Business Studies</v-list-tile-title>
                  <v-list-tile-sub-title>Charles Sturt University</v-list-tile-sub-title>
                  <v-list-tile-sub-title>Yunnan University of Finance and Economics</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <flag class="flag-second-one" iso="au"/>
                </v-list-tile-action>
                <v-list-tile-action>
                  <flag class="flag-second" iso="cn"/>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>

            <v-divider></v-divider>
            <v-list subheader three-line>
              <v-subheader inset>
                <v-list-tile-title class="flag-title">Bachelor of Management Studies | 2008 ~ 2012</v-list-tile-title>
              </v-subheader>

              <v-list-tile>
                <v-list-tile-action>
                  <v-icon color="indigo">attach_money</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Financial Management</v-list-tile-title>
                  <v-list-tile-sub-title>Yunnan University of Finance and Economics</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <flag class="flag" iso="cn"/>
                </v-list-tile-action>
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
