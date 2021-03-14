<template>
    <Modal
        :show="show"
        modal-name="authorization"
        :title="$t('login')"
        @close="close()"
    >
        <form class="wrapper" @submit.prevent="submit">
            <Input :placeholder="$t('email')" />
            <Input :placeholder="$t('password')" />
            <button type="submit">test</button>
        </form>
    </Modal>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
    name: 'Authorization',
    props: {
        show: {
            type: Boolean,
        },
    },
    methods: {
        ...mapActions('user', ['auth']),
        async submit() {
            console.log('SUBMIT...');
            // const { email, password } = this.form;
            await this.auth({ email: 'ddd', password: 'qqq' });
        },
        close() {
            this.$emit('close');
        },
    },
});
</script>

<style lang="scss" scoped>
.wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
}
</style>

<i18n>
{
    "en": {
        "email": "Email",
        "password": "Password",
        "login": "Login"
    },
    "ru": {
        "email": "Почта",
        "password": "Пароль",
        "login": "Вход"
    }
}
</i18n>
