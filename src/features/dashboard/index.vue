<template>
  <v-container class="max-width-container">
    <v-row class="mb-5">
      <v-col md="4">
        <v-text-field
          class="search-field"
          prepend-inner-icon="mdi-magnify"
          placeholder="Digite o nome do professor"
          hide-details
          v-model="search"
          solo
          flat
        />
      </v-col>
      <v-col md="2">
        <v-autocomplete
          class="search-filter"
          append-icon="mdi-chevron-down"
          v-model="searchArea"
          :items="items"
          item-text="name"
          item-value="id"
          solo
          placeholder="Área de pesquisa"
          hide-details
          flat
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center" v-if="!paginator.data.length && !searching">
        <h1>Sem itens para exibir</h1>
      </v-col>
      <template v-else>
        <v-col
          cols="12"
          v-for="item in paginator.data"
          :key="item.id"
          class="white mx-md-3 mb-5 rounded pa-10"
        >
          <v-row>
            <div class="avatar-container offset-3 mx-auto offset-md-0">
              <div
                class="item"
                :style="{
                  backgroundImage: `url(${item.url_photo})`,
                }"
              ></div>
            </div>
            <v-col cols="12" md="" class="details-container">
              <h2 class="text-center text-md-left">{{ item.name }}</h2>
              <p class="mb-5" v-html="item.about"></p>

              <div class="areas-container">
                <div
                  class="item"
                  v-for="(area, j) in item.areas"
                  :key="area + j"
                >
                  {{ area }}
                </div>
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
                :to="{ name: 'profile', params: { id: item.id } }"
                color="primary"
                depressed
                outlined
                >Ver perfil</v-btn
              >
            </v-col>
          </v-row>
        </v-col></template
      >
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Dashboard",
  data: () => ({
    searching: false,
    items: [],
    paginator: {
      current_page: 1,
      last_page: 1,
      per_page: 1,
      total: 11,
      data: [],
    },
    search: "",
    searchArea: "",
  }),
  watch: {
    search() {
      this.fetchItems();
    },
    searchArea() {
      this.fetchItems();
    },
  },
  mounted() {
    this.fetchAreas();
  },
  methods: {
    fetchAreas() {
      this.$http.get("/search-areas").then(({ data }) => {
        this.items = data;
        this.fetchItems();
      });
    },
    fetchItems() {
      const { searchArea, search } = this;
      this.searching = true;

      this.$http
        .get("/teachers/search", {
          params: { search, search_areas: searchArea },
        })
        .then(({ data }) => {
          this.paginator = data;
        })
        .finally(() => {
          this.searching = false;
        });
    },
  },
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