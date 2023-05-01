<template>
  <v-app>
    <AppDrawer />
    <AppBar />
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app> footer </v-footer>
  </v-app>
</template>

<script>
import AppDrawer from "./components/navigations/AppDrawer";
import AppBar from "./components/bars/AppBar";
export default {
  name: "App",
  components: {
    AppDrawer,
    AppBar,
  },
  data: () => ({
    //
  }),
  created() {
    window.getApp = this;
  },
};
</script>
