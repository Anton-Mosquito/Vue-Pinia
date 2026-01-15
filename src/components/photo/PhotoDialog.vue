<template>
  <v-dialog v-model="store.dialogVisible" max-width="600" @click:outside="store.hideDialog">
    <v-card>
      <v-card-title>{{ full_title }}</v-card-title>
      <v-card-text>
        <v-img :src="store.currentPhoto.url" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { computed } from 'vue';
import { usePhotoStore } from '@/stores/photoStore';

const store = usePhotoStore();
const full_title = computed(() => `Names of photo = ${store.currentPhoto.title}`);
</script>
