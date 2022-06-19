<template>
  <section>
    <base-card>
      <h2>How was you learning experience?</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <h3>My learning experience was ...</h3>
        <div class="form-control">
          <input type="radio" id="rating-poor" value="poor" name="rating" v-model="chosenRating" />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input type="radio" id="rating-average" value="average" name="rating" v-model="chosenRating"/>
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input type="radio" id="rating-great" value="great" name="rating" v-model="chosenRating" />

          <label for="rating-great">Great</label>
        </div>
        <input type="file" @change="uploadFile" ref="file">
        <p v-if="invalidInput">One or more input fields are invalid. Please check your provided data.</p>
        <p v-if="error" style="color: tomato">Data Sending Error</p>

        <div>
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: '',
      chosenRating: null,
      invalidInput: false,
      Images: null,
      error: null
    };
  },
  // emits: ['survey-submit'],
  methods: {
    uploadFile(){
      this.Images = this.$refs.file.files[0];
    },

    submitSurvey() {
      const formData = new FormData();
      formData.append('file', this.Images);

      if (this.enteredName === '' || !this.chosenRating) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;
      fetch('https://vue-demo-a2598-default-rtdb.firebaseio.com/surveys.json',{method: 'POST', headers: {"Content-Type": "application/json",},
        body: JSON.stringify({file:formData,name: this.enteredName, rating: this.chosenRating, id: uuidv4(),}),})
          .then((response) => {
            if(response.ok){
              console.log(response)
              return  response.json()
            }else{
              throw new Error("fetch url has error from server")
            }
           })
          .then((data) =>{

            console.log(data)})
          .catch((error)=>{
            console.log(error)
            this.error='Failed to fetch data. Check the server connection please!!!'

          });

      this.enteredName = '';
      this.chosenRating = null;
    },
  },
};



function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>