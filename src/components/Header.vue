<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <router-link class="navbar-brand" to="/">TV Shows</router-link>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <router-link class="nav-link" to="/">Home</router-link>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-form v-on:submit.prevent="onSubmit">
                        <b-form-input type="search" size="sm" class="mr-sm-2" v-model="query" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Go</b-button>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return {
        query: ""
    }
  },
  methods: {
      onSubmit() {
          if(this.query){
            this.$router.push({ path: `/search?q=${this.query}` });
            this.query = ""; // reset search field
          }
      }
  }
}
</script>