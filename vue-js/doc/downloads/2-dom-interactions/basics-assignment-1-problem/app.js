const app = Vue.createApp({
    data(){
        return{
            myname: 'Fas',
            prepopulate:'enter your name in this field',
            myage: 26,
            randNumber: parseInt(Math.ceil(Math.random())),
            imgUrl: '../../images/2.what is vue js.png'

        }
    }
})


app.mount("#assignment")