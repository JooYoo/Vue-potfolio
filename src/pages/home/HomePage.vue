<template>
<div>

  <v-responsive id="main-jumbotron" style="height:600px;">
    <v-container fill-height>

      <v-layout align-center text-xs-center>
        <v-flex>
          <h3 id="theTitle" class="display-3"> J O O &nbsp; Y O O</h3>
          <div id="subtitle">
            Focus on the field between Code and Design. 
            <!-- //TODO: one more sentence: difference is good -->
           </div>
          <v-divider id="theDivider"  class="my-4"  ></v-divider>
          <div id="divider-subtitle" class="title mb-3">Frontend UX Developer</div>
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
    
  </v-responsive>

  
  
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

@import url('https://fonts.googleapis.com/css?family=ZCOOL+XiaoWei');
#theTitle{
  color: white;
  font-size: 70px !important;
  font-family: 'ZCOOL XiaoWei', sans-serif !important;
}

#subtitle{
  color: white;
  font-size: 20px;
  margin-top: 5px;
  font-weight: 8000;
  font-family: 'ZCOOL XiaoWei', sans-serif !important;
}

#divider-subtitle{
   text-shadow: 2px 2px 4px #000000;
   font-family: 'ZCOOL XiaoWei', sans-serif !important;
   font-weight: lighter
}

.title{
  color: white;
 
}

#theDivider{
  background:white;
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

#section-5{
  margin-bottom: 90px;
}

ul {
  list-style-type: none;
}
</style>
