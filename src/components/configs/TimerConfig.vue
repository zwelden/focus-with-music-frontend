<template>
    <div class="pomodoro-config-manager-card rounded overflow-hidden py-4 px-8 text-center">
        <div class="text-xl text-gray-600 font-semibold mb-6">
            Timer Config
        </div>
        <ConfigSlider 
            v-model="focusMinutes" 
            @change="dumpEvent" 
            :min="1" 
            :max="60" 
            :option-title="'Focus Minutes'" 
            class="mb-10">
        </ConfigSlider>

        <ConfigSlider 
            v-model="shortRestMinutes" 
            @change="dumpEvent" 
            :min="1" 
            :max="30" 
            :option-title="'Short Rest Minutes'" 
            class="mb-10">
        </ConfigSlider>

        <ConfigSlider 
            v-model="longRestMinutes" 
            @change="dumpEvent" 
            :min="1" 
            :max="60" 
            :option-title="'Long Rest Minutes'" 
            class="mb-10">
        </ConfigSlider>

        <ConfigSlider 
            v-model="intervals" 
            @change="dumpEvent" 
            :min="1" 
            :max="15" 
            :option-title="'Pomodoro Intervals'" 
            class="mb-10">
        </ConfigSlider>

        <div class="text-center">
            <button @click="closeConfig"
                class="config-back-btn rounded-lg p-4 relative mx-2 text-3xl bg-gray-300 bg-opacity-75 hover:bg-opacity-100 shadow-md text-teal-500 hover:bg-teal-400 hover:text-gray-100 cursor-pointer"
            >
                <font-awesome-icon :icon="['fas', 'arrow-left']" ></font-awesome-icon>
            </button>

            <button @click="applyConfig"
                class="config-back-btn rounded-lg p-4 relative mx-2 text-3xl bg-gray-300 bg-opacity-75 hover:bg-opacity-100 shadow-md text-teal-500 hover:bg-teal-400 hover:text-gray-100 cursor-pointer"
            >
                <font-awesome-icon :icon="['fas', 'check']" ></font-awesome-icon>
            </button>
        </div>
    </div>
</template>


<script>
import ConfigSlider from '@/components/configs/ConfigSlider.vue';

export default {
    name: 'PomodoroConfigManager',
    components: {
        ConfigSlider
    },
    data() {
        return {
            focusMinutes: 0,
            shortRestMinutes: 0,
            longRestMinutes: 0,
            intervals: 0
        }
    },
    methods: {
        dumpEvent () {
            // do nothing
            return true;    
        },

        applyConfig () {
            let newFocusLength = this.focusMinutes * 60;
            let newRestLength = this.shortRestMinutes * 60;
            let newLongRestLength = this.longRestMinutes * 60;
            let newIntervals = this.intervals * 1;
            let newConfig = {
                focusLength : newFocusLength,
                restLength : newRestLength,
                longRestLength : newLongRestLength,
                numPomodoros : newIntervals,
            };

            this.$store.dispatch('updatePomodoroConfig', {newConfig: newConfig});
            this.$store.commit('setTimerConfigInactive');
        },

        closeConfig() {
            this.$store.commit('setTimerConfigInactive');
        }
    },
    created () {
        this.focusMinutes = this.$store.state.pomodoro.config.focusLength / 60;
        this.shortRestMinutes = this.$store.state.pomodoro.config.restLength / 60;
        this.longRestMinutes = this.$store.state.pomodoro.config.longRestLength / 60;
        this.intervals = this.$store.state.pomodoro.config.numPomodoros;
    }
}
</script>


<style>
.config-back-btn {
    height: 3rem;
    width: 3rem;
}

.config-back-btn svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
</style>