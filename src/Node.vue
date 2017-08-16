<template>
    <div :style="outerStyle" class="trans-panel" style="text-align:center; margin-top: 17px; margin-bottom: 30px;">
        <div :style="backgroundStyle" class="trans-panel-bg">
        </div>
        <div v-if="this.$slots.header" class="yellow-header">
            <slot name = "header">
            </slot>
        </div>
        <slot>
        </slot>

    </div>
</template>
<script>
    export default {
        props: {
            roundness: {
                type: String,
                default: '5px'
            },
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: String,
                default: '50px'
            }
        },
        data(){
            return {
                
            }
        },
        computed:{
            outerStyle() {
                return [{ 'border-radius': this.roundness, width: this.width, height: this.height }]
            },
            backgroundStyle() {
                return this.outerStyle;
            }
        }
    }
</script>
<style>
</style>