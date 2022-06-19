const app = Vue.createApp({
  data() {
    return {
      goals: [],
      goalItem: '',
      showEmpty: true
    };
  },
  methods:{
    updateUserGoals(event){
      let val=event.target.value
      // if(this.goals.length>0){
      //   this.showEmpty=false
      // }
      if(val.length>2 && !this.goals.includes(val)){
        this.goals.push(val)
      }
    },
    removeGoal(idx){
      this.goals.splice(idx,1)
    }

  }
});

app.mount('#user-goals');
