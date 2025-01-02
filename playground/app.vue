<template>
  <div>
    <span id="element" />
  </div>
</template>

<script setup lang="ts">
const typed = useTypedJs()
onMounted(() => {
  typed('#element', {
    strings: ['Hello', 'World'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  })
})
</script>
