<template>
<div>

  <!-- <v-jumbotron id="main-jumbotron" class="red darken-3" dark style="height:600px;">
    <v-container fill-height>
      <v-layout align-center text-xs-center>
        <v-flex>
          <h3 class="display-3">Project</h3>
          <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">Check out our newest features!</div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron> -->
    
  <v-container>
    <project-list></project-list>
  </v-container>
  
  </div>
</template>

<script>
import projectList from"./components/project.list.component";

export default {
    name:"ProjectPage",
    components:{
        projectList
    }
   
}
</script>

<style>



</style>
