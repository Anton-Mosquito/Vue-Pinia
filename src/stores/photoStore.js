import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';

export const usePhotoStore = defineStore('photo', () => {
  const photos = ref([]);
  const dialogVisible = ref(false);
  const currentPhoto = ref({});

  const getAllPhotos = computed(() => photos.value);
  const getDialogVisible = computed(() => dialogVisible.value);
  const getCurrentPhoto = computed(() => currentPhoto.value);

  function setPhotos(payload) {
    photos.value = payload;
  }
  function showDialog() {
    dialogVisible.value = true;
  }
  function hideDialog() {
    dialogVisible.value = false;
  }
  function setCurrentPhoto(payload) {
    currentPhoto.value = payload;
  }

  async function fetchPhotos() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10');
    setPhotos(response.data);
  }

  return {
    photos,
    dialogVisible,
    currentPhoto,
    getAllPhotos,
    getDialogVisible,
    getCurrentPhoto,
    setPhotos,
    showDialog,
    hideDialog,
    setCurrentPhoto,
    fetchPhotos,
  };
});
