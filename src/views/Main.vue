<template>
    <div id="vs"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import Player from 'xgplayer'
import FlvPlugin from 'xgplayer-flv'
import "xgplayer/dist/index.min.css"

const initPlayer = () => {
    let player = new Player({
        id: 'vs',
        isLive: false,
        plugins: [FlvPlugin],
        url: 'http://localhost:8080/preview/rtsp.flv',
    });
}

onMounted(() => {
    initPlayer()
})
</script>