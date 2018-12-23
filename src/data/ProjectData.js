//const images = require.context('./images', true, /\.png$/)

const contents = {
    projects: [
        {
            id: 1,
            title: 'ToBuy lite',
            cover: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
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
                    img: 'https://lh3.googleusercontent.com/7XkHzeuYBUX6hKtoBlNgm3V_5O0qcBNlGbhPHt9vSvIwQlXlBFvHz3PFI6rQGf3iZHAg_4bwVF1FOAJ-f6hjencl_MnFFObp1vfFLLPctxG3pkOnGt9Z5B6TeDZJIPv9CXNnAJ5Rw305YOqVIpTc1Eamga30naYDWrB7I8nS5BHHczOGJQNBoHWsxWcVgIbwQunHadZxeMUu6eeC55CMz9Zf6puaIq1Sj9dkpbFX1ATuWFx7V3HNS6FuZIhtOfQd0cbHLbiqIATCrdzQ5NNDCgERFJ5uz4MlONG2cgDKdr8_f9pdYdqdpHWB7wclumdQHdXioRxsK4c9-O2BLm7WHjpowSWWtG7fCfjyYBNfOtGbpDUBQzE0Lmg23k8r5hyNpKZkcCavEkZ5d0HjHBFeGXNSRyHQw8mjU8mlVCkKzSQVJ35lU3yOuTMRMOwcmTqFEeJCIIRaGtJ9bDEriC-uSAFEnWUjZYNxr7A7KCLGQGpKxuGx-i1AlZDsLAmmYU6qO97IlLXTFeXW0a2Fi7Bwzo8MVpSUVa2ALRqkC8YY2vGDrIptYvxNtXVa__M-v3GRgjMsHOWwIlYh2p5X8yoGQJkHCyKUa6LWc77J6zflzHNBOEgHanS0gFm7pQyvv9Hb5ZnBRWJ2-seqjstQ5MF0Kpwy=w419-h642-no'
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
            cover: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
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
                name: 'Material UI',
                color: 'pink',
                icon: 'https://cdn.svgporn.com/logos/material-ui.svg'
            }],
            screenshots: [
                {
                    declare: 'main view',
                    img: `https://lh3.googleusercontent.com/tW4PZjBWdqMJyrBRDYDHqx39mX_wlc-bbY60UUi1V2QT6ALozQvVMzF83pB7K1Ym40UlDW0uSrHkcAX6yplKYNcGFzVMe5G-UisTZrCm5j5Fj15AlyT7RPTjtoPNcpSdUBPPMcfalrqrPkqVIOcmrU5jVMlrs5knV-EQCXxAgC8LSQ7AbzZgmx1RS3SNlME_6GeLUI56djIX76v3Cm_hT6hdejckpDOElm0lUs2Y6ByjmcJVepqX-fcJvq_VkMRs3TYFFkLAV2Ns8dy_jlGEL9aRPwOT_4i0VPB83xhdIxmZrLZY3IiGNY6eVONEJKsS8hRTamtn8OOyKHG-H0dtNl057HQQQxfzwqArFAVwIW4Z8zPiDabFaAiOXC3_LHCY2yHWEetFPuDuHoDnkJe1RtEqXv99wsA5VVxlBZhKCruICCHf-3FuzDKABKxlsrBqgX-2f6LLZDoM10ia-WxG1SfznqklNiMEld9x86tMq_2uRrWFdf33EW6xOfv43cQI7jnvAveL6GvLdRFcfmodhNedeFNvv2p948GauVHeOlJTsSbzDCtkimPkxmsSQDgnyrBCgMGN5TxqpWogvULrgGRoxvle9t1slCOdP-K9JeLFxV7fKpJEQHmV9UOD_OfkhOP4pJk1AAJs_vaKEjk8udrt=w110-h220-no`,
                },
                {
                    declare: 'strikethrough',
                    img: `https://lh3.googleusercontent.com/gGNzcYrZfSTcwheEHL2YeUbl3srHO8WpDGb3e5MvBrpGw_qncKrF834vD4gGJ_sdm02ic9oY5h7t9mXoE2gNLGL0kDzdkMhEIS0W1Q6RqbyCbPVXE3ttxn1mT3RMEPvsweWcsQPpIaq5U327wvEadg3oyjRzqwif98xhB-WoR5Mv2NeaIUBmt-CqWgOZ8svZtuYKAhaayY247ks4XddtZJkpFxMGhHki91HuqeVQXKeeaA1ub8o2vcOWfITgDkjmL9VCvEmY0U-U65riiRPH--6jNlcVOVFO5FSRAYElwKq9LKb9RkulARLQXoS5qy9X21ImjC-IsAaK88Fj4q31zNHa5nVe2tt6t-P1C8CvCMhFixQx9RP_N7L7oPvjpF6SiWuBN7LMe8EYZz6KvmeMW2amMzOaDtVyelyUuxFqfVb7181_HmP2Iia3BKTKiZY1wSFfuwXtpGln2pZKQNBe_EfETjMK3GLv0fGvofQu3PcXjTxJH7jlmzqv6bc5OP4rRIuV-uZ8HHuYpTkByMd6VrKdkPHoKn1W70kEpklFPKXAluzHTtN3f9lgmC8UBS6M1RxbQcDcdMyPkv5rWlah8OJ79ZuHQkPWQBBslZ_NGgf0e4YKadIhF_dytlt5ZPxNZ16oyejRHLmjtSvOQBIqLpSC=w110-h220-no`
                },
                {
                    declare: 'gif',
                    img: 'https://lh3.googleusercontent.com/cjbbva5R8RUiJNY2oUxhF-1ctL_piy7E9jhElKYTwZlm8n_WxMS-pb5BXNMNOneSlcUrzrpgNM6uG0TXjha0nMmbMOoTtUMT2ePfExlzy9-zh0XwfmBeuVGRkPUH7eyzTWgvi3KbmxId6-RZJ7bAjgiGbL5lJLy-A1m_hLS-_CtzKl_07Qca9dhO01EM6jJ6YOrlgBCpx8HxrUqvJ9EIpdiqnz5I9lIRhMXVOzH_NXy3ZsATSvqBPGfuyQpqLYrVQRahxIfgVnaHl5-o8RIUYAWBhlMb-a53y69GRtETL9n1ORwv9j_s7AbU304ebs6MNCMq9dz4B1PuAyxfU5gfH4YqL6RGrGUkNmWECb43Z3GHT8Xq4xGDJ2TOexZ1pYf-m3DBi_xjsTkcn_Qv3ViQ2Es5mw7bsL01yG9fW7GyiUlQWD9Dg-XlRpAEh8WLzvttLMZ2UU9OVP0hin585eACj8_9s5Cr1VR4Qjb3pXkfKIw3n9psZaAKEvQ2zxwb2LIJFsksIXWsE0eIZQ2p2yDXuy9trPJ7ir68cB2OvdmqftSUNobY7c69wg2omDCZzmSOHfIRvJYNvI2I_VuKDzrsqIcCHbd2vwCmWVIdAXDqnz4PdmNhN5G_j6hl_NsKHYEPXZ4IX84owG-ZjyCGSPmlD0At=w110-h220-k-no'
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
                    img: `https://lh3.googleusercontent.com/3zoieb9mJKx631hdt-QwQ9TOJWOawvCVRgywbXCCcs7H3pA0QGcegQ5ST5qxGXU3bNA2u7S39yhf6-h6dGSa8seLaKKHwI5eowskZgesGcOgOD_hD8Ig7BcbrDcFc3x0n_0_ycvO0adxgk-lANOm4lSpCAHrLb9k_u4uGpvDk4kKBSf1ow44eJXR8VTi3X8JiDhvbLV7drTgbHx67Dgmz2IoA8CUZuoGGbAQ6jPjVBK3CZYyiHbLDVN5oJwg4W57l-Dy3uxaA0qeLIoUe6uRM8zWmZNTkj5lbQ4lLxU2OTi9s59hxV0Bv3eoTorwXSzqYQ9WLacRV1XbcA7_y09pXGMGrLim57v-Fc8_8uofeo9w36f-wKdgKAoPeB-dWaAUb5zQD1mog-ku4RYTHvea7yfi91psz4ulhn9rqK3f1tmVNPrqS6-1vj3Mm2zxDtkGXVCS29WQP0sFNsG3o-h1nnWaEVNglSAXEafqO494oU7l8_Sz4PbRFNvyuXlHsBsQX4_brSksfY6grhUieWEwa8gosKDN2mEqDGWRO8CNZwvjmtl7pucy2VpxMtcfDS6PKVczm9-gfbnNGRU-1bXYTgON_kQ_2deq-7DwGJMbjagxarapVxIAZ9duLKC7SdW3nhFkuJc9TcBMS4mLEHIOkDuB=w940-h1878-no`,
                },
                {
                    declare: 'strikethrough',
                    img: `https://lh3.googleusercontent.com/bH5_Cz42I4B16kz-04oF19sFBl9UFmPt8O1sbEh9xiOxiSF0x1s5sGRUHe-Zmi0Dmw6wAdAOyN8qjscZ1gojunvqu8wJa3tqPS4gL01fwpOmU1SP_bTl0eM-PTU8eqvT2tIYJEtfdCjQMz1GOKOEYP_1QzSLnpDRFllX5RhL6sQq7dtPnXttfFnv0X60avqO8H1opEDPO9L0xiUyRRsCfkz7rSR8JMA4kNbJM3ieX9N4GOpaBSDvNVCjPbnm85Uo_JvCwrATPn4z_pgA_xIPkyVg0Txb9xjBRNmJNu8sxiOMsmuyT40OwZKoxvsEyPb7mSuyXq9VX1itDGb0vAWxrF29ykscmLAr8kfW4aefe99WE48v3p6ETjJjrXjXkXLR-tmJ0UWuCDkDZDNmYs3UmFcGEf8gBs08n69xThNZ_4IHF0wUH8cRZX8K7LBrOjl-L10YowujLN3wi2Oa3-hR4MEgp6DpOFngDKcxSfRXVlVkX6dgzubISspXLdV6XhQ7sVvv9k8UqNfWVeE4G17yNpXTrbMbtcgZwVP7rqh07tvjbCtCDTUT35jm1MdJprdkuxSeoIEjyn0-TLrI4-O48mBfyyu10RThJKLrGQwtQEO1LsoUigscd2byp0cn7g7m_LkPGFQDzeLJkQgDfqyAABgN=w940-h1878-no`
                },
                {
                    declare: 'gif',
                    img: 'https://lh3.googleusercontent.com/b4nfrNgDxU1h2ZsGHpSXUYA-7SjfNTDVFt6qt9NgqiFjCANKmZ3uSNMCl79yZuvWwfwAXCVwXdJNvCe0OY7V2LpVxyfFsa-BD78c4xs8otmok75K8Pg0aRQXpJBWfJ9scyf68LffFUnv9p1zgx-lKQoT3253T3hekRS0C5x4Z1Aj7-RZd_W2kPE5GNfFa4vNP0L548my3CfBjpYywmhZ_SgDTBWuiBq-5_jQYMOwmX8ORHlCJfOOo7I183H0YImU3G7ibdYKSfo7QHccyDF4l2dfKuSJ-gDswpUfM-o-wGJzZGhassO4YWnr4iUWhVpBio39corhEhwGy9SvUm_7JAoyrdyALAaNJFv6epnnc1DxwaX1k6kWKB5vuDGR8YRvkn5btpunF142cpRPbSCoVgwRnRAgcqnMU615uy5GJNmuRMg5jjSvYy3EAu9XHRq04exfS2O0bzT9vPRsYMxHXw3ARdnCn_0aRYVoVPuTsNdZXuUlW_aP2piUBovdBsqBPxT684F8w0vUwLMZb1LbmyByD0FgKfX5u7Myn_ItsmxNe6ZiorxBBpNnLtvKcNANty55XHPuPneiweAqIMyfLB6jNxyQsh1-QleALtwg0U_FGiT8tf111OIgODSSFXeK39LP4jRlfUJR1P1YjEvcHSOm=w119-h238-no'
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
            date: '2019-09-21',
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
            techTalk: 'third-techTalk',
            concept: "concept",
            gitLink: 'third-git-link',
            demoLink: 'third-demo-link',
            images: ['first-images',],

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