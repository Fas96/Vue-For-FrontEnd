const app = Vue.createApp({
  //starting
  beforeCreate(){
    console.log("F::beforeCreate")
  },
  //second hook
  created(){
    console.log("F::created")
  },
  //third before the app is mounted
  beforeMount(){
    console.log("F::beforeMount")
  },
  // Fourth : the view app shows items on screen at this point
  // template create and data read
  mounted(){
    console.log("F::mounted")
  },

  //data changes which triggers their own life cycle hooks
  beforeUpdate(){
    console.log("F::beforeUpdate")
  },

  // this is called after the data is updated
  updated(){
    console.log("FLLL:updated ")
  },

  beforeUnmount(){
    console.log("before Unmounted hock")
    alert("before unmounted")
  },
  unmount(){
    console.log("Unmounted hock here")
    alert("un mounted hock here")
  },

  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userText.value
    },
  },
});



app.mount('#app');
//using the unmount to test the life cycle
setTimeout(function () {
  app.unmount('#app')
},5000)



// let message="hello";
// let longMessage=(message +' world');
//
// message='helloooo!!!!!!!!'
//
// console.log(longMessage)
// // alert(message)
//
// const data={
//   message: 'Hellow brother',
//   Longmessage: 'Longmessage defaults'
// }
// const handler={
//   get(target, prop, receiver) {
//     console.log("++++++++++Get++++++")
//      console.log(target)
//      console.log(prop)
//      console.log(receiver)
//   },
//   set(target, prop, value){
//     console.log("++++++++++Set++++++")
//     if(prop ==='message'){
//       target.Longmessage=value+'Fas Test Value'
//     }
//     target.message=value
//     console.log(target)
//     console.log(prop)
//     console.log("value:",value)
//   }
//
// }
// const proxy= new Proxy(data,handler)
// proxy.message="Hellow tester"
// console.log(proxy.Longmessage)
const app2= Vue.createApp({
  template:`<header><h2 class="document-toc-heading"> {{ appme }} </h2></header>
  <ul class="document-toc-list" id="toc-entries">
   <li v-for="item in ['Key resources ','Beginner s tutorials ', ' Advanced topics ', 'Reference','Related topics' ]">
     {{item}}
   </li>
  </ul>
  `,
  data(){
    return {
      appme: 'App2 message'
    }
  }
})
app2.mount(".app2")