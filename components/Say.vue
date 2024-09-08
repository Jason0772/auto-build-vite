<template>
    <section>
      <header class="text-5xl mb-8">What others are saying</header>
      <article class="py-4">
        <div
          class="snap-x scroll-px-[var(--page-margin)] px-[var(--page-margin)] overscroll-x-contain snap-mandatory scrollbar-hide overflow-x-auto flex flex-row gap-6 w-full">
          <blockquote class="cursor-default snap-start flex-shrink-0" v-for="(comment, index) in comments" :key="index">
            <div
              class="flex bg-white h-full group rounded-lg hover:bg-slate-50 flex-col pb-10 gap-4 tablet:gap-6 tablet:p-8 p-6">
              <div class="flex flex-row items-center gap-4 desc-text">
                <div class="h-8 rounded-md overflow-hidden bg-slate-50">
                  <img :src="comment.avatar" :alt="comment.source" class="h-8 max-w-16 align-middle object-contain" />
                </div>
                <span class="desc-text font-bold">{{ comment.source }}</span>
              </div>
              <div dir="ltr"
                class="comment-text transition-transform font-[500] w-[274px] whitespace-pre-wrap flex-1 overflow-auto text-[#909090]">
                {{ comment.text }}
              </div>
            </div>
          </blockquote>
        </div>
      </article>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const comments = ref([
    {
      url: 'https://www.theverge.com/24102242/likewise-movie-recommendations-apple-car-proton-mail-evernote-installer#:~:text=Dola',
      source: 'The Verge',
      avatar: 'https://avatars.githubusercontent.com/u/828081?s=40&v=4',
      text: 'Pronext Calendar has really changed my life! This smart family calendar allows me and my family to stay informed about each other\'s schedules, and I no longer have to worry about missing any important events.'
    },
    {
      url: 'https://www.instagram.com/stufflistings/reel/C6tKW5EyWIx/',
      source: 'stufflistings',
      avatar: 'https://avatars.githubusercontent.com/u/15189438?s=40&v=4',
      text: "I've been looking for a tool that can integrate various calendar apps, and Pronext Calendar perfectly meets my needs. Its quick setup and powerful synchronization features make it a must-have."
    },
    {
      url: 'https://twitter.com/NasNL/status/1773025970955395095',
      source: 'Nas',
      avatar: 'https://avatars.githubusercontent.com/u/2152214?s=40&v=4',
      text: 'This is definitely one of the best family calendar apps I\'ve ever used! The 15-inch touch screen makes it easy to view and edit schedules, and it also looks very stylish.'
    },
    {
      url: 'https://cards.producthunt.com/cards/reviews/749351',
      source: 'Brett Belau',
      avatar: 'https://avatars.githubusercontent.com/u/155129598?s=40&v=4',
      text: 'The chore chart feature in Pronext Calendar is super practical! Now, I can easily track and manage all the household chores, and it even motivates the kids to get involved.'
    },
    {
      url: 'https://cards.producthunt.com/cards/reviews/744228',
      source: 'Victor Zhang',
      avatar: 'https://avatars.githubusercontent.com/u/163555483?s=40&v=4',
      text: 'Since I started using Pronext Calendar, my life has become more organized. This app is not only user-friendly but also powerful, truly realizing the vision of a smart home lifestyle.'
    },
    {
      url: 'https://cards.producthunt.com/cards/reviews/752501',
      source: 'Peter Griscom',
      avatar: 'https://avatars.githubusercontent.com/u/97419930?s=40&v=4',
      text: 'One of the most impressive features of Pronext Calendar is its seamless integration with various calendar apps. Being able to sync my Google Calendar, iCloud Calendar, and Outlook Calendar all into one place has saved me so much time and effort. No longer do I have to manually update events or worry about missing important appointments.'
    },
    {
      url: 'https://www.instagram.com/prathapgtech/reel/C3_8YMfPFdw/',
      source: 'prathapgtech',
      avatar: 'https://avatars.githubusercontent.com/u/130373553?s=40&v=4',
      text: 'Pronext Calendar has excellent compatibility and can seamlessly synchronize with my Google Calendar, iCloud Calendar, and other popular calendar apps. This greatly improves my work efficiency.'
    },
    {
      url: 'https://www.fastcompany.com/91072265/ai-calendar-assistant-dola',
      source: 'FastCompany',
      avatar: 'https://avatars.githubusercontent.com/u/165895769?s=40&v=4',
      text: 'This app has really made my family life more harmonious. By assigning colors and chores to each family member, we can better understand each other\'s needs and plans.'
    }
  ]);
  </script>