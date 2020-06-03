<template>
    <li @mouseenter="isHovered = true" @mouseleave="isHovered = false">
        <div class="rounded-lg flex text-gray-700 hover:text-teal-600 bg-white shadow-sm hover:shadow-md px-3 py-4 mb-3" :class="{'bg-gray-200': todoItem.complete}">
            <div class="completion-icon-wrapper mr-4">
                <div class="completion-icon relative cursor-pointer mt-1" @click="toggleTodoComplete" @mouseenter="checkBoxHovered = true" @mouseleave="checkBoxHovered = false">
                    <font-awesome-icon :icon="['fas', 'square']" class="opacity-75 text-2xl" :class="todoItem.complete ? 'text-gray-100' : 'text-gray-300'"></font-awesome-icon>

                    <div class="completion-check" 
                        :class="{'opacity-50': (!todoItem.complete && checkBoxHovered)}" 
                        v-if="todoItem.complete || (!todoItem.complete && checkBoxHovered)">
                        
                        <font-awesome-icon :icon="['fal', 'check']" class="text-teal-500 text-2xl"></font-awesome-icon>
                    </div>
                </div>
            </div>

            <div class="todo-text text-xl leading-tight mr-4 text-left" :class="{'opacity-50': todoItem.complete}">
                {{ todoItem.todoText }}
            </div>

            <div class="todo-actions ml-auto cursor-pointer" :class="{'hidden': !isHovered}">
                <div class="todo-action-icon mt-1">
                    <font-awesome-icon :icon="['fas', 'trash-alt']" class="text-gray-500 hover:text-red-700 text-lg" @click="removeTodoItem"></font-awesome-icon>
                </div>
            </div>
        </div>
    </li>
</template>


<script>
export default {
    name: 'TodoItem',
    data () {
        return {
            isHovered: false,
            checkBoxHovered: false
        }
    },
    props: {
        'todoItem': Object
    },
    methods: {
        removeTodoItem () {
            this.$store.commit('removeTodoItem', {uuid: this.todoItem.id});
        },

        toggleTodoComplete () {
            this.$store.commit('toggleTodoItemComplete', {uuid: this.todoItem.id});
        }
    }
}
</script>


<style>
.todo-text {
    margin-top: 2px;
    text-decoration-color: #ddd;
}

.completion-check {
    position: absolute;
    top: 40%;
    left: 75%;
    transform: translateX(-50%) translateY(-50%) scale(1.1);
}

.opacity-40 {
    opacity: 40%;
}
</style>