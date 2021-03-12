<template>
    <div class="theme-switcher" :class="[$colorMode.preference]">
        <div class="wrapper">
            <svg-icon
                name="theme/auto"
                @click="$colorMode.preference = 'light'"
            />
            <svg-icon
                name="theme/sun"
                @click="$colorMode.preference = 'dark'"
            />
            <svg-icon
                name="theme/moon"
                @click="$colorMode.preference = 'system'"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'ColorMode',
});
</script>

<style lang="scss" scoped>
.theme-switcher {
    display: flex;
    flex-direction: column;
    width: 40px;
    height: 40px;
    overflow: hidden;

    .wrapper {
        transition: 0.5s ease-in;
    }

    &.system {
        .wrapper {
            transform: translateY(0%);
        }
    }

    &.light {
        .wrapper {
            transform: translateY(-33%);
        }
    }

    &.dark {
        .wrapper {
            transform: translateY(-66%);
        }
    }

    svg {
        width: 40px;
        height: 40px;
        cursor: pointer;
        opacity: 0.7;
        transition: 0.5s ease-in;

        symbol {
            fill: var(--main);
        }

        &:hover {
            opacity: 1;
        }
    }
}
</style>
