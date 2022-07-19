<template>
  <div>
    <div class="header-container">
      <v-container class="max-width-container">
        <v-row>
          <v-app-bar color="white" elevation="0">
            <img height="42" src="@/assets/images/logo.png" alt="logo" />

            <div class="mx-auto" v-if="!isMobile">
              <v-btn
                class="text-transform-none font-weight-normal"
                elevation="0"
                color="transparent"
                :to="item.to"
                @click="item.onClick?.call()"
                v-for="(item, idx) in items"
                :key="idx"
                >{{ item.title }}
              </v-btn>
            </div>

            <div class="ml-auto ml-md-0">
              <v-list-item :two-line="!isMobile">
                <v-list-item-content v-if="!isMobile">
                  <v-list-item-title class="text-right">
                    {{ user.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="text-right">
                    {{ user.email }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar>
                  <img :src="user.photo" />
                </v-list-item-avatar>
              </v-list-item>
            </div>
            <v-app-bar-nav-icon
              v-if="isMobile"
              @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
          </v-app-bar>
        </v-row>
      </v-container>
    </div>
    <v-navigation-drawer v-if="isMobile" v-model="drawer" absolute temporary>
      <template v-slot:prepend>
        <v-list-item three-line>
          <v-list-item-avatar>
            <img :src="user.photo" alt="avatar" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ user.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item
          :to="item.to"
          @click="item.onClick?.call()"
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon color="primary">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div class="dashboard-content pt-10">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "DashboardTemplate",
  data: () => ({
    drawer: false,
    user: JSON.parse(localStorage.getItem("user_data")),
    items: [],
  }),

  mounted() {
    this.items = [
      {
        title: "Buscar por professor",
        icon: "mdi-account-group-outline",
        to: { name: "dashboard" },
      },
      {
        icon: "mdi-account-circle-outline",
        title: "Meu perfil",
        to: undefined,
      },
      {
        icon: "mdi-logout",
        title: "Sair",
        onClick: () => {
          this.$auth.logout();
          localStorage.clear();
        },
      },
    ];
  },

  watch: {
    isMobile(value) {
      if (!value) {
        this.drawer = false;
      }
    },
  },
  computed: {
    isMobile() {
      return ["xs", "sm"].includes(this.$vuetify.breakpoint.name);
    },
  },
};
</script>
<style scoped>
.header-container {
  border-bottom: 2px solid #e5e5e5;
}

.dashboard-content {
  background: #f7f7f7;
  min-height: 100vh;
}
</style>
