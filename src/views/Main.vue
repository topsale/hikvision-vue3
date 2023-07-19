<template>
    <div id="vs"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import Player from 'xgplayer';
import 'xgplayer/dist/index.min.css';

const initPlayer = () => {
    let player = new Player({
        id: 'vs',
        url: 'http://localhost:8080/preview/rtsp.mp4'
    });
}

onMounted(() => {
    initPlayer()
})
</script>