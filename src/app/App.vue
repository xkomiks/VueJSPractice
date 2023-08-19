<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import AppTemplate from '@/components/AppTemplate.vue';
import AppLoading from '@/components/AppLoading.vue';

const authStore = useAuthStore();
</script>

<template>
  <AppLoading v-if="authStore.isAuthenticationLoading"/>
  <AppTemplate v-else/>
</template>

<style scoped>

</style>
