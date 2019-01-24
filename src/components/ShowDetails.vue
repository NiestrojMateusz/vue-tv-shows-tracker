<template>
  <div>
    <div class="columns">
      <div class="column is-half">
        <div class="section">
          <h1 class="title has-text-centered">{{show.name}}</h1>
          <nav class="panel">
            <p class="panel-tabs">
              <a v-for="season in seasons" :key="season.id" @click="activeSeason = season.number">Season {{season.number}}</a>
            </p>
            <div @click="activeEpisode = episode" class="level" v-for="episode in activeSeasonEpisodes" :key="episode.id">
              <div class="level-left">
                  {{episode.number}}. {{episode.name}}
              </div>
              <div class="level-right">
                <input type="checkbox" id="episode.id" v-model="episode.watched" @change="saveEpisodeDetails($event, episode)">
              </div>
            </div>
          </nav>
         </div>
      </div>
      <div class="column">
        <div class="section">
          <figure class="image is-4by3">
            <img :src="episodePreview">
          </figure>
          <div v-if="activeEpisode" class="content">
            <h3>{{show.name}}</h3>
            <h4>Epiosode {{activeEpisode.number}}: {{activeEpisode.name}}</h4>
            <p>{{ activeEpisode.summary | sanitizeDescription }}</p>
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import { sanitize } from '../helpers';
import * as showData from '../../showData.json';
export default {
  name: 'ShowDetails',
  data() {
    return {
      show: [],
      episodes: [],
      seasons: [],
      cast: [],
      activeSeason: 1,
      activeEpisode: 0,
    }
  },
  computed: {
    activeSeasonEpisodes() {
      return this.episodes.filter(ep => ep.season === this.activeSeason);
    },
    episodePreview() {
      if (this.activeEpisode.image && (this.activeEpisode.image.medium)) {
        return this.activeEpisode.image.medium
      } else if (this.show.image && this.show.image.medium) {
        return this.show.image.medium;
      }
    }
  },
  methods: {
    saveEpisodeDetails(ev, data) {
      console.log(ev)
      console.log(data)
    }
  },
  filters: {
    sanitizeDescription(value) {
      if (!value) return '';
      let sanitized = sanitize(value)
      return sanitized;
    }
  },
  created() {
    const embedded = showData.default[0]._embedded
    this.show = showData.default[0];
    this.episodes = embedded.episodes;
    this.seasons = embedded.seasons;
    this.cast = embedded.cast;
  }
}
</script>

