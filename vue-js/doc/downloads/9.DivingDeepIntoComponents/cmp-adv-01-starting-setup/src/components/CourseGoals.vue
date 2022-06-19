<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" another-prop=".fasasas."></slot>
    </li>
  </ul>
  <button @click="setSelectedComponent('active-goals')" > ActiveGoal</button>
  <button @click="setSelectedComponent('manage-goals')">ManageGoals</button>
  <button @click="setSelectedComponent('base-card')">Base Card</button>
  <button @click="setSelectedComponent('base-badge')">Base Badge</button>
<!--  <active-goals @click="setSelectedComponent('active-goals')" v-if="selectedComponent==='active-goals'"></active-goals>-->
<!--  <manage-goals @click="setSelectedComponent('manage-goals')" v-if="selectedComponent==='manage-goals'"></manage-goals>-->
  <keep-alive>
  <component :is="selectedComponent">
  </component>
  </keep-alive>
</template>

<script>

import ActiveGoals from './ActiveGoals.vue';
import ManageGoals from './ManageGoals.vue';
export default{
  components:{ ActiveGoals,ManageGoals},
  data(){
    return {
      selectedComponent: 'active-goals',
      goals:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    }
  },
  methods:{
    setSelectedComponent(cmp){
      this.selectedComponent=cmp;
    }
  }
}

</script>


<style scoped>
li{
  list-style: georgian outside url('/non-existent.svg');
  display:block;
  margin: 2rem auto;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  /* The default, as in, you get this without defining anything */
  transition-timing-function: ease;

  /* Also the same as */
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}
ul{
  /* The default, as in, you get this without defining anything */
  transition-timing-function: ease;

  /* Also the same as */
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}

</style>