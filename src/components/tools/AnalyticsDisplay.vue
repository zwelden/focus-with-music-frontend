<template>
    <div class="analytics-display max-w-screen-md bg-gray-100 m-auto shadow-lg">
        <div class="text-right p-2">
            <ToolCloseBtn />
        </div>
        
        ANALYTICS DISPLAY
    </div>
</template>


<script>
import ToolCloseBtn from './ToolCloseBtn'

export default {
    name: 'AnalyticsDisplay',
    components: {
        ToolCloseBtn
    }
}
</script>


<style>
.analytics-display {
    min-height: 65vh;
    border-radius: 10px;
    overflow: hidden;
}
</style>