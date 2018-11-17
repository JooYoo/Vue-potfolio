<template>

  <v-container>
    <v-layout>
        <v-flex>
            <v-container>
                <div id="about-title" class="display-2 font-weight-thin">
                     About
                </div>
                <p id="about-content" class="body-2 font-weight-regular">
                    Lorem ipsum dolor sit amet, 
                     consectetur adipiscing elit. 
                     Nunc tristique mauris at quam tincidunt, 
                     id gravida odio pretium. 
                     Nulla malesuada porttitor tristique. 
                     Fusce scelerisque egestas aliquet. 
                     Nulla sed quam eget magna mattis tempor. 
                     Sed congue neque lorem, 
                     it amet imperdiet ex scelerisque eu. 
                     Vestibulum eget eleifend justo.
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
