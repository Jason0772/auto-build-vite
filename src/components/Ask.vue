<script setup lang="ts">
import { reactive } from 'vue'
const objs = [

  {
    "ask": "Who is Dola?",
    "ans": "Dola simplifies the process of staying organized by seamlessly integrating with users’ messaging apps. Whether it's text, images, or voice messages, Dola effortlessly transforms users’ communications into actionable plans and calendar alerts."
  },
  {
    "ask": "Where can I use Dola?",
    "ans": "Dola is available on iMessage, WhatsApp, Telegram and Line. 📱"
  },
  {
    "ask": "Is Dola free?",
    "ans": "Yes, Dola is currently free. 🆓"
  },
  {
    "ask": "I don't know how to use it. Where can I get help?",
    "ans": "You can always chat with Dola to get help. 💬 By sending \"settings\" to Dola, you can customize your personal settings. For more, feel free to join our Discord and let our engineers help you! 💬👩🏽‍💻👨🏾‍💻🧑🏼‍💻"
  },
  {
    "ask": "Any upcoming features?",
    "ans": "It's kind of a secret 🤣, but you can trust that we are working very hard to take things to the next level! Stay tuned!"
  },
  {
    "ask": "How can I contact the team?",
    "ans": "You can reach us via our email contact@heydola.com, Discord, Twitter and Facebook. Your feedback and suggestions are welcome!"
  }

]

const list = reactive(objs.map(i => ({ ...i, show: false })))
console.log("list", list)
list[0].show = true

</script>

<template>
  <div>
    <div class="text-5xl mb-8">Frequently Asked Questions</div>
    <div class="py-4">
      <div class="flex flex-col gap-[16px] tablet:gap-[20px] text-[16px] tablet:text-[24px]">
        <div class="flex flex-col gap-2 tablet:gap-4 transition"
          :class="item.show ? 'border-l-4 border-orange-600 pl-1' : ''"
          style="opacity: 1; transform: none; will-change: auto;" v-for="(item, index) in list" :key="index">
          <div @click="item.show = !item.show"
            class="flex flex-row rounded-md p-2 select-none transition items-center justify-between cursor-pointer hover:bg-slate-200 active:bg-slate-300">
            <div class="font-[500] flex-1">
              <p>{{ item.ask }}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="transition-transform duration-300 w-4 h-4 rotate-0"
              :class="{ 'rotate-180': !item.show }" viewBox="0 0 16 16" fill="none">
              <path d="M14.5 11L8.20968 5L1.5 11" stroke="#808080"></path>
            </svg>
          </div>
          <div v-show="item.show" class="font-[300] px-2 whitespace-pre-wrap text-slate-600 style_faq__GR5Yu">
            <p>{{ item.ans }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
