<template>
  <div class="blog-container">
    <h1>{{ProjectData.projects[1].title}}</h1>
    <p>{{ProjectData.projects[1].concept}}</p>
   
  </div>
</template>

<script>
import ProjectData from "../../../data/ProjectData";
export default {
    data: () => ({
    ProjectData
  })
};
</script>

<style scoped>
</style>


