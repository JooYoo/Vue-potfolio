//const images = require.context('./images', true, /\.png$/)

const contents = {
    projects: [
        {
            id: 1,
            title: 'ToBuy lite',
            cover: 'https://picsum.photos/200/300/?image=165',
            date: '2018-06-09',
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
                    img: `https://lh3.googleusercontent.com/zHolBxLAB8i3ZnWiDwrsje4oLkFPZ0rF9u8V9Na9b9IblpzNDm-JDJ7KVFhzl4RNnUoRXWIDQ-mg8zFSlLPQEXDvzjvTqlH5E5g0b60rb0b82NWO8uR0AbE6JSnWMcPm8H0XfgMsEEvyMRp6eKThM4aaCTO3Hh-Yo4xkC9UWPSNGbZ4yqrCDXY9pkHgfWCk43iW4YH-C8ZGHncuwDhlZhNDvS22DkbcJ44SZfYWMLZOpUX0wWQvu4FMBGUFkPdTjkSBmfR-3GiKOHY-V8SqBp006HZbgap0H18F5UE7--6bzu1A6CZo-nElwsl4LMYzEnWpKSxHSk5VM40_ycsEmydXyFWhPcS_411fewG20qIP3_3lf-uPJ1atjoKBvdz6i9HjXoXg_1_71kbwX1HPyElHfLjT1aXsv_H3a8SpYOnzSyuqJcstMLGU4mN-G8XsdJBXJsF92gwQO_74m3ePLtuc-6CazXBFT1evtiO_quloFw5dd3xn1BlJVYURG7hs3Ux69WkIpuwkJI3fZ2TRMrbtx-qt8kz2kTUqKkmVKq9NdWJF-0fmYVBX1N72D3X7iCXvuCSgVJGP84xqDHbCBGCCC-wxWPSRfwiTkMYCmpfayGhECWsvX-4w8D2BlSczjMOBV2TXQyzPWllOg4cTLDGqD=w822-h1268-no`
                },
                {
                    declare: 'strikethrough',
                    img: `https://lh3.googleusercontent.com/zHolBxLAB8i3ZnWiDwrsje4oLkFPZ0rF9u8V9Na9b9IblpzNDm-JDJ7KVFhzl4RNnUoRXWIDQ-mg8zFSlLPQEXDvzjvTqlH5E5g0b60rb0b82NWO8uR0AbE6JSnWMcPm8H0XfgMsEEvyMRp6eKThM4aaCTO3Hh-Yo4xkC9UWPSNGbZ4yqrCDXY9pkHgfWCk43iW4YH-C8ZGHncuwDhlZhNDvS22DkbcJ44SZfYWMLZOpUX0wWQvu4FMBGUFkPdTjkSBmfR-3GiKOHY-V8SqBp006HZbgap0H18F5UE7--6bzu1A6CZo-nElwsl4LMYzEnWpKSxHSk5VM40_ycsEmydXyFWhPcS_411fewG20qIP3_3lf-uPJ1atjoKBvdz6i9HjXoXg_1_71kbwX1HPyElHfLjT1aXsv_H3a8SpYOnzSyuqJcstMLGU4mN-G8XsdJBXJsF92gwQO_74m3ePLtuc-6CazXBFT1evtiO_quloFw5dd3xn1BlJVYURG7hs3Ux69WkIpuwkJI3fZ2TRMrbtx-qt8kz2kTUqKkmVKq9NdWJF-0fmYVBX1N72D3X7iCXvuCSgVJGP84xqDHbCBGCCC-wxWPSRfwiTkMYCmpfayGhECWsvX-4w8D2BlSczjMOBV2TXQyzPWllOg4cTLDGqD=w822-h1268-no`
                },
                {
                    declare: 'gif',
                    img: `https://lh3.googleusercontent.com/7XkHzeuYBUX6hKtoBlNgm3V_5O0qcBNlGbhPHt9vSvIwQlXlBFvHz3PFI6rQGf3iZHAg_4bwVF1FOAJ-f6hjencl_MnFFObp1vfFLLPctxG3pkOnGt9Z5B6TeDZJIPv9CXNnAJ5Rw305YOqVIpTc1Eamga30naYDWrB7I8nS5BHHczOGJQNBoHWsxWcVgIbwQunHadZxeMUu6eeC55CMz9Zf6puaIq1Sj9dkpbFX1ATuWFx7V3HNS6FuZIhtOfQd0cbHLbiqIATCrdzQ5NNDCgERFJ5uz4MlONG2cgDKdr8_f9pdYdqdpHWB7wclumdQHdXioRxsK4c9-O2BLm7WHjpowSWWtG7fCfjyYBNfOtGbpDUBQzE0Lmg23k8r5hyNpKZkcCavEkZ5d0HjHBFeGXNSRyHQw8mjU8mlVCkKzSQVJ35lU3yOuTMRMOwcmTqFEeJCIIRaGtJ9bDEriC-uSAFEnWUjZYNxr7A7KCLGQGpKxuGx-i1AlZDsLAmmYU6qO97IlLXTFeXW0a2Fi7Bwzo8MVpSUVa2ALRqkC8YY2vGDrIptYvxNtXVa__M-v3GRgjMsHOWwIlYh2p5X8yoGQJkHCyKUa6LWc77J6zflzHNBOEgHanS0gFm7pQyvv9Hb5ZnBRWJ2-seqjstQ5MF0Kpwy=w419-h642-no`
                }
            ],
            concept: `ToBuy lite is a TODO List like app, it's a simple Shopping List.
                      The title shows the current week day,.
                      User can add, cross out and remove item or clear the whole list. 
                      The App can be install to Home Screen, behaviour the same like a native app. All the data save in local, 
                      and the app can be used offline.`,
            demos: [
                {
                    name: 'Web App',
                    link: 'https://jooyoo.github.io/to-buy/',
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
            techTalk: `It's a Progressive Web App. 
                       Service Worker build in, 
                       offline run available. After input address in the browser, 
                       it can be added to Home Screen, same like the another native apps.`,
        },
        {
            id: 2,
            title: 'ToBuy Material',
            cover: 'https://farm8.staticflickr.com/7916/46356118545_f943da2078_b.jpg',
            date: '2018-06-06',
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
                name: 'Material Design',
                color: 'pink',
                icon: 'https://cdn.svgporn.com/logos/material-ui.svg'
            }],
            screenshots: [
                {
                    declare: 'main view',
                    img: `https://farm8.staticflickr.com/7806/46515620691_4f91c0a691_z.jpg`,
                },
                {
                    declare: 'strikethrough',
                    img: `https://farm8.staticflickr.com/7900/31575427087_f118a15566_z.jpg`
                },
                {
                    declare: 'gif',
                    img: `https://media.giphy.com/media/cAhFL9BsfOtcDJJp4D/giphy.gif`
                }
            ],
            concept: `ToBuy Material a Shopping List app with Modern Material Design. 
                      A updated version of the app ToBuy lite.
                      With the help of the side draw, user can manage the lists for each week day.
                      The App can be install to Home Screen, behaviour the same like a native app. All the data save in local, 
                      and the app can be used offline.`,
            demos: [
                {
                    name: 'Web App',
                    link: 'https://bit.ly/ngtobuy',
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
                    link: 'https://github.com/JooYoo/ng-tobuy/tree/master/ng-tobuy',
                    icon: 'https://cdn.svgporn.com/logos/github-icon.svg'
                },
            ],
            techTalk: `I tried Angular + Progressive Web App + Material Design. 
                       Service Worker build in, 
                       offline run available. After input address in the browser, 
                       it can be added to Home Screen, same like the another native apps.
                       Angualr Material Design works find, but there is no SideDraw component.
                       I have to use multiple components to build the SideDraw by myself. 
                       The process is not so enjoyable.`
        },
        {
            id: 3,
            title: 'Clean Calculator',
            cover: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
            date: '2019-07-15',
            techs: [
                {
                    name: 'PWA',
                    color: 'purple',
                    icon: 'https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png'
                },
                {
                    name: 'Cross-platform',
                    color: 'black',
                    icon: 'https://cdn.svgporn.com/logos/angular-icon.svg'
                },
                {
                    name: 'Angular',
                    color: 'red',
                    icon: 'https://cdn.svgporn.com/logos/angular-icon.svg'
                },
                {
                    name: 'TypeScript',
                    color: 'blue darken-4',
                    icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg'
                },
                {
                    name: 'ionic',
                    color: 'blue darken-2',
                    icon: 'https://cdn.svgporn.com/logos/ionic.svg'
                }
            ],
            screenshots: [
                {
                    declare: 'main view',
                    img: `https://live.staticflickr.com/65535/48296317917_3a296e3678_k.jpg`,
                },
                {
                    declare: 'strikethrough',
                    img: `https://live.staticflickr.com/65535/48296207696_233d52a1fc_k.jpg`
                },
                {
                    declare: 'gif',
                    img: `https://live.staticflickr.com/65535/48296210456_6c9fb74320_k.jpg`
                }
            ],
            concept: `Clean Calculator is a Calculator App. 
                      The basic mathematic operation available, 
                      include plus, minus, times and divide.
                      The App can be install from App Stores.`,
            demos: [
                {
                    name: 'Web App',
                    link: 'https://jooyoo.github.io/ionic-ToCalculate/',
                    icon: 'https://cdn.svgporn.com/logos/safari.svg'
                },
                {
                    name: 'Apple AppStore',
                    link: 'https://apps.apple.com/us/app/clean-simple-calculator/id1472731157?l=zh#?platform=ipad',
                    icon: 'https://image.flaticon.com/icons/svg/831/831276.svg'
                },
                {
                    name: 'Google Play',
                    link: 'https://play.google.com/store/apps/details?id=io.clean.calculator&gl=DE',
                    icon: 'https://image.flaticon.com/icons/svg/888/888857.svg'
                },
                {
                    name: 'Github',
                    link: 'https://github.com/JooYoo/ionic-ToCalculate',
                    icon: 'https://cdn.svgporn.com/logos/github-icon.svg'
                },
            ],
            techTalk: `I build the app with Angular + ionic. 
                       And i used Cordova to make the app cross-platform.
                       User can download the app by both Apple AppStore and Google PlayStore.
                       It is also a Progressive Web App, add to Home Screen and offline available.`,
        },
        {
            id: 4,
            title: 'Yu Currency',
            cover: 'https://farm3.staticflickr.com/2582/4105054854_2927d15bc6_b.jpg',
            date: '2019-10-01',
            techs: [
                {
                    name: 'Web App',
                    color: 'black',
                    icon: 'https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png'
                },
                {
                    name: 'ionic',
                    color: 'blue darken-2',
                    icon: 'https://cdn.svgporn.com/logos/ionic.svg'
                },
                {
                    name: 'Angular',
                    color: 'red',
                    icon: 'https://cdn.svgporn.com/logos/angular-icon.svg'
                },
                {
                    name: 'TypeScript',
                    color: 'blue darken-4',
                    icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg'
                },

                {
                    name: 'PWA',
                    color: 'purple',
                    icon: 'https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png'
                }
            ],
            screenshots: [
                {
                    declare: 'main view',
                    img: `https://live.staticflickr.com/65535/48840803501_7207765e22_k.jpg`,
                },
                {
                    declare: 'strikethrough',
                    img: `https://live.staticflickr.com/65535/48840976727_93f5aa1b42_k.jpg`
                },
                {
                    declare: 'gif',
                    img: `https://live.staticflickr.com/65535/48840435608_a207ae4f79_k.jpg`
                }
            ],
            concept: `Yu Currency is a simple Currency calculator. 
                     It keeps updating the latest exchange rates, and including 30+ currencies. 
                     You can use it to handle simple currency calculation. 
                     Simple, Clean, no Advertisement.`,
            demos: [
                {
                    name: 'PWA',
                    link: 'https://jooyoo.github.io/ionic-currency/',
                    icon: 'https://cdn.svgporn.com/logos/safari.svg'
                },
                {
                    name: 'Apple AppStore',
                    link: 'https://apps.apple.com/us/app/yu-currency/id1481925156?l=zh&ls=1',
                    icon: 'https://image.flaticon.com/icons/svg/831/831276.svg'
                },
                {
                    name: 'Google Play',
                    link: 'https://play.google.com/store/apps/details?id=io.yu.currency',
                    icon: 'https://image.flaticon.com/icons/svg/888/888857.svg'
                },
                {
                    name: 'Github',
                    link: 'https://github.com/JooYoo/ionic-currency',
                    icon: 'https://cdn.svgporn.com/logos/github-icon.svg'
                },
            ],
            techTalk: `Yu Currency build with Angular and ionic as UI library.
                       To get the newest currency data by https://fix.io API.
                       The data will update every 30 minutes. 
                       Support iOS, Android and PWA`,
        },
        {
            id: 5,
            title: 'Portfolio',
            cover: 'https://farm8.staticflickr.com/7869/47276336342_1218785312_b.jpg',
            date: '2018-12-21',
            techs: [
                {
                    name: 'Website',
                    color: 'gray',
                    icon: 'https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png'
                },
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
            ],
            screenshots: [
                {
                    declare: 'main title',
                    img: `https://lh3.googleusercontent.com/HWspQZhWboXcnMnmlfB6IEUmpamgQxIZwUkIXV67bSkec6E1h-2qR9eAi0HqWyQ_PT9eh8-5qEBfnV9gUgeN8M8Oymzk41FRKb83fu2kNhs-aRXtO_5KyrNAPbA_whejH9Pt_4I9CZUcxlLdoYy6RfnHYb2xCh16NGxAzbB_hi0oj4tqnE5WaprhShduZ7vgSuBrN5boPzIlF0_CEDG79OH3o9ePpWf9wnB8XmGyAwOSzm746jkDzfgBJDwORZ0aikq4kdnaNbaFv5IkQKmPQAiY8cRsSFX8kw73dtbNRh6MrPXcQiX5jSJXrWdbqv6cGcchQTSZp78TiT8JfB-lY5ckcLMLKC1Cf5ybuiFVQ6zaAo1T8iu5SVPOlicCKpb5VxnwuPlcvkcx9PKd51EryQhx0FcaPFWDLKCPIFbaexGeVHVJf4_0h4otxsK4sezprpSTQyg-1_suvtfD4EMbkLGUKkRcu-CGra5dF30zIPvbMKcAewpfpwsxC62FtW93wzjq_4YSJahzYAbalMqPhDdT3jg1NKUFjG4dPid9qxnZa3ZFJMidtWyH3VaLhLJSFq1_lZyt7xxbRntSx845sLIenpNCdP4ecMVoe87tr7SbOKcHA00DfeWI6cpfFzGjy-fOrncfoLdLgqNGFaJkbNRv=w1660-h1268-no`,
                },
                {
                    declare: 'strikethrough',
                    img: `https://lh3.googleusercontent.com/JGA5lah-y9Wasrt8HB6nYJWVFe8bRc16iaheSEktUbhvIvC_V2syLGPW6EhzXyBNQqksiGzG_R794X3jMYhHSd0HnRTdQJI3MabvwXmabeZJ6FX8CHYbMaKD21-TCsjkS6BNhlqUIzom94UB_mT0e-TAdiYehrGOibBfIIYds42AwiO2zmqIGmbL0Q3F4qCGL8ooDcoIuf8pCYqGC_X_o4MY8DqTeuWvkyqA8ITWvv5P0cqThfPQh0x4_sTyXGVq4qgldC2n0LZa2wYBENhW5rk7yHoo5LvWxBCydhLN85LNJnq-eEC0BpFRl7U60ctyBhlgG51pS3KEn6rpclu3nBu8fb2CWrOWFavCzV8FTnwf_zRd1Hut9c6f7UmvcKSUyXZAaBxAnQSFI7YPDXR1EDaSpmK1liHWXjTOS5WzcU-dexZptzBEWVscgPvrrx3TR0XC7wFfrdzt-Zwit4p-m9208tQUlRvCHrLDdB_O8Ajd0qIGZT2k5IbpCU0elqN_jzFkDkqAqNpBTmWlCbLweT4fnSe6_A6ePK64jU2FxJX6LVv2jQ1sgGEp02iJcIuTaNiUCAJO67wX2-X-yBu_RzUZ-LedkyAdY60o7FCYPw6Ob74Gl0wcKG1TIZDyB9vnyE6TvoZ4smfLA_me8q2Vj1QF=w1660-h1268-no`
                },
                {
                    declare: 'gif',
                    img: `https://lh3.googleusercontent.com/kd2xfIp6p8f-t_FoTovBxP_sZHsadH8bwx9satLtyN83PtDDY3HbktnrFlpb_I1pnq9X1HeYA9CJLQ2SwhI44tTv5kin9LlKVA6J6L1tWAGway-rNfiqel_VOUYA5FPFbL2EFyavg3ZvoIOMzUNGMNvUCDud7ODKzN2TpLGtppJvCyP2ELCMzRcD3Jnqx6qGyPEHQsvUAjJc4zGonzcPg6f1HtyOHdbfdHKCr3tIuOn0lo4tA9b7K5EnzmyUkOQvHjcPj5yVT-s7I5YxA7Gw9hWGvEWFV1rf2XY8wyaEhsuosnBjPuE1fxy4J5Rb7f998Up4NzDCUWYhkahU8wYHIH86bdx1WJzM9xDVbyObIdcl9KzxCKd83QhLEh4NL6MUvH63Q6fP9SE8pK219YPjrgQqMntTL6Y0jg_k88ZhUofchfbtQMkjp_XEZKOn73uf1w3xc306NUobmrPKWoH3tPUBwOk2VxUovp0SYadSR0I5rLolHdGLQ1TB4vUKIQ9Liti4TMuiIPNwkelOsNsqen7TsRfsPdZuqLqloG-xjofxpaRMBA1is8WkBxSjioQ_lqngpLVXrzKlRdJCPlU2PRiClUPxlWfl77g8DAVAC2sb6NmPE5hfjgySk3oscTAexlxqe9JW6VTEchGn1l_1Cp-U=w1660-h1268-no`
                }
            ],
            concept: `Portfolio is my personnal Portfolio Website, i use it to orgnize my projects,
                      get to know more interesting people online and find job.`,
            demos: [
                {
                    name: 'Website',
                    link: 'https://jooyoo.github.io/Vue-potfolio/#/',
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
                    link: 'https://github.com/JooYoo/Vue-potfolio',
                    icon: 'https://cdn.svgporn.com/logos/github-icon.svg'
                },
            ],
            techTalk: `I build the Website by Vue.js. I feel Vue is much lighter than Angular.
                       The way to build a Web app by Vue is also very clean and enjoyable. 
                       I used an UI Framework Vuetify, it's special for Vue.js. 
                       There are few components look like Material Design, but there are also some components very unique.`,
        },
        {
            id: 6,
            title: 'Rock Paper Scissor',
            cover: 'https://farm8.staticflickr.com/7872/31809018067_46ca417250_b.jpg',
            date: '2019-02-10',
            techs: [
                {
                    name: 'Machine Learning',
                    color: 'red',
                    icon: 'https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png'
                },
                {
                    name: 'VanillaJS',
                    color: 'yellow darken-2',
                    icon: 'https://cdn.svgporn.com/logos/javascript.svg'
                },
                {
                    name: 'Tensorflow.js',
                    color: 'orange darken-3',
                    icon: 'https://image.flaticon.com/icons/svg/732/732250.svg'
                },
                {
                    name: 'ML5',
                    color: 'purple',
                    icon: 'https://image.flaticon.com/icons/svg/831/831276.svg'
                },
            ],
            screenshots: [
                {
                    declare: 'main ui',
                    img: `https://farm8.staticflickr.com/7840/46995062242_0d98df878e_h.jpg`,
                },
                {
                    declare: 'loss',
                    img: `https://farm8.staticflickr.com/7824/40082079523_85b9f9edc7_h.jpg`
                },
                {
                    declare: 'result',
                    img: 'https://farm8.staticflickr.com/7896/46995062422_4693ccf31a_h.jpg'
                }
            ],
            concept: `I developed this Web App to simulate the basic progress of Machine learning. 
                      The UI clearly divided the whole computing process to Input, 
                      Training and Output. User is able to use a simple webcam to implement a machine learning experience. 
                      User could gather different gestures through the webcam, for example "Rock, Scissor, Paper". 
                      Based on the training Data from user, in the end of the app, computer will be able to recognise different gestures.`,
            demos: [
                {
                    name: 'Web App',
                    link: 'http://bit.ly/mlsimulator',
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
                    link: 'https://github.com/JooYoo/ML5-ImageClassification',
                    icon: 'https://cdn.svgporn.com/logos/github-icon.svg'
                },
            ],
            techTalk: `This app is a simple Image Classificator. 
                       It created by ML5js which is a high level framework based on Tensorflowjs. 
                       Compare with Native Tensorflow, Tensorflowjs is simplified the configuration progress. 
                       I don't need to worry about do i use a Mac or a PC, do i need to install Docker, 
                       how is my Python version, are there some dependencies i forget to install... 
                       The whole development process by Tensorflowjs i can focus on the app function implement. 
                       And all the logic run on the Frontend, easy to share and present. 
                       I believe Tensorflowjs will be more and more powerful and popular`,

        },
        {
            id: 7,
            title: 'Infinity Cards',
            cover: 'https://farm8.staticflickr.com/7485/16133394909_6424797a9f_b.jpg',
            date: '2019-02-01',
            techs: [
                {
                    name: 'Cross-platform',
                    color: 'black',
                    icon: 'https://cdn.svgporn.com/logos/angular-icon.svg'
                },
                {
                    name: 'Angular',
                    color: 'red',
                    icon: 'https://cdn.svgporn.com/logos/angular-icon.svg'
                },
                {
                    name: 'TypeScript',
                    color: 'blue darken-4',
                    icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg'
                },

                {
                    name: 'Bootstrap',
                    color: 'purple darken-3',
                    icon: 'https://cdn.svgporn.com/logos/bootstrap.svg'
                },
                {
                    name: 'ionic',
                    color: 'blue darken-2',
                    icon: 'https://cdn.svgporn.com/logos/ionic.svg'
                }
            ],
            screenshots: [
                {
                    declare: 'library',
                    img: `https://farm5.staticflickr.com/4849/33097439698_af16aa6a72.jpg`,
                },
                {
                    declare: 'swipe',
                    img: `https://farm5.staticflickr.com/4881/40008301783_f2ae188bd9.jpg`
                },
                {
                    declare: 'chart',
                    img: 'https://farm5.staticflickr.com/4867/46248552374_8a722797a1.jpg'
                }
            ],
            concept: `InfinityCards is a Flashcard library in your pocket. 
                      It allows you easily record key information on both sides of the card. 
                      The system will help you to organize the cards to several stacks. 
                      It's practical for you to manage a numberof cards. 
                      No matter you need to learn new vocabulary of a foreign language, or a lot of new concepts. 
                      InfinityCards could be your productive tool to memorize.`,
            demos: [
                {
                    name: 'Web App',
                    link: 'http://bit.ly/infinitycards',
                    icon: 'https://cdn.svgporn.com/logos/safari.svg'
                },
                {
                    name: 'Apple AppStore',
                    link: 'https://itunes.apple.com/in/app/infinitycards/id1451342091?mt=8',
                    icon: 'https://image.flaticon.com/icons/svg/831/831276.svg'
                },
                {
                    name: 'Google Play',
                    link: 'https://play.google.com/store/apps/details?id=io.zhuyu.InfinityCards',
                    icon: 'https://image.flaticon.com/icons/svg/888/888857.svg'
                },
                {
                    name: 'Github',
                    link: 'https://github.com/JooYoo/ionic-infinityCard',
                    icon: 'https://cdn.svgporn.com/logos/github-icon.svg'
                },
            ],
            techTalk: `This app is full cross platform. iOS, Android, PWA are all work very well.
                       I'd love to say, hybrid mobile app Technic is the most practical and efficient way
                       to build cross-platform experience. I really enjoy the development progress. 
                       Unbelivable flexible. I was able to use all the Web Library to achieve my goal. 
                       2019, it is the best solution for mobile-app development.`,
        },
        {
            id: 8,
            title: 'ML Flow',
            cover: 'https://farm5.staticflickr.com/4773/25943542447_25a3aeb20a_b.jpg',
            date: '2019-03-01',
            techs: [
                {
                    name: 'Machine Learning',
                    color: 'red',
                    icon: 'https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png'
                },
                {
                    name: 'VanillaJS',
                    color: 'yellow darken-2',
                    icon: 'https://cdn.svgporn.com/logos/javascript.svg'
                },
                {
                    name: 'Tensorflow.js',
                    color: 'orange darken-3',
                    icon: 'https://image.flaticon.com/icons/svg/732/732250.svg'
                },
                {
                    name: 'ML5',
                    color: 'purple',
                    icon: 'https://image.flaticon.com/icons/svg/831/831276.svg'
                },
            ],
            screenshots: [
                {
                    declare: 'teachableMachine01',
                    img: `https://farm8.staticflickr.com/7892/47268515381_8748d5db23_h.jpg`,
                },
                {
                    declare: 'teachableMachine02',
                    img: `https://farm8.staticflickr.com/7878/47268514531_0262eb56a7_h.jpg`
                },
                {
                    declare: 'teachableMachine03',
                    img: 'https://farm8.staticflickr.com/7858/47268515131_1513d0f70e_h.jpg'
                }
            ],
            concept: `I developed the simple Web App to present the process of a Machine Learning Neural Network. 
                      Also to help myself to get more feeling about ML. From left to right. 
                      Webcam as input data resource, 
                      user can take two differet type of pictures which take the different label (Standby or Hand). 
                      Press Training button start to train the data. 
                      After that, the output will display the recognition result.`,
            demos: [
                {
                    name: 'Web App',
                    link: 'https://jooyoo.github.io/ML5-mlflow/',
                    icon: 'https://cdn.svgporn.com/logos/safari.svg'
                },
                // {
                //     name: 'Apple AppStore',
                //     link: 'https://itunes.apple.com/in/app/infinitycards/id1451342091?mt=8',
                //     icon: 'https://image.flaticon.com/icons/svg/831/831276.svg'
                // },
                // {
                //     name: 'Google Play',
                //     link: 'https://play.google.com/store/apps/details?id=io.zhuyu.InfinityCards',
                //     icon: 'https://image.flaticon.com/icons/svg/888/888857.svg'
                // },
                {
                    name: 'Github',
                    link: 'https://github.com/JooYoo/ML5-clone-teachableMachine',
                    icon: 'https://cdn.svgporn.com/logos/github-icon.svg'
                },
            ],
            techTalk: `A simple Image Classificator. 
                      Based on the huge image dataset from ImageNet, used pre-train model MobileNet. 
                      A typical Transfer-learning program. 
                      The advantage is fast and simple to implement. 
                      The disadvantage is after training, to expand datasets is not possible.`,
        },
        {
            id: 9,
            title: 'Object Detection with SSD',
            cover: 'https://farm2.staticflickr.com/1771/43862531032_75f1efd9c5_b.jpg',
            date: '2019-03-07',
            techs: [
                {
                    name: 'Machine Learning',
                    color: 'red',
                    icon: 'https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png'
                },
                {
                    name: 'Python',
                    color: 'blue darken-2',
                    icon: 'https://cdn.svgporn.com/logos/javascript.svg'
                },
                {
                    name: 'Tensorflow',
                    color: 'orange darken-4',
                    icon: 'https://image.flaticon.com/icons/svg/732/732250.svg'
                },
                {
                    name: 'OpenCV',
                    color: 'green',
                    icon: 'https://image.flaticon.com/icons/svg/732/732250.svg'
                }
            ],
            screenshots: [
                {
                    declare: 'result',
                    img: `https://media.giphy.com/media/2sgFAsjkejwWrvjTJB/giphy.gif`,
                }
            ],
            concept: `A Machine Learning Program. 
                      It is able to detect over 80 objects in our life. Like person, cup, tv, dog, car and so on.
                      All you need is a simple Webcam and a computer.
                      The result is not only doing a simple prediction (display what is it), 
                      but also to present where is the specific object and the confidence percent.`,
            demos: [
                // {
                //     name: 'Web App',
                //     link: 'https://jooyoo.github.io/ML5-clone-teachableMachine/',
                //     icon: 'https://cdn.svgporn.com/logos/safari.svg'
                // },
                // {
                //     name: 'Apple AppStore',
                //     link: 'https://itunes.apple.com/in/app/infinitycards/id1451342091?mt=8',
                //     icon: 'https://image.flaticon.com/icons/svg/831/831276.svg'
                // },
                // {
                //     name: 'Google Play',
                //     link: 'https://play.google.com/store/apps/details?id=io.zhuyu.InfinityCards',
                //     icon: 'https://image.flaticon.com/icons/svg/888/888857.svg'
                // },
                {
                    name: 'Github',
                    link: 'https://github.com/JooYoo/Tensorflow-object_detection_webcam',
                    icon: 'https://cdn.svgporn.com/logos/github-icon.svg'
                },
            ],
            techTalk: `A Object Detector. Used Tensorflow, SSD algorithm, coco Datasets. 
                      At first, based on Tensorflow Object Detection API, i implemented object detection on static image.
                      After that i used OpenCV to get each frame from webcam, 
                      draw bounding box for all the objects which has been detected. 
                      Like all the Objects Detector, to improve the FPS is always a challenge. 
                      In this project, i was able to keep the FPS at 10~15.
                      Test environment: Macbook Pro(Early 2015). Intel Core i5 2.7 GHz. 8GB RAM. Intel Iris Graphics 6100`,
        },
        {
            id: 10,
            title: 'ML KNN',
            cover: 'https://farm6.staticflickr.com/5131/5391445158_a502135d37_b.jpg',
            date: '2019-03-07',
            techs: [
                {
                    name: 'Machine Learning',
                    color: 'red',
                    icon: 'https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png'
                },
                {
                    name: 'VanillaJS',
                    color: 'yellow darken-2',
                    icon: 'https://cdn.svgporn.com/logos/javascript.svg'
                },
                {
                    name: 'Tensorflow.js',
                    color: 'orange darken-3',
                    icon: 'https://image.flaticon.com/icons/svg/732/732250.svg'
                },
                {
                    name: 'ML5',
                    color: 'purple',
                    icon: 'https://image.flaticon.com/icons/svg/831/831276.svg'
                },
                {
                    name: 'UIkit',
                    color: 'blue darken-1',
                    icon: 'https://image.flaticon.com/icons/svg/831/831276.svg'
                },
            ],
            screenshots: [
                {
                    declare: 'img00',
                    img: `https://live.staticflickr.com/65535/47993649073_601f917fbb_b.jpg`,
                },
                {
                    declare: 'img01',
                    img: `https://live.staticflickr.com/65535/47993627727_1ba9eaefe2_z.jpg`,
                },
                {
                    declare: 'img02',
                    img: `https://live.staticflickr.com/65535/47993671341_4b9a7066ea_z.jpg`,
                }
            ],
            concept: `A Machine Learning Program. Through Webcam streaming,
                      the programm can recognize is there a hand or not. After data collection,
                      the programm can also distinguish position of the hand. 
                      If the prediction result is not enough accurate, 
                      user can collect more data for specific category to optimize the prediction result.`,
            demos: [
                {
                    name: 'Web App',
                    link: 'https://jooyoo.github.io/ML5-mlknn/',
                    icon: 'https://cdn.svgporn.com/logos/safari.svg'
                },
                // {
                //     name: 'Apple AppStore',
                //     link: 'https://itunes.apple.com/in/app/infinitycards/id1451342091?mt=8',
                //     icon: 'https://image.flaticon.com/icons/svg/831/831276.svg'
                // },
                // {
                //     name: 'Google Play',
                //     link: 'https://play.google.com/store/apps/details?id=io.zhuyu.InfinityCards',
                //     icon: 'https://image.flaticon.com/icons/svg/888/888857.svg'
                // },
                {
                    name: 'Github',
                    link: 'https://github.com/JooYoo/ML5-mlknn',
                    icon: 'https://cdn.svgporn.com/logos/github-icon.svg'
                },
            ],
            techTalk: `A Image Classificator. Used Tensorflow.js, KNN algorithm, ML5.js. 
                      Not like normal deep learning neural network, KNN has no "Training" required.
                      User only need to collect data and label them, 
                      the algorithm will find out how similar is this sample compare with the nearest neighbors.
                      The predict the result based on the "high frequency appear" neighbors' label. 
                      User can add more date anytime to optimize the prediction result.`,
        },
        {
            id: 11,
            title: 'Yu News',
            cover: 'https://cdn.pixabay.com/photo/2019/12/11/18/19/landscape-4688944_1280.jpg',
            date: '2019-12-13',
            techs: [
                {
                    name: 'Web App',
                    color: 'black',
                    icon: 'https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png'
                },
                {
                    name: 'ionic',
                    color: 'blue darken-2',
                    icon: 'https://cdn.svgporn.com/logos/ionic.svg'
                },
                {
                    name: 'Angular',
                    color: 'red',
                    icon: 'https://cdn.svgporn.com/logos/angular-icon.svg'
                },
                {
                    name: 'TypeScript',
                    color: 'blue darken-4',
                    icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg'
                },

                {
                    name: 'PWA',
                    color: 'purple',
                    icon: 'https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png'
                }
            ],
            screenshots: [
                {
                    declare: 'img00',
                    img: `https://live.staticflickr.com/65535/49211875412_eff10786b9_k.jpg`,
                },
                {
                    declare: 'img01',
                    img: `https://live.staticflickr.com/65535/49211651556_e2cdf64cd9_k.jpg`,
                },
                {
                    declare: 'img02',
                    img: `https://live.staticflickr.com/65535/49211875327_9dee2ece3b_k.jpg`,
                }
            ],
            concept: `A News App. To get breaking news headlines, and search for articles from over 30,000 news sources`,
            demos: [
                {
                    name: 'PWA',
                    link: 'https://jooyoo.github.io/ionic-yuNews',
                    icon: 'https://cdn.svgporn.com/logos/safari.svg'
                },
                // {
                //     name: 'Apple AppStore',
                //     link: 'https://itunes.apple.com/in/app/infinitycards/id1451342091?mt=8',
                //     icon: 'https://image.flaticon.com/icons/svg/831/831276.svg'
                // },
                // {
                //     name: 'Google Play',
                //     link: 'https://play.google.com/store/apps/details?id=io.zhuyu.InfinityCards',
                //     icon: 'https://image.flaticon.com/icons/svg/888/888857.svg'
                // },
                {
                    name: 'Github',
                    link: 'https://github.com/JooYoo/ionic-yuNews',
                    icon: 'https://cdn.svgporn.com/logos/github-icon.svg'
                },
            ],
            techTalk: `Angular + ionic => PWA`,
        }
    ]
}
export default contents