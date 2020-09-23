<template>
    <div class="logout-user-display max-w-screen-md bg-gray-100 m-auto shadow-lg">
        <div class="text-right p-2">
            <AuthToolCloseBtn />
        </div>
        
        LOGOUT USER DISPLAY
    </div>
</template>


<script>
import AuthToolCloseBtn from './AuthToolCloseBtn'

export default {
    name: 'LogoutUser',
    components: {
        AuthToolCloseBtn
    }
}
</script>


<style>
.logout-user-display {
    min-height: 65vh;
    border-radius: 10px;
    overflow: hidden;
}
</style>