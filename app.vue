<template>
  <div>
    <NuxtRouteAnnouncer />
    <RouterView />
    <!-- <NuxtWelcome /> -->
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Pronext Calendar - The Ultimate Smart Family Organizer',
  meta: [
    { name: 'description', content: "Pronext Calendar is a powerful tool that syncs and displays everyone's calendars in one place, encourages healthy habits with an interactive chore chart, and helps create to-do, grocery, and custom lists for family organization." },
    { name: 'keywords', content: "Pronext Calendar, smart family calendar, chore chart, to-do list, grocery list, calendar sync, family organization" }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>
