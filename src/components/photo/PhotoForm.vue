<template>
  <v-container>
    <v-row class="d-flex" align="center" justify="start">
      <v-text-field v-model="title" label="Title" />
      <v-file-input v-model="img" label="Image" />
      <v-btn variant="outlined" @click="addPhoto"> Add </v-btn>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
const title = ref('');
const img = ref(null);
const emit = defineEmits(['addPhoto']);

function addPhoto() {
  const reader = new FileReader();
  reader.onload = () => {
    const photo = { id: Date.now(), title: title.value, url: reader.result };
    emit('addPhoto', photo);
  };
  if (img.value) reader.readAsDataURL(img.value);
}
</script>

<style scoped></style>
