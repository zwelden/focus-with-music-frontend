<template>
    <div class="timer-display max-w-screen-md bg-gray-100 m-auto shadow-lg">
        <div class="text-right p-2">
            <ToolCloseBtn />
        </div>
        

        TIMER DISPLAY
    </div>
</template>


<script>
import ToolCloseBtn from './ToolCloseBtn'

export default {
    name: 'TimerDisplay',
    components: {
        ToolCloseBtn
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