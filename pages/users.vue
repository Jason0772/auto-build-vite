<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">User Management</h1>
      
      <form @submit.prevent="handleSubmit" class="mb-4">
        <input v-model="userForm.name" type="text" placeholder="Name" class="border p-2 mr-2" required />
        <input v-model="userForm.email" type="email" placeholder="Email" class="border p-2 mr-2" required />
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          {{ isEditing ? 'Update User' : 'Add User' }}
        </button>
      </form>
  
      <ul class="bg-white shadow-md rounded-lg">
        <li
          v-for="user in users"
          :key="user.id"
          class="flex justify-between items-center p-4 border-b"
        >
          <span>{{ user.name }} - {{ user.email }}</span>
          <div>
            <button @click="editUser(user)" class="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-2">Edit</button>
            <button @click="deleteUser(user.id)" class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
          </div>
        </li>
      </ul>
  
      <p v-if="message" class="mt-4 text-green-500">{{ message }}</p>
      <p v-if="error" class="mt-4 text-red-500">{{ error }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const users = ref([]);
  const userForm = ref({ name: '', email: '' });
  const message = ref('');
  const error = ref('');
  const isEditing = ref(false);
  let editingUserId = null;
  
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
  
  // 添加或编辑用户
  const handleSubmit = async () => {
    try {
      const method = isEditing.value ? 'PUT' : 'POST';
      const response = await fetch('/api/users', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...userForm.value, id: editingUserId }),
      });
      const data = await response.json();
      
      if (response.ok) {
        message.value = isEditing.value ? 'User updated successfully' : 'User added successfully';
        error.value = '';
        userForm.value = { name: '', email: '' };
        isEditing.value = false;
        editingUserId = null;
        await fetchUsers(); // 重新获取用户列表
      } else {
        error.value = data.error;
        message.value = '';
      }
    } catch (err) {
      console.error('Error saving user:', err);
      error.value = 'An error occurred while saving the user.';
      message.value = '';
    }
  };
  
  // 编辑用户
  const editUser = (user) => {
    userForm.value = { name: user.name, email: user.email };
    isEditing.value = true;
    editingUserId = user.id;
  };
  
  // 删除用户
  const deleteUser = async (id) => {
    if (confirm('Are you sure you want to delete this user?')) {
      try {
        const response = await fetch('/api/users', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id }),
        });
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
        console.error('Error deleting user:', err);
        error.value = 'An error occurred while deleting the user.';
        message.value = '';
      }
    }
  };
  
  // 在组件挂载时获取用户列表
  onMounted(fetchUsers);
  </script>
  
  <style scoped>
  /* 你可以在这里添加自定义样式 */
  </style>
  