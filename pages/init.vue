<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Users List</h1>
      <button
        @click="initializeDatabase"
        class="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Initialize Database
      </button>
      <ul class="bg-white shadow-md rounded-lg">
        <li
          v-for="user in users"
          :key="user.id"
          class="flex justify-between items-center p-4 border-b"
        >
          <span>{{ user.name }}</span>
          <span>{{ user.email }}</span>
        </li>
      </ul>
      <p v-if="message" class="mt-4 text-green-500">{{ message }}</p>
      <p v-if="error" class="mt-4 text-red-500">{{ error }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const users = ref([]);
  const message = ref('');
  const error = ref('');
  
  // 获取用户列表
  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users');
      if (response.ok) {
        users.value = await response.json();
      } else {
        console.error('Failed to fetch users');
      }
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };
  
  // 初始化数据库
  const initializeDatabase = async () => {
    try {
      const response = await fetch('/api/init', { method: 'POST' });
      const data = await response.json();
      
      if (response.ok) {
        message.value = data.message;
        error.value = '';
        await fetchUsers(); // 重新获取用户列表
      } else {
        error.value = data.error;
        message.value = '';
      }
    } catch (err) {
      console.error('Error initializing database:', err);
      error.value = 'An error occurred while initializing the database.';
      message.value = '';
    }
  };
  
  // 在组件挂载时获取用户列表
  onMounted(fetchUsers);
  </script>
  
  <style scoped>
  /* 你可以在这里添加自定义样式 */
  </style>
  