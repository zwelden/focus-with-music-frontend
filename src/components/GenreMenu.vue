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

        <div class="genre-menu-item flex justify-center items-center text-teal-700 font-medium shadow-md hover:shadow-lg cursor-pointer mb-4 bg-gray-200">
            Classical
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
    right: calc((100vw - 1280px) / 2);
    border-radius: 10px;
}

.genre-menu .genre-menu-item {
    width: 6.5rem;
    height: 3.5rem;
    border-radius: 6px;
    /* background: #efefef; */
}

@media screen and (max-width: 1280px) {
    .genre-menu {
        right: calc((100vh - 768px) / 2)
    }
}
</style>