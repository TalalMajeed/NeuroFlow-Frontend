<template>
    <div class="container">
        <div class="center">
            <canvas id="main-canvas" :width="cw" :height="ch"></canvas>
            <input id="text"></input>
        </div>
        <div class="right">
            <div class="title">Generate</div>
        </div>
    </div>
</template>

<script setup>

import { defineProps, onMounted, ref, watch } from 'vue';

const widthShift = ref(422);
const props = defineProps({
    user: Object,
    open: Boolean
});

window.addEventListener('resize', () => {
    cw.value = window.innerWidth - widthShift.value;
    ch.value = window.innerHeight - 65;
})

const cw = ref(window.innerWidth - widthShift.value);
const ch = ref(window.innerHeight - 65);

watch(() => props.open, (value) => {
    if (value) {
        widthShift.value = 422;
    } else {
        widthShift.value = 600;
    }
    cw.value = window.innerWidth - widthShift.value;
    ch.value = window.innerHeight - 65;
})



onMounted(() => {
    const script = document.createElement('script');
    script.src = 'board.js';
    script.async = true;
    document.head.appendChild(script);

})

</script>


<style scoped>
canvas {}

#text {
    position: absolute;
    left: 0;
    outline: none;
    font-family: "Arial";
    font-size: 16px;
    display: none;
    text-align: center;
    border: none;
    color: black;
}

.center {
    flex-grow: 1;
}

.container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
}

.title {
    font-size: 2rem;
    font-weight: bold;
    color: var(--secondary);
    text-align: center;
}

.right {
    min-width: 350px;
    padding: 20px;
    background-color: white;
}
</style>