import switcher from '../vue/switcher.vue'

export function install(Vue) {

    if ( this.installed ) return
    this.installed = true

    Vue.component('switcher', switcher)
}

export default {
    installed: false,
    install
}
