<script lang="ts" setup>
import { onMounted } from 'vue';

onMounted(() => {
console.log('init');

});
</script>

<template>
    <div>
      <h1>Create User</h1>
      <form>
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  </template>