<template>
  <section class="jumbotron">
  <vue-particles color="#006eb3" shapeType="star" :particleSize="5" :particleOpacity="0.3" :particlesNumber="50"></vue-particles>
    <div class="row row--align-center">
      <div class="col-1 desktop">
        <!--- //Image not yet ready -->
        <img src="~assets/img/booluw.png" class="jumbotron__img" alt="Image of Boluwatife Johnson" />
      </div>
      <div class="col-4 u-mt--desktop-big">
        <div class="jumbotron__text">
          <h3 class="jumbotron__heading--sub">Howdy, I'm</h3>
          <h1 class="jumbotron__heading--main">
            Boluwatife Johnson
          </h1>
          <p class="paragraph">
            FrontEnd web developer and CS student. Currently available for remote jobs.
          </p>
          <a href="https://docs.google.com/document/d/1QwcjFuw6chztKCYIqZjjGfrNDJVNcfEsEfi9V0eySUM/edit?usp=sharing" class="btn btn--link btn--primary">
            My Resume
          </a>
          <a href="mailto:jaycewap@gmail.com" class="btn btn--link btn--justify-between jumbotron__btn">
            Hire me
            <span>&rarr;</span>
          </a>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>