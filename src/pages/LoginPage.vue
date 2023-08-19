<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
</script>

<template>
  <button @click="authStore.login">Login</button>
</template>

<style scoped>

</style>
