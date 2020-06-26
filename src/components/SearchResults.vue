<template>
  <div class="search">
    <b-container fluid class="shows-row" v-if="!loading">
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
        <b-col>
          <h5 v-if="!Object.keys(details).length" class="text-danger">Sorry! There is no TV Show with "{{query}}" </h5>
        </b-col>
      </b-row>
    </b-container>
    <div v-if="loading" class="text-center">
      <b-spinner label="Spinning"></b-spinner>
    </div>
  </div>
</template>

<script>

import Show from "./Show.vue";
import axios from "axios";

const getData = (query, cb) => {
  axios
    .get(`http://api.tvmaze.com/search/shows?q=${query}`)
    .then(({ data }) => {
      cb(null, data);
    })
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
      details: {},
      loading: true
    };
  },
  beforeRouteUpdate (newVal) {
    getData(newVal.query.q, (err, data) => {
      if(!err){
        this.details = data;
        this.query = newVal.query.q;
      }
    });
  },
  created(){
    if(this.$route.query.q){
      this.loading = true;
      getData(this.$route.query.q, (err, data) => {
        if(!err){
          this.loading = false;
          this.details = data;
          this.query = this.$route.query.q;
        }
      });
    }
  // },
  // watch: {
  //   $route({query}) {
  //     this.loading = true;
  //     getData(query.q, (err, data) => {
  //       if(!err){
  //         this.loading = false;
  //         this.details = data;
  //         this.query = query.q;
  //       }
  //     });
  //   }
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