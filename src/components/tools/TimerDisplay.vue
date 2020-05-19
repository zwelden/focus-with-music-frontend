<template>
    <div class="timer-display max-w-screen-md bg-gray-100 m-auto shadow-lg">
        <div class="text-right p-2">
            <ToolCloseBtn />
        </div>
        

        <div class="timer-container">
            <TimerRing />
            
            <TimerClock />
        </div>
    </div>
</template>


<script>
import ToolCloseBtn from './ToolCloseBtn'
import TimerRing from '@/components/timer/TimerRing.vue'
import TimerClock from '@/components/timer/TimerClock.vue'

export default {
    name: 'TimerDisplay',
    components: {
        ToolCloseBtn,
        TimerRing,
        TimerClock,
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