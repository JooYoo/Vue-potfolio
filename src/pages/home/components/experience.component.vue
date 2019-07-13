<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex align-center text-xs-left>
          <div id="experience-title" class="display-2 font-weight-thin">Experience</div>

          <v-timeline>
            <v-timeline-item v-for="(year, i) in years" :color="year.color" :key="i" small>
              <span
                slot="opposite"
                :class="`headline font-weight-bold ${year.color}--text`"
                v-text="year.year"
              ></span>
              <div class="py-3">
                <h2
                  :class="`headline font-weight-light mb-2 ${year.color}--text`"
                  v-text="year.title"
                ></h2>
                <div
                  :class="`subheading font-weight-light mb-1 ${year.color}--text `"
                  v-text="year.where"
                ></div>
                <div v-text="year.content"></div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>



<script>
export default {
  data: () => ({
    years: [
      // {
      //   color: "cyan",
      //   year: "2019",
      //   title: "Future",
      //   where: "Code and Design anywhere",
      //   content: `As a Web Application Frontend UX Developer. 
      //             I'd love to be the one in the team, who connect Code and Design.
      //             And turn my passion, 
      //             creativity and conscientious to better user experience.`
      // },
      {
        color: "cyan",
        year: "2016",
        title: "Application Developer",
        where: "artiso solutions GmbH (DE)",
        content: `Three years apprenticeship as an Application Developer. I've learned the basic of Programming by .Net technologies 
                  and had the chance to develop Modern Web App by Angular, ASP.NET Core and so on. 
                  I was also able to get comfortable with Frontend UI libraries, like jQuery, Bootstrap and so on. 
                  I worked in "Innovation Team", which focus on AR/VR/MR research and App development. 
                  I supported the Team to implement apps for Hololens and Smartphone. 
                  At the meantime, I responsible for App development by Unity 3D 
                  and UI/UX design by Adobe Illustrator, Adobe XD and Adobe After Effects. 
                  I started studying Machine Learning by myself and developed Apps in my free time.
                  I was able to built a Machine Learning (Image Classification / Object Detection) feature in a project which delivery to customer.`
      },
      {
        color: "pink",
        year: "2015",
        title: "Chinese Tutor",
        where: "online (CN)",
        content: `I thaught Chinese online to students, who come from Australia, America, and Europe.
                  I had to take care of the entire business process myself. Including course developement, marketing, conducting classes, accounting and customer service.
                  In order to help students study efficiently, I created a multimedia eBook using iAuthor, Adobe Photoshop and Keynote.
                  I created and edited all the video and sound footage myself, utilizing iMovie, Adobe After Effects and Garageband.
                  For better Management of the student's course schedule, I created a Website using Wordpress. Doing so helped me learn more about HTML, CSS and Javascript.`
      },
      {
        color: "green",
        year: "2014",
        title: "Graphic Designer",
        where: "Yunnan University of Finance and Economics (CN)",
        content: `While I was studying for my master's degree, 
                  I worked part time as a Graphic Designer for a department ( Postgraduate Education Center ) at my University.
                  I was responsible for VI Design, 
                  such as the Student Portfolio as well as creating the University's Major Brochure using Adobe Illustrator and Adobe Photoshop.`
      }
    ]
  })
};
</script>

<style>
#experience-title {
  margin-bottom: 40px;
  margin-top: 40px;
}
</style>

