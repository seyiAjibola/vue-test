<script setup>
import { RouterLink, RouterView } from "vue-router";
import MainHeader from "@/components/MainHeader.vue";
import Navigation from "@/components/Navigation.vue";
</script>

<template>
  <main>
    <MainHeader />
    <div class="container-fluid" id="content-area">
      <div class="row">
        <div class="col-2">
          <Navigation />
        </div>

        <div class="col-10">
          <RouterView />
        </div>
      </div>
    </div>
    
  </main>
</template>

