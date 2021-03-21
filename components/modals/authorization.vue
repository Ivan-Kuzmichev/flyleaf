<template>
    <Modal
        modal-name="authorization"
        :show="show"
        :title="$t('login')"
        @close="close()"
    >
        <form class="wrapper" @submit.prevent="submit">
            <Input id="email" v-model="email" :placeholder="$t('email')" />
            <Input
                id="password"
                v-model="password"
                :placeholder="$t('password')"
            />
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
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        ...mapActions('user', ['auth']),
        async submit() {
            if (this.email.length && this.password.length) {
                const auth = await this.auth({
                    email: this.email,
                    password: this.password,
                });

                if (!auth) {
                    this.$toast.show(this.$t('error-user-not-found') as string);
                }
            } else {
                this.$toast.show(this.$t('error-empty-fields') as string);
            }
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
        "login": "Login",
        "error-empty-fields": "To continue, you must fill in the fields",
        "error-user-not-found": "User not found"
    },
    "ru": {
        "email": "Почта",
        "password": "Пароль",
        "login": "Вход",
        "error-empty-fields": "Для продолжения, заполните поля",
        "error-user-not-found": "Пользователь не найден"
    }
}
</i18n>
