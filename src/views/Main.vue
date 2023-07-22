<template>
  <div class="vedio">
    <video
      id="valveVideo1"
      class="video-js vjs-default-skin"
      autoplay
      style="width: 100%; height: 100%; object-fit: fill"
    ></video>
    <video
      id="valveVideo2"
      class="video-js vjs-default-skin"
      autoplay
      style="width: 100%; height: 100%; object-fit: fill"
    ></video>
    <video
      id="valveVideo3"
      class="video-js vjs-default-skin"
      autoplay
      style="width: 100%; height: 100%; object-fit: fill"
    ></video>
  </div>
</template>

<script setup>
import { watch, onMounted, onUnmounted } from 'vue'

import 'video.js/dist/video-js.css'
import videojs from 'video.js'
import 'videojs-flash'

const options = src => {
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
    sources: [
      {
        type: 'rtmp/flv',
        // 视频地址
        src,
      },
    ],
    // 默认的错误消息
    notSupportedMessage: '此视频暂无法播放，请稍后再试',
    textTrackDisplay: false,
  }
}

// 定义播放器
let player1
let player2
let player3
onMounted(() => {
  try {
    player1 = videojs('valveVideo1', options('rtmp://127.0.0.1:1935/live/c50c89cc-2e15-478d-82e0-967335ce6eaf'), () => {
      player1.play()
    })
    player2 = videojs('valveVideo2', options('rtmp://127.0.0.1:1935/live/77eacda6-99c6-4dde-ad98-4a431ad3a8c4'), () => {
      player2.play()
    })
    player3 = videojs('valveVideo3', options('rtmp://127.0.0.1:1935/live/05cc982a-b149-4bb4-a076-77df1b7076dd'), () => {
      player3.play()
    })
  } catch (error) {
    console.log(error)
  }
})

onUnmounted(() => {
  // 离开页面时销毁
  player1.dispose()
  player2.dispose()
  player3.dispose()
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
