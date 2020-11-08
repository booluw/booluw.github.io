<template>
  <main>
  <app-jumbotron />
  <section class="section">
    <p class="paragraph paragraph--w-80">
      I am a website developer and consultant based in Nigeria.
      Through the years I have worked on side and freelanced projects that are user friendily,
      fast and mobile responsible.
      <br /><br />
      My goal is to add value to your organisation's overall Internet performance and join your team to build
      web products that will drive the force to achieve your sale goals.
    </p>
  </section>
  <div class="u-placeholder"></div>
  <section class="section" id="projects">
    <h3 class="heading--sub">Brands I've worked with</h3>
    <div class="section__slider">
      <img src="/img/DIATHEKE-Empire.png" alt="Diatheke Empire Logo" />
      <img src="/img/CRYPTOWISE.jpg" alt="Cryptowise Logo" />
    </div>
  </section>
  <div class="u-placeholder"></div>
  <section class="section">
    <h3 class="heading--sub">Projects I've worked on</h3>
    <div class="section__slider">
      <a href="//diathekeempire.com" target="_blank" rel="noreferral" class="card">
        <img src="/img/DIATHEKE-Web.png" class="card__img" alt="A screenshot of DiathekeEmpire.com" />
        <div class="card__header">
          <span class="card__tag">Nuxt JS</span>
          <span class="card__tag">Static</span>
          <span class="card__tag">Cooperate web</span>
        </div>
        <h3 class="card__heading">Diatheke Empire</h3>
        <p class="card__paragraph">
          Created pages that handles the landing page, about, and investing in the company. I was also responsible for the hosting of the website on Google's Firebase platform.
        </p>
      </a>
      <a href="//diathekeempire.com" target="_blank" rel="noreferral" class="card">
        <img src="/img/CRYPTOWISE-Web.png" class="card__img" alt="A screenshot of cryptowise.com.ng" />
        <div class="card__header">
          <span class="card__tag">VUE JS</span>
          <span class="card__tag">Web App</span>
          <span class="card__tag">Financial App</span>
        </div>
        <h3 class="card__heading">CryptoWise</h3>
        <p class="card__paragraph">
          Worked on the development and deployment of Cryptowise.com.ng. Was responsible for the whole functionality of the web app, as well as integrating it with a payment gateway.
        </p>
      </a>
      <a href="//ike-pro.tk" target="_blank" rel="noreferral" class="card">
        <img src="/img/HikePro-Web.png" class="card__img" alt="A screenshot of hike-pro.tk" />
        <div class="card__header">
          <span class="card__tag">VUE JS</span>
          <span class="card__tag">Landing Page</span>
        </div>
        <h3 class="card__heading">HikePro</h3>
        <p class="card__paragraph">
          Created the Progressive Web App as a volunteer for a hiking group in my area. Features a blog and was hosted and powered by Firebase.
        </p>
      </a>
      <a href="//getchange-demo.firebaseapp.com/dashboard" target="_blank" rel="noreferral" class="card">
        <img src="/img/GETCHANGE-Web.png" class="card__img" alt="A screenshot of Getchange" />
        <div class="card__header">
          <span class="card__tag">VUE JS</span>
          <span class="card__tag">Dashboard</span>
        </div>
        <h3 class="card__heading">Get Change Demo</h3>
        <p class="card__paragraph">
          Created a PWA and SPA for an interview for a Junior VUE JS developer at Emergent Labs. Built accordingly and pixel perfect to a Figma design and hosted on Firebase. Pages includes: Login In form/page and Dashboard.
        </p>
      </a>
    </div>
  </section>
  </main>
</template>

<script>
import AppJumbotronVue from '~/components/AppJumbotron.vue'

export default {
  name: 'Index',
  components: {
    'app-jumbotron': AppJumbotronVue
  },
  head() {
    return {
      title: 'Boluwatife Johnson, FrondEnd developer and CS student',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'I build interactive, user friendly and mobile responsive websites.'
        },
        {
          name: 'keyword',
          content: 'Web development, Junior web developer, VUE JS developer, TechNG, Boluwatife Johnson'
        },
        {
          property: 'og:title',
          content: 'Boluwatife Johnson, VUE JS developer'
        },
        {
          property: 'og:description',
          content: 'Boluwatife Johnson is a VUE JS developer that builds fast, responsive and user friendly websites using VUE JS, Sass, Nuxt JS'
        },
        {
          property: 'og:url',
          content: 'http://booluw.me'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          property: 'og:site_name',
          content: 'Booluw_me'
        },
        {
          property: 'twitter:site',
          content: '@booluw'
        }
      ]
    }
  }
}
</script>