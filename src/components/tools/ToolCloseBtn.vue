<template>
    <div 
        class="tools-close-btn inline-block leading-none border border-gray-600 text-gray-600 py-1 px-2 rounded cursor-pointer hover:bg-gray-600 hover:text-gray-100" 
        @click="hideTools">
        
        <font-awesome-icon :icon="['fas', 'times']" class="text-md leading-none"></font-awesome-icon>
    </div>
</template>


<script>
import { EventBus } from '@/bus/eventBus'

export default {
    name: 'ToolCloseBtn',
    methods: {
        hideTools () {
            EventBus.$emit('hideActiveTools');
        }
    }
}
</script>