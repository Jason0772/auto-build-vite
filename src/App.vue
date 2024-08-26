<script setup lang="ts">
import Header from './components/Header.vue'
import Info from './components/Info.vue'
import Feature from './components/Feature.vue'

import Say from './components/Say.vue'
import Ask from './components/Ask.vue'
import Code from './components/Code.vue'
import Footer from './components/Footer.vue'


</script>

<template>
  <div>
    <div class="bg-[#fff] px-20 py-8 shadow-md">
      <Header class="max-w-[1200px] mx-auto" />
    </div>
    <div class="bg-[#f0f0f0] px-20 py-24">
      <Info class="max-w-[1200px] mx-auto" />
    </div>
    <div class="bg-[#f0f0f0] px-20 py-20">
      <Feature class="max-w-[1200px] mx-auto" />
    </div>
    <div class="bg-[#f0f0f0] px-20 py-24">
      <Code class="max-w-[1200px] mx-auto" />
    </div>
    <div class="bg-[#f0f0f0] px-20 py-10">
      <Say class="max-w-[1200px] mx-auto" />
    </div>
    <div class="bg-[#f0f0f0] px-20 py-10">
      <Ask class="max-w-[1200px] mx-auto" />
    </div>
    <div class="bg-[#f0f0f0] px-20 py-10">
      <Footer class="max-w-[1200px] mx-auto" />
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
