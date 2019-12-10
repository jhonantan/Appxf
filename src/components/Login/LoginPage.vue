<template>
  <v-app>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
      rel="stylesheet"
    >
    <link
      href="https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css"
      rel="stylesheet"
    >
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar dark>
                <v-toolbar-title justify-center>Página de Login</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-alert
                  type="error"
                  outlined
                  :value="erroForm"
                >Verifique seus dados e tente novamente.</v-alert>
                <v-alert type="error" outlined :value="erro">Usuário ou senha errados.</v-alert>
                <v-layout align-center justify-center column>
                  <v-flex>
                    <v-form ref="form" v-on:submit.prevent="onSubmit">
                      <v-text-field
                        label="Usuário"
                        name="usuario"
                        prepend-icon="person"
                        type="text"
                        outlined
                        
                        v-model="user"
                      />

                      <v-text-field
                        id="senha"
                        label="Senha"
                        name="senha"
                        prepend-icon="lock"
                        type="password"
                        outlined
                        
                        v-model="pss"
                      />
                    </v-form>
                  </v-flex>
                  <v-flex>
                    <small>
                      <input type="checkbox" id="checkbox" @click="RememberMe" v-model="cancelled" />
                      Salvar usuário
                    </small>
                  </v-flex>
                </v-layout>
              </v-card-text>
              <v-card-actions>
                <small>
                  Esqueci a
                  <a @click="handlePassword()">senha</a>
                </small>
                <v-spacer />
                <v-btn v-show="!loading" @click="handleSubmit">Entrar</v-btn>
                <v-progress-circular v-show="loading" indeterminate color="primary"></v-progress-circular>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { METHODS } from "http";
import Login from "./Login";
const Auth = new Login();
export default {
  data: () => ({
    user: "",
    pss: "",
    remember: false,
    cancelled: false,
    isLoggedIn: false,
    erro: false,
    erroForm: false,
    loading: false,
    validacao: [v => v.length > 4 || "Campo inválido"]
  }),
  mounted() {
    if (localStorage.user) {
      this.user = localStorage.user;
    }
    if (localStorage.cancelled) {
      this.cancelled = localStorage.cancelled;
    }
    if (localStorage.remember) {
      this.remember = localStorage.remember;
    }
  },
  methods: {
    async handleSubmit() {
      if (this.$refs.form.validate()) {
        try {
          this.loading = true;
          let response = true;//await Auth.login(this.user, this.pss);
          if (response) {
            this.$router.push({
              name: "Home Page",
              params: {
                isLoggedIn: !this.isLoggedIn
              }
            });
          }
        } catch (error) {
          this.loading = false;
          this.erro = true;
          throw error;
        }
      } else {
        this.erroForm = true;
      }
    },
    async handlePassword() {
      // Cuida da senha
    },
    
  }
};
</script>