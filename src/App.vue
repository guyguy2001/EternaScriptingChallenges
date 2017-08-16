<template>
    <div id="app">

        <eterna-node roundness="5px">
            test
        </eterna-node>
        <div class="trans-panel rounded-5" style="margin-top: 17px; margin-bottom: 30px;">
            <div class="trans-panel-bg rounded-5"></div>
            <div style="padding:33px;">
                <textarea id="code" placeholder="Code" style="height: auto; overflow-x: auto; overflow-y: hidden; background-color: white; display: none;"></textarea>
                <div class="CodeMirrorParent"></div>
                <div class="green-button rounded-5 centered clickable" id="evaluate-example" style="width:160px; margin-top:10px; margin-bottom:20px; padding:5px; left:calc(50% - 80px);">Evaluate</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style>
    @import './eterna.css';
</style>