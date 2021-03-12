<template>
    <div>
        <a v-if="href" :href="href" class="button">
            <slot />
        </a>
        <button v-else class="button dark-mode:xxx">
            <slot />
        </button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'Button',
    props: {
        href: {
            type: String,
            default: null,
        },
    },
});
</script>

<style scoped lang="scss">
.button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 20px;
    background: var(--button-bg);
    border: none;
    border-radius: 5px;
    color: var(--button-text);
    font-family: 'Oswald', sans-serif;
    font-size: 16px;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
        0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);

    &:hover {
        background: #fff;
        color: #000;
    }

    // TODO default??
    .light-mode & {
        border: none;
    }
}
</style>
