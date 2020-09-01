# vue-player-media

基于 Vue 的视频播放器(支持播放mp4、m3u8、swf、flv)
- [npm](#npm)
- [用法](#use)
- [flv格式说明](#explain)
- [Example](#example)
- [Props](#props)
- [Methods](#methods)


# 安装

## npm

```
$ npm install vue-player-media -S
```

## use

main.js:

```javascript

import Vue from 'vue'
import App from './App.vue'
import VuePlayer from 'vue-player-media'
Vue.use(VuePlayer)

new Vue({
  el: '#app',
  components: {
    App
  }
})
```
## explain

*因为flv.js本身的问题，项目中想播放flv格式视频，（我）目前采用的是这种方式

使用方式：
1把flv.js静态资源放到自己项目文件夹（flv静态资源地址：https://github.com/IT-Rafi/vue-player-media/tree/master/static）
2.在项目中的main.js里引入
main.js:

播放器容器大小可自己设置

```javascript

window.flv = require('flv.js')

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

