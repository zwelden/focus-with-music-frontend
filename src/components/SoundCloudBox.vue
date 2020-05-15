<template>
    <div class="sound-cloud-box">
        <iframe 
            width="100%" 
            height="170" 
            scrolling="no" 
            frameborder="no" 
            allow="autoplay" 
            :src="'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/' + embedType + '/' + SoundCloudSource + '&color=%23' + playColor + '&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true'">
        </iframe>
    </div>
</template>


<script>
export default {
    name: 'SoundCloudBox',
    props: ['embedType', 'SoundCloudSource', 'playColor']
}
</script>


<style>

</style>