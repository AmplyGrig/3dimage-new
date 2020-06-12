import Vue from "vue";
import Vuetify from "vuetify/lib";
import ru from "vuetify/es5/locale/ru";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light:   {
        primary: "#3f51b5",
        secondary:" #4caf50",
        accent: "#673ab7",
        error: "#f44336",
        warning:" #9c27b0",
        info: "#00bcd4",
        success: "#009688"
        }
    }
  },
  lang: {
    locales: { ru },
    current: "ru"
  }
});
