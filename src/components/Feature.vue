<template>
  <section>
    <header class="text-5xl mb-8">Our app's powerful features</header>
    <article class="py-4">
      <ul class="grid grid-cols-2 gap-10">
        <li class="libox">
          <h3 class="font-bold">Easy Event Creation and Management</h3>
          <p>Create and manage events effortlessly with our intuitive interface. Add details such as date,
            time,
            location,
            and notes, and easily edit or delete events as needed.</p>
        </li>
        <li class="libox">
          <h3 class="font-bold">Customizable Reminders</h3>
          <p>Never miss an important event again! Set personalized reminders for your events, choosing how far
            in
            advance
            you want to be notified. You can opt for push notifications, emails, or both.</p>
        </li>
        <li class="libox">
          <h3 class="font-bold">Sync with Your Existing Calendars</h3>
          <p>Seamlessly integrate with your existing calendars, such as Google Calendar, Outlook, and Apple
            Calendar.
            Keep
            all your events in one place and ensure you’re always up to date.</p>
        </li>
        <li class="libox">
          <h3 class="font-bold">User-Friendly Interface</h3>
          <p>Our app is designed with user experience in mind. Navigate through your calendar with ease, and
            enjoy a
            clean, modern layout that makes scheduling a breeze.</p>
        </li>
        <li class="libox">
          <h3 class="font-bold">Recurring Events</h3>
          <p>Set up recurring events for meetings, birthdays, or any regular activities. Choose from daily,
            weekly,
            monthly, or custom intervals to automate your scheduling.</p>
        </li>
        <li class="libox">
          <h3 class="font-bold">Collaboration Features</h3>
          <p>Share your calendar with friends, family, or colleagues. Collaborate on events, send invites, and
            keep
            everyone in the loop with ease.</p>
        </li>
        <li class="libox">
          <h3 class="font-bold">Color-Coded Events</h3>
          <p>Organize your events visually by assigning different colors to different types of events. Quickly
            identify
            work, personal, and social events at a glance.</p>
        </li>
      </ul>
    </article>
  </section>
</template>

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