<template>
    <div class="music-grid md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto">
        <ul class="flex justify-between flex-wrap">
            <li v-for="musicItem in musicList" v-bind:key="musicItem.id" class="music-box mx-2 my-2 opacity-75 hover:opacity-100 shadow-md hover:shadow-lg bg-gray-300">
                <div class="music-box">
                    <div class="music-box-frame-container">
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
                    </div>
                </div>
               
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
            numBoxes: 20,
        }
    },
    computed: {
        musicList () {
            let list = [];
            let boxId = 0;
            let musicListLength = 0;

            for (let item in this.$store.state.musicContent) {
                let musicPiece = this.$store.state.musicContent[item]
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
    border-radius: 6px;
    overflow: hidden;
}

.music-box-frame-container {
    height: 150px;
    width: 225px;
    /* background: #eaeaea; */
    overflow: hidden;
}

</style>