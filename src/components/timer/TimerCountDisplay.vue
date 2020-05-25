<template>
    <div class="timer-sequence-display leading-none text-lg text-gray-500 font-semibold">
        <span class="currentCount">{{ currentCount }}</span>&nbsp;of&nbsp;<span class="total-count">{{ totalCount }}</span>
    </div>
</template>

<script>
export default {
    name: 'TimerSequenceDisplay',
    computed: {
        currentCount () {
            return this.$store.state.pomodoro.currentPomodoro + 1;
        },

        totalCount () {
            if (this.$store.state.pomodoro.config.numPomodoros) {
                return this.$store.state.pomodoro.config.numPomodoros;
            }

            return 0;
        }
    }
}
</script>