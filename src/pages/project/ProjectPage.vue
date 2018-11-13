<template>
<div>

  <v-jumbotron id="main-jumbotron" class="red darken-3" dark style="height:600px;">
    <v-container fill-height>

      <v-layout align-center text-xs-center>
        <v-flex>
          <h3 class="display-3">Project Page</h3>
          <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">Check out our newest features!</div>
        </v-flex>
      </v-layout>

     
    
    </v-container>
  </v-jumbotron>
  
    <v-layout wrap>

      

      <v-container>
        <v-layout>
          <v-flex>
            <section id="section-5">
              <h2>Skill</h2>
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
          :key="icon"
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
export default {
    name:"ProjectPage",
    data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ]
  })
}
</script>

<style>

</style>
