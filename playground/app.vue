<template>
  <div>
    <span id="element" />
    <div id="typed-strings">
      <p>Typed.js is a <strong>JavaScript</strong> library.</p>
      <p>It <em>types</em> out sentences.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const typed = useTypedJs()
onMounted(() => {
  typed('#element', {
    stringsElement: '#typed-strings',
    strings: ['Hello', 'World'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  })
})
</script>
