<template>
    <div class="timer-display max-w-screen-md bg-gray-100 m-auto shadow-lg">
        <div class="text-right p-2">
            <ToolCloseBtn />
        </div>
        

        <div v-if="!timerConfigActive" class="timer-container">

            <TimerTitle class="mb-1" />
            <TimerCountDisplay class="mb-6" />

            <div class="timer-countdown-visuals mb-8">
                <div class="timer-ring-wrapper">
                    <TimerRing />
                </div>
                
                <div class="timer-clock-wrapper">
                    <TimerClock />
                </div>

            </div>
            
            <div class="timer-actions-wrapper">
                <TimerActions />
            </div>

        </div>

        <div v-if="timerConfigActive" class="config-container mx-16">
            <TimerConfig />
        </div>
        
    </div>
</template>


<script>
import ToolCloseBtn from './ToolCloseBtn'
import TimerRing from '@/components/timer/TimerRing.vue'
import TimerClock from '@/components/timer/TimerClock.vue'
import TimerActions from '@/components/timer/TimerActions.vue'
import TimerTitle from '@/components/timer/TimerTitle.vue'
import TimerCountDisplay from '@/components/timer/TimerCountDisplay.vue'
import TimerConfig from '@/components/configs/TimerConfig.vue'

import { EventBus } from '@/bus/eventBus'

export default {
    name: 'TimerDisplay',
    components: {
        ToolCloseBtn,
        TimerRing,
        TimerClock,
        TimerActions,
        TimerTitle,
        TimerCountDisplay,
        TimerConfig
    },
    computed: {
        timerConfigActive () {
            return this.$store.state.countdownTimer.timerConfigActive;
        }
    },
    created () {
        if (this.$store.state.pomodoro.pomodoros.length <= 0) {
            this.$store.dispatch('initPomodoros');

            EventBus.$on('timer-finsihed', () => {
                this.$store.dispatch('loadNextPomodoro');
            })
        }
        
    }
}
</script>


<style>
.timer-display {
    min-height: 70vh;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}

.timer-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}

.timer-countdown-visuals {
    position: relative;
    width: 350px;
    height: 350px;
    margin: auto;
}

.timer-ring-wrapper {
    width: 350px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}

.timer-clock-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}


</style>