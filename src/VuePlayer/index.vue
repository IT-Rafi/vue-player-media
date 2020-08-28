<template>
    <div>
        <div :id="id" v-if="!isSwf"></div>
        <object v-else WIDTH="100%" :HEIGHT="height" id="myMovieName">

        <embed :src="src" quality=high bgcolor=#FFFFFF WIDTH="100%" :HEIGHT="height" NAME="myMovieName" ALIGN="" TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer" />

        </object>

    </div>
</template>

<script>
window.Hls = require('hls.js')

import 'dplayer/dist/DPlayer.min.css';
import DPlayer from 'dplayer';

export default {
    name:'VuePlayer',
    data(){
        return {
            // dp:null
        }
    },
    // props:{'id','isSwf','src','height'},
    props:{
        id:{
            type:String,
            default:'player'
        },
        isSwf:{
            type:Boolean,
            default:false
        },
        src:{
            type:String
        },
        height:{
            type:String,
            default:'auto'
        },
        auto:{
            type:Boolean,
            default:false
        },
        type:{
            type:String,
            default:'mp4'
        }
    },
    mounted(){
        if(!this.isSwf){
            if(this.type == 'm3u8'){
                const dp = new DPlayer({
                    container: document.getElementById(this.id),
                    screenshot: false,
                    video: {
                        url: this.src,
                        type:'hls'
                        // pic: 'demo.jpg',
                        // thumbnails: 'thumbnails.jpg'
                    },
                    autoplay:this.auto
                });
                this.commonUtil(dp)
            }else if(this.type == 'flv'){
                const dp = new DPlayer({
                    container: document.getElementById(this.id),
                    screenshot: false,
                    video: {
                        url: this.src,
                        type:'flv'
                        // pic: 'demo.jpg',
                        // thumbnails: 'thumbnails.jpg'
                    },
                    autoplay:this.auto
                });
                this.commonUtil(dp)
            }
            else if(this.type == 'mp4' || this.type == 'mov'){
                const dp = new DPlayer({
                    container: document.getElementById(this.id),
                    screenshot: false,
                    video: {
                        url: this.src
                        // pic: 'demo.jpg',
                        // thumbnails: 'thumbnails.jpg'
                    },
                    autoplay:this.auto
                });
                this.commonUtil(dp)
                
            }
            
            
        }
        
    },
    methods:{
      commonUtil(dp){
        dp.on('contextmenu_show', function () {
            $('.dplayer-menu').hide()
        });
        dp.on('canplaythrough',  () => {
            setTimeout(()=>{
                this.$emit('getVtime',dp.video.duration)
            },300)
        });
      }
    }
}
</script>

<style lang='sass' scoped>

</style>
