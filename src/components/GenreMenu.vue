<template>
    <div class="genre-menu">
        <div class="genre-menu-item flex justify-center items-center text-teal-700 font-medium shadow-md hover:shadow-lg cursor-pointer mb-4 bg-gray-200">
            Electronic
        </div>

        <div class="genre-menu-item flex justify-center items-center text-teal-700 font-medium shadow-md hover:shadow-lg cursor-pointer mb-4 bg-gray-200">
            LoFi
        </div>

        <div class="genre-menu-item flex justify-center items-center text-teal-700 font-medium shadow-md hover:shadow-lg cursor-pointer mb-4 bg-gray-200">
            Jazz
        </div>

        <div class="genre-menu-item flex justify-center items-center text-teal-700 font-medium shadow-md hover:shadow-lg cursor-pointer mb-4 bg-gray-200">
            Ambient
        </div>

        <div class="genre-menu-item flex justify-center items-center text-teal-700 font-medium shadow-md hover:shadow-lg cursor-pointer mb-4 bg-gray-200">
            Instrumental
        </div>
    </div>
</template>


<script>
export default {
    name: 'GenreMenu'
}
</script>


<style>
.genre-menu {
    position: fixed;
    top: 6rem;
    right: 6rem;
    border-radius: 10px;
}

.genre-menu .genre-menu-item {
    width: 6.5rem;
    height: 4.5rem;
    border-radius: 6px;
    /* background: #efefef; */
}
</style>