<template>
    <header class="header">
        <Logo />
        <LanguageSelection />
        <client-only>
            <ColorSheme />

            <template slot="placeholder">
                <svg-icon
                    name="theme/auto"
                    class="color-sheme-loading"
                    aria-hidden="true"
                />
            </template>
        </client-only>
        <Navigation />
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

.color-sheme-loading {
    width: 40px;
    height: 40px;
    opacity: 0.3;
    margin-right: 10px;
}
</style>
