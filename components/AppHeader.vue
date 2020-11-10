<template>
  <header class="header" v-scroll="handleScroll" :class="{'header--fixed': scroll > 20}">
    <input type="checkbox" id="menu-toggler" ref="toggle"/>
    <div class="header__logo">booluw.me</div>
    <div class="hamburger-container">
      Menu
      <label for="menu-toggler" class="header__hamburger">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </label>
    </div>
    <nav class="header__nav">
      <div class="nav-header">
        <p class="nav-header__text">
          <span>&larr;</span> Menu <span>&rarr;</span>
        </p>
        <div class="hamburger-container">
          Close
          <label for="menu-toggler" class="header__hamburger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </label>
        </div>
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
</template>

<script>
export default {
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

<style>

</style>