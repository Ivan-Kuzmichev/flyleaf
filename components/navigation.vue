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
        padding: 10px;
        margin: 0 10px;
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
