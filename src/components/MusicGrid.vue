<template>
    <div class="music-grid md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto">
        <div class="pinned-items-container mb-8" v-if="pinnedList.length > 0">
            <h3 class="text-2xl text-left font-semibold text-gray-600 px-2">Pinned Music</h3>
            <ul class="flex justify-between flex-wrap shadow-md">
                <li v-for="pinnedItem in pinnedList" v-bind:key="pinnedItem.id" class="mx-2 my-2">

                    <div v-if="pinnedItem.type == 'soundcloud' || pinnedItem.type == 'youtube'" class="music-box music-box-frame-container opacity-75 hover:opacity-100 shadow-md hover:shadow-lg bg-gray-300">
                        <SoundCloudBox 
                            v-if="pinnedItem.type == 'soundcloud'" 
                            :embed-type="pinnedItem.embedType" 
                            :sound-cloud-source="pinnedItem.sourceId"
                            :play-color="pinnedItem.color"
                            :isPinned="true"
                            :id="pinnedItem.id"
                        >
                        </SoundCloudBox>

                        <YouTubeBox
                            v-if="pinnedItem.type == 'youtube'"
                            :youtube-source="pinnedItem.sourceId"
                            :isPinned="true"
                            :id="pinnedItem.id"
                        >
                        </YouTubeBox>
                    </div>

                    <div v-else class="music-box-frame-container"></div>
                
                </li>
            </ul>
        </div>
        

        <ul class="flex justify-between flex-wrap">
            <li v-for="musicItem in musicList" v-bind:key="musicItem.id" class="mx-2 my-2">

                <div v-if="musicItem.type == 'soundcloud' || musicItem.type == 'youtube'" class="music-box-frame-container music-box opacity-75 hover:opacity-100 shadow-md hover:shadow-lg bg-gray-300">
                    <SoundCloudBox 
                        v-if="musicItem.type == 'soundcloud'" 
                        :embed-type="musicItem.embedType" 
                        :sound-cloud-source="musicItem.sourceId"
                        :play-color="musicItem.color"
                        :isPinned="false"
                        :id="musicItem.id"
                    >
                    </SoundCloudBox>

                    <YouTubeBox
                        v-if="musicItem.type == 'youtube'"
                        :youtube-source="musicItem.sourceId"
                        :isPinned="false"
                        :id="musicItem.id"
                    >
                    </YouTubeBox>
                </div>

                <div v-else class="music-box-frame-container"></div>
               
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
            // data here
        }
    },
    computed: {
        musicList () {
            let list = [];
            let boxId = 100;

            for (let index in this.$store.state.musicContent) {
                let musicPiece = this.$store.state.musicContent[index]
                list.push(musicPiece)
            }

            
            if (list.length % 4 !== 0) {
                for (let i = 0; i < (list.length % 4); i++) {
                    let emptyBox = {type: 'emptyBox', id: boxId};
                    list.push(emptyBox);
                    boxId++;
                }
            }

            return list;
        },
        pinnedList () {
            let list = [];
             let boxId = 100;

            if (Object.keys(this.$store.state.pinnedMusicContent).length <= 0) {
                return [];
            }

            for (let index in this.$store.state.pinnedMusicContent) {
                let musicPiece = this.$store.state.pinnedMusicContent[index]
                list.push(musicPiece)
            }

            if (list.length % 4 !== 0) {
                for (let i = 0; i < (list.length % 4); i++) {
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
.pinned-items-container > ul {
    background: rgba(0,0,0,.05);
    border-radius: 6px;
}

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