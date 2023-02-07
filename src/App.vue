<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <v-app>
    <v-app-bar color="green-darken-1">
      <v-btn href = "/">
        
        <v-app-bar-title> MJU Add-Drop </v-app-bar-title>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn href = "/news">
        ข่าวสาร
      </v-btn>
      <v-btn href = "/plan">
        แผนการเรียน
      </v-btn>
      <v-btn href = "/adddrop">
        เพิ่ม-ถอน
      </v-btn>
    </v-app-bar>
  <RouterView />
  </v-app>
</template>





