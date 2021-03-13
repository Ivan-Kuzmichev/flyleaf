<template>
    <div class="input">
        <input
            id="Phone Number"
            v-model="value"
            type="tel"
            placeholder="Phone"
        />
        <label for="phone">Phone Number</label>
        <transition name="dropdown-transition">
            <svg-icon
                v-if="value.length"
                class="close"
                name="close"
                @click="clear()"
            />
        </transition>
        <div></div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'Input',
    data() {
        return {
            value: '',
        };
    },
    methods: {
        clear() {
            this.value = '';
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
        color: var(--main);
        cursor: pointer;
        transform: translateY(-50%);
    }

    label {
        position: absolute;
        top: -10px;
        left: 0;
        padding: 0 15px;
        color: var(--main);
        font-size: mr.rem(12px);
        opacity: 1;
        transition: 0.5s ease-in;
    }

    input {
        box-sizing: border-box;
        padding: 15px 30px 15px 15px;
        width: 100%;
        border: none;
        border-bottom: 2px solid transparent;
        background-color: var(--card);
        color: var(--main);
        font-size: mr.rem(16px);

        &:focus {
            outline: none;
            border-bottom: 2px solid var(--main);
        }

        &:placeholder-shown {
            & + label {
                opacity: 0;
                transform: translateY(50%);
            }
        }
    }
}
</style>
