<script setup>
import { onMounted } from 'vue';
import { usePhotoStore } from '@/stores/photoStore';
import Photo from '@/components/photo/Photo';
import PhotoAdd from '@/components/photo/PhotoForm';
import PhotoDialog from '@/components/photo/PhotoDialog';

const store = usePhotoStore();

onMounted(() => {
  store.fetchPhotos();
});

function addPhoto(photo) {
  store.photos.push(photo);
}
</script>

<template>
  <v-container>
    <PhotoAdd v-if="store.photos.length < 11" @add-photo="addPhoto" />
    <div v-else>You can not add more photos</div>
    <v-row>
      <Photo v-for="photo of store.photos" :key="photo.id" :photo="photo" />
      <!-- @openPhoto="openPhoto" -->
    </v-row>
    <PhotoDialog />
    <!-- :photo="currentPhoto" v-model="dialogVisible"  -->
  </v-container>
</template>
