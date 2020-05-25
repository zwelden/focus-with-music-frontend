<template>
    <div class="timer-title flex justify-center items-center leading-none">
        <div class="focus-title section-title font-semibold mx-3" :class="isFocusStep ? 'text-2xl text-teal-600' : 'text-xl text-gray-400'">
            Focus
        </div>
        <div class="rest-title section-title font-semibold mx-3" :class="isRestStep ? 'text-2xl text-teal-600' : 'text-xl text-gray-400'">
            Rest
        </div>
    </div>
</template>


<script>
export default {
    name: 'TimerTitle',
    computed: {
        activeStep () {
            return this.$store.state.pomodoro.currentPomodoroStep;
        },

        isFocusStep () {
            return (this.activeStep === 'focus');
        },

        isRestStep () {
            return (this.activeStep === 'rest');
        }
    }
}
</script>