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
        text-decoration: none;

        color: var(--main-font);

        font-size: mr.rem(22px);
    }
}
</style>
