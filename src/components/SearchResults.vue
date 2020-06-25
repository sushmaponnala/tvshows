<template>
  <div class="search">
    <b-container fluid class="shows-row">
      <b-row cols="1">
        <b-col>
          <h4 class="text-primary">Search results for: {{query}}</h4>
        </b-col>
      </b-row>
      <b-row>
        <!-- eslint-disable-next-line vue/no-use-v-if-with-v-for -->
        <b-col v-for="{ show } in details" :key="show.id" md="auto" v-if="show.image && show.image.medium">
          <Show :name="show.name" :id="show.id" :image="show.image.medium" :rating="show.rating.average" :genres="show.genres" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import Show from "./Show.vue";
import axios from "axios";

const getData = (query, cb) => {
  axios
    .get(`http://api.tvmaze.com/search/shows?q=${query}`)
    .then(response => cb(null, response))
    .catch(e => {
      cb(e);
    });
};

export default {
  name: "SearchResults",
  components: {
    Show
  },
  data() {
    return {
      query: "",
      details: {}
    };
  },
  created() {
  },
  watch: {
    '$route.query.q': {
        immediate: true,
        handler(newVal) {
            this.query = newVal;
            getData(newVal, (err, response) => {
              this.details = response.data;
            });
        }
    }
  }
};
</script>

<style scoped>
.search {
  padding: 25px 0;
}
.shows-row {
  padding: 10px 40px;
}
</style>