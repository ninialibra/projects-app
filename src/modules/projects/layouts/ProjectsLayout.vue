<template>
  <div class="flex flex-col">
    <TopMenu></TopMenu>

    <main class="flex flex-row">
      <SideMenu></SideMenu>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import TopMenu from '@/modules/common/components/TopMenu.vue';
import SideMenu from '../components/SideMenu.vue';
</script>
