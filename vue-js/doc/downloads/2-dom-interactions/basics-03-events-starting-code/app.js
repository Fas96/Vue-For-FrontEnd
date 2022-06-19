const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      num: 0,
      name: '',
      fullname: ''
    };
  },
  computed: {
    fullname(){
      return this.name+' '+ 'Fas';
    }

  },
  watch:{
    name(latestValue){
      this.fullname=latestValue+'  '+ 'Watching'
    },
    counter(latestValue){
      if(latestValue>100){
        let that=this;
        setTimeout(function () {
          that.counter=0
        },1000*4)
        // this.counter=0
      }
    }

  },

  methods:{
    incrementCount(){
      this.counter+=this.num
    },
    decrementCount(){
      this.counter-=this.num
    },
    updateUserName(event,s){
        this.name=event.target.value+' '+s;
    },
    submitForm(event){

    },
    outputFullName(){
      return this.name
    },
    resetInputs(){
      this.counter=0
      this.num=0
      this.name=''
    }
  }
});

app.mount('#events');
