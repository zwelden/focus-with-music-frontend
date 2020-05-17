<template>
    <div class="youtube-box">
        <iframe 
            height="150" 
            width="225" 
            :src="'https://www.youtube.com/embed/' + youtubeSource + '?enablejsapi=1'" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>

        <div class="interactions-panel">
            <MusicInteractionsPanel />
        </div>
        
    </div>
</template>


<script>
import MusicInteractionsPanel from './MusicInteractionsPanel.vue'

export default {
    name: 'YouTubeBox',
    components: {
        MusicInteractionsPanel
    },
    props: ['youtubeSource'],
    data() {
        return {
            isPlaying: false
        }
    }
}
</script>


<style>
.youtube-box {
    position: relative;
}

.youtube-box:hover .interactions-panel {
    opacity: 1;
    z-index: 1;
}

.youtube-box .interactions-panel {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    opacity: 0;
    transition: opacity 0.2s ease-in;
    z-index: -1;
}
</style>