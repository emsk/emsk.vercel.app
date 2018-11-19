<template>
  <section class="section">
    <div class="columns is-multiline">
      <div class="column is-mobile is-half-tablet is-one-third-desktop" v-for="repo in originalRepos" :key="repo.id">
        <div class="box">
          <a :href="repo.html_url" class="name">{{repo.name}}</a>
          <div class="description">{{repo.description}}</div>
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
    const { data: repos } = await axios.get(`${process.env.SERVER_URL}/api/code`);
    return { repos };
  },
  computed: {
    originalRepos: function() {
      return this.repos.filter(repo => !repo.fork);
    }
  }
};
</script>

<style>
.name {
  font-weight: bold;
  letter-spacing: 1px;
}

.description {
  font-size: 0.75rem;
  letter-spacing: 1px;
  margin-bottom: 4px;
}

.tag {
  font-size: 0.75rem;
  letter-spacing: 1px;
}
</style>
