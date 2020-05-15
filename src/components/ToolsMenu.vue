<template>
    <div class="tools-menu">
        <div class="tools-menu-item flex justify-center items-center shadow-md mb-4 cursor-pointer hover:shadow-lg bg-gray-200">
            <font-awesome-icon :icon="['fas', 'stopwatch']" class="text-2xl text-teal-700"></font-awesome-icon>
        </div>

        <div class="tools-menu-item flex justify-center items-center shadow-md mb-4 cursor-pointer hover:shadow-lg bg-gray-200">
            <font-awesome-icon :icon="['fas', 'list']" class="text-2xl text-teal-700"></font-awesome-icon>
        </div>

        <div class="tools-menu-item flex justify-center items-center shadow-md mb-4 cursor-pointer hover:shadow-lg bg-gray-200">
            <font-awesome-icon :icon="['fas', 'analytics']" class="text-2xl text-teal-700"></font-awesome-icon>
        </div>

        <div class="tools-menu-item flex justify-center items-center shadow-md mb-4 cursor-pointer hover:shadow-lg bg-gray-200">
            <font-awesome-icon :icon="['fas', 'cog']" class="text-2xl text-teal-700"></font-awesome-icon>
        </div>
    </div>
</template>


<script>
export default {
    name: 'ToolsMenu'
}
</script>


<style>
.tools-menu {
    position: fixed;
    top: 6rem;
    left: 6rem;
    /* background: rgba(255, 255, 255, 0.4); */
    border-radius: 10px;
}

.tools-menu .tools-menu-item {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 6px;
    /* background: #efefef; */
}
</style>