import driverAuthBearer from "@websanova/vue-auth/src/drivers/auth/bearer.js";
import driverHttpAxios from "@websanova/vue-auth/src/drivers/http/axios.1.x.js";
import driverRouterVueRouter from "@websanova/vue-auth/src/drivers/router/vue-router.2.x.js";

export default {
  drivers: {
    auth: driverAuthBearer,
    http: driverHttpAxios,
    router: driverRouterVueRouter,
  },
  options: {
    stores: ["storage"],
    authRedirect: { path: "/" },
    tokenDefaultKey: "access_token",
    loginData: {
      url: "login",
      method: "POST",
      redirect: "/",
      fetchUser: false,
      staySignedIn: true,
    },
    fetchData: {
      url: "me",
      method: "POST",
      enabled: false,
    },
    refreshData: {
      url: "refresh",
      method: "POST",
      enabled: true,
      interval: 60,
    },
    parseUserData: (data) => ({ ...data.user, roles: data.roles }),
  },
};
