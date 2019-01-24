<template>
  <div class="main-container">
    <Search @foundShow="displayShows"></Search>
    <div class="columns is-multiline">
      <div class="column is-one-quarter-desktop is-half-tablet" v-for="(show, index) in shows" :key="index">
        <ShowCard :show="show" />
      </div>
    </div>
  </div>
</template>

<script>
import Search from './Search';
import ShowCard from './ShowCard'
import * as showsData from '../../data.json';
export default {
  name: 'Main',
  components: {
    Search,
    ShowCard
  },
  data() {
    return {
      shows: []
    };
  },
  computed: {
    // shows() {
    //   return showsData.default.map(el => el.show);
    // }
  },
  methods: {
    displayShows(data) {
      this.shows = data;
      return this.shows;
    }
  }
};
</script>

<style lang="scss">
  .main-container {
    margin: 0 20px 0 20px;
  }
</style>
