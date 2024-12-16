<script setup>
import { ref} from 'vue'
    let display= ref(false);
    let bestseller=ref(true);
    let newarrival=ref(true);
    let offerproduct=ref(true);
    let body=ref(true);
    let hair=ref(true);
    let scent=ref(true);
    let skin=ref(true);
    let header= ref("Our Collection");
    let text= ref("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    
    function toggle(){
        display.value=!display.value;
    }

    const emitAllVariables=()=>{
        $emit("updated-variables", {
        bestseller: bestseller.value,
        newarrival: newarrival.value,
        offerproduct: offerproduct.value,
        body: body.value,
        hair: hair.value,
        scent: scent.value,
        skin: skin.value,});
    }


    function contentSwitch( event){
        if(display.value==true){
            toggle();
        }
        categorySelection(event);
        if(event.target.innerText=="Shop all"){
            header.value="Shop all";
            text.value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        }
        if(event.target.innerText=="Bestseller"){

            header.value="Bestseller";
            text.value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        }
        if(event.target.innerText=="New Arrival"){
            header.value="New Arrival";
            text.value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        }
        if(event.target.innerText=="Offer Product"){
            header.value="Offer Product";
            text.value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        }

    }
    function toContact(){
        
    }

    function categorySelection(event){
        emitAllVariables();
        if(event.target.innerText=="All"){
            bestseller.value=true;
            newarrival.value=true;
            offerproduct.value=true;
        }
        if(event.target.innerText=="Bestseller"){
            bestseller.value=true;
            newarrival.value=false;
            offerproduct.value=false;
        }
        if(event.target.innerText=="New Arrival"){
            bestseller.value=false;
            newarrival.value=true;
            offerproduct.value=false;
        }
        if(event.target.innerText=="Offer Product"){
            bestseller.value=false;
            newarrival.value=false;
            offerproduct.value=true;
        }
    }
    function productSelection(event){
        emitAllVariables();
        if(event.target.innerText=="Body"){
            body.value=true;
            hair.value=false;
            scent.value=false;
            skin.value=false;
        }
        if(event.target.innerText=="Hair"){
            body.value=false;
            hair.value=true;
            scent.value=false;
            skin.value=false;
        }
        if(event.target.innerText=="Scent"){
            body.value=false;
            hair.value=false;
            scent.value=true;
            skin.value=false;
        }
        if(event.target.innerText=="Skin"){
            body.value=false;
            hair.value=false;
            scent.value=false;
            skin.value=true;
        }
    }
    
</script>

<template>
    <div class="overflow-hidden">
    <div class="w-screen h-18 flex justify-between px-16 max-sm:px-7 " >
        <div class=" flex">
            <div ><img width="65px" src="../assets/logo.png"></div>
            <h1 class="text-slate-500 font-serif font-medium text-xl p-1 pt-4">Radiate</h1>
        </div>
        <div class="flex  text-slate-500 pt-5 max-lg:hidden">
            <ul class="flex gap-7 text-sm * *:h-7 *:p-1 *:rounded  " >
                <li class="hover:bg-slate-400 hover:text-slate-300"><a @click="contentSwitch" href="">Shop all</a></li>
                <li class="hover:bg-slate-400 hover:text-slate-300"><a @click="contentSwitch" href="">Bestseller</a></li>
                <li class="hover:bg-slate-400 hover:text-slate-300"><a @click="contentSwitch" href="">New Arrival</a></li>
                <li class="hover:bg-slate-400 hover:text-slate-300"><a @click="contentSwitch" href="">Offer Product</a></li>
                <li class="hover:bg-slate-400 hover:text-slate-300"><a @click="toContact" href="">Contact</a></li>
            </ul>
        </div>
        <div class="pt-3 flex gap-7"><a href="" > <img  width="30px" src="../assets/cart.svg" ></a>
        <div class="hidden max-lg:block pt-1 "  ><img @click="toggle" width="25px" src="../assets/navigation.svg" alt="nav"></div></div>
    </div>
    
    <div class="w-screen bg-slate-500 h-80 relative ">
        <div  v-if="display"  class="w-screen  bg-slate-50 justify-center absolute end-0 max-lg:block hidden">
        <div class="flex gap-5 pt-5 flex-col w-1/3 list-none text-center text-slate-200 absolute end-0 pb-7 bg-slate-600 rounded-l-xl">
            <li class="hover:bg-slate-400 hover:text-slate-300"><a @click="contentSwitch" href="">Shop all</a></li>
            <li class="hover:bg-slate-400 hover:text-slate-300"><a @click="contentSwitch" href="">Bestseller</a></li>
            <li class="hover:bg-slate-400 hover:text-slate-300"><a @click="contentSwitch" href="">New Arrival</a></li>
            <li class="hover:bg-slate-400 hover:text-slate-300"><a @click="contentSwitch" href="">Offer Product</a></li>
            <li class="hover:bg-slate-400 hover:text-slate-300"><a @click="toContact" href="">Contact</a></li>
        </div>
        </div>
        <div class="flex justify-center px-26 pt-24 text-white gap-4 max-sm:pt-16 ">
            <h1 class=" text-4xl font-medium w-1/3 pt-2 max-sm:text-xl max-sm:pt-14">{{header}}</h1>
            <p class="justify-between w-1/3 max-md:w-2/4 max-sm:text-sm max-sm:pt-10">{{text}}</p>
        </div>
    </div>
    <div class="pt-14"> <ul class="flex gap-5 justify-center text-slate-500 *:px-3 *:bg-slate-100 *:rounded-xl max-sm:gap-3 max-sm:*:text-sm ">
        <li class="hover:bg-slate-400"> <a @click="productSelection" href="">All</a></li>
        <li class="hover:bg-slate-400"> <a @click="productSelection" href="">Bestseller</a></li>
        <li class="hover:bg-slate-400"> <a @click="productSelection" href="">Body</a></li>
        <li class="hover:bg-slate-400"> <a @click="productSelection" href="">Hair</a></li>
        <li class="hover:bg-slate-400"> <a @click="productSelection" href="">Scent</a></li>
        <li class="hover:bg-slate-400"> <a @click="productSelection" href="">Skin</a></li>
    </ul></div>
    </div>
</template>



<style>
</style>