<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="getData">Load Submitted Experiences</base-button>
      </div>
      <p v-if="error">{{error}}</p>
      <p v-else-if="isLoading">Loading....</p>
      <p v-else-if="!isLoading && (!results || results.length===0)" >No stored Experience found</p>

      <ul v-else-if="!isLoading && results  ">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data(){
    return {
      results:[],
      isLoading: false,
      error:null
    }
  },
  mounted() {
    this.getData();
  },
  methods:{
    getData(){
      this.isLoading=true
      this.error=null
      fetch('https://vue-demo-a2598-default-rtdb.firebaseio.com/surveys.json')
          .then((response) =>{ if(response.ok){ return response.json()}})
          .then((data) => {this.isLoading=false;this.results=data;})
          .catch((error)=>{
            console.log(error)
          this.error='Failed to fetch data. Check the server connection please!!!'

          });

    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>