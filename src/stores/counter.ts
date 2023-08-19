import { ref } from 'vue';
import { defineStore } from 'pinia';
import { saveDataToLocalStorage, getDataFromLocalStorage, removeDataFromLocalStorage } from '@/shared/lib/localStorage';

const STORE_NAME = 'counter';

export const useCounterStore = defineStore(STORE_NAME, () => {
  const count = ref(getDataFromLocalStorage<number>(STORE_NAME) || 0);

  function increment() {
    count.value++;
    saveDataToLocalStorage(STORE_NAME, count.value);
  }

  function clearStore() {
    removeDataFromLocalStorage(STORE_NAME);
    count.value = 0;
  }

  return { count, increment, clearStore };
});
