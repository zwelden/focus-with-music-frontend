<template>
    <div class="tools-menu">
        <div class="tools-menu-item relative flex justify-center items-center shadow-md mb-4 cursor-pointer hover:shadow-lg bg-gray-200" 
            @click="showTool('timer')">

            <font-awesome-icon :icon="['fas', 'stopwatch']" class="text-2xl text-teal-700"></font-awesome-icon>

            <div v-if="isTimerRunning" class="side-timer-ring-wrapper">
                <TimerRing :stroke-width="20"/>
            </div>
        </div>

        <div class="tools-menu-item flex justify-center items-center shadow-md mb-4 cursor-pointer hover:shadow-lg bg-gray-200" 
            @click="showTool('todoList')">

            <font-awesome-icon :icon="['fas', 'list']" class="text-2xl text-teal-700"></font-awesome-icon>
        </div>

        <div class="tools-menu-item flex justify-center items-center shadow-md mb-4 cursor-pointer hover:shadow-lg bg-gray-200"  
            @click="showTool('analytics')">

            <font-awesome-icon :icon="['fas', 'analytics']" class="text-2xl text-teal-700"></font-awesome-icon>
        </div>

        <div class="tools-menu-item flex justify-center items-center shadow-md mb-4 cursor-pointer hover:shadow-lg bg-gray-200"
            @click="showTool('configuration')">

            <font-awesome-icon :icon="['fas', 'cog']" class="text-2xl text-teal-700"></font-awesome-icon>
        </div>
    </div>
</template>


<script>
import { EventBus } from '@/bus/eventBus'

import TimerRing from '@/components/timer/TimerRing.vue'

export default {
    name: 'ToolsMenu',
    components: {
        TimerRing
    },
    methods: {
        showTool (toolName) {
            EventBus.$emit('showTool', {toolName: toolName});
        }
    },
    computed: {
        isTimerRunning () {
            return this.$store.state.countdownTimer.timerRunning;
        }
    }
}
</script>


<style>
.tools-menu {
    position: fixed;
    top: 6rem;
    left: calc((100vw - 1280px) / 2);
    /* background: rgba(255, 255, 255, 0.4); */
    border-radius: 10px;
}

.tools-menu .tools-menu-item {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 6px;
    /* background: #efefef; */
}

.side-timer-ring-wrapper {
    position: absolute;
    top: 50%;
    right: -3rem;
    width: 2rem;
    transform: translateY(-50%);
}

.side-timer-ring-wrapper svg {
    overflow: visible;
}

@media screen and (max-width: 1280px) {
    .tools-menu {
        left: calc((100vh - 768px) / 2)
    }
}
</style>