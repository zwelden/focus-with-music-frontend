<template>
    <div class="music-grid max-w-screen-lg mx-auto">
        <ul class="flex justify-between flex-wrap">
            <li v-for="musicItem in musicList" v-bind:key="musicItem.id" class="music-box mx-2 my-2 opacity-75 hover:opacity-100 shadow-md hover:shadow-lg bg-gray-300">
               <SoundCloudBox 
                    v-if="musicItem.type == 'soundcloud'" 
                    :embed-type="musicItem.embedType" 
                    :sound-cloud-source="musicItem.sourceId"
                    :play-color="musicItem.color"
                >
               </SoundCloudBox>

                <YouTubeBox
                    v-if="musicItem.type == 'youtube'"
                    :youtube-source="musicItem.sourceId"
                >
                </YouTubeBox>
            </li>
        </ul>
    </div>
</template>


<script>
import SoundCloudBox from './SoundCloudBox.vue'
import YouTubeBox from './YouTubeBox.vue'

export default {
    name: 'MusicGrid',
    components: {
        SoundCloudBox,
        YouTubeBox
    },
    data() {
        return {
            numBoxes: 16,
            musicContent: [
                {
                    type: 'soundcloud',
                    sourceId: '222896338',
                    embedType: 'playlists',
                    color: 'ff5500'
                },
                {
                    type: 'youtube',
                    sourceId: 'JvKjJeXrFvc',
                    emedType: 'na',
                    color: ''
                },
                {
                    type: 'youtube',
                    sourceId: 'gtmzPUmq7XU',
                    emedType: 'na',
                    color: ''
                },
                {
                    type: 'youtube',
                    sourceId: 'M5QY2_8704o',
                    emedType: 'na',
                    color: ''
                },
                {
                    type: 'youtube',
                    sourceId: 'wtg7AetxuWo',
                    emedType: 'na',
                    color: ''
                },
                {
                    type: 'soundcloud',
                    sourceId: '207648481',
                    embedType: 'tracks',
                    color: 'ff5500'
                },
            ]
        }
    },
    computed: {
        musicList () {
            let list = [];
            let boxId = 0;
            let musicListLength = 0;

            for (let item in this.musicContent) {
                let musicPiece = this.musicContent[item]
                musicPiece.id = boxId;
                list.push(musicPiece)
                boxId++;
                musicListLength++;
            }

            
            if (list.length < this.numBoxes) {
                for (let i = 0; i < (this.numBoxes - musicListLength); i++) {
                    let emptyBox = {type: 'emptyBox', id: boxId};
                    list.push(emptyBox);
                    boxId++;
                }
            }

            return list;
        }
    }
}
</script>


<style>
.music-box {
    height: 150px;
    width: 225px;
    /* background: #eaeaea; */
    border-radius: 6px;
    overflow: hidden;
}
</style>