<template>
  <v-container class="max-width-container">
    <v-row>
      <v-col class="mb-5 mb-md-0 info-container" cols="12" md="4">
        <div class="white w-100 rounded">
          <div class="avatar-container offset-3 mt-5 mb-2 mx-auto offset-md-0">
            <div
              class="item"
              :style="{
                backgroundImage: `url(${profile.url_photo})`,
              }"
            ></div>
          </div>
          <h2 class="title">{{ profile.name }}</h2>

          <div class="social-items">
            <a :href="this.profile.social_media_1" target="_self">
              <img src="@/assets/icons/github.svg" alt="github" />
            </a>
            <a :href="this.profile.social_media_2" target="_self">
              <img src="@/assets/icons/linkedin.svg" alt="linkedin" />
            </a>
            <a :href="this.profile.social_media_3" target="_self">
              <img src="@/assets/icons/twitter.svg" alt="twitter" />
            </a>
          </div>
          <div class="w-100 pa-5">
            <v-btn
              class="text-transform-none br-100"
              color="primary"
              block
              large
              depressed
            >
              Entrar em contato
            </v-btn>
          </div>
        </div>
      </v-col>
      <v-col>
        <BoxContainer class="mb-5" title="Sobre mim">
          <p>
           {{this.profile.about }}
          </p>
        </BoxContainer>
        <BoxContainer class="mb-5" title="Áreas de pesquisa">
          <div class="areas-container justify-start" v-for="(item, index) in this.profile.areas" :key="index">
            <div class="item">{{item}}</div>
          </div>
        </BoxContainer>
        <BoxContainer class="mb-5" title="Projetos de pesquisa">
          <div class="bordered pa-3 rounded" v-for="(item, index) in this.profile.projects" :key="index">
            <p>{{ new Date(item.initial_date).toLocaleString('default', { month: 'long' }).toUpperCase()}}/{{ new Date(item.initial_date).getUTCFullYear()}} - Atualmente</p>
            <b>{{item.title}}</b>
          </div>
        </BoxContainer>

        <BoxContainer class="mb-5" title="Disciplinas">
          <div class="bordered pa-3 rounded" v-for="(item, index) in this.profile.subjects" :key="index">
             <p>{{ new Date(item.initial_date).toLocaleString('default', { month: 'long' }).toUpperCase()}}/{{ new Date(item.initial_date).getUTCFullYear()}} - Atualmente</p>
            <b>{{item.title}}</b>
          </div>
        </BoxContainer>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import BoxContainer from "@/features/profile/components/BoxContainer";
export default {
  name: "Profile",
  components: {
    BoxContainer,
  },
  data: () => ({
    profile: {},
  }),
  mounted() {
    this.fetchProfile();
  },
  methods: {
    fetchProfile() {
      this.$http.get(`/teachers/${this.$route.params.id}`).then(({ data }) => {
        this.profile = data;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.info-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
  }

  .social-items {
    border: none;
    border-bottom: 1px solid #e4e4e4;
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      padding: 20px 5px;
    }
  }
}
</style>
