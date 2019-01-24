<template>
  <div class=".container">
    <section class="section has-text-centered">
      <input
        class="input is-rounded"
        type="text"
        placeholder="Search tv show"
        v-model="searchedText"
      />
      <a @click="search" class="button is-primary is-rounded">Search</a>
    </section>
  </div>
</template>

<script>
import TvShowsService from '@/services/TvShowsService';

export default {
  name: "Search",
  data() {
    return {
      searchedText: ""
    };
  },
  methods: {
    async search() {
      try {
        let response = await TvShowsService.getShows(this.searchedText);
        let shows = response.data.map(el => el.show);
        this.$emit('foundShow', shows);
      } catch (err) {
        console.log('Something went wrong');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.input {
  max-width: 50%;
}
.button {
  margin-left: 20px;
}
</style>
