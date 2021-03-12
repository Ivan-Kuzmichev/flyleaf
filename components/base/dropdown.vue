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
    justify-content: center;
    align-items: center;

    .icon {
        width: 30px;
        height: 30px;
        opacity: 0.7;
        transition: 0.5s ease-in;
        cursor: pointer;

        &:hover {
            opacity: 1;
        }
    }
}

.dropdown__content {
    position: absolute;
    z-index: 99;
    right: 0;
    top: calc(100% + 10px);
    background: var(--bg-main);
    border-radius: 10px;
    box-shadow: 10px 10px 25px var(--shadow);
}
</style>
