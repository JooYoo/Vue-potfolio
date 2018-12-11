<template>
<div>

  <v-jumbotron id="main-jumbotron" style="height:600px;">
    <v-container fill-height>

      <v-layout align-center text-xs-center>
        <v-flex>
          <h3 class="display-3" style="color:white;"> Code, Design</h3>
          <span class="subheading title mb-3">
            Between code and design.
            I believe 
            I have passion to create practical and beautiful Web Application.
            Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
          <v-divider  class="my-4" dark ></v-divider>
          <div class="title mb-3 title">Zhu Yu</div>
          <vue-particles></vue-particles>
        </v-flex>
      </v-layout>

      <!-- scroll dots-->
      <ul id="scroll-dots"  v-scroll-spy-active v-scroll-spy-link>
          <li class="v-timeline-item__dot v-timeline-item__dot--small">
            <a class="nav-link btn-circle v-timeline-item__inner-dot grey lighten-2" href="#section-1"></a>
          </li>
          <li class="v-timeline-item__dot v-timeline-item__dot--small" style="margin-top:30px;">
            <a class="nav-link btn-circle v-timeline-item__inner-dot grey lighten-2" href="#section-2"></a>
          </li>
          <li class="v-timeline-item__dot v-timeline-item__dot--small"  style="margin-top:60px;">
            <a class="btn-circle v-timeline-item__inner-dot grey lighten-2" href="#section-3"></a>
          </li>
          <li class="v-timeline-item__dot v-timeline-item__dot--small" style="margin-top:90px;">
            <a class="btn-circle v-timeline-item__inner-dot grey lighten-2" href="#section-4"></a>
          </li>
          <li class="v-timeline-item__dot v-timeline-item__dot--small" style="margin-top:120px;">
            <a class="btn-circle v-timeline-item__inner-dot grey lighten-2" href="#section-5"></a>
          </li>
        </ul>
    
    </v-container>
    
  </v-jumbotron>

  
  
    <v-layout wrap v-scroll-spy>

      <v-layout id="section-1" class="grey lighten-4">
        <about></about>
      </v-layout>
      

      <v-layout id="section-2">
        <project></project>
      </v-layout>

      <v-layout id="section-3" class="grey lighten-4">
        <skill></skill>
      </v-layout>

      <v-container id="section-4" >
        <experience></experience>
      </v-container>

      <v-layout id="section-5" class="grey lighten-4">
        <education></education>
      </v-layout>
        
    </v-layout>


  </div>
</template>

<script>
import projectData from "../../data/ProjectData";
import experience from "./components/experience.component";
import about from "./components/about.component";
import project from "./components/project.component";
import education from "./components/education.component";
import skill from "./components/skill.component"
export default {
  components: {
    about,
    project,
    experience,
    education,
    skill
  },
  data: () => ({
    projectData
  })
};
</script>

<style>
.title{
  color: white;
}

#main-jumbotron{
  height:800px;
  background-image: linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%);
}

#particles-js { 
  position: absolute; 
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 100%; 
}
.nav-item {
  margin-top: 20px;
}

#scroll-dots {
  position: fixed;
  margin-top: 50px;
  margin-right: 40px;
  right: 0;
  z-index: 1;
}

section {
  padding: 150px 0;
}

ul {
  list-style-type: none;
}
</style>
