<template>
  <nav class='navigation' v-for='part in parts'>
    <p class='navigation__header'>
      <strong>{{ part.header }}</strong>
    </p>
    <p class='navigation__part'>
      {{ part.part1 }}
    </p>
    <p class='navigation__part'>
      {{ part.part2 }}
    </p>
    <p class='navigation__part'>
      {{ part.part3 }}
    </p>
  

  </nav>
</template>

<script>
export default {
  props: {
    parts: {
      type: Array,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>