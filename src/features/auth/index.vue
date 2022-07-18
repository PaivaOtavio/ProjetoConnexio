<template>
  <v-container fluid>
    <v-row class="vh-100">
      <v-col class="wallpaper d-none d-md-block"> </v-col>
      <v-col
        cols="12"
        md="4"
        xl="3"
        class="my-auto d-flex auth-container flex-column align-center px-8"
      >
        <img src="@/assets/images/logo.png" alt="logo" class="mb-10" />
        <p class="text-center">
          <b>Bem-vindo(a)!</b> <br />
          Entre com seu usuário e senha para acessar o sistema.
        </p>
        <v-form v-model="validForm" class="w-100">
          <fieldset class="w-100 mb-8">
            <legend>Usuário <span class="required">*</span></legend>
            <v-text-field
              class="custom-text-field"
              prepend-inner-icon="mdi-account-circle-outline"
              v-model="payload.email"
              :rules="emailRules"
              solo
              flat
            />
          </fieldset>
          <fieldset class="w-100 mb-8">
            <legend>Senha <span class="required">*</span></legend>
            <v-text-field
              class="custom-text-field"
              prepend-inner-icon="mdi-key-outline"
              hide-details
              type="password"
              :rules="passwordRules"
              v-model="payload.password"
              flat
              solo
            />
          </fieldset>

          <button
            :disabled="loading"
            @click.prevent="login()"
            class="primary white--text font-weight-bold w-100 pa-3 br-100 mb-5"
          >
            <v-progress-circular
              v-if="loading"
              class="mr-5"
              size="20"
              indeterminate
            />
            <span>Entrar</span>
          </button>
        </v-form>
        <a href="#" class="text-decoration-none mb-2">Esqueceu a senha?</a>
        <p class="text-center">
          Não possui uma conta?
          <a href="#" class="text-decoration-none">Criar uma.</a>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Auth",
  data: () => ({
    validForm: false,
    loading: false,
    payload: {
      email: "",
      password: "",
    },
  }),
  computed: {
    passwordRules() {
      return [(v) => (!!v && v?.trim() != "") || "Senha é obrigatória"];
    },
    emailRules() {
      return [
        (v) => !!v || "E-mail é obrigatório",
        (v) => /.+@.+/.test(v) || "E-mail inválido",
      ];
    },
  },
  methods: {
    login() {
      if (this.validForm) {
        const { email, password } = this.payload;
        this.loading = true;
        this.$auth
          .login({
            data: { email, password },
            staySignedIn: true,
            fetchUser: true,
          })
          .then(({ data }) => {
            this.$router.push({ name: "dashboard" });
          })
          .catch(() => {
            this.$toast.error(
              "Falha no login, verifique os dados informados e tente novamente."
            );
          })
          .finally(() => {
            this.loading = false;
          });
      } else {
        this.$toast.error("Verifique os dados do formulário");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.wallpaper {
  background-image: url("@/assets/images/bg-auth.jpg");
  background-size: cover;
  background-position: center;
}

.auth-container {
  fieldset {
    border: none;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    padding-top: 8px;
    .custom-text-field {
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.02),
        0px 2px 4px rgba(0, 0, 0, 0.08);
      border-radius: 4px;
    }
    .required {
      color: #167ffc;
    }
  }
}
</style>
