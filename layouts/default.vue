<template>
  <div>
    <app-header></app-header>
    <Nuxt />
    <footer class="footer">
      <p class="footer__text">
        <span>&larr;</span>
        Footer
        <span>&rarr;</span>
      </p>
      <h2 class="footer__heading heading--sub">glad you came this far</h2>
      <div class="placeholder" id="contact"></div>
      <div class="row">
        <div class="col-2">
          <div class="section">
            <h3 class="heading--sub">technologies i prefer to work with</h3>
            <ul class="section__list">
              <li>VUE JS</li>
              <li>Nuxt JS</li>
              <li>Sass</li>
            </ul>
          </div>
        </div>
        <div class="col-2">
        </div>
        <div class="col-2">
          <div class="section">
            <h3 class="heading--sub">
              Would really love to hear from you!
            </h3>
            <ul class="section__list">
              <li>jaycewap@gmail.com</li>
              <li>+234 (0)708 6555 753</li>
              <li><a href="//twitter.com/booluw" title="Booluw on Twitter">
                Twitter
                <span>&rarr;</span>
              </a></li>
              <li><a href="//gitbub.com/booluw" title="Booluw on GitHub">
                GitHub
                <span>&rarr;</span>
              </a></li>
              <li><a href="//m.me/booluw" title="Booluw on Messager">
                Messager
                <span>&rarr;</span>
              </a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import AppHeaderVue from '~/components/AppHeader.vue'
export default {
  name: 'DefaultLayout',
  components: {
    'app-header': AppHeaderVue
  }
}
</script>