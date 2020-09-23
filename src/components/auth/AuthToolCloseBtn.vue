<template>
    <div 
        class="auth-tools-close-btn inline-block leading-none shadow bg-gray-300 text-gray-600 py-1 px-2 rounded cursor-pointer hover:bg-gray-600 hover:text-gray-100" 
        @click="hideAuthTools">
        
        <font-awesome-icon :icon="['fas', 'times']" class="text-md leading-none"></font-awesome-icon>
    </div>
</template>


<script>
import { EventBus } from '@/bus/eventBus'

export default {
    name: 'AuthToolCloseBtn',
    methods: {
        hideAuthTools () {
            EventBus.$emit('hideActiveAuthTools');
        }
    }
}
</script>