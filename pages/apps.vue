<template>
  <section class="section">
    <div class="columns is-multiline">
      <div class="column is-mobile is-half-tablet is-one-third-desktop">
        <div class="box">
          <img src="~/assets/images/redmine_notifier.png" alt="Redmine Notifier">
          <a href="https://github.com/emsk/redmine-notifier" class="name">Redmine Notifier</a>
          <div class="description">Updated issues checker for Redmine</div>
          <span class="tag">macOS</span>
          <span class="tag">Windows</span>
        </div>
      </div>

      <div class="column is-mobile is-half-tablet is-one-third-desktop">
        <div class="box">
          <img src="~/assets/images/redmine_now.png" alt="Redmine Now">
          <a href="https://github.com/emsk/redmine-now" class="name">Redmine Now</a>
          <div class="description">A desktop app to know what's happening now on your Redmine</div>
          <span class="tag">macOS</span>
          <span class="tag">Windows</span>
        </div>
      </div>

      <div class="column is-mobile is-half-tablet is-one-third-desktop">
        <div class="box">
          <img src="~/assets/images/ambient_noren.jpg" alt="Ambient Noren">
          <a href="https://smallhackcafe.tumblr.com/ambient-noren" class="name">Ambient Noren</a>
          <div class="description">A device to hear the wind sing</div>
          <span class="tag">macOS</span>
          <span class="tag">SuperCollider</span>
          <span class="tag">Arduino</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head: {
    title: 'Masaki Enjo - Apps'
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
