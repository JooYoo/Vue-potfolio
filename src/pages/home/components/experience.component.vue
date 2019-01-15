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
        title: "App Development in Ausbildung",
        where: "artiso solutions GmbH (DE)",
        content: `I've learned the basic of Programming by .Net technologies. 
                  I have the chance to develop Modern Web App by ASP.NET Core, Angular. 
                  And get comfortable with Frontend UI libraries, like jQuery, Bootstrap and so on. 
                  I worked in Innovation Team, which focus on Mixed Reality and Augmented Reality App development. 
                  I supported the Team to implement 4 apps for Hololens and Andriod Mobile Phone (ARCore). 
                  At the meantime, I responsible for App development by Unity 3D 
                  and UI/UX design by Adobe Illustrator, Adobe XD and Adobe After Effects. `
      },
      {
        color: "pink",
        year: "2015",
        title: "Chinese Tutor",
        where: "online (CN)",
        content: `I taught Chinese online to the students, 
                  who come from Australia, America, and Europe.
                  I have to take care of all the Business process alone. 
                  Include Course Development, Marketing, Conduct Classes, Accounting and Customer Service.
                  In order to help students study efficiently,
                  i created Multimedia eBook by iAuthor, Adobe Photoshop and Keynote.
                  All the Video and Sound footage in the eBook edited by iMove, Adobe After Effects and Garageband.
                  For better management of the students course schedule, 
                  i created a Website by Wordpress. I also had the chance to learn more about HTML, CSS and Javascript.`
      },
      {
        color: "green",
        year: "2014",
        title: "Graphic Designer",
        where: "Yunnan University of Finance and Economics (CN)",
        content: `When i was still study for my master degree, 
                  i worked as a Graphic Designer part time for a department ( Postgraduate Education Center ) in my University.
                  I responsible for VI Design, such as the Student Portfolio, 
                  University Major Brochure by Adobe Illustrator and Adobe Photoshop.`
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

