<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/heroes/hero">Hero</router-link>
    <router-link to="/heroes/hero-2">Hero 2</router-link>
    <router-link to="/foo">Foo</router-link>
  </nav>
</template>

<script>
  export default {
    'name': 'navbar'
  }
</script>
