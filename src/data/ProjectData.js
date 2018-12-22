//const images = require.context('./images', true, /\.png$/)

const contents = {
    projects: [
        {
            id: 1,
            title: 'ToBuy lite',
            cover: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
            date: '2018-12-22',
            techs: [
                {
                    name: 'PWA',
                    color: ' purple',
                    icon: 'https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png'
                },
                {
                    name: 'VanillaJS',
                    color: 'yellow darken-2',
                    icon: 'https://cdn.svgporn.com/logos/javascript.svg'
                },
            ],
            screenshots: [
                {
                    declare: 'add item',
                    img: `https://lh3.googleusercontent.com/zHolBxLAB8i3ZnWiDwrsje4oLkFPZ0rF9u8V9Na9b9IblpzNDm-JDJ7KVFhzl4RNnUoRXWIDQ-mg8zFSlLPQEXDvzjvTqlH5E5g0b60rb0b82NWO8uR0AbE6JSnWMcPm8H0XfgMsEEvyMRp6eKThM4aaCTO3Hh-Yo4xkC9UWPSNGbZ4yqrCDXY9pkHgfWCk43iW4YH-C8ZGHncuwDhlZhNDvS22DkbcJ44SZfYWMLZOpUX0wWQvu4FMBGUFkPdTjkSBmfR-3GiKOHY-V8SqBp006HZbgap0H18F5UE7--6bzu1A6CZo-nElwsl4LMYzEnWpKSxHSk5VM40_ycsEmydXyFWhPcS_411fewG20qIP3_3lf-uPJ1atjoKBvdz6i9HjXoXg_1_71kbwX1HPyElHfLjT1aXsv_H3a8SpYOnzSyuqJcstMLGU4mN-G8XsdJBXJsF92gwQO_74m3ePLtuc-6CazXBFT1evtiO_quloFw5dd3xn1BlJVYURG7hs3Ux69WkIpuwkJI3fZ2TRMrbtx-qt8kz2kTUqKkmVKq9NdWJF-0fmYVBX1N72D3X7iCXvuCSgVJGP84xqDHbCBGCCC-wxWPSRfwiTkMYCmpfayGhECWsvX-4w8D2BlSczjMOBV2TXQyzPWllOg4cTLDGqD=w822-h1268-no`,
                },
                {
                    declare: 'strikethrough',
                    img: `https://lh3.googleusercontent.com/41QjxrxLQO9jvjFncJ0O6oSZtKbI-JYLppwej7AjbpCWu8VU7jRU4nwWdEEGhsobCJSMwPLSNFD5Q1vMTdNSEMSfMQjKidQhNk0T5PHR8iTo4-12bUAsCBQEngaYX1zwPMXYscChlpriPRxgF4IadaVr_xv1mvTt_t25d_7rzdgtaNszGfAq03_jMbdnRfyqWF4qvz1-UiPwv6GQcLeOXUFW44ahxn4WuWcTfNUmw-KYCj6wJ3gG6docRT3NpzTp9Xr7kZmggifF2iq2ptB6V9OV0b3D6TOK3K521EjPDtgpbwPKOXjxg96y-6KTuyXtfvrGVSAitjzXaIpZmhUJC1Fi-lySRr9u00f1uwEI_eGoRaJ5hh02CYwyDfor9HxTwW_Rh9bV8aiWRVhD2plNN5sK8FIPeNHopQJsuHOEXrz6NWrut7UJIcwCJwa6BKh_P9_0TrHppSt_WTHC82yj2oY7oUNXzlnatHCzhzqDlMJ9nRyP0vCVyo-yCs53DLLwAlx-EtT7ZkPbFrZhjrqpP1S14aIwgN6SSkQVLUnoJslXQq6aQfREftO9YGus4Fj82FdK6vwewqRjeVzf_5Q2H4CyOdAlM4N6NSuenMgFIKGvGKueR2bbyO0pH6ZxCdN0UKFLcCqT9jA4esUPEvpaiim0=w822-h1268-no`
                },
                {
                    declare: 'gif',
                    img: 'https://lh3.googleusercontent.com/7XkHzeuYBUX6hKtoBlNgm3V_5O0qcBNlGbhPHt9vSvIwQlXlBFvHz3PFI6rQGf3iZHAg_4bwVF1FOAJ-f6hjencl_MnFFObp1vfFLLPctxG3pkOnGt9Z5B6TeDZJIPv9CXNnAJ5Rw305YOqVIpTc1Eamga30naYDWrB7I8nS5BHHczOGJQNBoHWsxWcVgIbwQunHadZxeMUu6eeC55CMz9Zf6puaIq1Sj9dkpbFX1ATuWFx7V3HNS6FuZIhtOfQd0cbHLbiqIATCrdzQ5NNDCgERFJ5uz4MlONG2cgDKdr8_f9pdYdqdpHWB7wclumdQHdXioRxsK4c9-O2BLm7WHjpowSWWtG7fCfjyYBNfOtGbpDUBQzE0Lmg23k8r5hyNpKZkcCavEkZ5d0HjHBFeGXNSRyHQw8mjU8mlVCkKzSQVJ35lU3yOuTMRMOwcmTqFEeJCIIRaGtJ9bDEriC-uSAFEnWUjZYNxr7A7KCLGQGpKxuGx-i1AlZDsLAmmYU6qO97IlLXTFeXW0a2Fi7Bwzo8MVpSUVa2ALRqkC8YY2vGDrIptYvxNtXVa__M-v3GRgjMsHOWwIlYh2p5X8yoGQJkHCyKUa6LWc77J6zflzHNBOEgHanS0gFm7pQyvv9Hb5ZnBRWJ2-seqjstQ5MF0Kpwy=w419-h642-no'
                }
            ],
            concept: `Lorem ipsum dolor sit amet, 
                      consectetur adipiscing elit. 
                      In diam mi, aliquet quis consectetur eu, 
                      pulvinar at ligula. Nulla ac odio sed arcu sodales ullamcorper. 
                      Pellentesque venenatis orci et finibus pellentesque. 
                      Ut hendrerit neque eu felis congue dignissim. 
                      Praesent dignissim ornare purus, quis sodales mi elementum nec. 
                      Praesent facilisis felis vitae ullamcorper sodales. 
                      Integer at tincidunt odio, in viverra libero. 
                      Nulla eu mi bibendum justo vestibulum fringilla sed sagittis magna. 
                      In convallis congue ultrices. Nunc ac dui convallis, 
                      iaculis nulla non, ullamcorper turpis. Sed id viverra velit, 
                      eget malesuada dolor. In non congue ligula. Fusce iaculis dolor eget fermentum faucibus.`,
            demos: [
                {
                    name: 'Web App',
                    link: 'https://tobuy.ga/',
                    icon: 'https://cdn.svgporn.com/logos/safari.svg'
                },
                // {
                //     name: 'Apple AppStore',
                //     link: '',
                //     icon: 'https://image.flaticon.com/icons/svg/831/831276.svg'
                // },
                // {
                //     name: 'Google Play',
                //     link: '',
                //     icon: 'https://image.flaticon.com/icons/svg/888/888857.svg'
                // },
                {
                    name: 'Github',
                    link: 'https://github.com/JooYoo/to-buy',
                    icon: 'https://cdn.svgporn.com/logos/github-icon.svg'
                },
            ],
            techTalk: `Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit. In diam mi, 
                       aliquet quis consectetur eu, pulvinar at ligula. 
                       Nulla ac odio sed arcu sodales ullamcorper. 
                       Pellentesque venenatis orci et finibus pellentesque. 
                       Ut hendrerit neque eu felis congue dignissim. 
                       Praesent dignissim ornare purus, quis sodales mi elementum nec. 
                       Praesent facilisis felis vitae ullamcorper sodales. 
                       Integer at tincidunt odio, in viverra libero. 
                       Nulla eu mi bibendum justo vestibulum fringilla sed sagittis magna. 
                       In convallis congue ultrices. 
                       Nunc ac dui convallis, iaculis nulla non, ullamcorper turpis. 
                       Sed id viverra velit, eget malesuada dolor.`,




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
                color: 'purple',
                icon: 'https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png'
            }, {
                name: 'Angular',
                color: 'red darken-2',
                icon: 'https://cdn.svgporn.com/logos/angular-icon.svg'
            }, {
                name: 'TypeScript',
                color: 'blue darken-4',
                icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg'
            }, {
                name: 'Material UI',
                color: 'pink',
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
                    color: ' purple',
                    icon: 'https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png'
                },
                {
                    name: 'VanillaJS',
                    color: 'yellow darken-2',
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
                    color: ' purple',
                    icon: 'https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png'
                },
                {
                    name: 'VanillaJS',
                    color: 'yellow darken-2',
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
                    color: 'green',
                    icon: 'https://cdn.svgporn.com/logos/vue.svg'
                },
                {
                    name: 'VanillaJS',
                    color: 'yellow darken-2',
                    icon: 'https://cdn.svgporn.com/logos/javascript.svg'
                },
                {
                    name: 'Vuetify',
                    color: 'blue lighten-2',
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
                    color: 'grey',
                    icon: 'https://image.flaticon.com/icons/svg/831/831276.svg'
                },
                {
                    name: 'Swift',
                    color: 'orange',
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
                    color: 'red',
                    icon: 'https://cdn.svgporn.com/logos/angular-icon.svg'
                },
                {
                    name: 'TypeScript',
                    color: 'blue darken-4',
                    icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg'
                }
            ]
        }
    ]
}
export default contents