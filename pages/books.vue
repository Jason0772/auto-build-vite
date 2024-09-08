<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Book Management</h1>
      
      <form @submit.prevent="handleSubmit" class="mb-4">
        <input v-model="bookForm.name" type="text" placeholder="Book Name" class="border p-2 mr-2" required />
        <input v-model="bookForm.price" type="number" placeholder="Price" class="border p-2 mr-2" required />
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          {{ isEditing ? 'Update Book' : 'Add Book' }}
        </button>
      </form>
  
      <ul class="bg-white shadow-md rounded-lg">
        <li
          v-for="book in books"
          :key="book._id"
          class="flex justify-between items-center p-4 border-b"
        >
          <span>{{ book.name }} - ${{ book.price }}</span>
          <div>
            <button @click="editBook(book)" class="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-2">Edit</button>
            <button @click="deleteBook(book._id)" class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
          </div>
        </li>
      </ul>
  
      <p v-if="message" class="mt-4 text-green-500">{{ message }}</p>
      <p v-if="error" class="mt-4 text-red-500">{{ error }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const books = ref([]);
  const bookForm = ref({ name: '', price: '' });
  const message = ref('');
  const error = ref('');
  const isEditing = ref(false);
  let editingBookId = null;
  
  // 获取书籍列表
  const fetchBooks = async () => {
    try {
      const response = await fetch('/api/books');
      if (response.ok) {
        books.value = await response.json();
      } else {
        console.error('Failed to fetch books');
      }
    } catch (err) {
      console.error('Error fetching books:', err);
    }
  };
  
  // 添加或编辑书籍
  const handleSubmit = async () => {
    try {
      const method = isEditing.value ? 'PUT' : 'POST';
      const response = await fetch('/api/books', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...bookForm.value, id: editingBookId }),
      });
      const data = await response.json();
      
      if (response.ok) {
        message.value = isEditing.value ? 'Book updated successfully' : 'Book added successfully';
        error.value = '';
        bookForm.value = { name: '', price: '' };
        isEditing.value = false;
        editingBookId = null;
        await fetchBooks(); // 重新获取书籍列表
      } else {
        error.value = data.error;
        message.value = '';
      }
    } catch (err) {
      console.error('Error saving book:', err);
      error.value = 'An error occurred while saving the book.';
      message.value = '';
    }
  };
  
  // 编辑书籍
  const editBook = (book) => {
    bookForm.value = { name: book.name, price: book.price };
    isEditing.value = true;
    editingBookId = book._id;
  };
  
  // 删除书籍
  const deleteBook = async (id) => {
    if (confirm('Are you sure you want to delete this book?')) {
      try {
        const response = await fetch('/api/books', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id }),
        });
        const data = await response.json();
        
        if (response.ok) {
          message.value = data.message;
          error.value = '';
          await fetchBooks(); // 重新获取书籍列表
        } else {
          error.value = data.error;
          message.value = '';
        }
      } catch (err) {
        console.error('Error deleting book:', err);
        error.value = 'An error occurred while deleting the book.';
        message.value = '';
      }
    }
  };
  
  // 在组件挂载时获取书籍列表
  onMounted(fetchBooks);
  </script>
  
  <style scoped>
  /* 你可以在这里添加自定义样式 */
  </style>
  