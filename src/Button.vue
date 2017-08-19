<template>
    <a :href="btnHref" tabindex="-1">
        <div :style="{'border-radius': '5px'}" class="clickable green-button-interactive centered" style="width: 100px; padding: 4px 7px; margin-top: 7px; position: absolute; bottom: 35px; left: 58px; font-weight: bold; font-size: 16px;">
            <div :style="{'border-radius' : 'inherited'}"class="green-button-bg"></div>
            <slot>

            </slot>
        </div>
    </a>
</template>
<script>
    export default {
        props: {
            color: {
                type=String,
                validator() {
                    return true; //check for normal colors
                }
            }
        },
    }
</script>
<style>

</style>