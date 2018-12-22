<template>
  <div>
    <v-container>
      <projectList></projectList>
    </v-container>
  </div>
</template>

<script>
import projectList from "./components/project.list.component";

export default {
  name: "ProjectPage",
  components: {
    projectList
  }
};
</script>

<style>
</style>
