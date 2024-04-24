<template>
    <v-app-bar class="container" :elevation="2">
        <template v-slot:prepend>
            <v-app-bar-nav-icon @click="shift"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>NeuroFlow</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-account
            </v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["trigger"]);

function shift() {
    emit("trigger");
}
</script>

<style scoped>
.container {
    background-color: var(--primary-dark) !important;
    color: white !important;
    box-shadow: none !important;
    border: none !important;
}
</style>