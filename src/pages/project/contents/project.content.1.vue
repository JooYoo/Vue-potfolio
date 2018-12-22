<template>
  <div class="blog-container">
    <h1>project.content.1 works</h1>
    <p>{{ProjectData.projects[0].concept}}</p>
    <p>{{ProjectData.projects[0].techTalk}}</p>
    <p>{{ProjectData.projects[0].images[1]}}</p>
    <p>{{ProjectData.projects[0].techs[0]}}</p>
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

<style>
.blog-container{
  padding:50px;
}
</style>

