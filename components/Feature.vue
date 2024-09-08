<template>
    <section>
        <header class="text-5xl mb-8">Our app's powerful features</header>
        <article class="py-4">
            <ul class="grid grid-cols-2 gap-10">
                <li class="libox" v-for="item in list" :key="item.title">
                    <h3 class="font-bold">{{ item.title }}</h3>
                    <p>{{ item.description }}</p>
                </li>
            </ul>
        </article>
    </section>
</template>

<script setup>
import { ref } from 'vue'
const list = ref([
    {
        "title": "All-In-One Smart Family Calendar",
        "description": "Experience seamless organization with our WiFi-connected digital calendar and planner touchscreen display. Assign colors and chores to each family member for a coordinated and efficient family schedule."
    },
    {
        "title": "Quick Set-Up",
        "description": "Easily set up your Pronext Calendar by plugging it in, connecting to Wi-Fi, and syncing your existing calendars. Automatically populate events and sync across devices for a hassle-free experience."
    },
    {
        "title": "Beautiful and Intuitive HD Smart Display",
        "description": "Enjoy a 15-inch touchscreen display that can be mounted on the wall or displayed on its stand. Perfect for both home and office use, providing a clear and convenient way to manage your daily tasks."
    },
    {
        "title": "Chore Chart",
        "description": "Stay on top of your household chores with our interactive Chore Chart. Add, edit, and check off tasks throughout the day, encouraging healthy habits and autonomy for all family members."
    },
    {
        "title": "Multi-Calendars Sync",
        "description": "Sync with popular calendar apps like Google Calendar, iCloud Calendar, Outlook Calendar, Cozi, and Yahoo. Keep all your events and tasks in one place for easy management and access."
    },
    {
        "title": "Mobile App Integration",
        "description": "Access and manage your Pronext Calendar from anywhere using our free mobile app. Add chores and tasks on the go, ensuring you stay organized no matter where you are."
    },
    {
        "title": "User-Friendly Interface",
        "description": "Our app features a user-friendly interface that makes it easy to navigate and use. Whether you're adding events, managing chores, or syncing calendars, everything is just a few taps away."
    }
])
</script>

<style scoped>
.libox {
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, .1); */
    border-radius: 8px;
    padding: 16px;
    list-style-type: none;
    counter-increment: li;
    position: relative;
    padding-left: 54px;
    overflow: hidden;
    background: #fc892b1e;
}

.libox:before {
    content: counter(li);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    font-size: 20px;
    border-radius: 0 0 30px 0;
    color: #fff;
    background: #ea580c;
    position: absolute;
    left: 0;
    top: 0;
}

.libox p {
    color: #666;
    margin-top: 12px;
    padding-bottom: 8px;
}
</style>