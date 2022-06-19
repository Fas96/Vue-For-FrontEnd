Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        }
    },
    methods: {
        addGoal() {
            if (this.enteredValue.length > 2) {
                this.goals.push(this.enteredValue)
                this.enteredValue = ''
            }
        }
    }
}).mount("#app")