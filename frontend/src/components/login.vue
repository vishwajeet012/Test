<template>
  <card>
    <div class="row">
      <div class="col-md-6">
        <h3>
          Login to your account!
        </h3>
        <form @submit.prevent="userLogin">
          <div class="row">
            <div class="col-md-12 mt-5">
              <base-input
                type="email"
                label="Email address"
                placeholder="your email adddress"
                v-model="userInfo.email"
                :rules="[required('email'), emailFormat()]"
              >
              </base-input>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <base-input
                :type="showPassword ? 'text' : 'password'"
                counter="true"
                label="Password"
                placeholder="your password"
                v-model="userInfo.password"
                :rules="[required('password'), minLength('password', 8)]"
              >
              </base-input>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <base-button
                native-type="submit"
                type="primary"
                class="btn-fill"
                v-on:click.once="submitForm(userInfo)"
              >
                {{ buttonText }}
              </base-button>
            </div>
          </div>
        </form>
        <div class="row mt-5">
          <div class="col-md-12">
            <span
              >Don't have an account? Create one <a href="/register">here</a>!
            </span>
          </div>
        </div>
      </div>
    </div>
  </card>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      showPassword: false,
      userInfo: {
        email: "",
        password: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  list-style: none;
}
a {
  text-decoration: underline;
}
</style>