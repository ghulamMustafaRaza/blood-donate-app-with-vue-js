<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout
      ref="layout"
      view="lHh Lpr fff"
      :left-class="{'bg-grey-2': true}"
    >
      <q-toolbar slot="header" >
        <q-btn
          flat
          @click="$refs.layout.toggleLeft()"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          BlooDo
          <div slot="subtitle">A Blood Donate App</div>
        </q-toolbar-title>
        <q-btn slot="right" v-if="user" @click="logout" style='background-color: red'>logout</q-btn>
      </q-toolbar>

      <div slot="left">
        <!--
          Use <q-side-link> component
          instead of <q-item> for
          internal vue-router navigation
        -->

        <q-list no-border link inset-delimiter>
          <q-list-header>Essential Links</q-list-header>
          <q-side-link to='/' style="cursor: pointer;">
            <q-item>
              <q-item-side icon="home" />
              <q-item-main label="Home" sublabel="Go To Home" />
            </q-item>
          </q-side-link>
          <div v-if="user">
            <q-side-link to='/all-donor' style="cursor: pointer;">
              <q-item>
                <q-item-side icon="fa-user" />
                <q-item-main label="Donor" sublabel="Donor List" />
              </q-item>
            </q-side-link>
          </div>
          <div v-else="">
            <q-side-link to='/login' style="cursor: pointer;">
              <q-item>
                <q-item-side icon="fa-sign-in" />
                <q-item-main label="Log in" sublabel="All Ready A Account" />
              </q-item>
            </q-side-link>
            <q-side-link to='/signup' style="cursor: pointer;">
              <q-item>
                <q-item-side icon="fa-user-plus" />
                <q-item-main label="Sign Up" sublabel="Create A Account" />
              </q-item>
            </q-side-link>
          </div>
        </q-list>
      </div>

      <router-view />
      <!--
        Replace following <div> with
        <router-view /> component
        if using subRoutes
      -->
      
    </q-layout>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QInput,
  QSideLink
} from 'quasar'

export default {
  name: 'index',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QInput,
    QSideLink
  },
  data () {
    return {}
  },
  computed: Object.assign({}, {

  },
  mapState([
    'user'
  ])
  ),
  methods: mapActions(['logout']),
  created () {},
  mounted () {},
  beforeUpdate () {},
  beforeDestroy () {},
  destroyed () {}
}
</script>

<style></style>
