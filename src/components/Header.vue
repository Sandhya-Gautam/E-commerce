<script setup lang="ts">
import { reactive, ref } from 'vue'

interface Status {
  bestseller: boolean
  newarrival: boolean
  offerproduct: boolean
  body: boolean
  hair: boolean
  scent: boolean
  skin: boolean
}

const emit = defineEmits<{
  (event: 'updatedVariables', status: Status): void
}>()

const status = reactive<Status>({
  bestseller: true,
  newarrival: true,
  offerproduct: true,
  body: true,
  hair: true,
  scent: true,
  skin: true,
})

function emitAllVariables() {
  emit('updatedVariables', status)
}
const display = ref(false)

const header = ref('Our Collection')
const text = ref(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
)

function toggle() {
  display.value = !display.value
}

function contentSwitch(event) {
  if (display.value === true) {
    toggle()
  }
  categorySelection(event)
  if (event.target.textContent === 'Shop all') {
    header.value = 'Shop all'
    text.value
      = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
  if (event.target.textContent === 'Bestseller') {
    header.value = 'Bestseller'
    text.value
      = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
  if (event.target.textContent === 'New Arrival') {
    header.value = 'New Arrival'
    text.value
      = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
  if (event.target.textContent === 'Offer Product') {
    header.value = 'Offer Product'
    text.value
      = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
}
function toContact() {}

function categorySelection(event) {
  if (event.target.textContent === 'All') {
    status.bestseller = true
    status.newarrival = true
    status.offerproduct = true
  }
  if (event.target.textContent === 'Bestseller') {
    status.bestseller = true
    status.newarrival = false
    status.offerproduct = false
  }
  if (event.target.textContent === 'New Arrival') {
    status.bestseller = false
    status.newarrival = true
    status.offerproduct = false
  }
  if (event.target.textContent === 'Offer Product') {
    status.bestseller = false
    status.newarrival = false
    status.offerproduct = true
  }
  emitAllVariables()
}
function productSelection(event) {
  if (event.target.textContent === 'Body') {
    // console.error('body')
    status.body = true
    status.hair = false
    status.scent = false
    status.skin = false
  }

  if (event.target.textContent === 'BestSeller') {
    status.bestseller = true
    status.newarrival = false
    status.offerproduct = false
  }

  if (event.target.textContent === 'Hair') {
    status.body = false
    status.hair = true
    status.scent = false
    status.skin = false
  }
  if (event.target.textContent === 'Scent') {
    status.body = false
    status.hair = false
    status.scent = true
    status.skin = false
  }
  if (event.target.textContent === 'Skin') {
    status.body = false
    status.hair = false
    status.scent = false
    status.skin = true
  }
  emitAllVariables()
}
</script>

<template>
  <div class="overflow-hidden">
    <div class="w-screen h-18 flex justify-between px-16 max-sm:px-7">
      <div class="flex">
        <div><img width="65px" src="../assets/logo.png"></div>
        <h1 class="text-slate-500 font-serif font-medium text-xl p-1 pt-4">
          Radiate
        </h1>
      </div>
      <div class="flex text-slate-500 pt-5 max-lg:hidden">
        <ul class="flex gap-7 text-sm * *:h-7 *:p-1 *:rounded">
          <li class="hover:bg-slate-400 hover:text-slate-300">
            <a href="" @click="contentSwitch">Shop all</a>
          </li>
          <li class="hover:bg-slate-400 hover:text-slate-300">
            <a href="" @click="contentSwitch">Bestseller</a>
          </li>
          <li class="hover:bg-slate-400 hover:text-slate-300">
            <a href="" @click="contentSwitch">New Arrival</a>
          </li>
          <li class="hover:bg-slate-400 hover:text-slate-300">
            <a href="" @click="contentSwitch">Offer Product</a>
          </li>
          <li class="hover:bg-slate-400 hover:text-slate-300">
            <a href="" @click="toContact">Contact</a>
          </li>
        </ul>
      </div>
      <div class="pt-3 flex gap-7">
        <a href=""> <img width="30px" src="../assets/cart.svg"></a>
        <div class="hidden max-lg:block pt-1">
          <img
            width="25px"
            src="../assets/navigation.svg"
            alt="nav"
            @click="toggle"
          >
        </div>
      </div>
    </div>

    <div class="w-screen bg-slate-500 h-80 relative">
      <div
        v-if="display"
        class="w-screen bg-slate-50 justify-center absolute end-0 max-lg:block hidden"
      >
        <div
          class="flex gap-5 pt-5 flex-col w-1/3 list-none text-center text-slate-200 absolute end-0 pb-7 bg-slate-600 rounded-l-xl"
        >
          <li class="hover:bg-slate-400 hover:text-slate-300">
            <a href="" @click="contentSwitch">Shop all</a>
          </li>
          <li class="hover:bg-slate-400 hover:text-slate-300">
            <a href="" @click="contentSwitch">Bestseller</a>
          </li>
          <li class="hover:bg-slate-400 hover:text-slate-300">
            <a href="" @click="contentSwitch">New Arrival</a>
          </li>
          <li class="hover:bg-slate-400 hover:text-slate-300">
            <a href="" @click="contentSwitch">Offer Product</a>
          </li>
          <li class="hover:bg-slate-400 hover:text-slate-300">
            <a href="" @click="toContact">Contact</a>
          </li>
        </div>
      </div>
      <div
        class="flex justify-center px-26 pt-24 text-white gap-4 max-sm:pt-16"
      >
        <h1 class="text-4xl font-medium w-1/3 pt-2 max-sm:text-xl max-sm:pt-14">
          {{ header }}
        </h1>
        <p
          class="justify-between w-1/3 max-md:w-2/4 max-sm:text-sm max-sm:pt-10"
        >
          {{ text }}
        </p>
      </div>
    </div>
    <div class="pt-14">
      <ul
        class="flex gap-5 justify-center text-slate-500 *:px-3 *:bg-slate-100 *:rounded-xl max-sm:gap-3 max-sm:*:text-sm"
      >
        <li class="hover:bg-slate-400">
          <a href="" @click="productSelection">All</a>
        </li>
        <li class="hover:bg-slate-400">
          <a href="" @click="productSelection">Bestseller</a>
        </li>
        <li class="hover:bg-slate-400">
          <a href="" @click="productSelection">Body</a>
        </li>
        <li class="hover:bg-slate-400">
          <a href="" @click="productSelection">Hair</a>
        </li>
        <li class="hover:bg-slate-400">
          <a href="" @click="productSelection">Scent</a>
        </li>
        <li class="hover:bg-slate-400">
          <a href="" @click="productSelection">Skin</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>
