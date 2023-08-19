<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
</script>

<template>
  <button v-if="!authStore.isLoggingIn" @click="authStore.login">Login</button>
  <button v-if="authStore.isLoggingIn" @click="authStore.logout">Logout</button>

  <br/>

  isLoggingIn: {{ authStore.isLoggingIn }}
</template>
