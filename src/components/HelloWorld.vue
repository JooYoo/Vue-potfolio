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
      <v-layout>
        <ul id="scroll-dots">
          <li class="nav-item">
            <a class="nav-link btn-circle" href="#section-1"></a>
          </li>
          <li class="nav-item">
            <a class="nav-link btn-circle" href="#section-2"></a>
          </li>
          <li class="nav-item">
            <a class="nav-link btn-circle" href="#section-3"></a>
          </li>
          <li class="nav-item">
            <a class="nav-link btn-circle" href="#section-4"></a>
          </li>
          <li class="nav-item">
            <a class="nav-link btn-circle" href="#section-5"></a>
          </li>
        </ul>
      </v-layout>
    </v-container>

      
  </v-jumbotron>

  
  
    <v-layout wrap >

       
    
      

      

      

      <v-container>
        <v-layout >
          <v-flex>
            <section id="section-1">
              <h2>Section 1</h2>
              <p>This is a great place to talk about your webpage. This template is purposefully unstyled so you can use it as a boilerplate or starting point for you own landing page designs! This template features:</p>  
            </section>
          </v-flex>
        </v-layout>
      </v-container>

      <v-layout class="grey lighten-4">
          <v-container>
            <v-flex>
              <section id="section-2">
                <h2>Section 2</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio velit inventore, expedita quo laboriosam possimus ea consequatur vitae, doloribus consequuntur ex. Nemo assumenda laborum vel, labore ut velit dignissimos.</p>
              </section>
            </v-flex>
          </v-container>
      </v-layout>

      <v-container>
        <v-layout >
          <v-flex>
            <section id="section-3">
              <h2>Section 3</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio velit inventore, expedita quo laboriosam possimus ea consequatur vitae, doloribus consequuntur ex. Nemo assumenda laborum vel, labore ut velit dignissimos.</p>
            </section>
          </v-flex>
        </v-layout>
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
export default {
  data: () => ({
   icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ],
   
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/layout/pre-defined"
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
      }
    ]
  })
};
</script>

<style>


.nav-item {
  margin-top: 12px;
  margin-left: 15px;
}


#scroll-dots{
  position: fixed; 
  margin-left:80px;
  margin-top: 260px;
}

section {
  padding: 150px 0;
}

ul {
  list-style-type: none;
}

.btn-circle {
  width: 3px;
  height: 3px;
  padding: 4px 6px;
  border-radius: 50px;
  font-size: 3px;
  line-height: 0;
  border: 2px solid black;
}
</style>
