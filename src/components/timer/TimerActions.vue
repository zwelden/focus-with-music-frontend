<template>
    <div class="timer-actions flex justify-center items-center">
        <div class="timer-config-btn rounded-lg p-4 relative mx-2 text-3xl bg-gray-300 bg-opacity-75 hover:bg-opacity-100 shadow-md text-teal-500 hover:bg-teal-400 hover:text-gray-100 cursor-pointer" @click="editTimer">
            <font-awesome-icon :icon="['fas', 'cog']" class=""></font-awesome-icon>
        </div>
        <div v-if="!timerRunning" class="play-btn rounded-lg p-4 relative mx-2 text-4xl bg-gray-300 bg-opacity-75 hover:bg-opacity-100 shadow-md text-teal-500 hover:bg-teal-400 hover:text-gray-100 cursor-pointer" @click="startTimer">
            <font-awesome-icon :icon="['fas', 'play']" class=""></font-awesome-icon>
        </div>
        <div v-if="timerRunning" class="pause-btn rounded-lg p-4 relative mx-2 text-3xl bg-gray-300 bg-opacity-75 hover:bg-opacity-100 shadow-md text-teal-500 hover:bg-teal-400 hover:text-gray-100 cursor-pointer" @click="stopTimer">
            <font-awesome-icon :icon="['fas', 'pause']" class=""></font-awesome-icon>
        </div>
        <div class="reset-btn rounded-lg p-4 relative mx-2 text-3xl bg-gray-300 bg-opacity-75 hover:bg-opacity-100 shadow-md text-teal-500 hover:bg-teal-400 hover:text-gray-100 cursor-pointer"  @click="resetTimer">
            <font-awesome-icon :icon="['fas', 'undo-alt']" class=""></font-awesome-icon>
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
        },

        editTimer () {
            alert('editing timer');
        }    
    },
    computed: {
        timerRunning () {
            return this.$store.state.countdownTimer.timerRunning;
        }
    }
}
</script>


<style>
.play-btn,
.pause-btn {
    height: 4rem;
    width: 4rem;
}

.timer-config-btn,
.reset-btn {
    height: 3rem;
    width: 3rem;
}

.timer-config-btn svg,
.play-btn svg,
.pause-btn svg,
.reset-btn svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}

.play-btn svg {
    left: 55%;
}
</style>