# Vue 2.x Boilerplate

> A Vue.js project with Vuex, vue-router AND Bulma

## Build Setup

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build

# build for production and view the bundle analyzer report
yarn build --report
```

## Next Step

- [ ] vue-resource

## Development

#### Vuex

[Vuex](https://vuex.vuejs.org) is a library to implement Flux Pattern on Vue.js. I'm sure that it is much easier than on React.js.

1. Create a store to use `Vuex`

    Let's create a file to use `Vuex` on `src/store/index.js`.

2. Notify your store to Vue

    Let's make your store activate on `src/main.js`.

3. Setting up Store inside `store/modules/*.js`(modulized)

    If you open up a sample file named `base.js` in `src/store/modules`, there are four parts: `state`, `mutations`, `actions`, `getters`. `state` is the Store to store data on components you will build later. `mutations` is triggered from `actions` about how to manipulate your state by `mutation-types`. `actions` are triggered(dispatched) from your components (one of roles of actions is to get data from server). `getters` is what could be used on components froms `state`. You should declare varibales of `state` on `getters` to use on components.

4. Declare your module to main store

    Let's include your module on `src/store/index.js`.

5. Access data from Component

    If you open up a sample file named `Store.vue` in `src/components`, you can see `friends` in `computed` that return `this.$store.getters.friends`. You can get, manipulate, and use any data declared of `getters` in Store. Everything is done to use data from Store.

6. Let's trigger actions!

    Once you declare store on your Vue project, you can access your store from any components on `this`. All you need to do to trigger actions is to `dispatch` the name of actions like `this.$store.dispatch('getFriends')`. And let `getFriends` to do its job.


#### Vue Router
> I think it's much helpful to refer to [official document](https://github.com/vuejs/vue-router) than mine. Definitely.

## Reference

- Scaffolded Project by [Vue Cli](https://github.com/vuejs/vue-cli)

# License

[MIT](LICENSE)
