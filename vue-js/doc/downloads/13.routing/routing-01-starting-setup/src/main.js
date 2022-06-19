import { createApp } from 'vue';
import { createRouter,createWebHistory } from 'vue-router';
import TeamsList from "@/components/teams/TeamsList";
import UsersList from "@/components/users/UsersList";
import TeamMembers from "@/components/teams/TeamMembers";

import App from './App.vue';

const app = createApp(App)

// creating router
const  router =createRouter({
    history:createWebHistory(),
    routes: [
        // {path: '/',component: TeamsList},
        {path: '/teams',component: TeamsList},
        {path: '/users',component: UsersList},
        {path: '/teams/:teamId',component: TeamMembers,props:true},
    ],
    ///we can override the router-link-active option
    linkActiveClass: 'active'
});

//making the vue app aware of our router
app.use(router);

app.mount('#app');
