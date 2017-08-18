<template>
  <div>
    <q-card>
      <q-card-title>
        Log In
        <span slot="subtitle">Already A Account</span>
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <form onsubmit="return false" @submit="loginLocal">
          <q-input float-label="Email" v-model="email"/>
          <q-input type="password" float-label="Password" v-model="password"/>
          <q-btn type="submit">Sign In</q-btn>
        </form>
      </q-card-main>
    </q-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import {
  QCard,
  QCardMain,
  QCardSeparator,
  QCardTitle,
  QInput,
  QBtn
} from 'quasar'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    QCard,
    QCardMain,
    QCardSeparator,
    QCardTitle,
    QInput,
    QBtn
  },
  methods: Object.assign({}, {
    loginLocal () {
      let { email, password } = this
      this.login({ email, password })
    }
  },
  mapActions([
    'login'
  ])
  )
}
</script>

<style>
</style>
