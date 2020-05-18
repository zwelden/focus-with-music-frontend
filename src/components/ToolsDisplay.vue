<template>
    <div class="tools-display px-6 py-20" v-if="toolsActive" @click="emitHideTools">

        <TimerDisplay v-if="tools.timer.active" @click.native="clickCapture" />
        <TodoListDisplay v-if="tools.todoList.active" @click.native="clickCapture" />
        <AnalyticsDisplay v-if="tools.analytics.active" @click.native="clickCapture" />
        <ConfigurationDisplay v-if="tools.configuration.active" @click.native="clickCapture" />

    </div>
</template>


<script>
import { EventBus } from '../bus/eventBus';

import TimerDisplay from '../components/tools/TimerDisplay.vue'
import TodoListDisplay from '../components/tools/TodoListDisplay.vue'
import AnalyticsDisplay from '../components/tools/AnalyticsDisplay.vue'
import ConfigurationDisplay from '../components/tools/ConfigurationDisplay.vue'

export default {
    name: 'ToolsDisplay',
    components: {
        TimerDisplay,
        TodoListDisplay,
        AnalyticsDisplay,
        ConfigurationDisplay,
    },
    data () {
        return {
            toolsActive: false,
            tools: {
                timer: {
                    active: false
                },
                todoList: {
                    active: false
                },
                analytics: {
                    active: false
                },
                configuration: {
                    active: false
                }
            }
        }
    },
    methods: {
        clickCapture (event) {
            event.preventDefault();
            event.stopPropagation();
        },

        emitHideTools () {
            EventBus.$emit('hideActiveTools');
        },

        hideTools () {
            this.toolsActive = false;
            this.hideActiveTools();
        },

        hideActiveTools () {
            for (let tool in this.tools) {
                this.tools[tool].active = false;
            }
        },

        showTool(toolName) {
            if (!this.tools[toolName]) {
                return false;
            }

            this.tools[toolName].active = true;

            return true;
        }
    },
    mounted () {
        EventBus.$on('hideActiveTools', () => {
            this.hideTools()
        });

        EventBus.$on('showTool', (data) => {
            let toolName = data.toolName;
            let isToolActive = false;

            this.hideActiveTools();
            isToolActive = this.showTool(toolName);
            
            this.toolsActive = isToolActive;
        });
    }
}
</script>


<style>
.tools-display {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: rgba(0,0,0,0.5);
}
</style>