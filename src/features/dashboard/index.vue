<template>
  <v-container class="max-width-container">
    <v-row class="mb-5">
      <v-col md="4">
        <v-text-field
          class="search-field"
          prepend-inner-icon="mdi-magnify"
          placeholder="Digite o nome do professor"
          hide-details
          solo
          flat
        />
      </v-col>
      <v-col md="2">
        <v-autocomplete
          class="search-filter"
          append-icon="mdi-chevron-down"
          solo
          placeholder="Área de pesquisa"
          hide-details
          flat
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="white mx-md-3 mb-5 rounded pa-10">
        <v-row>
          <div class="avatar-container offset-3 mx-auto offset-md-0">
            <div
              class="item"
              :style="{
                backgroundImage: `url(https://randomuser.me/api/portraits/women/81.jpg)`,
              }"
            ></div>
          </div>
          <v-col cols="12" md="" class="details-container">
            <h2 class="text-center text-md-left">Mara Alencar</h2>
            <p class="mb-5">
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle.
            </p>

            <div class="areas-container">
              <div class="item">Realidade Virtual</div>
              <div class="item">Internet das Coisas</div>
            </div>
          </v-col>
          <v-col md="3">
            <v-btn class="br-100 mb-5" block x-large color="primary" depressed
              >Entrar em contato</v-btn
            >
            <v-btn
              class="br-100"
              block
              x-large
              color="primary"
              depressed
              outlined
              >Ver perfil</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="white mx-md-3 mb-5 rounded pa-10">
        <v-row>
          <div class="avatar-container offset-3 mx-auto offset-md-0">
            <div
              class="item"
              :style="{
                backgroundImage: `url(https://randomuser.me/api/portraits/women/81.jpg)`,
              }"
            ></div>
          </div>
          <v-col cols="12" md="" class="details-container">
            <h2 class="text-center text-md-left">Mara Alencar</h2>
            <p class="mb-5">
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle.
            </p>

            <div class="areas-container">
              <div class="item">Realidade Virtual</div>
              <div class="item">Internet das Coisas</div>
            </div>
          </v-col>
          <v-col md="3">
            <v-btn class="br-100 mb-5" block x-large color="primary" depressed
              >Entrar em contato</v-btn
            >
            <v-btn
              class="br-100"
              block
              x-large
              color="primary"
              depressed
              outlined
              >Ver perfil</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Dashboard",
};
</script>
<style lang="scss" scoped>
.search-field,
.search-filter {
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
}

.details-container {
  h2 {
    font-style: normal;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
  }
  p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>