import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        pinnedMusicContent: [
            {
                id: 8,
                type: 'youtube',
                sourceId: 'BnSjnz_mSxk',
                emedType: 'na',
                color: ''
            },
        ],
        musicContent: [
            {
                id: 1,
                type: 'soundcloud',
                sourceId: '222896338',
                embedType: 'playlists',
                color: 'ff5500'
            },
            {
                id: 2,
                type: 'youtube',
                sourceId: 'JvKjJeXrFvc',
                emedType: 'na',
                color: ''
            },
            {
                id: 3,
                type: 'youtube',
                sourceId: 'gtmzPUmq7XU',
                emedType: 'na',
                color: ''
            },
            {
                id: 4,
                type: 'youtube',
                sourceId: 'M5QY2_8704o',
                emedType: 'na',
                color: ''
            },
            {
                id: 5,
                type: 'youtube',
                sourceId: 'wtg7AetxuWo',
                emedType: 'na',
                color: ''
            },
            {
                id: 6,
                type: 'soundcloud',
                sourceId: '207648481',
                embedType: 'tracks',
                color: 'ff5500'
            },
            {
                id: 7,
                type: 'youtube',
                sourceId: 'X1uaOtiJ9Vc',
                emedType: 'na',
                color: ''
            },
            {
                id: 9,
                type: 'youtube',
                sourceId: 'O6CyK4HJ2xU',
                emedType: 'na',
                color: ''
            },
            {
                id: 10,
                type: 'youtube',
                sourceId: 'iAYMJk9IsDA',
                emedType: 'na',
                color: ''
            },
        ]
    },
    mutations: {
        addPinnedVideo (state, payload) {
            let musicId = payload.id;
            let targetIndex = null;
            let targetMusicObj = null;

            for (let index in state.musicContent) {
                if (state.musicContent[index].id == musicId) {
                    targetIndex = index;
                    break;
                }
            }

            if (targetIndex !== null && targetIndex >= 0) {
                targetMusicObj = state.musicContent[targetIndex];
                state.musicContent.splice(targetIndex, 1);
                state.pinnedMusicContent.push(targetMusicObj);
            }
        }
    },
})