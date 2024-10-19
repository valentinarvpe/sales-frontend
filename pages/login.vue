<template>
  <v-row no-gutters>
    <v-col class="ma-0" :cols="5">
      <v-sheet>
        <v-img cover height="1000" lazy-src="https://picsum.photos/id/11/100/60" max-width="1300px"
          src="/assets/images/login.jpg">
          <template v-slot:placeholder>
            <div class="d-flex align-center justify-center fill-height">
              <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
            </div>
          </template>
        </v-img>
      </v-sheet>
    </v-col>

    <v-col :cols="7">
      <v-sheet class="pa-2 ma-2">
        <div>
          <v-img class="mx-auto my-6" max-width="228"
            src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"></v-img>

          <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
            <div class="text-subtitle-1 text-medium-emphasis">Account</div>

            <v-text-field density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline"
              variant="outlined"></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
              Password

              <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">
                Forgot login password?</a>
            </div>

            <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
              density="compact" placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline"
              variant="outlined" @click:append-inner="visible = !visible"></v-text-field>

            <v-card class="mb-12" color="surface-variant" variant="tonal">
              <v-card-text class="text-medium-emphasis text-caption">
                Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three
                hours.
                If you must login now, you can also click "Forgot login password?" below to reset the login password.
              </v-card-text>
            </v-card>

            <v-btn class="mb-8" color="blue" size="large" variant="tonal" block>
              Log In
            </v-btn>

            <v-card-text class="text-center">
              <a class="text-blue text-decoration-none" href="#" rel="noopener noreferrer" target="_blank">
                Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
              </a>
            </v-card-text>
          </v-card>
        </div>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script>
export default {
  computed: {
    cols() {
      const { lg, sm } = this.$vuetify.display
      return lg ? [3, 9]
        : sm ? [9, 3]
          : [6, 6]
    },
  },
}
</script>