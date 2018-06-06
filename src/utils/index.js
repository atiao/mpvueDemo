import Vue from 'vue'
import Api from './api.js'
import Utils from './utils.js'


export default {
  install: (Vue) => {
    Object.defineProperty(Vue.prototype, '$api', { value: Api })

    Object.defineProperty(Vue.prototype, '$util', { value: Utils })
  }
}