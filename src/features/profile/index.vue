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
            <img src="@/assets/icons/linkedin.svg" alt="linkedin" />
            <img src="@/assets/icons/twitter.svg" alt="twitter" />
            <img src="@/assets/icons/github.svg" alt="github" />
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
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle. By the
            same illusion which lifts the horizon of the sea to the level of the
            spectator on a hillside, the sable cloud beneath was dished out, and
            the car seemed to float in the middle of an immense dark sphere,
            whose upper half was strewn with silver. Looking down into the dark
            gulf below, I could see a ruddy light streaming through a rift in
            the clouds.
          </p>
        </BoxContainer>
        <BoxContainer class="mb-5" title="Áreas de pesquisa">
          <div class="areas-container justify-start">
            <div class="item">Realidade Virtual</div>
            <div class="item">Internet das Coisas</div>
          </div>
        </BoxContainer>
        <BoxContainer class="mb-5" title="Projetos de pesquisa">
          <div class="bordered pa-3 rounded">
            <p>JAN/2020 - Atualmente</p>
            <b>Nome do Projeto de Pesquisa</b>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
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