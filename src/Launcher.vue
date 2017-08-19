<template>
    <eterna-node style="width:230px; height: 326px;" :style="[boxShadow]">
        <div style="text-align: center; padding-top: 55px; height: 128px;">
            <a :href="cImgHref" tabindex="-1" class="info-description">
                <div id="img-meter" class="img-meter-wrap">
                    <img id="img-meter-wrap" :src="src" style="position: relative; opacity: 1;">
                </div>
                <span>
                    <slot>
                        
                    </slot>
                </span>
            </a>
        </div>
        <a :href="btnHref" tabindex="-1">
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
            src: {
                type: String,
                required: true
            },
            //add glow to node? probably
            /*glow: {
                type: Object,
                default: {},
                validator(){
                    
                }
            },*/
            glow: {
                type: Boolean,
                default: false
            },
            glowDistance: {
                type: String,
                default: "10px"
            },
            imgHref: {
                type: String,
            },
            btnHref: {
                type: String,
                required: true
            }
        },
        computed: {
            cImgHref() {
                return this.imgHref || this.btnHref;
            },
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