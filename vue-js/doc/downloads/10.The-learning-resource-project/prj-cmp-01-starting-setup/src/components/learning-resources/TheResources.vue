<template>

  <base-card>
    <base-button @click="selectedChange('stored-resource')" :mode="storedResButtonMode"> Stored Resources</base-button>
    <base-button @click="selectedChange('add-resource')" :mode="addResButtonMode"> Add Resources</base-button>
  </base-card>
  <keep-alive>
  <component :is="selectedTab" >

  </component>
  </keep-alive>

</template>

<script>
import BaseCard from "@/components/UI/BaseCard";
import BaseButton from "@/components/UI/BaseButton";
import StoredResource from "./StoredResource";
import AddResource from "./AddResource";

export default {
  components: {BaseButton, BaseCard,StoredResource,AddResource},
  provide(){
    return {
      resources: this.storedResourcesData,
      storeResourceDataAdded: this.storeResourceDataAdded,
      storeResourceDataRemoved: this.storeResourceDataRemoved
    }
  },
  computed:{
    storedResButtonMode(){
        return  (this.selectedTab==='stored-resource'?null:'flat')
    },
    addResButtonMode() {
      return (this.selectedTab === 'add-resource' ? null : 'flat')
    }
  },
  data(){
    return {
      selectedTab: 'stored-resource',
      storedResourcesData: [
        {id: uuidv4(),title: 'official Guide',description: 'The official vue js documentations',link:'https://vuejs.org/'},
        {id: uuidv4(),title: 'Google Guide',description: 'The Google  documentations',link:'https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiQ6K7fxrH4AhVqw4sBHQF5D4IQPAgI'}
      ],
    }
  },
  methods: {
    selectedChange(tab) {
      this.selectedTab = tab;
    },
    storeResourceDataRemoved(id){
      let itemToBeRemoved=this.storedResourcesData.findIndex(data=>data.id==id)
      console.log(itemToBeRemoved)
      this.storedResourcesData.splice(itemToBeRemoved,1)
    },
    storeResourceDataAdded(title, description, links) {
      let addItem = {id: uuidv4(), title: title, description: description, link: links}
      if (title.trim() !== ' ' && description.trim() !== '' && links.trim() !== '') {
        this.storedResourcesData.unshift(addItem)
        this.selectedTab = 'stored-resource'
        return true
      }else{

        return false
      }
    }
  }
}

function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}
</script>

<style scoped>

</style>