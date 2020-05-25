<template>
    <div class="genre-menu">
        <div class="genre-menu-item flex justify-center items-center shadow-md mb-4 cursor-pointer hover:shadow-lg bg-gray-200">
            <font-awesome-icon :icon="['fas', 'search']" class="text-2xl text-teal-700"></font-awesome-icon>
        </div>

        <div class="genre-menu-item flex justify-center items-center shadow-md mb-4 cursor-pointer hover:shadow-lg bg-gray-200">
            <font-awesome-icon :icon="['fas', 'sliders-h']" class="text-2xl text-teal-700"></font-awesome-icon>
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
    width: 3.5rem;
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