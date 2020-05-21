<template>
    <div class="timer-display max-w-screen-md bg-gray-100 m-auto shadow-lg">
        <div class="text-right p-2">
            <ToolCloseBtn />
        </div>
        

        <div class="timer-container">
            <TimerRing />
            
            <TimerClock />

            <TimerActions />
        </div>
    </div>
</template>


<script>
import ToolCloseBtn from './ToolCloseBtn'
import TimerRing from '@/components/timer/TimerRing.vue'
import TimerClock from '@/components/timer/TimerClock.vue'
import TimerActions from '@/components/timer/TimerActions.vue'

export default {
    name: 'TimerDisplay',
    components: {
        ToolCloseBtn,
        TimerRing,
        TimerClock,
        TimerActions
    }
}
</script>


<style>
.timer-display {
    min-height: 65vh;
    border-radius: 10px;
    overflow: hidden;
}
</style>