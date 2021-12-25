<template>
  <div>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center" dense>
        <v-col cols="12" sm="8" md="4" lg="4">
          <v-card elevation="0">
            <v-img
              src="@/assets/logo.png"
              alt="Fedorae Education Log"
              containheight="200"
            />
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="email"
                  label="Enter your email"
                  name="Email"
                  prepend-inner-icon="mdi-mail"
                  type="email"
                  class="rounded-0"
                  outlined
                  required
                  :rules="emailRule"
                />
                <v-text-field
                  v-model="password"
                  label="Enter your password"
                  name="password"
                  prepend-inner-icon="mdi-lock"
                  type="password"
                  outlined
                  required
                  :rules="passwordRule"
                />
                <v-btn
                  class="rounded-0"
                  color="#000000"
                  x-large
                  block
                  dark
                  @onclick="login()"
                >
                  Login
                </v-btn>
                <v-card-actions class="text--secondary">
                  <v-checkbox color="#000000" label="Remember me" />
                  <v-spacer />
                  <router-link :to="{ name: 'ForgotPassword' }">
                    Forgot? </router-link
                  >|
                  <a href="#" class="p1-2" style="color: #000000"> Sign Up</a>
                </v-card-actions>
              </v-form>
            </v-card-text>
            <v-card-actions class="ml-6 mr-6 text-center">
              <p>
                By continuing, you agree to Fedorae'Education
                <a href="#" class="pl-2" style="color: #000000"> Policy </a>
                and
                <a href="#" class="pl-2" style="color: #000000">
                  Terms of Use
                </a>
              </p>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      emailRule: [
        (v) => !!v || "이메일을 입력해주세요.",
        (v) => {
          const replaceV = v.replace(/(\s*)/g, "");
          const pattern =
            /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
          return pattern.test(replaceV) || "이메일 형식으로 입력해주세요";
        },
      ],
      passwordRule: [
        (v) => !!v || "비밀번호를 입력해주세요.",
        (v) => {
          const replaceV = v.replace(/(\s*)/g, "");
          return replaceV.length >= 8 || "8자리 이상 입력해주세요.";
        },
      ],
    };
  },
  methods: {
    login() {
      this.email = this.email.replace(/(\s*)/g, "");
      this.password = this.password.replace(/(\s*)/g, "");
      console.log(this.email, this.password);
    },
  },
};
</script>

<style>
</style>
