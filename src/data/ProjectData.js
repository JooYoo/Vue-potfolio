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
                    img: `https://lh3.googleusercontent.com/hgf5M_nWMvNrXz9kNScwAG006JtUV8RNb74V43xx_ZWB8t17hPDOY6JhYXeM7D1KK3TQdHlKeEj0_U0NiJtRWr34SN1M0gvLXCeaTZl6u6LDw52MZloNSB9XVXkA-HfQNTM8Akdu8Ze0AMc8fqFunzZmzZeiwh3iyF86QB7wXuN78op300beIpwmysqlLUGHgC4yfD__7ljJyoUj4Ysj1nantUyH8yMA5eUKb06ivQVMMh3Oy95alR0RzVhU7gAFYtvGcLp6rHPfO_SQQ4CNHQMk6HtcSd6PQFre0VydzHUSpWWmO1jKO9GXZtURu8N_KC_N-OWCyGFGpTfNnxW8Masp5qA6rwQ6s-VvORnq5Q1RT9Qp0fp2xH3iXgZuiwMTE35dUOY0mGPeDexiid-_C-1u12mDC3Um-LFQRif9k4FUMuVf8bKTLh4dPXcyVSsQ3YWZJ8PsT9ujvMfxkWnicyR9trsaZHF1cu_RbvgYT4bHRRdDfFdVcHDDtmJchvkpYJG_2J_NGYK4wDtkZ3gf40nj8iRrS8cxVkGeWiZVupACnIm37f3VDS5sg0Byn1oXyiyoTatsu7kz7HOWbE2DgGh5M8sqEbWqTCgMQ2aVZBn8zuicKYlUo9iTzOLzzVfe3NZvoToTp9rpvLAsd82AF4Di=w940-h1878-no`,
                },
                {
                    declare: 'strikethrough',
                    img: `https://lh3.googleusercontent.com/4Wl9DMe3yP7Ntr35JlwoISewY6llwrK57wIxt_JmvBFzwMHFxWhSnXBmhsGcumXdpNHkoG-IBTcVDKTHRwFtRT7zyAja0KwDUz5DeKBXGV-EnnEUp297pSgXs2AS28pF7XlnqKx0nouB7o9wFurOfqpl3BYXS6o3COrvd07_kGRy3GkCa-BCxoiIFT0dWpLl5Lvwj1T5BgpiJ_Xg4f6tB9fAztJ153SaLjhh6cQe8jubSz_WHI5sJ_1UkCht3xStRs0-YI6iUunpS8uDIt7j4Ksl4k6I1GGBHC5WDOufRDwuKSgXiOqcP4wt4Cn0CHQ843QItscujA3qIfSk1LcgiQkhM5SwXeEz5z8VtHxZInWnV0qzFYXyXp1nmA0iF684nrAcXwDTINvwLTWYcMVDhELzRiS5cAeIcmXLjCObUQ8QeqoZ21-twxqRCHTiJUIW2_OcSI_9fnyugBXwYqkWxGTwWzGs5o60ju4amAR7aCT-focak3DK5aJVS4lxEhx12mfcf7dsUmOrsFop4l9w4xbvCy5EoYEw3-MAJBhDg65BK5o1_WmGMpz6WocbUIqIV2qxl5wmX5_LZoCRMYY4loEWMc1hBNXvkJ_9AqSUIZ_wITJGSa-f59oy2awXz-Fw2h1fv7oIDxyiA7TOfzFbYGOJ=w940-h1878-no`
                },
                {
                    declare: 'gif',
                    img: 'https://lh3.googleusercontent.com/-aESadqgtvv-V_Axw71RDNayv3i0feId9V2GMMT8yKMeWe8gOkEbQfDMYIpAXnLmYfQVQNR6FE2mCrc3PooJYnRO3sQ60vpVN_hpK_3cpnDOU1swccXgqMfLrA2G75GszPwoyZC7Z0182f5VjwRAxhmAFVWaPLdUIV1V7nKg3IcyIdoZirt14YSlYXI6XpwphaRN4efrdlLcqTVAfcN9tXYtjc0nehzIIvDFTIbTLSk47UPdx70JCH_Ex5qjggEilXVuUkHXYFXiEaHEDJUErqEBs90ATRTt6bJLPu3fEd1OgSWsz5SrB71MS9p0QvWwfAE6HXZ593vPeSm0TLBtPktvMixYm4QImkmea20Q2dN6J6ASMUkahx393RHeDr744yIvXWxx5cll8a3c9T0-GUuXX1if1MPXOT8V3Vc6Ez62GXFeOHMZ5wzypxY1EepRx66qnHXuGqlJbMD2LA2JWxGAjZwZEsGcmAP-2eoNDpq5c6VNmuo14U4HZl5_kUnGQOTNLl9Pi1BOqCRE5TQWSfav8CXh-md-WxkGSHrLNwooKUmvF1chJ4FFB487FdcPqJryUPwS-Xk5NQJUbVVWUv6omX5uDAOcEcuTx9sLG9mbx3pPhokZN11NmQX2ynUfH8d5ob6OPmG3ejhQFCVKHLoF=w518-h1036-no'
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
                    img: 'https://lh3.googleusercontent.com/kd2xfIp6p8f-t_FoTovBxP_sZHsadH8bwx9satLtyN83PtDDY3HbktnrFlpb_I1pnq9X1HeYA9CJLQ2SwhI44tTv5kin9LlKVA6J6L1tWAGway-rNfiqel_VOUYA5FPFbL2EFyavg3ZvoIOMzUNGMNvUCDud7ODKzN2TpLGtppJvCyP2ELCMzRcD3Jnqx6qGyPEHQsvUAjJc4zGonzcPg6f1HtyOHdbfdHKCr3tIuOn0lo4tA9b7K5EnzmyUkOQvHjcPj5yVT-s7I5YxA7Gw9hWGvEWFV1rf2XY8wyaEhsuosnBjPuE1fxy4J5Rb7f998Up4NzDCUWYhkahU8wYHIH86bdx1WJzM9xDVbyObIdcl9KzxCKd83QhLEh4NL6MUvH63Q6fP9SE8pK219YPjrgQqMntTL6Y0jg_k88ZhUofchfbtQMkjp_XEZKOn73uf1w3xc306NUobmrPKWoH3tPUBwOk2VxUovp0SYadSR0I5rLolHdGLQ1TB4vUKIQ9Liti4TMuiIPNwkelOsNsqen7TsRfsPdZuqLqloG-xjofxpaRMBA1is8WkBxSjioQ_lqngpLVXrzKlRdJCPlU2PRiClUPxlWfl77g8DAVAC2sb6NmPE5hfjgySk3oscTAexlxqe9JW6VTEchGn1l_1Cp-U=w1660-h1268-no'
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
            title: 'Chinese Color',
            cover: 'https://picsum.photos/200/300/?image=124',
            date: '2015-06-04',
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
            ],
            screenshots: [
                {
                    declare: 'main title',
                    img: ``,
                },
                {
                    declare: 'strikethrough',
                    img: ``
                },
                {
                    declare: 'gif',
                    img: ''
                }
            ],
            concept: `Coming soon`,
            demos: [
                // {
                //     name: 'Website',
                //     link: '',
                //     icon: 'https://cdn.svgporn.com/logos/safari.svg'
                // },
                {
                    name: 'Apple AppStore',
                    link: '',
                    icon: 'https://image.flaticon.com/icons/svg/831/831276.svg'
                },
                {
                    name: 'Google Play',
                    link: '',
                    icon: 'https://image.flaticon.com/icons/svg/888/888857.svg'
                },
                {
                    name: 'Github',
                    link: '',
                    icon: 'https://cdn.svgporn.com/logos/github-icon.svg'
                },
            ],
            techTalk: 'third-techTalk',

        },
        {
            id: 7,
            title: 'Infinity Cards',
            cover: 'https://picsum.photos/200/300/?image=123',
            date: '2019-02-01',
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
            ],
            screenshots: [
                {
                    declare: 'main title',
                    img: ``,
                },
                {
                    declare: 'strikethrough',
                    img: ``
                },
                {
                    declare: 'gif',
                    img: ''
                }
            ],
            concept: `Coming Soon !`,
            demos: [
                {
                    name: 'Website',
                    link: '',
                    icon: 'https://cdn.svgporn.com/logos/safari.svg'
                },
                {
                    name: 'Apple AppStore',
                    link: '',
                    icon: 'https://image.flaticon.com/icons/svg/831/831276.svg'
                },
                {
                    name: 'Google Play',
                    link: '',
                    icon: 'https://image.flaticon.com/icons/svg/888/888857.svg'
                },
                {
                    name: 'Github',
                    link: '',
                    icon: 'https://cdn.svgporn.com/logos/github-icon.svg'
                },
            ],
            techTalk: ``,
        }
    ]
}
export default contents