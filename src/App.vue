<template>
  <div>
    <template v-if="$route.meta.private">
      <AdminDesign>
        <router-view></router-view>
      </AdminDesign>
    </template>
    <template v-else>
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
import AdminDesign from '@/layouts/AdminDesign';
export default {
  name: 'App',
  components: {
    AdminDesign,
  },
};
</script>
