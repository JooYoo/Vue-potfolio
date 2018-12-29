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
                    img: `https://lh3.googleusercontent.com/zHolBxLAB8i3ZnWiDwrsje4oLkFPZ0rF9u8V9Na9b9IblpzNDm-JDJ7KVFhzl4RNnUoRXWIDQ-mg8zFSlLPQEXDvzjvTqlH5E5g0b60rb0b82NWO8uR0AbE6JSnWMcPm8H0XfgMsEEvyMRp6eKThM4aaCTO3Hh-Yo4xkC9UWPSNGbZ4yqrCDXY9pkHgfWCk43iW4YH-C8ZGHncuwDhlZhNDvS22DkbcJ44SZfYWMLZOpUX0wWQvu4FMBGUFkPdTjkSBmfR-3GiKOHY-V8SqBp006HZbgap0H18F5UE7--6bzu1A6CZo-nElwsl4LMYzEnWpKSxHSk5VM40_ycsEmydXyFWhPcS_411fewG20qIP3_3lf-uPJ1atjoKBvdz6i9HjXoXg_1_71kbwX1HPyElHfLjT1aXsv_H3a8SpYOnzSyuqJcstMLGU4mN-G8XsdJBXJsF92gwQO_74m3ePLtuc-6CazXBFT1evtiO_quloFw5dd3xn1BlJVYURG7hs3Ux69WkIpuwkJI3fZ2TRMrbtx-qt8kz2kTUqKkmVKq9NdWJF-0fmYVBX1N72D3X7iCXvuCSgVJGP84xqDHbCBGCCC-wxWPSRfwiTkMYCmpfayGhECWsvX-4w8D2BlSczjMOBV2TXQyzPWllOg4cTLDGqD=w822-h1268-no`,
                },
                {
                    declare: 'strikethrough',
                    img: `https://lh3.googleusercontent.com/41QjxrxLQO9jvjFncJ0O6oSZtKbI-JYLppwej7AjbpCWu8VU7jRU4nwWdEEGhsobCJSMwPLSNFD5Q1vMTdNSEMSfMQjKidQhNk0T5PHR8iTo4-12bUAsCBQEngaYX1zwPMXYscChlpriPRxgF4IadaVr_xv1mvTt_t25d_7rzdgtaNszGfAq03_jMbdnRfyqWF4qvz1-UiPwv6GQcLeOXUFW44ahxn4WuWcTfNUmw-KYCj6wJ3gG6docRT3NpzTp9Xr7kZmggifF2iq2ptB6V9OV0b3D6TOK3K521EjPDtgpbwPKOXjxg96y-6KTuyXtfvrGVSAitjzXaIpZmhUJC1Fi-lySRr9u00f1uwEI_eGoRaJ5hh02CYwyDfor9HxTwW_Rh9bV8aiWRVhD2plNN5sK8FIPeNHopQJsuHOEXrz6NWrut7UJIcwCJwa6BKh_P9_0TrHppSt_WTHC82yj2oY7oUNXzlnatHCzhzqDlMJ9nRyP0vCVyo-yCs53DLLwAlx-EtT7ZkPbFrZhjrqpP1S14aIwgN6SSkQVLUnoJslXQq6aQfREftO9YGus4Fj82FdK6vwewqRjeVzf_5Q2H4CyOdAlM4N6NSuenMgFIKGvGKueR2bbyO0pH6ZxCdN0UKFLcCqT9jA4esUPEvpaiim0=w822-h1268-no`
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
            techTalk: `It's a Progressive Web App. 
                       Service Worker build in, 
                       offline run available. After input address in the browser, 
                       it can be added to Home Screen, same like the another native apps.`,
        },
        {
            id: 2,
            title: 'ToBuy Material',
            cover: 'https://picsum.photos/200/300/?image=135',
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
                    img: `https://im4.ezgif.com/tmp/ezgif-4-69240b01b3a3.gif`
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
            title: 'jsCalculator',
            cover: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
            date: '2018-06-08',
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
                {
                    name: 'Bootstrap',
                    color: 'purple darken-3',
                    icon: 'https://cdn.svgporn.com/logos/bootstrap.svg'
                }
            ],
            screenshots: [
                {
                    declare: 'main view',
                    img: `https://farm8.staticflickr.com/7898/45602331905_036742ca4c_z.jpg`,
                },
                {
                    declare: 'strikethrough',
                    img: `https://farm5.staticflickr.com/4874/46515794961_bb91328db0_z.jpg`
                },
                {
                    declare: 'gif',
                    img: `https://im4.ezgif.com/tmp/ezgif-4-da6d5f9537f1.gif`
                }
            ],
            concept: `jsCalculator is a Calculator App. 
                      The basic mathematic operation available, 
                      include plus, minus, times and divide.
                      The App can be install to Home Screen, it doesn't need any App Store, 
                      behaviour the same like a native app. The app can be used offline.`,
            demos: [
                {
                    name: 'Web App',
                    link: 'https://jooyoo.github.io/JS-Calculator/',
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
                    link: 'https://github.com/JooYoo/JS-Calculator',
                    icon: 'https://cdn.svgporn.com/logos/github-icon.svg'
                },
            ],
            techTalk: `I build the app with VanillaJS + Bootstrap. I get the Vootstrap by npm. 
                       The Grid System from Bootstrap is very practical for layout building.
                       It's also a Progressive Web App. Service Worker build in, 
                       offline run available. After input address in the browser, 
                       it can be added to Home Screen, same like the another native apps.`,
        },
        {
            id: 4,
            title: 'jsCurrency',
            cover: 'https://picsum.photos/200/300/?image=171',
            date: '2018-06-28',
            techs: [
                {
                    name: 'VanillaJS',
                    color: 'yellow darken-2',
                    icon: 'https://cdn.svgporn.com/logos/javascript.svg'
                },
                {
                    name: 'Chartjs',
                    color: 'pink darken-3',
                    icon: 'https://www.chartjs.org/img/chartjs-logo.svg'
                },
                {
                    name: 'Bootstrap',
                    color: 'purple darken-3',
                    icon: 'https://cdn.svgporn.com/logos/bootstrap.svg'
                },

                {
                    name: 'AJAX',
                    color: 'blue darken-1',
                    icon: 'http://codingbin.com/wp-content/uploads/2015/11/ajax-logo.jpg'
                }
            ],
            screenshots: [
                {
                    declare: 'main view',
                    img: `https://farm5.staticflickr.com/4893/44698689220_91a15d313f_z.jpg`,
                },
                {
                    declare: 'strikethrough',
                    img: `https://farm8.staticflickr.com/7849/45602417225_24f63280e3_z.jpg`
                },
                {
                    declare: 'gif',
                    img: `https://im4.ezgif.com/tmp/ezgif-4-c1552e5e40d8.gif`
                }
            ],
            concept: `jsCurrency can calculate currency exchange. 
                      It updates the newest currency data. 
                      There is a Calculator build in, 
                      basic mathmatic opration supported.
                      The chart shows the exchange rate.`,
            demos: [
                {
                    name: 'Web App',
                    link: 'https://jooyoo.github.io/JS-Currency/',
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
                    link: 'https://github.com/JooYoo/JS-Currency',
                    icon: 'https://cdn.svgporn.com/logos/github-icon.svg'
                },
            ],
            techTalk: `jsCurrency build with Vanilla + Bootstrap + Chartjs.
                       I used Ajax to get the newest currency data from https://fix.io API.
                       The data will update every 30 minutes. Bootstrap as UI library. 
                       I created the Line Chart by chartjs.`,
        },
        {
            id: 5,
            title: 'Portfolio',
            cover: 'https://picsum.photos/200/300/?image=112',
            date: '2018-12-21',
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
        // {
        //     id: 6,
        //     title: 'Chinese Color',
        //     cover: 'https://picsum.photos/200/300/?image=124',
        //     date: '2015-06-04',
        //     techs: [
        //         {
        //             name: 'iOS',
        //             color: 'grey',
        //             icon: 'https://image.flaticon.com/icons/svg/831/831276.svg'
        //         },
        //         {
        //             name: 'Swift',
        //             color: 'orange',
        //             icon: 'https://image.flaticon.com/icons/svg/732/732250.svg'
        //         },
        //     ],
        //     screenshots: [
        //         {
        //             declare: 'main title',
        //             img: ``,
        //         },
        //         {
        //             declare: 'strikethrough',
        //             img: ``
        //         },
        //         {
        //             declare: 'gif',
        //             img: ''
        //         }
        //     ],
        //     concept: `Coming soon`,
        //     demos: [
        //         // {
        //         //     name: 'Website',
        //         //     link: '',
        //         //     icon: 'https://cdn.svgporn.com/logos/safari.svg'
        //         // },
        //         {
        //             name: 'Apple AppStore',
        //             link: '',
        //             icon: 'https://image.flaticon.com/icons/svg/831/831276.svg'
        //         },
        //         {
        //             name: 'Google Play',
        //             link: '',
        //             icon: 'https://image.flaticon.com/icons/svg/888/888857.svg'
        //         },
        //         {
        //             name: 'Github',
        //             link: '',
        //             icon: 'https://cdn.svgporn.com/logos/github-icon.svg'
        //         },
        //     ],
        //     techTalk: 'third-techTalk',

        // },
        // {
        //     id: 7,
        //     title: 'Infinity Cards',
        //     cover: 'https://picsum.photos/200/300/?image=123',
        //     date: '2019-02-01',
        //     techs: [
        //         {
        //             name: 'Angular',
        //             color: 'red',
        //             icon: 'https://cdn.svgporn.com/logos/angular-icon.svg'
        //         },
        //         {
        //             name: 'TypeScript',
        //             color: 'blue darken-4',
        //             icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg'
        //         }
        //     ],
        //     screenshots: [
        //         {
        //             declare: 'main title',
        //             img: ``,
        //         },
        //         {
        //             declare: 'strikethrough',
        //             img: ``
        //         },
        //         {
        //             declare: 'gif',
        //             img: ''
        //         }
        //     ],
        //     concept: `Coming Soon !`,
        //     demos: [
        //         {
        //             name: 'Website',
        //             link: '',
        //             icon: 'https://cdn.svgporn.com/logos/safari.svg'
        //         },
        //         {
        //             name: 'Apple AppStore',
        //             link: '',
        //             icon: 'https://image.flaticon.com/icons/svg/831/831276.svg'
        //         },
        //         {
        //             name: 'Google Play',
        //             link: '',
        //             icon: 'https://image.flaticon.com/icons/svg/888/888857.svg'
        //         },
        //         {
        //             name: 'Github',
        //             link: '',
        //             icon: 'https://cdn.svgporn.com/logos/github-icon.svg'
        //         },
        //     ],
        //     techTalk: ``,
        // }
    ]
}
export default contents