<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row align="center" justify="center" dense>
          <v-col cols="12" sm="8" md="4" lg="4">
            <v-card elevation="0">
              <div class="text-center">
                <h1 class="mb-2">Forgot Password</h1>
                <p>
                  We wil send a password reset link to the email address of the
                  connected accounted
                </p>
              </div>
              <a href="#">
                <v-img
                  src="@/assets/logo.png"
                  alt="vuetify components logo"
                  contain
                  height="200"
                />
              </a>
              <v-form>
                <v-text-field
                  v-model="email"
                  label="Enter your email address"
                  name="email"
                  prepend-inner-icon="mdi-email"
                  type="email"
                  class="rounded-0"
                  outlined
                  required
                  :rules="emailRule"
                />
                <v-btn
                  class="rounded-0"
                  color="black"
                  x-large
                  block
                  dark
                  @onclick="submit()"
                >
                  Reset Password
                </v-btn>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      emailRule: [
        (v) => !!v || "이메일을 입력해주세요.",
        (v) => {
          const replaceV = v.replace(/(\s*)/g, "");
          const pattern =
            /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
          return pattern.test(replaceV) || "이메일 형식으로 입력해주세요";
        },
      ],
    };
  },
  methods: {
    submit() {
      this.email = this.email.replace(/(\s*)/g, "");
    },
  },
};
</script>

<style>
</style>
