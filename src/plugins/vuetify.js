import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

// Vuetify 2.0 Custom Color Scheme
const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.teal.darken2,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
        background: colors.blueGrey.lighten3 // Not Auto Applied
      },
      dark: {
        primary: colors.blue.lighten3,
        background: colors.blueGrey.lighten1 // If not using lightne/darken, use base to return
      }
    }
  }
});

export default vuetify;
