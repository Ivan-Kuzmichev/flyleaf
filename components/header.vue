<template>
    <header class="header">
        <Logo />
        <client-only>
            <LanguageSelection />
            <ColorSheme />
            <Navigation />

            <template slot="placeholder">
                <p>Loading...</p>
            </template>
        </client-only>
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
