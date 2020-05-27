<template>
    <div class="todo-list-container mb-10">
        <ul>
            <li v-for="todo in todoList" :key="todo.key" class="border border-gray-200 border-r-0 border-b-0 last:border-b border-l-0">
                <div class="flex text-gray-600 hover:text-teal-600 cursor-pointer py-4" @mouseover="todo.hover = true" @mouseout="todo.hover = false">
                    <div class="completion-icon-wrapper mr-4">
                        <div class="completion-icon relative">
                            <font-awesome-icon :icon="['fas', 'square']" class="text-gray-300 opacity-75 text-3xl"></font-awesome-icon>

                            <div class="completion-check" 
                                :class="{'opacity-50': (!todo.complete && todo.hover)}" 
                                v-if="todo.complete || (!todo.complete && todo.hover)">
                                
                                <font-awesome-icon :icon="['fas', 'check']" class="text-teal-500 text-2xl"></font-awesome-icon>
                            </div>
                        </div>
                    </div>

                    <div class="todo-text text-xl leading-none mr-4 text-left" :class="{'opacity-80': todo.complete}">
                        {{ todo.todoText }}
                    </div>

                    <div class="todo-actions ml-auto">
                        <font-awesome-icon :icon="['fas', 'trash-alt']" class="text-gray-500 hover:text-red-700 text-xl"></font-awesome-icon>
                    </div>
                </div>
                
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name: 'TodoList',
    data () {
        return {
            todoList: [
                {key: 1, todoText: 'work on important thing', complete: false, hover: false},
                {key: 2, todoText: 'build rocket', complete: false, hover: false},
                {key: 3, todoText: 'code something', complete: true, hover: false},
                {key: 4, todoText: 'a quick brown fox jumps over the lazy dog plus extra words', complete: true, hover: false},
                {key: 5, todoText: 'work on important thing 2', complete: false, hover: false},
                {key: 6, todoText: 'build rocket 2', complete: false, hover: false},
                {key: 7, todoText: 'code something 2', complete: true, hover: false},
            ]
        }
    },
}
</script>


<style>
.todo-text {
    margin-top: 2px;
    text-decoration-color: #ddd;
}

.completion-check {
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translateX(-50%) translateY(-50%) scale(1.1);
}

.opacity-80 {
    opacity: 80%;
}
</style>