<template>

  <v-container >
    <v-layout >
        <v-flex  xs12 sm12 md12 lg12 xl12>
            <v-container>
                <div id="about-title" class="display-2 font-weight-thin">
                     About
                </div>
                <p id="about-content" class="body-2 font-weight-regular">
                    Hello World. 
                    My name is ZhuYu (朱瑜). 
                    I was born in China and am currently working in Germany.
                    I have the passion to create apps, which have a unique user experience and maximize the user's productivity.
                    I enjoy working with modern Web Technologies and UX Design Tools.
                    I belive Web App is the best Mobile App solution for the next 10 years.
                    I am the one in the team, between code and design.
                </p>
            </v-container>
        </v-flex>
     </v-layout>
  </v-container>

</template>

<script>
export default {
    name:"about",
}
</script>

<style>
#about-content{
    margin-top: 40px;
    margin-bottom: 40px;
}
#about-title{
    margin-top: 40px;
}

</style>
