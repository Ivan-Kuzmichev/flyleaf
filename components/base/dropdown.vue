<template>
    <div class="dropdown">
        <svg-icon :name="icon" @click="show = !show" />
        <transition name="dropdown-transition">
            <div v-if="show" class="dropdown__content" @click="show = !show">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Dropdown',
    props: {
        icon: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            show: false,
        };
    },
});
</script>

<style lang="scss" scoped>
.dropdown {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
        width: 30px;
        height: 30px;

        cursor: pointer;
        transition: 0.5s ease-in;

        opacity: 0.7;

        &:hover {
            opacity: 1;
        }
    }
}

.dropdown__content {
    position: absolute;
    z-index: 99;
    top: calc(100% + 10px);
    right: 0;

    border-radius: 10px;
    background: var(--bg-main);
    box-shadow: 10px 10px 25px var(--shadow);
}
</style>
