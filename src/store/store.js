import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
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
            {
                type: 'youtube',
                sourceId: 'X1uaOtiJ9Vc',
                emedType: 'na',
                color: ''
            },
            {
                type: 'youtube',
                sourceId: 'BnSjnz_mSxk',
                emedType: 'na',
                color: ''
            },
            {
                type: 'youtube',
                sourceId: 'O6CyK4HJ2xU',
                emedType: 'na',
                color: ''
            },
        ]
    },
    mutations: {

    },
})