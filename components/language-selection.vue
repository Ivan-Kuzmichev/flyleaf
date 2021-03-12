<template>
    <div class="language-selection">
        <Dropdown icon="earth">
            <ul class="language-selection__content">
                <li class="language-selection__item">
                    <nuxt-link :to="switchLocalePath('en')">
                        <span>English</span>
                        <svg-icon name="flags/en" />
                    </nuxt-link>
                </li>
                <li class="language-selection__item">
                    <nuxt-link :to="switchLocalePath('ru')">
                        <span>Русский</span>
                        <svg-icon name="flags/ru" />
                    </nuxt-link>
                </li>
            </ul>
        </Dropdown>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'LanguageSelection',
});
</script>

<style lang="scss" scoped>
@use '~/assets/styles/mixins/px-to-rem' as mr;

.language-selection__content {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.language-selection__item {
    padding: 10px;
    margin: 0 10px;
    border-bottom: 1px solid var(--shadow);

    &:last-child {
        border-bottom: none;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: mr.rem(18px);
        color: var(--main-font);
        text-decoration: none;
        opacity: 0.8;
        transition: 0.5s ease-in;

        &.nuxt-link-active {
            opacity: 1;
            text-decoration: underline;
        }

        &:hover {
            opacity: 1;
        }
    }

    .icon {
        width: 20px;
        height: 20px;
        margin-left: 15px;
    }
}
</style>
