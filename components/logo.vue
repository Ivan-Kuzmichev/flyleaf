<template>
    <div class="logo">
        <NuxtLink :to="localePath('/')">./teaching</NuxtLink>
    </div>
</template>

<script>
export default {
    name: 'Logo',
};
</script>

<style lang="scss" scoped>
@use '~/assets/styles/mixins/px-to-rem' as mr;

.logo {
    a {
        font-size: mr.rem(22px);
        color: var(--main-font);
        text-decoration: none;
    }
}
</style>
