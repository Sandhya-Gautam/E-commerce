<script setup>
const data = defineProps({
  rate: String,
  profile: String,
  review: String,
  name: String,
})
const stars = Number(data.rate)
const remaining = 5 - stars
</script>

<template>
  <div class="w-auto *:pt-3 px-3 bg-white rounded-3xl">
    <div class="flex">
      <p v-for="star of stars" :key="star" class="flex">
        <img src="../assets/star.svg" alt="star" class="w-4">
      </p>
      <p v-for="r of remaining" :key="r" class="flex">
        <img src="../assets/emptyStar.svg" alt="star" class="w-4">
      </p>
    </div>
    <p>{{ review }}</p>
    <div class="flex gap-2">
      <img
        class="w-9 rounded-full"
        :src="`src/assets/profile/${data.profile}`"
      >
      <div>
        <p>{{ name }}</p>
      </div>
    </div>
  </div>
</template>

<style></style>
