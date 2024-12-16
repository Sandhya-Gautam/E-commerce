<template>
  <div class="h-screen " >
    <div class="flex  justify-between rounded-xl p-7 px-60 bg-white max-lg:flex-col max-md:px-0 max-lg:*:py-2">
        <div class="text-center text-slate-500 col-span-2 pt-36 max-lg:pt-0"><p class=" font-semibold text-2xl">We Value Your Opinion</p>
        <p>Pour your thoughts here...</p></div>
        <div class="flex justify-center">
        <div class="grid  w-80  *:max-w-80 *:mt-5 *:rounded-md *:p-2 bg-slate-500  p-5  rounded-xl shadow-sm hover:shadow-md hover:shadow-slate-800 *:outline-none">
            <input class="focus:border-none" v-model="name" type="text" placeholder="full-name">
            <input class="focus:border-none" v-model="email" type="text" placeholder="abc@example.com">
            <textarea v-model="review"  class="focus:border-none" rows="5" placeholder="review...."></textarea>
            <button class="text-slate-500 font-medium w-16 bg-white hover:shadow-md hover:shadow-slate-700">Submit</button>
        </div>
        </div>
    </div>
    <div class="flex justify-between text-stone-400   bg-slate-50  lg:p-20 lg:px-60 lg:py-16 sm:px-24 sm:py-12  max-md:text-sm  p-3">
      <div class="">
        <ul class="*:pt-2 ">
          <li><a href="" class="hover:text-slate-400">Bestsellers</a></li>
          <li><a href="" class="hover:text-slate-400" >Body</a></li>
          <li><a href="" class="hover:text-slate-400">Hair</a></li>
          <li><a href="" class="hover:text-slate-400">Scent</a></li>
          <li><a href="" class="hover:text-slate-400">Skin</a></li>
        </ul>
      </div>
      <div>
        <ul class="*:pt-2 " >
          <li><a href="" class="hover:text-slate-400">New Product</a></li>
          <li><a href="" class="hover:text-slate-400">Offers</a></li>
          <li><a href="" class="hover:text-slate-400">Shop All</a></li>
          <li><a href="" class="hover:text-slate-400">Privacy Policy</a></li>
          <li><a href="" class="hover:text-slate-400">Terms of Service</a></li>
        </ul>
      </div>
      <div class="">
        <div>
          <ul class="*:pt-2">
            <li><a href="" class="hover:text-slate-300">Instagram</a></li>
            <li><a href="" class="hover:text-slate-300">Facebook</a></li>
            <li><a href="" class="hover:text-slate-300">Twitter</a></li>
            <li><a href="" class="hover:text-slate-300">Pinterest</a></li>
            <li><a href="" class="hover:text-slate-300">Linkedin</a></li>
          </ul>
          </div>
           
      </div>
      <div class=" pt-10">
              <img src="../assets/logo.png" alt="logo" class="w-20">
        </div>
     

    </div>
  </div>
</template>

<script setup>
 import { ref } from 'vue'
    const name=ref('');
    const email=ref('');
    const review=ref('');

</script>

<style>

</style>