<template>
    <div class="todo-completion-count-wrapper m-auto" v-if="totalTodos > 0">
        <div class="completed-todo-count text-teal-600 font-semibold">{{ completedTodos }}</div>
        <div class="total-todo-count text-teal-600 font-semibold">{{ totalTodos }}</div>
    </div>
</template>


<script>
export default {
    name: 'TodoCompletionCount',
    computed: {
        totalTodos () {
            return this.$store.state.todoList.todos.length;
        },

        completedTodos () {
            let todos = this.$store.state.todoList.todos;
            let completionCount = todos.reduce((acc, todo) => { 
                return (todo.complete === true) ? acc + 1 : acc;
            }, 0);

            return completionCount;
        }
    }
}
</script>


<style>
.todo-completion-count-wrapper {
    width: 1rem;
}

.completed-todo-count,
.total-todo-count {
    line-height: 1.1;
    text-align: center;
}

.completed-todo-count {
    /* padding-bottom: 2px; */
    border-bottom: 1px solid teal;
    margin-bottom: 2px;
}

</style>