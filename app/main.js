import Vue from 'vue';
import VueRouter from 'vue-router'
import InstantSearch from 'vue-instantsearch';
import qs from 'qs';

Vue.use(VueRouter);
Vue.use(InstantSearch);

import App from './App.vue'
import Search from './Search.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/',
            component: Search,
            props: route => ({ queryParameters: route.query }),
        },
    ],
    parseQuery(query) {
        return qs.parse(query);
    },
    stringifyQuery(query) {
        delete query.highlightPreTag
        delete query.highlightPostTag
        var result = qs.stringify(query);
        return result ? ('?' + result) : '';
    }
});

new Vue({
    el: '#app',
    render: h => h(App),
    router
});
