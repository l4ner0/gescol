<template>
  <v-app>
    <AppDrawer />
    <AppBar />
    <v-main>
      <v-container fluid>
        <slot></slot>
      </v-container>
    </v-main>
    <v-footer app> footer </v-footer>
  </v-app>
</template>

<script>
import AppDrawer from '@/components/navigations/AppDrawer';
import AppBar from '@/components/bars/AppBar';
export default {
  name: 'AdminDesign',
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
