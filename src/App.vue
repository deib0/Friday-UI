<template>
  <nav>
    <router-link to="/home">Go to Home</router-link>
    |
    <router-link to="/doc">Go toe Doc</router-link>
  </nav>
  <hr>
  <router-view />
</template>

<script>

export default {
  name: 'App'
}
</script>
