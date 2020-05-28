<template>
    <div class="todo-item-entry rounded-lg flex overflow-hidden shadow-md">
        <input type="text" class="block w-full rounded-lg rounded-r-none px-4 py-2 text-xl text-teal-700" v-model="todoText" placeholder="New Todo Item">
        <button 
            class="add-todo-btn rounded-lg rounded-l-none p-4 relative text-2xl bg-gray-300 bg-opacity-75 hover:bg-opacity-100 text-teal-500 hover:bg-teal-400 hover:text-gray-100 cursor-pointer"
            @click="addTodo">
            <font-awesome-icon :icon="['fas', 'plus']" class=""></font-awesome-icon>
        </button>
    </div>
</template>


<script>
export default {
    name: 'TodoItemEntry',
    data () {
        return {
            todoText: ''
        }
    },
    methods: {
        addTodo () {
            if (this.todoText.length < 2) {
                return;
            }

            this.$store.commit('addTodoItem', {todoText: this.todoText});

            this.todoText = '';
        }
    }
}
</script>


<style>
.add-todo-btn {
    height: 3rem;
    width: 3rem;
}

.add-todo-btn svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
</style>