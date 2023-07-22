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

const options = (src) => {
    return {
        // 开启自动播放
        autoplay: true,
        // 默认情况下将会消除音频。
        muted: true,
        // 循环播放
        loop: true,
        // 关闭进度条
        controls: false,
        // 立即开始加载视频
        preload: 'auto',
        // 汉化
        language: 'zh-CN',
        // 按比例缩放适应容器
        fluid: true,
        sources: [{
            type: 'rtmp/flv',
            // 视频地址
            src
        }],
        // 默认的错误消息
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        textTrackDisplay: false,
    }
}

// 定义播放器
let player;
onMounted(() => {
    try {
        player = videojs("valveVideo", options("rtmp://127.0.0.1:1935/live/bb40c0ad-6c26-40c2-a8e6-8e1a2b687d6e"), () => {
            player.play();
        });
    } catch (error) {
        console.log(error);
    }
})

onUnmounted(() => {
    // 离开页面时销毁
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