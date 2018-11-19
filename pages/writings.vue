<template>
  <section class="section">
    <div class="columns is-multiline">
      <div class="column is-full" v-for="item in items" :key="item.id">
        <div class="box">
          <a :href="item.url" class="item-title">{{item.title}}</a>
          <div class="item-updated-at">{{item.updated_at}}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const axios = require('axios');

export default {
  head: {
    title: 'Masaki Enjo - Writings'
  },
  async asyncData () {
    const { data: items } = await axios.get(`${process.env.SERVER_URL}/api/writings`);
    return { items };
  }
};
</script>

<style>
.item-title {
  font-weight: bold;
  letter-spacing: 1px;
}

.item-updated-at {
  font-size: 0.75rem;
  letter-spacing: 1px;
}
</style>
