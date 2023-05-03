<template>
  <v-app id="login" class="primary">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img
                    src="@/assets/img/m.png"
                    alt="Vue Material Admin"
                    width="120"
                    height="120"
                  />
                  <h1 class="flex my-4 primary--text">GESCOL</h1>
                </div>
                <v-form>
                  <v-text-field
                    append-icon="mdi-account"
                    name="login"
                    label="Usuario"
                    type="text"
                    v-model="model.username"
                  ></v-text-field>
                  <v-text-field
                    append-icon="mdi-lock"
                    name="password"
                    label="Contraseña"
                    id="password"
                    type="password"
                    v-model="model.password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn block color="primary" @click="login" :loading="loading"
                  >Iniciar Sesión</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { PATHS } from '@/utils/routeConstants';
export default {
  name: 'LoginPage',
  data: () => ({
    loading: false,
    model: {
      username: 'admin@isockde.com',
      password: 'password',
    },
  }),

  methods: {
    login() {
      this.loading = true;
      setTimeout(() => {
        localStorage.setItem('jwt', '4444444');
        this.$router.push(PATHS.dashboard.pathBase);
      }, 1000);
    },
  },
};
</script>
<style scoped lang="css">
#login {
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  z-index: 0;
  background-color: #3f51b5 !important;
}
</style>
