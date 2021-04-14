<template>
    <div class="input">
        <input
            :id="id"
            v-model="inputValue"
            :placeholder="placeholder"
            @input="handleInput"
        />
        <label v-if="placeholder" :for="id">{{ placeholder }}</label>
        <transition name="dropdown-transition">
            <svg-icon
                v-if="inputValue.length"
                class="close"
                name="close"
                @click="clear()"
            />
        </transition>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'Input',
    props: {
        placeholder: {
            type: String,
            default: null,
        },
        value: {
            type: String,
            default: '',
        },
        id: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            inputValue: this.value,
        };
    },
    methods: {
        clear() {
            this.inputValue = '';
            this.handleInput();
        },
        handleInput() {
            this.$emit('input', this.inputValue);
        },
    },
});
</script>

<style lang="scss" scoped>
@use '~/assets/styles/mixins/px-to-rem' as mr;

.input {
    position: relative;

    max-width: 400px;

    background-color: var(--card);

    .close {
        position: absolute;
        top: 50%;
        right: 15px;

        width: 15px;
        height: 15px;

        cursor: pointer;
        transform: translateY(-50%);

        color: var(--main);
    }

    label {
        position: absolute;
        top: -10px;
        left: 0;

        padding: 0 15px;

        transition: 0.5s ease-in;

        opacity: 1;
        color: var(--main);

        font-size: mr.rem(12px);
    }

    input {
        box-sizing: border-box;
        width: 100%;
        padding: 15px 30px 15px 15px;

        color: var(--main);
        border: none;
        border-bottom: 2px solid transparent;
        background-color: var(--card);

        font-size: mr.rem(16px);

        &:focus {
            border-bottom: 2px solid var(--main);
            outline: none;
        }

        &:placeholder-shown {
            & + label {
                transform: translateY(50%);

                opacity: 0;
            }
        }
    }
}
</style>
