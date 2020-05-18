
<template>
    <div class="todo-list-display max-w-screen-md bg-gray-100 m-auto shadow-lg">
        <div class="text-right p-2">
            <ToolCloseBtn />
        </div>
        
        TODO LIST DISPLAY
    </div>
</template>


<script>
import ToolCloseBtn from './ToolCloseBtn'

export default {
    name: 'TodoListDisplay',
    components: {
        ToolCloseBtn
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