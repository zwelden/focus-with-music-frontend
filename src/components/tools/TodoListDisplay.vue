
<template>
    <div class="todo-list-display max-w-screen-md bg-gray-100 m-auto shadow-lg">
        <div class="text-right p-2">
            <ToolCloseBtn />
        </div>
        
        <div class="max-w-md text-center m-auto">
            <TodoItemEntry class="mb-10"/>

            <TodoList />
        </div>
        
    </div>
</template>


<script>
import ToolCloseBtn from './ToolCloseBtn'
import TodoItemEntry from '@/components/todo_list/TodoItemEntry.vue'
import TodoList from '@/components/todo_list/TodoList.vue'

export default {
    name: 'TodoListDisplay',
    components: {
        ToolCloseBtn,
        TodoItemEntry,
        TodoList
    }
}
</script>


<style>
.todo-list-display {
    min-height: 65vh;
    border-radius: 10px;
    overflow: hidden;
}
</style>