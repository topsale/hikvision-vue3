<template>
    <div class="vedio">
        <video id="valveVideo" class="video-js vjs-default-skin" autoplay
            style="width: 100%;height: 100%; object-fit: fill"></video>
    </div>
</template>

<script setup>
import { watch, onMounted, onUnmounted } from 'vue'

import 'video.js/dist/video-js.css'
import videojs from 'video.js';
import 'videojs-flash'

let player;

const options = (src) => {
    return {
        autoplay: true, // true,浏览器准备好时开始播放。
        muted: true, // 默认情况下将会消除音频。
        loop: true, // 导致视频一结束就重新开始。
        controls: false, //取消视频中的进度条
        preload: 'auto', // auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',  //汉化
        fluid: true, // 当true时，将按比例缩放以适应其容器。
        sources: [{
            type: 'rtmp/flv',
            src  //视频播放地址
        }],
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 无法播放媒体源时显示的默认信息。
        textTrackDisplay: false,
    }
}

onMounted(() => {
    try {
        player = videojs("valveVideo", options("rtmp://127.0.0.1:1935/live/f203ec7c-0792-4d48-9294-e2f20d272c74"), () => {
            player.play();
        });
    } catch (error) {
        console.log(error);
    }
})

onUnmounted(() => {
    //离开页面时销毁video
    player.dispose()
})
</script>

<style scoped>
.vedio {
    width: 632.89px;
    height: 356px;
    background: #000;
    padding: 3px;
    border: 1px solid #707070;
    margin: 30px 30px 0 30px;
}
</style>