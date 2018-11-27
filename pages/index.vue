<template>
  <section class="hero is-fullheight has-text-centered">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <img src="~/assets/images/avatar.png" alt="emsk" class="avatar">
            <h1 class="title">Masaki Enjo</h1>
            <h2 class="subtitle">Software Engineer</h2>
            <div class="social">
              <a href="https://github.com/emsk">GitHub</a>
              <a href="https://qiita.com/emsk">Qiita</a>
              <a href="https://smallhackcafe.tumblr.com">Tumblr</a>
              <a href="https://rubygems.org/profiles/emsk">RubyGems</a>
              <a href="https://www.npmjs.com/~emsk">npm</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head: {
    title: 'Masaki Enjo'
  }
};
</script>

<style>
.hero.is-fullheight {
  min-height: calc(100vh - 5rem);
}

.avatar {
  border-radius: 50%;
  margin-bottom: 20px;
  overflow: hidden;
  width: 90px;
}

.title {
  color: #35495e;
  display: block;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 2px;
}

.subtitle {
  color: #526488;
  font-size: 0.75rem;
  font-weight: 300;
  letter-spacing: 1px;
}

.social {
  font-size: 0.75rem;
  letter-spacing: 1px;
}

.social a {
  margin: 0 .25rem;
}
</style>
