<template>
    <label class="ui-switcher" @click.self.prevent="switchValue" v-model="themeDarkReactive">
        <input
            type="range"
            step="1"
            max="1"
            class="ui-switcher__input"
            v-bind="$attrs"
            :value="Number(value)"
            @mousedown="onMouseDown"
            @mouseup="checkValue"
            @change="$emit('input', !!parseInt($event.target.value) )"
            ref="element"
        >
        <slot />
    </label>
</template>


<script>
    import Cookie from 'js-cookie'

    export default {

        name: 'switcher',

        head() {
            return {
                htmlAttrs: {
                    'data-dark': this.themeDarkReactive || 'false'
                }
            }
        },

        data() {
            return {
                themeDarkReactive: this.getTheme()
            }
        },

        inheritAttrs: false,


        props: {

            value: Boolean
        },

        watch: {

            themeDarkReactive(value) {

                // set cookie
                let now = new Date().getTime()
                Cookie.set('theme_dark', value, {
                    path: '/',
                    expires: new Date( now + 1000 * 60 * 60 * 24 * 365 )
                })

                // change head attribute
                this.themeDarkReactive = value
            }
        },



        methods: {

            getTheme() {
                let value =  Cookie.get('theme_dark')
                return value == 'true' || value == 1
            },

            switchValue() {
                this.$emit('input', ! this.value)
            },

            checkValue() {
                if ( typeof this.__oldValue === 'undefined' ) return
                setTimeout( () => {
                    if ( this.__oldValue === this.value ) {
                        this.switchValue()
                    }
                }, 0);
            },

            onMouseDown() {
                this.__oldValue = this.value
            }
        }
    }
</script>


<style lang="sass">
    $primary: #e30613

    $background: #fff
    $background-muted: #3c3d3f
    $background-inverted: #222
    $background-black: #000

    $text-color: #222
    $text-inverted: #fff
    $text-muted: lighten($text-color, 32%)

    $link-color: $text-color
    $link-hover: lighten($text-color, 32%)

    $button-primary-color: $text-inverted
    $button-primary-hover: darken($primary, 32%)

    $heading-color: $text-color

    $secondary: lighten($text-color, 75%)

    $box-shadow: rgba($text-color, .5)

    $overlay: rgba($background-muted, .5)
    $overlay-color: $text-inverted

    \:root
        --primary: #{$primary}
        --secondary: #{$secondary}

        --text-muted: #{$text-muted}

        --button-primary-color: #{$text-inverted}
        --button-primary-hover: #{darken($primary, 10%)}

        --heading-color: #{$heading-color}

        --box-shadow: #{$box-shadow}
        --overlay: #{$overlay}
        --overlay-color: #{$overlay-color}

        --theme-border-form: transparent

        --theme-color-top-bar: #{$text-inverted}
        --theme-link-hover-top-bar: #{$link-hover}

        --theme-color-footer: #{$text-inverted}
        --theme-link-hover-footer: #{$link-hover}

        --theme-color-category: inherit

    \:root[data-dark="false"]
        --background: #{$background}
        --background-muted: #{$background-muted}
        --background-inverted: #{$background-inverted}

        --text-color: #{$text-color}
        --text-inverted: #{$text-inverted}

        --link-color: #{$link-color}
        --link-hover: #{$link-hover}

        --theme-background-top-bar: #{$background-inverted}
        --theme-background-footer: #{$background-inverted}

    \:root[data-dark="true"]
        --background: #{$background-muted}
        --background-muted: #{$background-inverted}
        --background-inverted: #{$background-black}

        --text-color: #{$text-inverted}
        --text-inverted: #{$text-inverted}

        --link-color: #{$text-inverted}
        --link-hover: #{$link-hover}

        --theme-background-top-bar: #{$background-black}
        --theme-background-footer: #{$background-black}

    =thumb-mixin
        border: none
        border-radius: 50%
        background: var(--primary, $primary)
        height: 1.25rem
        width: 1.25rem

    .ui-switcher
        cursor: pointer

        &__input
            appearance: none
            vertical-align: middle
            background: var(--background, $background)
            background-clip: content-box

            width: 2.25rem
            height: calc(1.25rem - 2px)
            margin-right: .25em

            box-shadow: 0 0 1px 1px var(--theme-border-form) inset
            border-radius: .75rem

            &::-webkit-slider-thumb
                -webkit-appearance: none
                +thumb-mixin

            &::-moz-range-thumb
                +thumb-mixin

</style>


<!--<script>-->
    <!--export default {-->

        <!--name: 'theme-switcher',-->

        <!--head() {-->
            <!--return {-->
                <!--htmlAttrs: {-->
                    <!--'data-dark': this.themeDarkReactive || 'false'-->
                <!--}-->
            <!--}-->
        <!--},-->


        <!--data() {-->
            <!--return {-->
                <!--themeDarkReactive: this.getTheme()-->
            <!--}-->
        <!--},-->


        <!--watch: {-->

            <!--themeDarkReactive(value) {-->

                <!--// set cookie-->
                <!--let now = new Date().getTime()-->
                <!--this.$cookies.set('theme_dark', value, {-->
                    <!--path: '/',-->
                    <!--expires: new Date( now + 1000 * 60 * 60 * 24 * 365 )-->
                <!--})-->

                <!--// change head attribute-->
                <!--this.themeDarkReactive = value-->
            <!--}-->
        <!--},-->


        <!--methods: {-->

            <!--getTheme() {-->
                <!--let value = this.$cookies.get('theme_dark')-->
                <!--return value == 'true' || value == 1-->
            <!--},-->
        <!--}-->
    <!--}-->
<!--</script>-->
