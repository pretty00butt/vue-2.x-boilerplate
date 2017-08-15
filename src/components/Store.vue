<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Store</h1>
        <div v-if="loading">
          Loading...
        </div>
        <div v-else>
          <h2 class="subtitle">Friends</h2>
          <div class="tags has-addons">
            <span class="tag">Number of Friends</span>
            <span class="tag is-info">{{ friends.length }}</span>
          </div>
          <ol>
            <li v-for="f in friends">{{ f.name }}</li>
          </ol>
          <button
            class="button is-warning"
            v-on:click="addMoreFriends()"
          >
            Add more friends
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Store',

  created () {
    this.$store.dispatch('getFriends')
      .then(_ => {
        this.$data.loading = false
      })
  },

  data () {
    return {
      loading: true
    }
  },

  computed: {
    friends () {
      return this.$store.getters.friends
    }
  },

  methods: {
    addMoreFriends () {
      this.$store.dispatch('addMoreFriends')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
