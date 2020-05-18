import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {faCog as fasCog } from '@fortawesome/pro-solid-svg-icons'
import {faAnalytics as fasAnalytics } from '@fortawesome/pro-solid-svg-icons'
import {faList as fasList } from '@fortawesome/pro-solid-svg-icons'
import {faStopwatch as fasStopwatch } from '@fortawesome/pro-solid-svg-icons'
import {faThumbsUp as fasThumbsUp } from '@fortawesome/pro-solid-svg-icons'
import {faThumbtack as fasThumbtack } from '@fortawesome/pro-solid-svg-icons'
import {faTimes as fasTimes } from '@fortawesome/pro-solid-svg-icons'

library.add(fasCog, fasAnalytics, fasList, fasStopwatch, fasThumbsUp, fasThumbtack, fasTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)