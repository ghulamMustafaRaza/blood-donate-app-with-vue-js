<template>
  <q-layout
    ref="layout"
    view="lHh Lpr fff"
    :left-class="{'bg-grey-2': true}"
  >
    <q-toolbar slot="header" >
      <!--<q-btn
        flat
        @click="$refs.layout.toggleLeft()"
      >
        <q-icon name="menu" />
      </q-btn>-->

      <q-toolbar-title>
        {{ msg }}
        <!--<div slot="subtitle">Blood Donating System</div>-->
      </q-toolbar-title>
    </q-toolbar>

    <!--<div slot="left">-->
      <!--
        Use <q-side-link> component
        instead of <q-item> for
        internal vue-router navigation
      -->

      <!--<q-list no-border link inset-delimiter>
        <q-list-header>Essential Links</q-list-header>
        <q-item @click="launch('http://quasar-framework.org')">
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>
        <q-item @click="launch('http://forum.quasar-framework.org')">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
        </q-item>
        <q-item @click="launch('https://gitter.im/quasarframework/Lobby')">
          <q-item-side icon="chat" />
          <q-item-main label="Gitter Channel" sublabel="Quasar Lobby" />
        </q-item>
        <q-item @click="launch('https://twitter.com/quasarframework')">
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
      </q-list>
    </div>-->

    <!--
      Replace following <div> with
      <router-view /> component
      if using subRoutes
    -->
    <div style="">
      <form onsubmit="return false" class="form">
        <q-input placeholder="Todo" style="padding: 10px;" v-model="input"/>
        <q-btn @click="addTodo">Add</q-btn>
      </form>
      <q-list no-border link inset-delimiter>
        <q-list-header>
          {{msg}}      
        </q-list-header>
        <q-item class="todo" v-for="(todo, index) in todos">{{todo}} <q-btn @click="del(index)" class="primary">delete</q-btn></q-item>
      </q-list>
    </div>
  </q-layout>
</template>

<script>
import { mapState } from 'vuex'

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
  QInput
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
    QInput
  },
  data () {
    return {
      input: ''
    }
  },
  computed: Object.assign({},
    {
      msg () {
        return 'Welcome to Your Todo App! Leangth Of Your Todos: ' + this.todos.length
      }
    },
    (mapState(['todos']))
  ),
  methods: {
    addTodo () {
      this.$store.commit('addTodo', this.input)
      this.input = ''
    },
    del (ind) {
      this.$store.commit('del', ind)
    }
  },
  created () {},
  mounted () {},
  beforeUpdate () {},
  beforeDestroy () {},
  destroyed () {}
}
</script>

<style>
.todo {
  margin: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 3px;
  margin: 2px;
}
.form {
  margin: 0 10px;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-around;
}
</style>
