<template>
  <v-col cols="4">
    <v-card @click="openPhoto">
      <v-card-title>{{ photo.title }}</v-card-title>
      <v-card-text>
        <v-img width="280" height="200" :src="photo.url" />
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script setup>
import { usePhotoStore } from '@/stores/photoStore';

const props = defineProps({
  photo: {
    type: Object,
    required: true,
  },
});

const store = usePhotoStore();

function openPhoto() {
  store.setCurrentPhoto(props.photo);
  store.showDialog();
}
</script>
