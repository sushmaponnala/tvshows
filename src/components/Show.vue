<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="image" class="card-img" :alt="name" />
      </div>
      <div class="col-md-8 align-middle">
        <div class="card-body">
          <div class="text-truncate">
            <b-link class="text-primary" :to="'/showdetail/'+id">{{name}}</b-link>
          </div>
          <small class="card-text">
            Rating:
            <span class="text-muted">{{rating}}</span>
            <br />Genre(s):
            <span class="text-muted">{{genres.join(", ")}}</span>
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Show",
  props: {
    id: Number,
    name: String,
    image: String,
    rating: Number,
    genres: Array
  }
};
</script>

<style scoped>
.card {
  max-width: 294px;
}
.card-body {
  padding: 0.75rem;
}
</style>
