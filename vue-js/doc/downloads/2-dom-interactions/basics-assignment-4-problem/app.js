const app = Vue.createApp({
    data(){
        return {
            userInput: '',
            seenGone: false,
            userColor: ''

        }
    },
    methods: {
        toggleColor(){
            this.seenGone=!this.seenGone
        },
        userColorSet(event){
            this.userColor=event.target.value;
            // alert(this.userColor)
        }

    }


})

app.mount("#assignment")