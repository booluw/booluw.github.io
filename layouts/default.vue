<template>
  <div>
    <header class="header">
      <input type="checkbox" id="menu-toggler" />
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
        </ul>
      </nav>
    </header>
    <Nuxt />
  </div>
</template>