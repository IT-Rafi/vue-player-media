# Vue-player

基于 Vue 的视频播放器
- [npm](#npm)
- [用法](#use)
- [Example](#example)
- [Props](#props)
- [Methods](#methods)


# 安装

## npm

```
$ npm i vue-palyer -S
```

## use

main.js:

```javascript

import Vue from 'vue'
import App from './App.vue'
import VuePlayer from 'vue-player'
Vue.use(VuePlayer)

new Vue({
  el: '#app',
  components: {
    App
  }
})
```

## Example

template
```html
  <vue-player 
    :id="'detailplayer'" 
    :type="type" 
    :auto="false" 
    :isSwf="false" 
    :src="video_url" 
    :height="'338px'">
  </vue-palyer>
```
script
```js

export default {
  data () {
    return {
      type:'mp4',
      video_url:'https://v-cdn.zjol.com.cn/276985.mp4'
    }
  },
  methods: {
    //获取视频时长
    getVtime (duration) {
      console.log(duration)
    }
  }
}

```

## Props

| prop <div style="width: 135px"></div> | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id`    | 元素id            | `string`       |   `''`       |
| `type`    | 视频类型            | `string`       |   `mp4`       |
| `auto`    | 是否自动播放            | `Boolean`       |   `fasle`       |
| `isSwf`    | 是否为swf格式            | `Boolean`       |   `false`       |
| `src`    | 播放地址            | `string`       |   ``       |
| `height`    | 播放器高度            | `string`       |   `auto`       |

## Methods
| 方法名 | 类型 | 描述 |
| :--- | --- | --- |
| `getVtime` | `string` | 获取视频时长(swf不可获取)

