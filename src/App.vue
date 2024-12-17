<script setup>
import { reactive } from 'vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Product from './components/Product.vue'
import Review from './components/Review.vue'
import Tem from './components/Tem.vue'
import './index.css'

const review
  = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.doloremque quam deleniti exercitationem. Atque, quas esse?'
const status = reactive({
  bestseller: true,
  newarrival: true,
  offerproduct: true,
  body: true,
  hair: true,
  scent: true,
  skin: true,
})

function updatedVariables(data) {
  Object.keys(data).forEach((key) => {
    if (key in status) {
      status.key = data.key
    }
  })
}
</script>

<template class="relative">
  <Header @updated-variables="(data) => updatedVariables(data)" />
  <div
    class="grid gap-7 m-14 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2"
  >
    <Product
      company="Soja and Co."
      name="MONET"
      price="$40.5"
      url="product1.jpeg"
    />
    <Product
      company="Grown Alchemy"
      name="Dr Loreta"
      price="$19.5"
      url="product2.jpg"
    />
    <Product company="Dr Barbara" name="Strum" price="$24" url="product3.jpg" />
    <Product
      company="lotion"
      name="Hydro Repair"
      price="$24"
      url="product4.jpg"
    />
  </div>
  <Tem />
  <div class="bg-slate-50">
    <p class="text-center text-slate-500 font-semibold text-3xl pt-32">
      You are in safe hand
    </p>
  </div>
  <div
    class="pt-20 sm:px-36 grid lg:grid-cols-3 gap-7 gap-y-14 overflow-hidden bg-slate-50 pb-32 md:px-20 sm:grid-cols-2 grid-cols-1 px-10"
  >
    <Review rate="4" name="Robin" :review="review" profile="profile1.jpg" />
    <Review rate="4" name="Robin" :review="review" profile="profile1.jpg" />
    <Review rate="5" name="Robin" :review="review" profile="profile1.jpg" />
    <Review rate="4" name="Robin" :review="review" profile="profile1.jpg" />
    <Review rate="3" name="Robin" :review="review" profile="profile1.jpg" />
  </div>
  <Footer />
</template>

<style scoped></style>
