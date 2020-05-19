<template>
    <div class="music-interations-panel">
        <div class="like-btn flex justify-center items-center shadow-lg text-gray-100 hover:text-teal-600 cursor-pointer">
            <font-awesome-icon :icon="['fas', 'thumbs-up']" class="text-md"></font-awesome-icon>
        </div>
        <div v-if="!isPinned" class="pin-btn flex justify-center items-center shadow-lg text-gray-100 hover:text-teal-600 cursor-pointer" @click="pinMusicItem">
            <font-awesome-icon :icon="['fas', 'thumbtack']" class="text-md"></font-awesome-icon>
        </div>
        <div v-if="isPinned" class="pin-btn flex justify-center items-center shadow-lg text-gray-100 hover:text-red-600 cursor-pointer" @click="unpinMusicItem">
            <font-awesome-icon :icon="['fas', 'times']" class="text-md"></font-awesome-icon>
        </div>
    </div>
</template>

<script>
// import { EventBus } from '@/bus/eventBus'

export default {
    name: 'MusicInteractionsPanel',
    props: ['isPinned', 'id'],
    methods: {
        pinMusicItem () {
            // EventBus.$emit('pinMusicItem', {id: this.id});
            this.$store.commit('addPinnedVideo', {id: this.id});
        },
        unpinMusicItem () {
            // EventBus.$emit('pinMusicItem', {id: this.id});
            this.$store.commit('removePinnedVideo', {id: this.id});
        }
    }
}
</script>


<style>
.music-interations-panel {
    position: relative;
}

.music-interations-panel .like-btn {
    position: absolute;
    bottom:0;
    left:0;
    height: 2rem;
    width: 2.5rem;
    background: rgb(0,0,0, 0.6);
    border-radius: 8px;
    transform: translateY(2%) translateX(-2%);
}

.music-interations-panel .pin-btn {
    position: absolute;
    bottom:0;
    right:0;
    height: 2rem;
    width: 2.5rem;
    background: rgb(0,0,0, 0.6);
    border-radius: 8px;
    transform: translateY(2%) translateX(2%);
}

.music-interations-panel .pin-btn svg {
    margin-top: 2px;
}

.music-interations-panel .like-btn:hover,
.music-interations-panel .pin-btn:hover {
    background: rgba(255, 255, 255, 0.95);
}
</style>