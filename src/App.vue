<template>
    <div id="app">
        <eterna-node header-color="green" roundness="5px" width="50px" height="100px">
            <span slot="header">test</span>
        </eterna-node>
        <eterna-node style="background-color: green" roundness="5px">
            <span slot="header">test</span>
        </eterna-node>
        <eterna-launcher>

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