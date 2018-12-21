<template>
<div>
    <h1>project.content.1 works</h1>
    <p>{{ProjectData.projects[0].concept}}</p>
    <p>{{ProjectData.projects[0].techTalk}}</p>

</div>
</template>

<script>
import ProjectData from "../../../data/ProjectData";
export default {
       data:()=>({
        ProjectData
    })
    
}
</script>

<style>

</style>

