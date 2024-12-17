<script setup lang="ts">
defineProps<{
  url: string
  company: string
  name: string
  price: string
}>()
const emit = defineEmits<{
  (event: 'click', data: number): void
}>()
</script>

<template>
  <div class="w-auto p-7 border shadow-md shadow-slate-300 h-auto">
    <div class="h-4/6 justify-center align-middle text-center" @click="emit('click', 123)">
      <img
        class="w-full h-full"
        width="200px"
        :src="`src/assets/products/${url}`"
        alt="product image"
      >
    </div>
    <div class="">
      <p class="text-slate-500">
        {{ company }}
      </p>
      <p class="text-slate-700">
        {{ name }}
      </p>
      <p class="text-slate-500">
        {{ price }}
      </p>
    </div>
  </div>
</template>

<style></style>
