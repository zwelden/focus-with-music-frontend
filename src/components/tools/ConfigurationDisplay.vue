<template>
    <div class="configuration-display max-w-screen-md bg-gray-100 m-auto shadow-lg">
        <div class="text-right p-2">
            <ToolCloseBtn />
        </div>
        
        CONFIGURATION DISPLAY
    </div>
</template>


<script>
import ToolCloseBtn from './ToolCloseBtn'

export default {
    name: 'ConfigurationDisplay',
    components: {
        ToolCloseBtn
    }
}
</script>


<style>
.configuration-display {
    min-height: 65vh;
    border-radius: 10px;
    overflow: hidden;
}
</style>