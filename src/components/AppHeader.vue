<template>
  <transition name="fade">
    <section v-if="!isSmall" class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">TV Show Tracker</h1>
          <h2 class="subtitle">Episode tracker</h2>
        </div>
      </div>
    </section>
    <nav v-else class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" :to="{name: 'Main'}">TV Show Tracker</router-link>
      </div>
    </nav>
  </transition>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  computed: {
    isSmall() {
      return this.$route.name !== 'Main';
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
