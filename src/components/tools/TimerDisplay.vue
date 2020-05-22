<template>
    <div class="timer-display max-w-screen-md bg-gray-100 m-auto shadow-lg">
        <div class="text-right p-2">
            <ToolCloseBtn />
        </div>
        

        <div class="timer-container">

            <TimerTitle class="mb-2"/>

            <div class="timer-countdown-visuals mb-6">
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
    </div>
</template>


<script>
import ToolCloseBtn from './ToolCloseBtn'
import TimerRing from '@/components/timer/TimerRing.vue'
import TimerClock from '@/components/timer/TimerClock.vue'
import TimerActions from '@/components/timer/TimerActions.vue'
import TimerTitle from '@/components/timer/TimerTitle.vue'

export default {
    name: 'TimerDisplay',
    components: {
        ToolCloseBtn,
        TimerRing,
        TimerClock,
        TimerActions,
        TimerTitle
    }
}
</script>


<style>
.timer-display {
    min-height: 65vh;
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