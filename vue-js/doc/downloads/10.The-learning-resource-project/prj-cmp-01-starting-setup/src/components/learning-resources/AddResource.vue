<template>
  <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="inputIsInvalid=false">
    <template #default>
      <p>Unfortunately,At least one input value is invalid</p>
      <p>Please check all inputs and make sure to enter values for all  inputs</p>
    </template>
    <template #actions>
      <base-button @click="inputIsInvalid=false">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input name="title"  id="title" type="text" v-model="title">
      </div>


      <div class="form-control">
        <label for="description">Description</label>
        <textarea id="description" v-model="description"></textarea>
      </div>

      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" name="link" id="link" v-model="link">
      </div>
      <div>
        <base-button type="submit"  >
          AddResource
        </base-button>
      </div>
    </form>
  </base-card>

</template>


<script>
import BaseCard from "@/components/UI/BaseCard";
import BaseButton from "@/components/UI/BaseButton";
export default {
  components: {BaseButton, BaseCard},
  inject: ['storeResourceDataAdded'],
  data(){
    return {
      inputIsInvalid: false,
      title: '',
      description: '',
      link: ''
    }
  },
  methods:{
    submitData() {
      const response=this.storeResourceDataAdded(this.title,this.description,this.link)
      if(response){
      this.title='';
      this.description=''
      this.link=''}else{
        this.inputIsInvalid=true
      }
    }
  }
}





</script>


<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>