<template>
    <div class="auth-display px-6 py-20" v-if="authToolsActive" @click="emitHideAuthTools">

        <CreateUser v-if="authTools.createUser.active" @click.native="clickCapture" />
        <LoginUser v-if="authTools.loginUser.active" @click.native="clickCapture" />
        <LogoutUser v-if="authTools.logoutUser.active" @click.native="clickCapture" />

    </div>
</template>


<script>
import { EventBus } from '../bus/eventBus';

import CreateUser from '../components/auth/CreateUser.vue'
import LoginUser from '../components/auth/LoginUser.vue'
import LogoutUser from '../components/auth/LogoutUser.vue'

export default {
    name: 'ToolsDisplay',
    components: {
        CreateUser,
        LoginUser,
        LogoutUser,
    },
    data () {
        return {
            authToolsActive: false,
            authTools: {
                createUser: {
                    active: false
                },
                loginUser: {
                    active: false
                },
                logoutUser: {
                    active: false
                },
            }
        }
    },
    methods: {
        clickCapture (event) {
            event.preventDefault();
            event.stopPropagation();
        },

        emitHideAuthTools () {
            EventBus.$emit('hideActiveAuthTools');
        },

        hideAuthTools () {
            this.authToolsActive = false;
            this.hideActiveAuthTools();
        },

        hideActiveAuthTools () {
            for (let tool in this.authTools) {
                this.authTools[tool].active = false;
            }
        },

        showAuthTool(authToolName) {
            console.log('in view')
            console.log(authToolName)
            if (!this.authTools[authToolName]) {
                return false;
            }

            this.authTools[authToolName].active = true;

            return true;
        }
    },
    mounted () {
        EventBus.$emit('hideActiveTools');

        EventBus.$on('hideActiveAuthTools', () => {
            this.hideAuthTools()
        });

        EventBus.$on('showAuthTool', (data) => {
            let toolName = data.toolName;
            let isAuthToolActive = false;

            this.hideActiveAuthTools();
            isAuthToolActive = this.showAuthTool(toolName);
            
            this.authToolsActive = isAuthToolActive;
        });
    }
}
</script>


<style>
.auth-display {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: rgba(0,0,0,0.5);
}
</style>