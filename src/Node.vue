<template>
    <div ref="container" class="trans-panel" :style="{'border-radius':'5px'}" style="text-align:center; margin-top: 17px; margin-bottom: 30px;">
        <div class="trans-panel-bg" :style="{'border-radius':'inherit'}">
        </div>
        <div v-if="this.$slots.header" :class="headerClass">
            <slot name="header">
            </slot>
        </div>
        <slot>
        </slot>

    </div>
</template>
<script>
    export default {
        props: {
            headerColor: {
                type: String,
                default: 'yellow'
            },
        },
        data() {
            return {

            }
        },
        computed: {
            headerClass() {
                return this.headerColor.toLowerCase() + '-header';
            },
        }
    }
</script>
<style scoped>
    .trans-panel-bg {
        width: 100%;
        height: 100%;
    }
    .red-header, .blue-header, .green-header, .yellow-header, .header, .header b, .trans-header {
        font-family: 'Century Gothic', 'Didact Gothic', Arial, sans-serif;
        font-weight: bold;
        font-size: 16px;
        text-transform: none;
    }
</style>