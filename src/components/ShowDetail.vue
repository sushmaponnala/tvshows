<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-col>
        <div class="card-body" v-if="details.image && details.image.medium">
          <b-card :img-src="details.image.medium" img-alt="Card image" img-left class="mb-3">
            <b-card-text>
              <h4>{{details.name}}</h4>
              <p v-html="details.summary"></p>
              <small>
                Rating:
                <span class="text-muted">{{details.rating.average}}</span>
                <br />Genre(s):
                <span class="text-muted">{{details.genres.join(", ")}}</span>
              </small>
            </b-card-text>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
const getData = (id, cb) => {
  axios
    .get(`https://api.tvmaze.com/shows/${id}`)
    .then(response => cb(null, response))
    .catch(e => {
      cb(e);
    });
};

export default {
  name: "ShowDetail",
  data() {
    return {
      details: {}
    };
  },
  created() {
    getData(this.$route.params.id, (err, response) => {
      this.details = response.data;
    });
  }
};
</script>
