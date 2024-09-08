<template>
    <div class="container mx-auto p-4">
      <p class="mt-4 text-red-500">[{{ msg }}]</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  const msg = ref('');
  msg.value = import.meta.env.VITE_APP_TIP
  </script>
  
  <style scoped>
  /* 你可以在这里添加自定义样式 */
  </style>
  