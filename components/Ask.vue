<script setup lang="ts">
import { reactive } from 'vue'
const objs = [
    {
        "ask": "How do I install Pronext Calendar?",
        "ans": "To install Pronext Calendar, download the free app from your app store. Once installed, you can access and manage everything on your Pronext Calendar through the mobile app. You can also add chores and tasks to the list on the go."
    },
    {
        "ask": "What is the All-In-One Smart Family Calendar feature?",
        "ans": "The All-In-One Smart Family Calendar is a WiFi-connected digital calendar and planner touchscreen display that helps organize the whole family. Each family member can be assigned their own color and chores, making it easier to keep everyone informed."
    },
    {
        "ask": "How do I set up Pronext Calendar?",
        "ans": "Setting up Pronext Calendar is quick and easy. Simply plug it in, connect to Wi-Fi, and sync your calendars. All your events will automatically populate and sync. You can add events or chores directly on the device or use the free mobile app."
    },
    {
        "ask": "What types of calendars does Pronext Calendar sync with?",
        "ans": "Pronext Calendar is compatible with Google Calendar, iCloud Calendar, Outlook Calendar, Cozi, and Yahoo. You can sync all these calendars to keep your events and tasks in one place."
    },
    {
        "ask": "What is the HD Smart Display like?",
        "ans": "The HD Smart Display is a 15-inch touchscreen that can be mounted on the wall or displayed on its stand. This makes it a perfect daily planner for both home and office use."
    },
    {
        "ask": "Can I customize the Chore Chart?",
        "ans": "Yes, you can add, edit, and easily check off chores throughout the day using the interactive Chore Chart. This feature encourages healthy habits and autonomy by transforming routine tasks into rewarding accomplishments."
    },
    {
        "ask": "Where can I download the Pronext Calendar app?",
        "ans": "You can download the Pronext California app for free from your app store, such as the Apple App Store or Google Play Store. Once downloaded, you can start using it to stay organized from anywhere."
    }
]

const list = reactive(objs.map(i => ({ ...i, show: false })))
console.log("list", list)
// list[0].show = true

</script>

<template>
    <article>
        <h1 class="text-5xl mb-8">Frequently Asked Questions</h1>
        <section class="py-4">
            <div class="flex flex-col gap-[16px] tablet:gap-[20px] text-[16px] tablet:text-[24px]">
                <details v-for="(item, index) in list" :key="index" class="flex flex-col gap-2 tablet:gap-4 transition"
                    :class="item.show ? 'border-l-4 border-orange-600 pl-1' : ''">
                    <summary @click="item.show = !item.show"
                        class="flex flex-row rounded-md p-2 select-none transition items-center justify-between cursor-pointer hover:bg-slate-200 active:bg-slate-300">
                        <div class="font-[500] flex-1">
                            <p>{{ item.ask }}</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="transition-transform duration-300 w-4 h-4 rotate-0"
                            :class="{ 'rotate-180': !item.show }" viewBox="0 0 16 16" fill="none">
                            <path d="M14.5 11L8.20968 5L1.5 11" stroke="#808080"></path>
                        </svg>
                    </summary>
                    <div v-show="item.show" class="font-[300] px-2 whitespace-pre-wrap text-slate-600 style_faq__GR5Yu">
                        <p>{{ item.ans }}</p>
                    </div>
                </details>
            </div>
        </section>
    </article>
</template>