const app =Vue.createApp({
    data() {
        return {
            courseGoal: "Finish the course and learn Vue",
            courseGoalA: "<h3>A the course and learn Vue</h3>",
            courseGoalB: "<h1>B the course and learn Vue</h1>",
            orgLink: 'http://fasgh.govt.kr/',
            setRand: 0
        }
    },
    methods: {
        cryLoad(){
            alert("i was clicked")
        },
        randomUUIDGenerator(){
            let rnd=Math.random()
            if(rnd<0.5){
                return this.courseGoalA
            }else{
                return this.courseGoalB
            }
        },
       linkVerify(){
            alert("jererh")
            this.setRand=Math.random()*1000;
            var source = event.target || event.srcElement;

            console.log(this.courseGoal)
        }
    }

});



app.mount("#user-goal")
