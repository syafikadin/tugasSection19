<template>
  <v-app light>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          @click="changeCategories(item.title)"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <a href="#"><NuxtLogo /></a>
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      
      <v-text-field v-model = message></v-text-field>

      <v-btn icon @click="changeCategories(message)">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      message: '',
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-newspaper-variant-outline',
          title: 'News',
          to: '/',
        },
        {
          icon: 'mdi-new-box',
          title: 'Newest',
          to: '/',
        },
        {
          icon: 'mdi-help-circle-outline',
          title: 'Ask',
          to: '/',
        },
        {
          icon: 'mdi-movie-search-outline',
          title: 'Show',
          to: '/',
        },
        {
          icon: 'mdi-account-hard-hat-outline',
          title: 'Jobs',
          to: '/',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Berita Terkini',
    }
  },
  methods: {
    changeCategories(payload){
      this.$store.dispatch('changeCategories', payload)
      this.$store.dispatch('fetchNews')
      this.message = ''
    }
  }
}
</script>
