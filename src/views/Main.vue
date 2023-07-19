<template>
    <div id="vs"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import Player from 'xgplayer-flv';

const initPlayer = () => {
    let player = new Player({
        id: 'vs',
        url: 'http://localhost:8080/preview/rtsp.flv',
        width: "100%",
        height: "100%",
    });
}

onMounted(() => {
    initPlayer()
})
</script>