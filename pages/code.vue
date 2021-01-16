<template>
  <section class="section">
    <div class="columns is-multiline">
      <div class="column is-mobile is-half-tablet is-one-third-desktop" v-for="repo in originalRepos" :key="repo.id">
        <div class="box">
          <a :href="repo.html_url" class="item-title">{{repo.name}}</a>
          <div class="item-body">{{repo.description}}</div>
          <span class="tag" :class="repo.language" v-if="repo.language">{{repo.language}}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const axios = require('axios');

export default {
  head: {
    title: 'Masaki Enjo - Code'
  },
  async asyncData () {
    const { data: repos } = await axios.get('/api/code');
    return { repos };
  },
  computed: {
    originalRepos: function() {
      return this.repos.filter(repo => !repo.fork);
    }
  }
};
</script>
