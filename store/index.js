import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const state = () => ({
    listNews: [],
    categories: 'jokowi',
})
  
export const mutations = {
    setListNews(state, payload){
        state.listNews = payload
    },
    setCategories(state, payload){
        state.categories = payload
    }
}

export const actions = {
    changeCategories(store, payload){
        store.commit("setCategories", payload)
    },
    fetchNews(store) {
        axios.get("https://newsapi.org/v2/everything?q="+ this.state.categories + "&apiKey=c7d465fddb28475881ccd0ba8642c64b&pageSize=10").then((response) => {
            store.commit("setListNews", response.data.articles)
        })
    }
}