<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role"></user-info>
    <base-card></base-card>
    <course-goals>
      <template #default="slopProps">
        <span>{{ slopProps.item}}</span><span>{{  slopProps['another-prop']}}</span>
      </template>
    </course-goals>

  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';

export default {
  components:{TheHeader, BadgeList, UserInfo,CourseGoals},
  provide(){
    return {
      badgeList: this.badgeList
    }
  },
  data() {
    return {
      activeUser: {
        name: 'Fas Bhim',
        description: 'Site owner and admin',
        role: 'admin',
      },
      badgeList:["manager","admin","author","secretary"]
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>