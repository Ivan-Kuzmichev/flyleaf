<template>
    <div>
        <div class="home-page">
            <div class="home-page__content">
                <h1>{{ $t('home-heading') }}</h1>
                <p>{{ $t('home-description') }}</p>
                <span @click="toggleModal()">text</span>
            </div>
        </div>
        <Authorization :show="showModal" @close="toggleModal()" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'HomePage',
    data() {
        return {
            showModal: false,
        };
    },
    methods: {
        toggleModal(): void {
            this.showModal = !this.showModal;
        },
    },
});
</script>

<style lang="scss" scoped>
@use '~/assets/styles/mixins/px-to-rem' as mr;

.home-page {
    position: relative;
    padding: 15px;
    min-height: calc(100vh - 95px);

    .icon {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 635px;
        height: 715px;
    }
}

.home-page__content {
    margin-top: 10vh;
    max-width: 680px;
    color: var(--main-font);

    h1 {
        text-transform: uppercase;
        font-weight: bold;
        font-size: mr.rem(34px);
    }

    p {
        font-weight: 300;
        font-size: mr.rem(28px);
    }
}
</style>

<i18n>
{
    "en": {
        "home-heading": "Learning without all the unnecessary",
        "home-description": "Find out what it means to be a programmer in the most popular profession on the Internet and how to become one!"
    },
    "ru": {
        "home-heading": "Обучение без всего лишнего",
        "home-description": "Узнай, что значит быть программистом самой востребованой профессии в интернете и как им стать!"
    }
}
</i18n>
