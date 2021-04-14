<template>
    <nav class="navigation">
        <Dropdown icon="menu">
            <NuxtLink :to="localePath('/')">{{ $t('home') }}</NuxtLink>
            <NuxtLink :to="localePath('/profile')">{{
                $t('profile')
            }}</NuxtLink>
        </Dropdown>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'Navigation',
});
</script>

<style lang="scss" scoped>
@use '~/assets/styles/mixins/px-to-rem' as mr;

.navigation {
    display: flex;
    gap: 10px;

    a {
        display: block;

        margin: 0 10px;
        padding: 10px;

        transition: 0.5s ease-in;
        text-decoration: none;

        opacity: 0.8;
        color: var(--main-font);

        font-size: mr.rem(18px);

        &.nuxt-link-active {
            text-decoration: underline;

            opacity: 1;
        }

        &:hover {
            opacity: 1;
        }
    }
}
</style>

<i18n>
{
    "en": {
        "home": "Home",
        "profile": "Profile"
    },
    "ru": {
        "home": "Главная",
        "profile": "Профиль"
    }
}
</i18n>
