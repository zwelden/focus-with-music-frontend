<template>
    <div class="timer-clock text-center text-3xl font-semibold">
        {{ timeRemaining }}
    </div>
</template>


<script>
export default {
    name: 'TimerClock',
    computed: {
        timeRemaining () {
            let timeLeft = this.$store.state.countdownTimer.timeRemaining;
            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;
            
            let minutesStr = '0' + minutes;
            let secondsStr = '0' + seconds;

            return minutesStr.slice(-2) + ':' + secondsStr.slice(-2);
        }
    }
}
</script>