<template>
  <div>
    <header class="header" v-scroll="handleScroll" :class="{'header--fixed': scroll > 20}">
      <input type="checkbox" id="menu-toggler" ref="toggle"/>
      <div class="header__logo">booluw.me</div>
      <label for="menu-toggler" class="header__hamburger">
        <div class="line"></div>
        <div class="line"></div>
      </label>
      <nav class="header__nav">
        <div class="nav-header">
          <p class="nav-header__text">
            <span>&larr;</span> Menu <span>&rarr;</span>
          </p>
          <label for="menu-toggler" class="header__hamburger">
            <div class="line"></div>
            <div class="line"></div>
          </label>
        </div>
        <ul class="nav">
          <li>
            <a href="#projects" class="nav__link">
              Projects <span>&rarr;</span>
            </a>
          </li>
          <li>
            <a href="#contact" class="nav__link">
              Contact <span>&rarr;</span>
            </a>
          </li>
          <div class="section">
            <h3 class="heading--sub">technologies i prefer to work with</h3>
            <ul class="section__list">
              <li>VUE JS</li>
              <li>Nuxt JS</li>
              <li>Sass</li>
            </ul>
          </div>
        </ul>
      </nav>
    </header>
    <Nuxt />
    <footer class="footer">
      <p class="footer__text">
        <span>&larr;</span>
        Footer
        <span>&rarr;</span>
      </p>
      <h2 class="footer__heading heading--sub">end of the page. Am glad you came this far</h2>
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
          <p class="paragraph">
            Would really love to hear from you!
          </p>
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
            <li><a href="//messanger.me/booluw" title="Booluw on Messager">
              Messager
              <span>&rarr;</span>
            </a></li>
          </ul>
        </div>
        <div class="col-2"></div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      scroll: 0
    }
  },
  methods: {
    handleScroll: function() {
      this.scroll = window.scrollY
    },
    handleURL: function() {
      this.$refs.toggle.checked = false
    }
  },
  watch: {
    '$route': function() {
      this.handleURL()
    }
  },
  directives: {
    scroll: {
      inserted: function (el, binding) {
        let f = function (evt) {
          if (binding.value(evt, el)) {
            window.addEventListener('scroll', f)
          }
        }
        window.addEventListener('scroll', f)
      }
    }
  }
}
</script>