import { v4 as uuidv4 } from 'uuid'
import Vue from 'vue'
import Vuex from 'vuex'
import { EventBus } from '@/bus/eventBus'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        is_logged_in: false,
        pinnedMusicContent: [
            {
                id: 8,
                type: 'youtube',
                sourceId: 'BnSjnz_mSxk',
                emedType: 'na',
                color: ''
            },
        ],
        musicContent: [
            {
                id: 1,
                type: 'soundcloud',
                sourceId: '222896338',
                embedType: 'playlists',
                color: 'ff5500'
            },
            {
                id: 2,
                type: 'youtube',
                sourceId: 'JvKjJeXrFvc',
                emedType: 'na',
                color: ''
            },
            {
                id: 3,
                type: 'youtube',
                sourceId: 'gtmzPUmq7XU',
                emedType: 'na',
                color: ''
            },
            {
                id: 4,
                type: 'youtube',
                sourceId: 'M5QY2_8704o',
                emedType: 'na',
                color: ''
            },
            {
                id: 5,
                type: 'youtube',
                sourceId: 'wtg7AetxuWo',
                emedType: 'na',
                color: ''
            },
            {
                id: 6,
                type: 'soundcloud',
                sourceId: '207648481',
                embedType: 'tracks',
                color: 'ff5500'
            },
            {
                id: 7,
                type: 'youtube',
                sourceId: 'X1uaOtiJ9Vc',
                emedType: 'na',
                color: ''
            },
            {
                id: 9,
                type: 'youtube',
                sourceId: 'O6CyK4HJ2xU',
                emedType: 'na',
                color: ''
            },
            {
                id: 10,
                type: 'youtube',
                sourceId: 'iAYMJk9IsDA',
                emedType: 'na',
                color: ''
            },
            {
                id: 11,
                type: 'youtube',
                sourceId: 'waqxrK-EFI0',
                emedType: 'na',
                color: ''
            },
        ],
        countdownTimer: {
            // timer: interval
            completionSound: new Audio(require('@/assets/sounds/completion_sound.mp3')),
            timerLength: 60,
            timeRemaining: 60,
            timerRunning: false,
            timerConfigActive: false
        },
        pomodoro: {
            pomodoros: [],
            currentPomodoro: 0,
            currentPomodoroStep: 'start',
            config: {},
            defaultConfig: {
                numPomodoros: 4,
                focusLength: 1500,
                restLength: 300,
                longRestLength: 900,
                autoContinue: false
            }
        },
        todoList: {
            todos: []
        }
    },
    mutations: {
        addPinnedVideo (state, payload) {
            let musicId = payload.id;
            let targetIndex = null;
            let targetMusicObj = null;

            for (let index in state.musicContent) {
                if (state.musicContent[index].id == musicId) {
                    targetIndex = index;
                    break;
                }
            }

            if (targetIndex !== null && targetIndex >= 0) {
                targetMusicObj = state.musicContent[targetIndex];
                state.musicContent.splice(targetIndex, 1);
                state.pinnedMusicContent.push(targetMusicObj);
            }
        },

        removePinnedVideo (state, payload) {
            let musicId = payload.id;
            let targetIndex = null;
            let targetMusicObj = null;

            for (let index in state.pinnedMusicContent) {
                if (state.pinnedMusicContent[index].id == musicId) {
                    targetIndex = index;
                    break;
                }
            }

            if (targetIndex !== null && targetIndex >= 0) {
                targetMusicObj = state.pinnedMusicContent[targetIndex];
                state.pinnedMusicContent.splice(targetIndex, 1);
                state.musicContent.push(targetMusicObj);
            }
        },

        stopTimer (state) {
            clearInterval(state.countdownTimer.timer);
            state.countdownTimer.timerRunning = false;
        },

        setTimer (state, timer) {
            state.countdownTimer.timer = timer;
        },

        resetTimer (state) {
            clearInterval(state.countdownTimer.timer);
            state.countdownTimer.timeRemaining = state.countdownTimer.timerLength;
            state.countdownTimer.timerRunning = false;
        },

        setTimerLength (state, payload) {
            state.countdownTimer.timerLength = payload.timerLength;
            state.countdownTimer.timeRemaining = payload.timerLength;
        },

        timerCountDown (state) {
            state.countdownTimer.timeRemaining -= 1;

            if (state.countdownTimer.timeRemaining <= 0) {
                clearInterval(state.countdownTimer.timer);
                state.countdownTimer.completionSound.play();
                state.countdownTimer.timerRunning = false;

                EventBus.$emit('timer-finsihed');
            }
        },

        createPomodoros (state) {
            state.pomodoro.pomodoros = [];
            if (Object.keys(state.pomodoro.config).length <= 0) {
                state.pomodoro.config = state.pomodoro.defaultConfig;
            }

            let pomoConfig = state.pomodoro.config;

            for (let pomodoroCount = 1; pomodoroCount <= pomoConfig.numPomodoros; pomodoroCount++) {
                let focusLength = pomoConfig.focusLength;
                let restLength = (pomodoroCount === pomoConfig.numPomodoros) ? pomoConfig.longRestLength : pomoConfig.restLength;

                state.pomodoro.pomodoros.push({focus: focusLength, rest: restLength});
            }
        },

        updatePomodoroConfig (state, payload) {
            if (!payload) {
                payload = {};

            }
            if (!payload.newConfig) {
                payload.newConfig = {};
            }

            Object.assign(state.pomodoro.config, state.pomodoro.defaultConfig, payload.newConfig);
        },

        updatePomodoroIndicies (state) {
            let nextPomodoroStep = {
                'start' : 'focus',
                'focus' : 'rest',
                'rest' : 'focus'
            };

            let isStart = (state.pomodoro.currentPomodoroStep === 'start') ? true : false;
            let nextStep = nextPomodoroStep[state.pomodoro.currentPomodoroStep];
            state.pomodoro.currentPomodoroStep = nextStep;

            if (isStart === false && nextStep === 'focus') {
                state.pomodoro.currentPomodoro += 1;
            } 
        },

        stageNextPomodoro (state) {
            let pomodoroStep = state.pomodoro.currentPomodoroStep;
            let pomodoroIndex = state.pomodoro.currentPomodoro;  
            let currentPomodoro = state.pomodoro.pomodoros[pomodoroIndex];
            let timerLength = currentPomodoro[pomodoroStep];

            state.countdownTimer.timerLength = timerLength;
            state.countdownTimer.timeRemaining = timerLength;
        },


        setTimerConfigActive (state) {
            state.countdownTimer.timerConfigActive = true;
        },

        setTimerConfigInactive (state) {
            state.countdownTimer.timerConfigActive = false;
        },

        changePomodoroFocusLength (state, payload) {
            state.pomodoro.config.focusLength = payload.newFocusLength;
        },

        changePomodoroRestLength (state, payload) {
            state.pomodoro.config.restLength = payload.newRestLength;
        },

        changePomodoroLongRestLength (state, payload) {
            state.pomodoro.config.longRestLength = payload.newLongRestLength;
        },

        changePomodoroIntervals (state, payload) {
            state.pomodoro.config.numPomodoros = payload.intervals;
        },

        addTodoItem (state, payload) {
            let todoItem = {
                id: uuidv4(),
                todoText: payload.todoText,
                complete: false
            };

            state.todoList.todos.unshift(todoItem);
        },

        toggleTodoItemComplete (state, payload) {
            let target_uuid = payload.uuid;
            let target_index = null;
            let completion_status;

            for (let index = 0; index < state.todoList.todos.length; index++) {
                if (state.todoList.todos[index].id === target_uuid) {
                    target_index = index;
                    completion_status = !state.todoList.todos[index].complete;
                    break;
                }
            }
            
            if (target_index !== null) {
                Vue.set(state.todoList.todos[target_index], 'complete', completion_status);
            }
        },

        removeTodoItem (state, payload) {
            let target_uuid = payload.uuid;

            state.todoList.todos = state.todoList.todos.filter(todo => todo.id !== target_uuid);
        }
    }, 
    actions: {
        initPomodoros ({ commit, state }) {
            if (Object.keys(state.pomodoro.config).length <= 0) {
                commit('updatePomodoroConfig');
            }

            state.pomodoro.currentPomodoroStep = 'start';
            state.pomodoro.currentPomodoro = 0;

            commit('createPomodoros');
            commit('updatePomodoroIndicies');
            commit('stageNextPomodoro');
        },

        updatePomodoroConfig ({ commit, state }, payload) {
            let newConfig = payload.newConfig;
            
            state.pomodoro.config.focusLength = newConfig.focusLength;
            state.pomodoro.config.restLength = newConfig.restLength;
            state.pomodoro.config.longRestLength = newConfig.longRestLength;
            state.pomodoro.config.numPomodoros = newConfig.numPomodoros;

            state.pomodoro.currentPomodoroStep = 'start';
            state.pomodoro.currentPomodoro = 0;

            commit('createPomodoros');
            commit('updatePomodoroIndicies');
            commit('stageNextPomodoro');
        },

        loadNextPomodoro({ commit, state }) {
            commit('updatePomodoroIndicies');

            if (state.pomodoro.currentPomodoro >= state.pomodoro.pomodoros.length) {
                state.pomodoro.currentPomodoroStep = 'focus';
                state.pomodoro.currentPomodoro = 0;
            }

            commit('stageNextPomodoro');
        },

        startTimer ({ commit, state }) {
            commit('stopTimer');

            if (state.countdownTimer.timeRemaining <= 0) {
                state.countdownTimer.timeRemaining = state.countdownTimer.timerLength;
            }

            commit('setTimer', setInterval(() => { commit('timerCountDown')}, 1000));
            state.countdownTimer.timerRunning = true;
        }
    }
})