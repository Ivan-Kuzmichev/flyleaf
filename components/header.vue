<template>
    <header class="header">
        <Logo />
        <client-only>
            <LanguageSelection />
            <ColorSheme />
            <Navigation />

            <template slot="placeholder">
                <div class="skeleton-container" aria-hidden="true">
                    <div class="skeleton"></div>
                    <div class="skeleton"></div>
                    <div class="skeleton"></div>
                </div>
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

.skeleton-container {
    display: flex;
}

.skeleton {
    position: relative;
    overflow: hidden;
    margin: 0 5px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: var(--card);
    opacity: 0.6;

    &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
                to left,
                transparent 0,
                var(--main) 15%,
                transparent 100%
            )
            center / 400% 100% no-repeat;
        content: '';
        animation: loading 1s infinite linear;
    }
}
</style>
