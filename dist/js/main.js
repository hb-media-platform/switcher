/**
 * Bundle of AWES switcher
 * Generated: 2019-03-19 12:27:14
 * Version: 1.0.0
 */

!function(){"use strict";var e,t=(function(e,t){var r;r=function(){function e(){for(var e=0,t={};e<arguments.length;e++){var r=arguments[e];for(var n in r)t[n]=r[n]}return t}return function t(r){function n(t,o,a){var i;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(a=e({path:"/"},n.defaults,a)).expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*a.expires),a.expires=s}a.expires=a.expires?a.expires.toUTCString():"";try{i=JSON.stringify(o),/^[\{\[]/.test(i)&&(o=i)}catch(e){}o=r.write?r.write(o,t):encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var c="";for(var d in a)a[d]&&(c+="; "+d,!0!==a[d]&&(c+="="+a[d]));return document.cookie=t+"="+o+c}t||(i={});for(var u=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,h=0;h<u.length;h++){var m=u[h].split("="),f=m.slice(1).join("=");this.json||'"'!==f.charAt(0)||(f=f.slice(1,-1));try{var p=m[0].replace(l,decodeURIComponent);if(f=r.read?r.read(f,p):r(f,p)||f.replace(l,decodeURIComponent),this.json)try{f=JSON.parse(f)}catch(e){}if(t===p){i=f;break}t||(i[p]=f)}catch(e){}}return i}}return n.set=n,n.get=function(e){return n.call(n,e)},n.getJSON=function(){return n.apply({json:!0},[].slice.call(arguments))},n.defaults={},n.remove=function(t,r){n(t,"",e(r,{expires:-1}))},n.withConverter=t,n}(function(){})},e.exports=r()}(e={exports:{}},e.exports),e.exports),r={name:"switcher",head(){return{htmlAttrs:{"data-dark":this.themeDarkReactive||"false"}}},data(){return{themeDarkReactive:this.getTheme()}},inheritAttrs:!1,props:{value:Boolean},watch:{themeDarkReactive(e){let r=(new Date).getTime();t.set("theme_dark",e,{path:"/",expires:new Date(r+31536e6)}),this.themeDarkReactive=e}},methods:{getTheme(){let e=t.get("theme_dark");return"true"==e||1==e},switchValue(){this.$emit("input",!this.value)},checkValue(){void 0!==this.__oldValue&&setTimeout(()=>{this.__oldValue===this.value&&this.switchValue()},0)},onMouseDown(){this.__oldValue=this.value}}};var n=function(e,t,r,n,o,a,i,s,c,d){"boolean"!=typeof i&&(c=s,s=i,i=!1);var u,l="function"==typeof r?r.options:r;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),n&&(l._scopeId=n),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=u):t&&(u=i?function(){t.call(this,d(this.$root.$options.shadowRoot))}:function(e){t.call(this,s(e))}),u)if(l.functional){var h=l.render;l.render=function(e,t){return u.call(t),h(e,t)}}else{var m=l.beforeCreate;l.beforeCreate=m?[].concat(m,u):[u]}return r},o="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var a=document.head||document.getElementsByTagName("head")[0],i={};var s=n({render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{staticClass:"ui-switcher",on:{click:function(t){return t.target!==t.currentTarget?null:(t.preventDefault(),e.switchValue(t))}},model:{value:e.themeDarkReactive,callback:function(t){e.themeDarkReactive=t},expression:"themeDarkReactive"}},[r("input",e._b({ref:"element",staticClass:"ui-switcher__input",attrs:{type:"range",step:"1",max:"1"},domProps:{value:Number(e.value)},on:{mousedown:e.onMouseDown,mouseup:e.checkValue,change:function(t){e.$emit("input",!!parseInt(t.target.value))}}},"input",e.$attrs,!1)),e._v(" "),e._t("default")],2)},staticRenderFns:[]},function(e){e&&e("data-v-48dcf56a_0",{source:":root{--primary:#e30613;--secondary:#e1e1e1;--text-muted:#747474;--button-primary-color:#fff;--button-primary-hover:#b1050f;--heading-color:#222;--box-shadow:rgba(34, 34, 34, 0.5);--overlay:rgba(60, 61, 63, 0.5);--overlay-color:#fff;--theme-border-form:transparent;--theme-color-top-bar:#fff;--theme-link-hover-top-bar:#747474;--theme-color-footer:#fff;--theme-link-hover-footer:#747474;--theme-color-category:inherit}:root[data-dark=false]{--background:#fff;--background-muted:#3c3d3f;--background-inverted:#222;--text-color:#222;--text-inverted:#fff;--link-color:#222;--link-hover:#747474;--theme-background-top-bar:#222;--theme-background-footer:#222}:root[data-dark=true]{--background:#3c3d3f;--background-muted:#222;--background-inverted:#000;--text-color:#fff;--text-inverted:#fff;--link-color:#fff;--link-hover:#747474;--theme-background-top-bar:#000;--theme-background-footer:#000}.ui-switcher{cursor:pointer}.ui-switcher__input{appearance:none;vertical-align:middle;background:var(--background,#fff);background-clip:content-box;width:2.25rem;height:calc(1.25rem - 2px);margin-right:.25em;box-shadow:0 0 1px 1px var(--theme-border-form) inset;border-radius:.75rem}.ui-switcher__input::-webkit-slider-thumb{-webkit-appearance:none;border:none;border-radius:50%;background:var(--primary,#e30613);height:1.25rem;width:1.25rem}.ui-switcher__input::-moz-range-thumb{border:none;border-radius:50%;background:var(--primary,#e30613);height:1.25rem;width:1.25rem}",map:void 0,media:void 0})},r,void 0,!1,void 0,function(e){return function(e,t){return function(e,t){var r=o?t.media||"default":e,n=i[r]||(i[r]={ids:new Set,styles:[]});if(!n.ids.has(e)){n.ids.add(e);var s=t.source;if(t.map&&(s+="\n/*# sourceURL="+t.map.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),n.element||(n.element=document.createElement("style"),n.element.type="text/css",t.media&&n.element.setAttribute("media",t.media),a.appendChild(n.element)),"styleSheet"in n.element)n.styles.push(s),n.element.styleSheet.cssText=n.styles.filter(Boolean).join("\n");else{var c=n.ids.size-1,d=document.createTextNode(s),u=n.element.childNodes;u[c]&&n.element.removeChild(u[c]),u.length?n.element.insertBefore(d,u[c]):n.element.appendChild(d)}}}(e,t)}},void 0);var c={installed:!1,install:function(e){this.installed||(this.installed=!0,e.component("switcher",s))}};Vue.use(c),new Vue({el:"#awes-app"})}();