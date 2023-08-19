import { isNil } from '@/shared/lib/isNil';

function hasLocalStorage() {
  try {
    return typeof localStorage !== 'undefined' && localStorage !== null;
  } catch (error) {
    // SecurityError
    // Failed to read the 'localStorage' property from 'Window': Access is denied for this document.
    console.error(error);
    return false;
  }
}

export function saveDataToLocalStorage(key: string, data: any) {
  if (!hasLocalStorage()) {
    return;
  }
  localStorage.setItem(key, JSON.stringify(data));
}

export function getDataFromLocalStorage<T>(key: string): T | null {
  if (!hasLocalStorage()) {
    return null;
  }
  const data = localStorage.getItem(key);
  if (isNil(data)) {
    return null;
  }
  return (JSON.parse(data) as T);
}

export function removeDataFromLocalStorage(key: string) {
  if (!hasLocalStorage()) {
    return;
  }
  localStorage.removeItem(key);
}
