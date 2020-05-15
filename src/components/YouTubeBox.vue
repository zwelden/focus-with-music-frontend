<template>
    <div class="youtube-box">
        <iframe 
            height="150" 
            width="225" 
            :src="'https://www.youtube.com/embed/' + youtubeSource + '?enablejsapi=1'" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</template>


<script>
export default {
    name: 'YouTubeBox',
    props: ['youtubeSource'],
    data() {
        return {
            isPlaying: false
        }
    }
}
</script>


<style>
.cover {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #fff;
    opacity: 0.5;
}
</style>