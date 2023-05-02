<template>
  <v-app-bar app color="deep-purple accent-4" dark>
    <v-app-bar-nav-icon @click.stop="handleDrawerToggle"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-btn icon @click="handleFullScreen()">
      <v-icon>mdi-fullscreen</v-icon>
    </v-btn>
    <v-menu
      offset-y
      origin="center center"
      :nudge-bottom="10"
      transition="scale-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon large slot="activator" v-bind="attrs" v-on="on">
          <v-avatar size="30px">
            <img src="../../assets/img/man_4.jpg" alt="Michael Wang" />
          </v-avatar>
        </v-btn>
      </template>

      <v-list dense class="pa-0">
        <v-list-item v-for="(item, index) in items" :key="index" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { toggleFullScreen } from '@/utils/fullScreen';
export default {
  name: "AppBar",
  data() {
    return {
      items: [
        {
          icon: "mdi-account-circle",
          href: "#",
          title: "Profile",
          click: (e) => {
            console.log(e);
          },
        },
        {
          icon: "mdi-settings",
          href: "#",
          title: "Settings",
          click: (e) => {
            console.log(e);
          },
        },
        {
          icon: "mdi-fullscreen-exit",
          href: "#",
          title: "Logout",
          click: () => {
            window.getApp.$emit("APP_LOGOUT");
          },
        },
      ],
    };
  },
  methods: {
    handleDrawerToggle () {
      window.getApp.$emit('APP_DRAWER_TOGGLED');
    },
    handleFullScreen () {
     toggleFullScreen();
    }
  }
};
</script>

<style></style>
