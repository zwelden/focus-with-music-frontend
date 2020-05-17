<template>
    <div class="soundcloud-box">
        <iframe 
            width="100%" 
            height="170" 
            scrolling="no" 
            frameborder="no" 
            allow="autoplay" 
            :src="'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/' + embedType + '/' + SoundCloudSource + '&color=%23' + playColor + '&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true'">
        </iframe>

        <div class="interactions-panel">
            <MusicInteractionsPanel />
        </div>
    </div>
</template>


<script>
import MusicInteractionsPanel from './MusicInteractionsPanel.vue'

export default {
    name: 'SoundCloudBox',
    components: {
        MusicInteractionsPanel
    },
    props: ['embedType', 'SoundCloudSource', 'playColor']
}
</script>


<style>
.soundcloud-box {
    position: relative;
}

.soundcloud-box:hover .interactions-panel {
    opacity: 1;
    z-index: 1;
}

.soundcloud-box .interactions-panel {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    z-index: 10;
    opacity: 0;
    transition: opacity 0.2s ease-in;
    z-index: -1;
}
</style>