<template>
    <div class="config-option-wrapper">
        <div class="flex justify-between items-center">
            <div class="config-option-title text-lg text-gray-700 mb-1">
                {{ optionTitle }}
            </div>
            <div class="config-option-value">
                <input 
                    type="number" 
                    :value="value" 
                    v-on:input="updateValue($event.target.value)" 
                    v-on:change="onChange" 
                    :min="min" 
                    :max="max" 
                    step="1" 
                    class="text-center bg-gray-200 rounded p-1 text-teal-700 font-semibold">
            </div>
        </div>
        <div class="config-option-slider">
            <input 
                type="range" 
                :min="min" 
                :max="max" 
                :value="value" 
                v-on:input="updateValue($event.target.value)" 
                v-on:change="onChange" 
                class="config-option-input bg-gray-300">
        </div>
    </div>
</template>

<script>
export default {
    name: 'ConfigOptionSliderInput',
    props: ['value', 'min', 'max', 'optionTitle'],
    methods: {
      updateValue (value) {
        this.$emit('input', value)
      },

      onChange (e) {
          this.$emit('change', e)
      }
    }
}
</script>

<style>
.config-option-value input {
    width: 5rem;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
}

.config-option-value input::-webkit-inner-spin-button, 
.config-option-value input::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    margin: 0;
}

.config-option-input {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 6px;
    opacity: 0.6;
}

.config-option-input:hover {
    opacity: 1;
    background: #cbd5e0 !important;
}

.config-option-input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    background: #4fd1c5;
    cursor: pointer;
    border-radius: 100%;
}

.config-option-input:focus {
    -webkit-appearance: none;
    appearance: none;
    outline: none;
}
</style>