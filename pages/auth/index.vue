<template>
  <div>
    <form action="" method="post" @submit="login">
      <Input
      v-model="email"
      label="Email"
      :input="{
        type: 'email',
        name: 'email',
        placeholder: 'Email',
        required: true
      }"/>
      <Input
        v-model="password"
        label="Password"
        :input="{
        type: 'password',
        name: 'password',
        placeholder: 'password',
        required: true
      }"/>
      <Submit />
    </form>
  </div>
</template>

<script>
import {authService} from "~/server/authService";

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login(event) {
      event.preventDefault();
      const user = {
        email: this.email,
        password: this.password
      }
      authService.login(user).then((res) => {
        sessionStorage.setItem('token', res.token)
        if (res.token) {
          this.$router.push('/rooms')
        }
      })
    }
  }
}
</script>
