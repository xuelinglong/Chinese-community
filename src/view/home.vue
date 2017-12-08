<template>
    <div class="home">
        <v-header></v-header>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import Header from './header';
    import Footer from './footer';

    export default {
        name: 'Home',
        components: {
            'v-header': Header,
            'v-footer': Footer
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .home
        width: 100%
        height: auto
</style>