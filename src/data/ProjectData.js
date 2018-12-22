//const images = require.context('./images', true, /\.png$/)

const contents = {
    projects: [
        {
            id: 1,
            date: '2019-09-21',
            title: 'ToBuy Lite',
            techTalk: `PWA (progressive web app)`,
            concept: "It's a shopping lis",
            cover: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
            gitLink: 'first-git-link',
            demoLink: 'first-demo-link',
            images: ['first-images',
                'second-img'],
            techs: [
                {
                    name: 'PWA',
                    color:' purple',
                    icon: 'https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png'
                },
                {
                    name: 'VanillaJS',
                    color:'yellow darken-2',
                    icon: 'https://cdn.svgporn.com/logos/javascript.svg'
                },
            ]
        },
        {
            id: 2,
            date: '2019-09-21',
            title: 'ToBuy Material',
            techTalk: 'second-techTalk',
            concept: "concept",
            cover: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
            gitLink: 'second-git-link',
            demoLink: 'second-demo-link',
            images: ['first-images',],
            techs: [{
                name: 'PWA',
                color:'purple',
                icon: 'https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png'
            }, {
                name: 'Angular',
                color:'red darken-2',
                icon: 'https://cdn.svgporn.com/logos/angular-icon.svg'
            }, {
                name: 'TypeScript',
                color:'blue darken-4',
                icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg'
            }, {
                name: 'Material UI',
                color:'pink',
                icon: 'https://cdn.svgporn.com/logos/material-ui.svg'
            }]
        },
        {
            id: 3,
            date: '2019-09-21',
            title: 'jsCalculator',
            techTalk: 'third-techTalk',
            concept: "concept",
            cover: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
            gitLink: 'third-git-link',
            demoLink: 'third-demo-link',
            images: ['first-images',],
            techs: [
                {
                    name: 'PWA',
                    color:' purple',
                    icon: 'https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png'
                },
                {
                    name: 'VanillaJS',
                    color:'yellow darken-2',
                    icon: 'https://cdn.svgporn.com/logos/javascript.svg'
                },
            ]
        },
        {
            id: 4,
            date: '2019-09-21',
            title: 'jsCurrency',
            techTalk: 'third-techTalk',
            concept: "concept",
            cover: 'https://picsum.photos/200/300/?image=171',
            gitLink: 'third-git-link',
            demoLink: 'third-demo-link',
            images: ['first-images',],
            techs: [
                {
                    name: 'PWA',
                    color:' purple',
                    icon: 'https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png'
                },
                {
                    name: 'VanillaJS',
                    color:'yellow darken-2',
                    icon: 'https://cdn.svgporn.com/logos/javascript.svg'
                },
            ]
        },
        {
            id: 5,
            date: '2019-09-21',
            title: 'Portfolio',
            techTalk: 'third-techTalk',
            concept: "concept",
            cover: 'https://picsum.photos/200/300/?image=161',
            gitLink: 'third-git-link',
            demoLink: 'third-demo-link',
            images: ['first-images',],
            techs: [
                {
                    name: 'Vuejs',
                    color:'green',
                    icon: 'https://cdn.svgporn.com/logos/vue.svg'
                },
                {
                    name: 'VanillaJS',
                    color:'yellow darken-2',
                    icon: 'https://cdn.svgporn.com/logos/javascript.svg'
                },
                {
                    name: 'Vuetify',
                    color:'blue lighten-2',
                    icon: 'https://cdn.svgporn.com/logos/vuetifyjs.svg'
                },
            ]
        },
        {
            id: 6,
            date: '2019-09-21',
            title: 'Chinese Color',
            techTalk: 'third-techTalk',
            concept: "concept",
            cover: 'https://picsum.photos/200/300/?image=162',
            gitLink: 'third-git-link',
            demoLink: 'third-demo-link',
            images: ['first-images',],
            techs: [
                {
                    name: 'iOS',
                    color:'grey',
                    icon: 'https://image.flaticon.com/icons/svg/831/831276.svg'
                },
                {
                    name: 'Swift',
                    color:'orange',
                    icon: 'https://image.flaticon.com/icons/svg/732/732250.svg'
                },
            ]
        },
        {
            id: 7,
            date: '2019-09-21',
            title: 'Infinity Cards',
            techTalk: 'third-techTalk',
            concept: "Come soon",
            cover: 'https://picsum.photos/200/300/?image=149',
            gitLink: 'third-git-link',
            demoLink: 'third-demo-link',
            images: ['first-images',],
            techs: [
                {
                    name: 'Angular',
                    color:'red',
                    icon: 'https://cdn.svgporn.com/logos/angular-icon.svg'
                },
                {
                    name: 'TypeScript',
                    color:'blue darken-4',
                    icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg'
                }
            ]
        }
    ]
}
export default contents