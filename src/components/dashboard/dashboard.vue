<template>
  <v-app>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
      rel="stylesheet"
    />
    <link href="https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css" rel="stylesheet" />
    <div>
      <v-toolbar>
        <router-link to="/home" tag="span" style="cursor: pointer">Home Page</router-link>
          
        <v-spacer />
          
        <v-toolbar-items class="hidden-xs-only">
          <v-btn v-for="item in menuItems" :key="item.title" :to="item.path">
            <v-icon left dark>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.isLoggedIn ? next() : next("/");
    });
  },
  props: ["isLoggedIn"],

  name: "App",
  data: () => ({
    appTitle: "app",
    navDrawer: true,
    sidebar: true,
    menuItems: [
      {
        title: "Login",
        path: "/login",
        icon: "assignment"
      },
      {
        title: "Favoritos",
        path: "/favoritos",
        icon: "person_outline"
      },
     
    ]
  })
};
</script>
