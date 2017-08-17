<template>
    <eterna-node :roundness="roundness" :width="width" :height="height" :style="boxShadow">
        <div style="text-align: center; padding-top: 55px; height: 128px;">
            <a href="/game/puzzle/6502927/" tabindex="-1" class="info-description">
                <div id="img-meter" class="img-meter-wrap">
                    <img id="img-meter-wrap" src="/dist/logo.png" style="position: relative; opacity: 1;">
                </div>
                <span>
                    <b>Vue.js</b>
                </span>
            </a>
        </div>
        <a href="/game/puzzle/6502927/" tabindex="-1">
            <div class="clickable green-button-interactive rounded-5 centered" style="width: 100px; padding: 4px 7px; margin-top: 7px; position: absolute; bottom: 35px; left: 58px; font-weight: bold; font-size: 16px;">
                <div class="green-button-bg rounded-5"></div>
                <!--Change to an eterna-button componenet-->
                PLAY
            </div>
        </a>
    </eterna-node>
</template>
<script>
    export default {
        props: {
            width: {
                type: String,
                default: '230px'
            },
            height: {
                type: String,
                default: '326px'
            },
            roundness: {
                type: String,
                default: '10px'
            },
            glow: {
                type: Boolean,
                default: false
            },
            glowDistance: {
                type: String,
                default: "10px"
            }
        },
        computed: {
            boxShadow() {
                return  this.glow ? {
                    'box-shadow': '0 0 ' + this.glowDistance + ' rgba(19, 200, 237, 1)'
                } : {};
            }
        }

    }
</script>
<style>
</style>