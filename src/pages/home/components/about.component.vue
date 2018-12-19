<template>

  <v-container>
    <v-layout>
        <v-flex>
            <v-container>
                <div id="about-title" class="display-2 font-weight-thin">
                     About
                </div>
                <p id="about-content" class="body-2 font-weight-regular">
                    Hello World. 
                    My name is JooYoo (朱瑜). 
                    I come from China and I'm working in Germany now. 
                    I have the passion to create Apps which have a uniqe user experience and maximize the user productivity. 
                    I enjoy to work with Modern Web App Technologies and UX design tools. 
                    I belive Web App is the best Mobile App solution for the next 10 years.
                    I'm the one in the team, between code and design.
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
