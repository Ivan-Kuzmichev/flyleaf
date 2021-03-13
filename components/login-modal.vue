<template>
    <form @submit.prevent="submit">
        <input v-model="form.email" placeholder="E-mail" type="text" />
        <input v-model="form.password" placeholder="Password" type="text" />
        <Button type="submit">Submit</Button>
    </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    apollo: {},
    data: () => ({
        modal: false,
        form: {
            email: '',
            password: '',
        },
    }),
    methods: {
        ...mapActions('user', ['auth']),
        async submit() {
            const { email, password } = this.form;
            await this.auth({ email, password });
        },
    },
};
</script>

<style lang="scss" scoped>
.modal {
    background: #fff;
}

.close {
    margin-bottom: 20px;
    width: 30px;
    height: 30px;
    border: 1px solid #cfcfcf;
    border-radius: 50%;
}
</style>
