<template>
    <div class="timer-ring flex justify-center">
        <svg class="timer-ring-svg" viewBox="0 0 100 100">
            <g class="timer-ring-circle">
                <circle class="timer-ring-circle-path" :class="{'red' : isRed}" :stroke-width="strokeWidth" cx="50" cy="50" r="45"></circle>
                <path 
                    id="timer-ring-path-remaining"
                    :stroke-dasharray="circleCompletionValue"
                    :stroke-width="strokeWidth"
                    class="timer-ring-path-remaining"
                    d="
                        M 50, 50
                        m -45, 0
                        a 45,45 0 1,0 90,0
                        a 45,45 0 1,0 -90,0
                    "
                >
                </path>
            </g>
        </svg>
    </div>
</template>


<script>
export default {
    name: 'TimerRing',
    props: {
        'strokeWidth': {
            type: Number,
            default: 5
        }
    },
    computed: {
        timerLength () {
            return this.$store.state.countdownTimer.timerLength;
        },

        timeRemaining () {
            return this.$store.state.countdownTimer.timeRemaining;
        },

        circleCompletionValue () {
            let percentComplete  = this.timeRemaining / this.timerLength;
            let dashArraySizeModificaiton = percentComplete - (1 / this.timerLength) * (1 - percentComplete);
            let dashArrayFractional = 283 * dashArraySizeModificaiton;
            return dashArrayFractional + ' 283';
        },

        isRed () {
            if (this.$store.state.countdownTimer.timeRemaining <= 10 && this.$store.state.countdownTimer.timeRemaining > 0) {
                return true;
            }
             
            return false;
        }
    }
}
</script>


<style>
.timer-ring-svg {
    height: 100%;
    width: 100%;
}

.timer-ring-circle {
    fill: none;
    stroke: none;
}

.timer-ring-circle-path {
    stroke: #ececef;
}

.timer-ring-path-remaining {
    stroke: #4fd1c5;
    /* stroke-linecap: round; */
    transform-origin: center;
    transform: rotate(90deg);
    transition: 1s linear all;
}

.timer-ring-circle-path.red {
    stroke: rgb(255, 192, 192);
    animation: flash-red 2s infinite;
}

@keyframes flash-red {
    0% {
        fill: transparent;
    }
    50% {
        /* fill: rgb(255, 101, 101); */
        fill: rgb(255, 161, 161);
    }
    100% {
        fill: transparent;
    }
}
</style>