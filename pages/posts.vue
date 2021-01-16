<template>
  <section class="section">
    <div class="columns is-multiline">
      <div class="column is-full" v-for="item in items" :key="item.id">
        <div class="box">
          <a :href="item.url" class="item-title">{{item.title}}</a>
          <div class="item-body">{{item.updated_at}}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const axios = require('axios');

export default {
  head: {
    title: 'Masaki Enjo - Posts'
  },
  async asyncData () {
    const { data: items } = await axios.get('/api/posts');
    return { items };
  }
};
</script>
