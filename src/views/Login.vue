<template>
  <v-container color="blue-grey lighten-1" class="spacing-playground py-0 px-0">
    <v-row class="mt-6">
      <!-- Row Number 1 -->
      <v-col cols="12">
        <!--Columns in the first row-->
        <v-row cols="4" md="4" justify="center">
          <!--Rows in the first column-->
          <v-card>
            <v-card-title class="flex text-center">MyBlog - Sign In</v-card-title>
            <v-card-actions class="flex text-center">
              <div id="firebaseui-auth-container"></div>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
      <!--  -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  mounted() {
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: async () => {
          const idToken = await this.$firebase.auth().currentUser.getIdToken();
          this.$store.dispatch("setIdToken", idToken);
          this.$axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${idToken}`;
          const { data } = await this.$axios("login");
          this.$store.dispatch("setUser", data);
          this.$router.push("/");
          return false;
        }
      },
      signInOptions: [
        this.$firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        this.$firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };
    this.$firebaseui.start("#firebaseui-auth-container", uiConfig);
  }
};
</script>
