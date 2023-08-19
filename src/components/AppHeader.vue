<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/shared/assets/logo.svg"/>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <template v-if="authStore.isLoggingIn">
        <RouterLink to="/about">About</RouterLink>
      </template>
      <template v-else>
        <RouterLink to="/login">Login</RouterLink>
      </template>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
}

.logo {
  max-width: 50px;
  aspect-ratio: 1 / 1;
}

nav {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
