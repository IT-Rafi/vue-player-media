<template>
  <div class="video_play">
    <vue-player @getVtime="getVtime" :id="'detailplayer'" :type="type" :auto="false" :isSwf="false" :src="video_url" :height="'200px'"></vue-player>
  </div>
</template>
<script>

export default {
  name: 'Demo',
  data () {
    return {
      type:'mp4',
      video_url:'https://v-cdn.zjol.com.cn/276985.mp4'
    }
  },
  methods: {
    getVtime(data){
      console.log(data)
    }
  }
}
</script>

<style>
.video_play{
    width: 400px;
}    

</style>
