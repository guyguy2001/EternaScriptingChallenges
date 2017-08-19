<template>
    <div id="app">
        <eterna-node header-color="green" style="width:50px; height:50px;">
            <span slot="header">test</span>
        </eterna-node>
        <eterna-node style="background-color: green" roundness="5px">
            <span slot="header">test</span>
        </eterna-node>
        <eterna-launcher btn-href="www.google.com" src="/src/assets/logo.png">
            test
        </eterna-launcher>
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