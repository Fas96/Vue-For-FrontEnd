<template>
  <div>
  <h2>Manage Goals</h2>
  <input ref="goal" type="text"  >
    <button @click="setGoal">Set Gol</button>
    <teleport to="body">
    <error-alert v-if="inputIsInvalid">
      <form method="dialog">
        <p><label>Favorite animal:
          <select>
            <option value="default">Choose...</option>
            <option>Brine shrimp</option>
            <option>Red panda</option>
            <option>Spider monkey</option>
          </select>
        </label></p>
        <div>
          <button value="cancel" @click="inputIsInvalid=false">Cancel</button>
          <button id="confirmBtn" value="default">Confirm</button>
        </div>
      </form>
    </error-alert>
    </teleport>
  </div>
</template>
<script>
import ErrorAlert from './ErrorAlert.vue'
export default {
  components:{ErrorAlert},
  data(){
    return {
      inputIsInvalid: false

    }
  },
  methods: {
    setGoal(){
      const userEnteredValue=this.$refs.goal.value
      if(userEnteredValue.length<1){
        // alert("Please enter a value")
        this.inputIsInvalid=true
      }

    }
  }
}
</script>