<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-1by1">
        <img v-if="show.image && show.image.medium" :src="show.image.medium" alt="Placeholder image">
        <img v-else src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{show.name}}</p>
        </div>
      </div>

      <div class="content">
        {{show.summary | trimDescription}}
      </div>
      <div class="level">
        <div class="level-left">   
          <div class="tags">
            <span class="tag" v-for="(genre, index) in show.genres" :key="index">{{genre}}</span>
          </div>
        </div>
        <div v-if="show.rating.average" class="level-right ratings">
          <star-icon class="rating-icon"></star-icon>
          <span>{{show.rating.average}}</span>
        </div>
      </div>
    </div>
    <footer class="card-footer">
       <a href="#" class="card-footer-item">Follow</a>
       <router-link :to="{name:'Show', params: {id:show.id}}" class="card-footer-item">More</router-link>
    </footer>
  </div>
</template>

<script>
import { sanitize } from '../helpers';
import { StarIcon } from 'vue-feather-icons'
export default {
  name:'ShowCard',
  props: ['show'],
  components: {
    StarIcon
  },
  data() {
    return {
      defaultImgPlaceholder: 'https://bulma.io/images/placeholders/1280x960.png'
    }
  },
  methods: {

  },
  filters: {
    trimDescription(value) {
      if (!value) return '';
      let sanitized = sanitize(value)
      return `${sanitized.slice(0,100)}...`
    }
  }
}
</script>

<style lang="scss">
.ratings {
  span {
    margin-left: 5px;
  }
}
</style>



