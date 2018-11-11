<template>
<div>
  

  <v-jumbotron id="main-jumbotron" class="cyan darken-2" dark style="height:600px;">
    <v-container fill-height>
      <v-layout align-center text-xs-center>
        <v-flex>
          <h3 class="display-3">Welcome to the site</h3>
          <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">Check out our newest features!</div>
        </v-flex>
        
      </v-layout>

      <!-- scroll dots-->
       <ul id="scroll-dots"  v-scroll-spy-active v-scroll-spy-link>
          <li class="v-timeline-item__dot v-timeline-item__dot--small">
            <a class="nav-link btn-circle v-timeline-item__inner-dot cyan lighten-3" href="#section-1"></a>
          </li>
          <li class="v-timeline-item__dot v-timeline-item__dot--small" style="margin-top:30px;">
            <a class="nav-link btn-circle v-timeline-item__inner-dot cyan lighten-3" href="#section-2"></a>
          </li>
          <li class="v-timeline-item__dot v-timeline-item__dot--small" style="margin-top:60px;">
            <a class="btn-circle v-timeline-item__inner-dot cyan lighten-3" href="#section-3"></a>
          </li>
          <li class="v-timeline-item__dot v-timeline-item__dot--small" style="margin-top:90px;">
            <a class="btn-circle v-timeline-item__inner-dot cyan lighten-3" href="#section-4"></a>
          </li>
          <li class="v-timeline-item__dot v-timeline-item__dot--small" style="margin-top:120px;">
            <a class="btn-circle v-timeline-item__inner-dot cyan lighten-3" href="#section-5"></a>
          </li>
        </ul>
      <v-layout>
       
      </v-layout>
    </v-container>
  </v-jumbotron>
  
    <v-layout wrap v-scroll-spy>

      <v-container id="section-1">
        <about></about>
      </v-container>

      <v-layout id="section-2" class="grey lighten-4">
        <project></project>
      </v-layout>

      <v-container id="section-3" >
        <experience></experience>
      </v-container>

      <v-layout class="grey lighten-4">
        <v-container>
          <v-flex>
            <section id="section-4">
              <h2>Section 4</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio velit inventore, expedita quo laboriosam possimus ea consequatur vitae, doloribus consequuntur ex. Nemo assumenda laborum vel, labore ut velit dignissimos.</p>
            </section>
          </v-flex>
        </v-container>
      </v-layout>
      
      <v-container>
        <v-layout>
          <v-flex>
            <section id="section-5">
              <h2>Section 5</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio velit inventore, expedita quo laboriosam possimus ea consequatur vitae, doloribus consequuntur ex. Nemo assumenda laborum vel, labore ut velit dignissimos.</p>
            </section>
          </v-flex>
        </v-layout>
      </v-container>
        
    </v-layout>
 

  <!-- Footer -->
    <v-footer dark height="auto" >
    <v-card class="flex" flat tile>
      <v-card-title class="grey darken-4">
        <strong class="subheading"> &copy;2018 — <strong>ZhuYu</strong></strong>
        <v-spacer></v-spacer>
        <v-btn v-for="icon in icons"
          :key="ion"
          class="mx-3"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
    </v-footer>
  </div>
</template>

<script>
import experience from './components/experience.component'
import about from './components/about.component'
import projectData from '../../data/ProjectData'
import project from './components/project.component'
export default {
  components:{
    about,
    project,
    experience,
  },
  data: () => ({
    icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
    ],
    projectData,
  })
};
</script>

<style>


.nav-item {
  margin-top: 20px;
}


#scroll-dots{
  position: fixed; 
  margin-top: 100px;
  margin-right: 40px;
  right: 0;
  
}

section {
  padding: 150px 0;
}

ul {
  list-style-type: none;
}
</style>
