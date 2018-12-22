<template>
  <div>
    <h1>project.content.2 works</h1>
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


