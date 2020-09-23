<template>
    <div class="create-user-display max-w-screen-md bg-gray-100 m-auto shadow-lg">
        <div class="text-right p-2">
            <AuthToolCloseBtn />
        </div>
        
        <div class="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full">
                <div>
                    <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                        Create an Account
                    </h2>
                    <p class="mt-2 text-center text-sm leading-5 text-gray-600">
                        Or
                        <span class="font-medium text-teal-600 hover:text-teal-500 focus:outline-none focus:underline transition ease-in-out duration-150 cursor-pointer"
                                @click="loginAccount()">
                            login to an account
                        </span>
                    </p>
                </div>
                <form class="mt-8" action="#" method="POST">
                    <input type="hidden" name="remember" value="true">
                    <div class="rounded-md shadow-sm">
                        <div>
                            <input aria-label="Email address" name="email" type="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address">
                        </div>
                        <div class="-mt-px">
                            <input aria-label="Password" name="password" type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password">
                        </div>
                    </div>

                    <div class="mt-6">
                        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal active:bg-teal-700 transition duration-150 ease-in-out">
                            Create Account
                        </button>
                    </div>
                </form>
            </div>
        </div>

    </div>
</template>


<script>
import { EventBus } from '../../bus/eventBus';

import AuthToolCloseBtn from './AuthToolCloseBtn'

export default {
    name: 'CreateUser',
    methods: {
        loginAccount() {
            EventBus.$emit('showAuthTool', {toolName: 'loginUser'});
        }
    },
    components: {
        AuthToolCloseBtn
    }
}
</script>


<style>
.create-user-display {
    min-height: 65vh;
    border-radius: 10px;
    overflow: hidden;
}
</style>