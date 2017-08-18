<template>
  <div>
    <q-card>
      <q-card-title>
        Sign Up
        <span slot="subtitle">Create A Account</span>
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <form onsubmit="return false" @submit="signUpLocal">
          <q-input float-label="Name" v-model="name"/>
          <q-input float-label="Email" v-model="email"/>
          <q-input float-label="Location" v-model="location"/>
          <q-dialog-select
            inverted
            v-model="select"
            :options="selectOptions"
            ok-label="Pick"
            cancel-label="Neah"
            title="Select A Blood Group"
            display-value="A+"
          />
          <q-datetime v-model="dateOfBirth" inverted type="date" max="max" />
          <q-input type="password" float-label="Password" v-model="password"/>
          <q-btn type="submit">Sign Up</q-btn>
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
  QBtn,
  QDialogSelect,
  QDatetime
} from 'quasar'
export default {
  data () {
    return {
      dateOfBirth: '1999-8-19',
      name: '',
      email: '',
      password: '',
      select: 'A+',
      location: '',
      selectOptions: [
        {label: 'A+', value: 'a+'},
        {label: 'A-', value: 'a-'},
        {label: 'B+', value: 'b+'},
        {label: 'B-', value: 'b-'},
        {label: 'O+', value: 'o+'},
        {label: 'O-', value: 'o-'}
      ]
    }
  },
  computed: {
    max () {
      let date = new Date()
      date.setFullYear(date.getFullYear() - 18)
      return date.toLocaleDateString()
    }
  },
  components: {
    QCard,
    QCardMain,
    QCardSeparator,
    QCardTitle,
    QInput,
    QBtn,
    QDialogSelect,
    QDatetime
  },
  methods: Object.assign({}, {
    signUpLocal () {
      let { name, email, password, select, location, dateOfBirth } = this
      this.signUp({ name, email, password, group: select, location, dateOfBirth })
    }
  },
  mapActions([
    'signUp'
  ])
  )
}
</script>

<style>
</style>
