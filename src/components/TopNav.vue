<template>
    <div class="top-nav text-xl">
        <div class="max-w-screen-xl flex justify-between items-center mx-auto">
            <div class="top-nav-branding p-2 cursor-pointer">
                Focus With Music
            </div>
            <div v-if="!isLoggedIn" class="top-nav-menu p-2">
                <ul class="m-0 p-0 flex">
                    <li class="text-lg bg-white border border-teal-500 hover:bg-teal-700 text-teal-500 hover:text-white font-medium py-1 px-2 rounded mr-2 cursor-pointer"
                        @click="showAuthTool('loginUser')">
                        Login
                    </li>
                    <li class="text-lg bg-teal-500 hover:bg-teal-700 text-white font-medium py-1 px-2 rounded cursor-pointer"
                        @click="showAuthTool('createUser')">
                        Signup
                    </li>
                </ul>
            </div>
            <div v-if="isLoggedIn" class="top-nav-menu p-2">
                <ul class="m-0 p-0 flex">
                    <li class="text-lg bg-white border border-teal-500 hover:bg-teal-700 text-teal-500 hover:text-white font-medium py-1 px-2 rounded mr-2 cursor-pointer"
                        @click="showAuthTool('logoutUser')">
                        Logout
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
import { EventBus } from '@/bus/eventBus'

export default {
    name: 'TopNav',
    methods: {
        showAuthTool(toolName) {
            console.log(toolName)
            EventBus.$emit('showAuthTool', {toolName: toolName});
        }
    },
    computed: {
        isLoggedIn () {
            return this.$store.state.is_logged_in;
        }
    }
}
</script>


<style>
.top-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fefefe;
    z-index: 100;
    border-bottom: 1px solid #7cafac;
}
</style>