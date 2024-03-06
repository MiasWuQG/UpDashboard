<script setup lang='ts'>
import ArrowIcon from '../icons/ArrowIcon.vue';
</script>

<template>
  <div class="mt-10">
    <h2 class="font-[Jakarta] text-white text-xl mb-5">
      Learn More
    </h2>
    <div class="flex gap-5 font-[Jakarta] flex-col lg:flex-row max-w-[1370px]">
      <div class="w-full min-h-[188px] flex flex-col justify-between rounded-md border border-white/20  text-white">
        <div class="flex flex-col items-start">
          <div class="p-5 flex flex-col gap-2">
            <span class="text-lg font-[Jakarta]">The latest news and insights</span>
            <span class="text-sm">Interested in what we have been up to? Check our recent content, from quantum insights in articles to partnerships and more. </span>
          </div>
        </div>
        <div class="group m-5">
          <a
            href="#!"
            class="text-sm font-semibold pt-1 text-[#49D49C] flex gap-1 items-center parent-hover:text-red-400"
          >Content 
            <ArrowIcon class="w-[14px] group-hover:translate-x-1 transition-all duration-300 pt-0.5" />
          </a>
        </div>
      </div>
      <div class="w-full min-h-[188px] flex flex-col justify-between rounded-md border border-white/20  text-white">
        <div class="flex flex-col items-start">
          <div class="p-5 flex flex-col gap-2">
            <span class="text-lg font-[Jakarta]">Want to do more?</span>
            <span class="text-sm">You can’t find what you are looking for and/or want to do more? Reach out to us! </span>
          </div>
        </div>
        <div class="group m-5">
          <a
            href="#!"
            class="text-sm font-semibold pt-1 text-[#49D49C] flex gap-1 items-center parent-hover:text-red-400"
          >Reach out 
            <ArrowIcon class="w-[14px] group-hover:translate-x-1 transition-all duration-300 pt-0.5" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>