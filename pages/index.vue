<template>
  <v-row>
    <v-col>
      <v-card class="mx-auto" v-for="(itemNews, index) in listNews" :key="index">
        <v-img :src="itemNews.urlToImage" />
        <v-card-title>
          <h1>{{ itemNews.title }}</h1>
        </v-card-title>
        <v-card-text>
          <p>{{ itemNews.description }}</p>
        </v-card-text>
        <v-card-actions>
          <Nuxt-Link :to="'/detailView/id' + index">
            <v-btn>Read More</v-btn>
          </Nuxt-Link>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',

  computed: {
    listNews() {
      return this.$store.state.listNews
    }
  },

  mounted() {
    this.$store.dispatch("fetchNews")
  },
  
}
</script>
