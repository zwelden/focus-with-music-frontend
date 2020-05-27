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
import {faPlay as fasPlay } from '@fortawesome/pro-solid-svg-icons'
import {faPause as fasPause } from '@fortawesome/pro-solid-svg-icons'
import {faUndoAlt as fasUndoAlt } from '@fortawesome/pro-solid-svg-icons'
import {faSearch as fasSearch } from '@fortawesome/pro-solid-svg-icons'
import {faSlidersH as fasSlidersH } from '@fortawesome/pro-solid-svg-icons'
import {faChevronRight as fasChevronRight } from '@fortawesome/pro-solid-svg-icons'
import {faChevronLeft as fasChevronLeft } from '@fortawesome/pro-solid-svg-icons'
import {faArrowLeft as fasArrowLeft } from '@fortawesome/pro-solid-svg-icons'
import {faCheck as fasCheck } from '@fortawesome/pro-solid-svg-icons'
import {faPlus as fasPlus } from '@fortawesome/pro-solid-svg-icons'
import {faSquare as fasSquare } from '@fortawesome/pro-solid-svg-icons'
import {faTrashAlt as fasTrashAlt } from '@fortawesome/pro-solid-svg-icons'

library.add(
    fasCog, 
    fasAnalytics, 
    fasList, 
    fasStopwatch, 
    fasThumbsUp, 
    fasThumbtack, 
    fasTimes, 
    fasPlay, 
    fasPause, 
    fasUndoAlt, 
    fasSearch, 
    fasSlidersH,
    fasChevronRight,
    fasChevronLeft,
    fasArrowLeft,
    fasCheck,
    fasPlus,
    fasSquare,
    fasTrashAlt
)

Vue.component('font-awesome-icon', FontAwesomeIcon)