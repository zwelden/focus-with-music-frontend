<template>
    <div class="todo-list-container mb-10">
        <ul>
            <TodoItem 
                v-for="todo in todoList"
                :todoItem="todo"
                :key="todo.id">
            </TodoItem>
        </ul>
    </div>
</template>


<script>
import TodoItem from '@/components/todo_list/TodoItem.vue'

export default {
    name: 'TodoList',
    components: {
        TodoItem,
    },
    computed: {
        todoList () {
            return this.$store.state.todoList.todos
        }
    }
}
</script>


<style>

</style>