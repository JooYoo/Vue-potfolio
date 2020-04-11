<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-container>
          <div id="about-title" class="display-2 font-weight-thin">About</div>
          <p id="about-content" class="body-2 font-weight-regular">
            Hello World. My name is Zhu Yu (朱瑜). 
            I come from China and currently work in Germany. 
            As a Frontend Developer my primary responsibility is that, 
            to understand the needs of user, 
            then rendering the information as friendly as possible. <br>
            I recently work in automotive industry and responsible for frontend development of In-Vehicle Infotainment (IVI) system. 
            I am witnessing how software engineering is changing this traditional industry.
            I feel so lucky to live in the age where technology is advancing at a rapid pace. <br>
            In my free time, I also enjoy mobile app development by modern web technologies. 
            And I'm passionate about the applications of Machine-Learning in the field of computer vision as well.
          </p>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "about"
};
</script>

<style>
#about-content {
  margin-top: 40px;
  margin-bottom: 40px;
}
#about-title {
  margin-top: 40px;
}
</style>
