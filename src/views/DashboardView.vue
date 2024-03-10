<script setup lang='ts'>
import UserInfo from "../components/dashboard/UserInfo.vue";
import JobsSection from "../components/dashboard/JobsSection.vue";
import LearnMoreSection from "@/components/dashboard/LearnMoreSection.vue";
</script>

<template>
  <div class="w-full px-4 py-0 md:p-10 md:pb-0 max-w-[1370px]">
    <UserInfo />
    <JobsSection />
    <LearnMoreSection />
  </div>
</template>