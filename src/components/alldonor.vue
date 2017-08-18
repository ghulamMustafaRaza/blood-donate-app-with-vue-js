<template>
  <div>
    <h4>{{ msg }}</h4>
    <div v-for="donor in donors" >
      <q-collapsible icon="fa-user" :label="donor.name">
        <table class="q-table responsive" style="width: 100%">
          <tr>
            <td class="text-left">Name: </td>
            <td class="text-right">{{ donor.name }}</td>
          </tr>
          <tr>
            <td class="text-left">Email: </td>
            <td class="text-right">{{ donor.email }}</td>
          </tr>
          <tr>
            <td class="text-left">Blood Group: </td>
            <td class="text-right">{{ donor.group }}</td>
          </tr>
          <tr>
            <td class="text-left">Date Of Birth: </td>
            <td class="text-right">{{ donor.dateOfBirth }}</td>
          </tr>
          <tr>
            <td class="text-left">Location: </td>
            <td class="text-right">{{ donor.location }}</td>
          </tr>
        </table>
      </q-collapsible>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import {
  QCollapsible,
  QCardMain,
  QCardSeparator,
  QCardTitle,
  QChip
} from 'quasar'
export default {
  data () {
    return {}
  },
  components: {
    QCollapsible,
    QCardMain,
    QCardSeparator,
    QCardTitle,
    QChip
  },
  computed: Object.assign({},
    {
      msg () {
        return 'Welcome to Blood Donar App! We Have Total ' + this.donors.length + ' Donors'
      }
    },
    (mapState(['donors']))
  )
}
</script>

<style>
</style>
