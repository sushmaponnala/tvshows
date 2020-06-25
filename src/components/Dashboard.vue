<template>
  <div class="dashboard">
    <b-container fluid class="shows-row" v-for="(shows,genre) in showsByGenres" :key="genre">
      <b-row cols="2">
        <b-col>
          <h4 class="text-primary">Popular {{genre}} Shows</h4>
        </b-col>
        <b-col class="text-right">
          <b-link href="#" @click="toggleMore(genre)">Show {{moreGenres[genre] ? "less" : "more"}}..</b-link>
        </b-col>
      </b-row>
      <b-row>
        <b-col v-for="(show, index) in shows" :key="show.id" md="auto">
          <div v-if="index <= 5 || moreGenres[genre]">
            <Show :name="show.name" :id="show.id" :image="show.image.medium" :rating="show.rating.average" :genres="show.genres" />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Show from "./Show.vue";
import axios from "axios";
import orderBy from "lodash/orderBy";

const getData = (cb) => {
  // Function to group shows by genre
  const groupByGenre = (data) => {
    // Create object by genre as key and shows as array of objects
    const showsByGenres = {};
    data.forEach(show => {
      // Loop genres of each show
      show.genres.forEach(genre => {
        // If genre doesn't exist in showsByGenres object
        if (!Object.prototype.hasOwnProperty.call(showsByGenres, genre)) {
          // Create genre property and assign empty array
          showsByGenres[genre] = [];
        }
        // Push show the genre object
        showsByGenres[genre].push(show);
      });
    });
    return showsByGenres;
  };


  // Function to sort shows by rating
  const sortByRating = (data) => {
    const sortByGenre = {};
    for (const key in data) {
      const genereData = data[key];
      sortByGenre[key] = orderBy(genereData, [(show)=> {
        return show.rating.average || 0;
      }], ['desc']);
    }
    return sortByGenre;
  };

  axios
    .get("https://api.tvmaze.com/shows")
    .then(({ data }) => {
      const showsByGenres = groupByGenre(data);
      cb(null, sortByRating(showsByGenres));
    })
    .catch(e => {
      cb(e);
    });
};

export default {
  name: "Dashboard",
  components: {
    Show
  },
  data() {
    return {
      showsByGenres: [],
      moreGenres: {}
    };
  },
  methods: {
    toggleMore: function (genre) {
      this.moreGenres[genre] = !this.moreGenres[genre];
    }
  },
  created() {
    getData((err, response) => {
      if(!err){
        this.showsByGenres = response;
        Object.keys(response).forEach(genre => {
          this.$set(this.moreGenres, genre, false);
        });
      }
    });
  }
};
</script>

<style scoped>
.dashboard {
  padding: 25px 0;
}
.shows-row {
  padding: 10px 40px;
}
</style>
