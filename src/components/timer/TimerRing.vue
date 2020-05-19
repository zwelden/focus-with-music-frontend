<template>
    <div class="timer-ring flex justify-center">
        <svg class="timer-ring-svg" viewBox="0 0 100 100">
            <g class="timer-ring-circle">
                <circle class="timer-ring-circle-path" cx="50" cy="50" r="45"></circle>
                <path 
                    id="timer-ring-path-remaining"
                    stroke-dasharray="283"
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
    name: 'TimerRing'
}
</script>


<style>
.timer-ring-svg {
    height: 350px;
    width: 350px;
}

.timer-ring-circle {
    fill: none;
    stroke: none;
}

.timer-ring-circle-path {
    stroke-width: 5px;
    stroke: none;
}

.timer-ring-path-remaining {
    stroke-width: 5px;
    stroke: #4fd1c5;
    stroke-linecap: round;
    transform-origin: center;
    transform: rotate(90deg);
    transition: 1s linear all;
}
</style>