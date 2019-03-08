<template>
    <div id="app">
        <router-view></router-view>
        <br>
        <the-footer></the-footer>
    </div>
</template>

<script>
    import TheFooter from './components/TheFooter'
    export default {
        components: {
            TheFooter
        }
    }
</script>

