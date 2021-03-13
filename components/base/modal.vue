<template>
    <div v-if="show" class="modal-container" :class="`modal--${modalName}`">
        <div class="backdrop" @click="close()"></div>
        <transition name="modal-transition">
            <div class="modal">
                <div class="modal__header">
                    <svg-icon class="close" name="close" @click="close()" />
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
    padding: 15px;
    max-width: 370px;
    width: 100%;
    border-radius: 10px;
    background-color: var(--bg-main);
    transform: translateY(-10vh);
}

.modal__header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;

    .close {
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
}
</style>
