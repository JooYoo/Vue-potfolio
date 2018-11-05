<template>
<div>
  <v-container>
    <v-layout  wrap>
      <v-flex xs12>
        <header>
          <nav id="scrolling-nav" v-scroll-spy-link class="navbar navbar-expand-lg">
            <ul class="ml-auto">
              <li class="nav-item">
                <a class="nav-link btn-circle" href="#about">about</a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn-circle" href="#services"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn-circle" href="#contact"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn-circle" href="#test"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn-circle" href="#timeline"></a>
              </li>
            </ul>
          </nav>
          <div >
            <h1 class="text-xs-center ">Welcome to Scrolling Nav</h1>
            <p class="text-xs-center ">A landing page template freshly redesigned for Bootstrap 4</p>
          </div>
        </header>
      </v-flex>

      <v-flex>
        <v-layout >
          <section id="about">
            <h2>About this page</h2>
            <p class="md-lg-left">This is a great place to talk about your webpage. This template is purposefully unstyled so you can use it as a boilerplate or starting point for you own landing page designs! This template features:</p>  
          </section>
        </v-layout>
      </v-flex>

      <v-flex mb-4>
        <section id="services" class="section hero is-primary is-fullheight bg-light">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <h2>Services we offer</h2>
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio velit inventore, expedita quo laboriosam possimus ea consequatur vitae, doloribus consequuntur ex. Nemo assumenda laborum vel, labore ut velit dignissimos.</p>
              </div>
            </div>
          </div>
        </section>
      </v-flex>

      <v-flex>
        <section id="contact" class="section hero is-primary is-fullheight">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <h2>Contact us</h2>
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio fugiat voluptatem dolor, provident officiis, id iusto! Obcaecati incidunt, qui nihil beatae magnam et repudiandae ipsa exercitationem, in, quo totam.</p>
              </div>
            </div>
          </div>
        </section>
      </v-flex>

      <v-flex>
        <section id="test" class="section hero is-primary is-fullheight">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 mx-auto">
						<h2>test us</h2>
						<p class="lead">test test testjfkjdklfjkdls;jakl;jfdsa</p>
					</div>
				</div>
			</div>
		</section>

      </v-flex>

      
    </v-layout>
  </v-container>

    <!-- Footer -->
   <v-footer dark height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="teal">
        <strong class="subheading">Get connected with us on social networks!</strong>
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

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2018 — <strong>Vuetify</strong>
      </v-card-actions>
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
header {
  padding: 0px 0 240px;
}

@media (min-width: 992px) {
  header {
    padding: 240px 0 240px;
  }
}

.navbar-brand {
  margin-left: 10px;
}

.nav-item {
  margin-top: 12px;
  margin-left: 15px;
}

#navbarText {
  margin-left: 160px;
}

#scrolling-nav {
  margin-right: 40px;
  color: black;
}

a {
  color: black;
}

section {
  padding: 150px 0;
}

ul {
  list-style-type: none;
}

.btn-circle {
  width: 11px;
  height: 8px;
  padding: 5px 5px;
  border-radius: 15px;
  font-size: 10px;
  line-height: 0;
  border: 2px solid black;
}
</style>
