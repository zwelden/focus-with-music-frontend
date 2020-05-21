<template>
    <div class="timer-actions flex justify-center">
        <div class="play-btn mx-4" @click="startTimer">
            <font-awesome-icon :icon="['fas', 'play']" class="text-3xl text-teal-500"></font-awesome-icon>
        </div>
        <div class="pause-btn mx-4" @click="stopTimer">
            <font-awesome-icon :icon="['fas', 'pause']" class="text-3xl text-teal-500"></font-awesome-icon>
        </div>
        <div class="pause-btn mx-4"  @click="resetTimer">
            <font-awesome-icon :icon="['fas', 'undo-alt']" class="text-3xl text-teal-500"></font-awesome-icon>
        </div>
    </div>
</template>


<script>
export default {
    name: 'TimerActions',
    methods: {
        startTimer () {
            this.$store.dispatch('startTimer');
        },

        stopTimer () {
            this.$store.commit('stopTimer');
        },

        resetTimer () {
            this.$store.commit('resetTimer');
        }
    }
}
</script>