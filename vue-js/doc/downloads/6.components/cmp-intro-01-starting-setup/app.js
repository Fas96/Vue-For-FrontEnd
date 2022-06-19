const app = Vue.createApp({})



app.component('friend-contact',{
    template: `<li v-for="person in friends">
    <h2>{{person.name}}-{{person.id.slice(1,5)}}</h2>
    <button @click="toggleDetails()"> {{detailsAreVisible?'Hide':'Show'}}  Details</button>
    <ul v-show="detailsAreVisible">
      <li><strong>Phone:</strong> {{person.phone}}</li>
      <li><strong>Email:</strong> {{person.email}}</li>
    </ul>
    </li>`,
    data(){
        return  {
            detailsAreVisible: false,
            friends: [{id: uuidv4(),name: ' Fas Lorenz',phone: '01034 5678 991',email: 'fas@localhost.com'},{id: uuidv4(),name: ' Manuel Lorenz',phone: '01034 5678 991',email: 'manuel@localhost.com'}]
        }},
    methods: {
        toggleDetails(){
            this.detailsAreVisible=!this.detailsAreVisible
        }
    }
});

app.mount("#app")






function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}
