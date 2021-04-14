<template>
    <div v-if="show" class="modal-container" :class="`modal--${modalName}`">
        <div class="backdrop" @click="close()"></div>
        <transition name="modal-transition">
            <div class="modal">
                <div class="modal__header">
                    <div class="title">{{ title }}</div>
                    <svg-icon
                        class="close"
                        name="close"
                        role="button"
                        @click="close()"
                    />
                </div>
                <div class="modal__content">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'Modal',
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        modalName: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
    },
    methods: {
        close() {
            this.$emit('close');
        },
    },
});
</script>

<style lang="scss" scoped>
.modal-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}

.backdrop {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: rgba(0, 0, 0, 0.5);
}

.modal {
    position: relative;
    z-index: 1;

    width: 100%;
    max-width: 370px;
    padding: 15px;

    transform: translateY(-15vh);

    border-radius: 10px;
    background-color: var(--bg-main);
}

.modal__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 20px;

    .title {
        opacity: 0.8;
        color: var(--main-font);

        font-size: 1.2rem;
    }

    .close {
        width: 20px;
        height: 20px;

        cursor: pointer;
        transition: 0.5s ease-in;

        opacity: 0.8;
        color: var(--main-font);

        &:hover,
        &:focus-visible {
            opacity: 1;
        }
    }
}
</style>
