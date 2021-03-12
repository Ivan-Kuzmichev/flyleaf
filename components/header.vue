<template>
    <header class="header">
        <Logo />
        <!-- <LanguageSelection /> -->
        <ColorMode />
        <!-- <Navigation /> -->
    </header>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'Header',
});
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    padding: 15px;

    .logo {
        margin-right: auto;
    }

    .language-selection,
    .theme-switcher {
        margin-right: 10px;
    }
}
</style>
